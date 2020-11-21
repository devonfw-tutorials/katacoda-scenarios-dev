const https = require('https');

const options = {
    port: 443,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'action'
    }
  }

const request = https.get('https://api.github.com/repos/devonfw-forge/tutorials/actions/workflows/main.yml/runs', options, function(response) {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        let json = JSON.parse(data);
        console.log(json.workflow_runs[0].artifacts_url);
        
        let aRequest = https.get(json.workflow_runs[0].artifacts_url, options, function(aResponse) {
            let aData = '';

            aResponse.on('data', (chunk) => {
                aData += chunk;
            });

            aResponse.on('end', () => {
                let aJson = JSON.parse(aData);
                console.log(aJson);

                let dRequest = https.get(aJson.artifacts[0].archive_download_url, options, function(dResponse) {
                    let dData = '';
        
                    dResponse.on('data', (chunk) => {
                        dData += chunk;
                    });
        
                    dResponse.on('end', () => {
                        console.log(dData);
                    });
                });
                dRequest.end();

            });
        });
        aRequest.end();
    });
});
request.end();