const https = require('https');
const child_process = require('child_process');
const fse = require('fs-extra');
const fs = require('fs');
const rimraf = require("rimraf");

const options = {
    port: 443,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'User-Agent': 'action'
    }
}

async function download(url) {
    return new Promise(
        function(resolve, reject) {
            https.get(url, options, (resp) => {
                let data = '';

                resp.on('data', (chunk) => {
                    data += chunk;
                });

                resp.on('end', () => {
                    resolve(data);
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
                reject(err);
            });
        });
}

async function getChangedPlaybooks(prNumber){
    var data = await download('https://api.github.com/repos/devonfw-tutorials/tutorials/pulls/' + prNumber + "/files");
    let json = JSON.parse(data);
    console.log(json);
    var playbooks = [];
    for (var i in json) {
        var e = json[i];
        var foldername = e.filename.split('/',2)[0];
        playbooks.push(foldername);
    }
    return playbooks;
}

async function main(){
    var data = await download('https://api.github.com/repos/devonfw-tutorials/tutorials/pulls');
    let json = JSON.parse(data);
    console.log(json);
    let exitCode = 0;

    let repoDir = "repo/";
    let reposDirs = fs.readdirSync(repoDir);
    for (let index in reposDirs) {
        if (/^[0-9]+_.+$/.test(reposDirs[index])) {
            rimraf.sync(repoDir + reposDirs[index]);
        }
    }

    for (var i in json) {
        var e = json[i];
        console.log("Clone " + e.head.repo.clone_url + " -> " + e.head.ref);
        let cmd = "(rm -R playbooks || true) " +
            " && echo clone && git clone " + e.head.repo.clone_url + " playbooks " +
            " && cd playbooks " +
            " && (echo fetch --all && git fetch --all " +
            " && branch_name=$(git symbolic-ref -q HEAD) && branch_name=${branch_name##refs/heads/} && branch_name=${branch_name:-HEAD} && echo $branch_name " +
            " && if [ \"$branch_name\" != \"" + e.head.ref + "\" ]; then echo checkout && git checkout " + e.head.ref + "; fi )" +
            " ; cd ..";
        console.log(cmd);
        let cp = child_process.spawnSync(cmd, { shell: true, encoding: 'utf-8' });
        console.log(cp);
        if (cp.status != 0) {
            exitCode = cp.status;
        }
        else {
            cp = child_process.spawnSync("(rm -r build/playbooks || true)", { shell: true, encoding: 'utf-8' });
            console.log(cp);
            var playbooks = await getChangedPlaybooks(e.number);
            var playbooksParameter = '';
            if (playbooks.length > 0){
                playbooksParameter = ' -p ' + playbooks.join(' -p ');
            }
            cmd = "echo buildRun && sh buildRun.sh -e katacoda" + playbooksParameter;
            console.log(cmd);
            cp = child_process.spawnSync(cmd, { shell: true, encoding: 'utf-8' });
            console.log(cp);
            if (cp.status == 0) {
                let katacodaDir = "build/output/katacoda/";
                if(fs.existsSync(katacodaDir)) {
                    let tutorialDirs = fs.readdirSync(katacodaDir);
                    for (let index in tutorialDirs) {
                        try {
                            let dir = katacodaDir + tutorialDirs[index];
                            let targetDir = "repo/" + e.number + "_" + e.title.replace(/[^A-Za-z0-9]/g, "-") + "_" + tutorialDirs[index];
                            console.log("Copy " + dir + " -> " + targetDir);
                            fse.copySync(dir, targetDir);
                            let indexJsonString = fs.readFileSync(targetDir + "/index.json", { encoding: 'utf-8' });
                            let indexJson = JSON.parse(indexJsonString);
                            indexJson.title = e.number + " " + e.title + " "+ indexJson.title;
                            fs.writeFileSync(targetDir + "/index.json", JSON.stringify(indexJson), { encoding: 'utf-8' });
                        }
                        catch(e){
                            console.error(e);
                        }
                    }
                } else {
                    console.warn("The directory build/output/katacoda/ does not exist. Maybe this refers to an error in the build process of the tutorial.")
                }
            }
        }
        rimraf.sync("build/output/katacoda/");
    }
    let cp = child_process.spawnSync("cd repo && ls -al && git fetch --all && git checkout main && git add -A && git diff-index --quiet HEAD -- || (git config user.email \"devonfw\" && git config user.name \"devonfw\" && git commit -m \"Updated tutorials\" && git push)", { shell: true, encoding: 'utf-8' });
    console.log(cp);
    if (cp.status != 0) {
        process.exit(cp.status);
    }
    if (exitCode != 0) {
        process.exit(exitCode);
    }
}

main().catch(function(e){
    console.log(e);
});