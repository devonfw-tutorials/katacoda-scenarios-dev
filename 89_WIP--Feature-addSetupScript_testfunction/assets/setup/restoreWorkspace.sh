#!/bin/bash 

if false; then
    rm -r /root/workspaces 
fi

if ! git clone https://github.com/devonfw-tutorials/workspace-devon4ng.git /root/workspaces; then
    git clone https://github.com/devonfw-tutorials/workspace-devon4ng.git /root/workspaces 
fi

cd /root/workspaces
git checkout  || true
cd ~/.
