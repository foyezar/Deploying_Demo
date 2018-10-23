# Heroku

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

## Overwriting an existing Heroku app
1. heroku git:remote -a herokuapp-name
2. git push -f heroku master