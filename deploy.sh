#!/bin/bash
if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

echo "### Deploying app ..."
# safety switch, exit script if there's error.
set -e
# safety switch, uninitialized variables will stop script.
set -u
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml down
docker-compose -f docker-compose.yml up -d