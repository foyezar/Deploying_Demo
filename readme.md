# Heroku (Deploying App)

## Setup Heroku App
```
$ heroku login
# Login in Heroku

$ heroku keys:add
# add ssh key to Heroku

$ heroku keys
# show heroku keys

$ heroku keys:remove <email>
# remove keys

$ ssh -v git@heroku.com
# test the connection
```

## Create heroku app:
```
$ heroku create
or
$ heroku create <herokuapp_name>
# create heroku
```

## Add heroku addons: (Have to verify account to add addons)
```
$ heroku addons:create mongolab:sandbox
```

## Add database to mlab:
```
create new > plan type (sandbox) > AWS Region (US) > Database Name
create user > username & password
mongodb://<dbuser>:<dbpassword>@ds113134.mlab.com:13134/node-todo-api
```
## Add custom heroku environment variable:
```
ENV Variable:
heroku app settings > Config vars
KEY: MONGODB_URI & VALUE: mongodb://<dbuser>:<dbpassword>@ds113134.mlab.com:13134/node-todo-api
or
$ heroku config:set MONGODB_URI=mongodb://<dbuser>:<dbpassword>@ds113134.mlab.com:13134/node-todo-api
```

## Upload to heroku & open link:
```
$ git push heroku master
# upload to heroku 

$ heroku logs
# show server logs

$ heroku open
# open the link
```

* heroku login
* heroku create - create random name & link
* heroku create herokuapp_name
* heroku create herokuapp_name --buildpack github_url - create herokuapp from github
* git remote -v
* git push heroku master  
* heroku logs
* heroku open - open the link
* heroku apps:rename newname
* heroku run ls
* heroku run npm install mongoose

## Set ENV variables
```
$ heroku config:set key=value
# heroku config:set DBURL=mongodb://foyez:1234@ds342@mlab.com:55525/yelpcamp
```

## Overwriting an existing Heroku app
```
$ heroku git:remote -a <herokuapp_name>
$ git push -f heroku master
```