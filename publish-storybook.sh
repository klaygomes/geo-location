PACKAGE=$(cat <<-END
 {
    "name": "storybook",
    "version": "1.0.0",
    "description": "",
    "engines": {
        "node": "8.2.0",
        "npm": "5.5.1"
    },
    "dependencies": {
        "http-server": "^0.10.0"
    },
    "scripts": {
        "start": "http-server ./ -p \$PORT"
    }
}
END
)
npm run storybook:publish
echo $PACKAGE > .publish/package.json
cd .publish
heroku login
git init
heroku git:remote -a geo-location-storybook
git add .
git commit -am "make it better"
git push --force heroku master
cd ..
rm -rf .publish
