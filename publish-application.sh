npm run build
mkdir .publish
cp -r .next .publish
cp package*.json .publish
cd .publish
git init
heroku git:remote -a geo-location-challenge
git add .
git commit -am "make it better"
git push --force heroku master
cd ..
rm -rf .publish