# Heroku

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

$ heroku create
or
$ heroku create <herokuapp_name>
# create heroku

$ git push heroku
# upload to heroku 

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