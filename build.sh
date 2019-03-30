cd ./web-app
npm run build 
cd ../


docker-compose down
docker-compose stop

docker-compose up --build
