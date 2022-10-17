#!/bin/bash
env=$1

TAG_IMAGE=TAG_IMAGE_$env
ENV=ENV_$env
PORT=PORT_$env

REACT_APP_API_URL=REACT_APP_API_URL_$env
REACT_APP_API_KEY=REACT_APP_API_KEY_$env

echo TAG_IMAGE=${!TAG_IMAGE} >> .env
echo ENV=${!ENV} >> .env
echo PORT=${!PORT} >> .env

echo REACT_APP_API_URL=${!REACT_APP_API_URL} >> .env
echo REACT_APP_API_KEY=${!REACT_APP_API_KEY} >> .env

