#! /bin/bash

set -x

repo=$1
path=$2

git clone $repo $path
cd $path
echo `git log -1 --format=format:%H` > .SHA
rm -Rf .git

