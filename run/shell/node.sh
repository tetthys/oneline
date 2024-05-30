#!/bin/bash

node_container_id=$(docker ps -aqf "name=oneline-node")

docker exec -it $node_container_id /bin/sh