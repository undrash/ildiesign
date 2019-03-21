#!/bin/bash

echo "***********************************************"
echo "*********** Pushing Docker Images *************"
echo "***********************************************"

echo "*************** Logging In ********************"

docker login -u gasparandr -p $PASS

echo "************* Tagging Images ******************"

docker tag ildiesign-nginx:latest gasparandr/ildiesign-nginx:latest
docker tag ildiesign-node:latest gasparandr/ildiesign-node:latest

echo "************* Pushing Images ******************"

docker push gasparandr/ildiesign-nginx:latest
docker push gasparandr/ildiesign-node:latest

