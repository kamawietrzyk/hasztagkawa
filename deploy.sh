#!/usr/bin/env bash

npm i
npm run build

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

echo "Saving files to S3 Bucket: $BUCKET"

aws s3 sync --acl public-read --delete ./build s3://$BUCKET
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE/purge_cache" -H "X-Auth-Email: $CF_EMAIL" -H "X-Auth-Key: $CF_KEY" -H "Content-Type: application/json" --data '{"purge_everything":true}'