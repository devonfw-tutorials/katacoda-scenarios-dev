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

function download(url, f){
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

download('https://api.github.com/repos/devonfw-forge/tutorials/pulls', function(data){
    let json = JSON.parse(data);
    console.log(json);

    let repoDir = "repo/";
    let reposDirs = fs.readdirSync(repoDir);
    for (let index in reposDirs) {
        if(/^[0-9]+/.test(reposDirs[index])){
            rimraf(repoDir + reposDirs[index], function () { console.log(repoDir + reposDirs[index] + " deleted"); });
        }
    }

    for(var i in json){
        var e = json[i];
        let process = child_process.spawnSync("rm -R playbooks && git clone " + e.head.repo.clone_url + " playbooks && git clone e.head.repo.ref && sh buildRun.sh", { shell: true, encoding: 'utf-8' });
        console.log(process);

        let katacodaDir = "build/output/katacoda/";
        let tutorialDirs = fs.readdirSync(katacodaDir);
        for (let index in tutorialDirs) {
            let dir = katacodaDir + tutorialDirs[index];
            fse.copySync(dir, "repo/" + e.number + "_" + e.title.replaceAll(/[^A-Za-z0-9]/g,"-") + "_" + tutorialDirs[index], function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Copied " + dir + "to repo/" + e.number + "_" + e.title.replaceAll(/[^A-Za-z0-9]/g,"-") + "_" + tutorialDirs[index]);
                }
            });
        }
    }
    child_process.spawnSync("cd repo && git add . && git commit -m \"Updated tutorials\" && git push", { shell: true });
});
