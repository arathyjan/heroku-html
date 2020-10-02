Prerequisite:
1. Create heroku account
2. Make sure you have following installed locally
 - Node
 - Npm
 - Git

3. Install heroku cli if not installed already 
```brew install heroku/brew/heroku```

Preparation:
1. Initate git/clone git repo
2. Package.json should have
```"scripts": {
    "start": "node index.js"
  }```
  which indicate how the app is started
2. Login to heroku through cli
```heroku login```
3. ```heroku create``` (create app in heroku)
4. ```git push heroku main``` will deploy your code to heroku
5. ``` heroku open``` will open your url in browser

Change:
1. Make any code change
2. ```git add .```
3. ```git commit -m <commit-message>```
4. ```git push heroku main``` will deploy your code to heroku
5. ``` heroku open``` will open your url in browser



Referred from Heroku Guide:
https://devcenter.heroku.com/articles/getting-started-with-nodejs