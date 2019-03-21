#!/bin/bash

echo "***********************************************"
echo "*********** Pushing Docker Images *************"
echo "***********************************************"

echo "*************** Logging In ********************"

docker login -u boardme -p $PASS

echo "************* Tagging Images ******************"

docker tag nginx-read:latest boardme/nginx-read:latest
docker tag nginx-write:latest boardme/nginx-write:latest
docker tag node-read:latest boardme/node-read:latest
docker tag node-write:latest boardme/node-write:latest

echo "************* Pushing Images ******************"

docker push boardme/nginx-read:latest
docker push boardme/nginx-write:latest
docker push boardme/node-read:latest
docker push boardme/node-write:latest

