#!/bin/bash 

if true; then
    rm -r /root/devonfw/workspaces 
fi

if ! git clone https://github.com/devonfw-tutorials/workspace-devonfw-sample/devon4j-app-4tutorial.git /root/devonfw/workspaces; then
    git clone https://github.com/devonfw-tutorials/workspace-devonfw-sample/devon4j-app-4tutorial.git /root/devonfw/workspaces 
fi

cd /root/devonfw/workspaces
git checkout  || true
cd ~/.
