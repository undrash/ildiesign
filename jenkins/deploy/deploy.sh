#!/bin/bash


# Deploy to Swarm

echo
echo "***********************************************"
echo "********* Deploying on Remote Host ************"
echo "***********************************************"
echo

docker service create \
  --name ildiesign \
  --replicas 1 \
  --network ILDIESIGN \
  gasparandr/ildiesign-node

echo
echo "***********************************************"
echo "*** 15 Second Pause for the Service to Boot ***"
echo "***********************************************"
echo

sleep 15

echo
echo "***********************************************"
echo "******* Sending reload signal to Proxy ********"
echo "***********************************************"
echo

PROXY_CONTAINER=$(for f in $(docker service ps -q --filter desired-state=running proxy); do docker inspect --format '{{.Status.ContainerStatus.ContainerID}}' $f; done)

docker container exec $PROXY_CONTAINER nginx -s reload
