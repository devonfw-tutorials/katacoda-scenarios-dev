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

function download(url, f) {
    https.get(url, options, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            f(data);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

download('https://api.github.com/repos/devonfw-forge/tutorials/pulls', function (data) {
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
            cmd = "echo buildRun && sh buildRun.sh";
            console.log(cmd);
            cp = child_process.spawnSync(cmd, { shell: true, encoding: 'utf-8' });
            console.log(cp);
            if (cp.status == 0) {
                let katacodaDir = "build/output/katacoda/";
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
});
