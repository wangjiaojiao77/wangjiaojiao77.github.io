#! /bin/bash

SITE_PATH='/Users/jojo/wanba/jojo/blog'
USER='wanba'
USERGROUP='staff'

cd $SITE_PATH
git reset --hard origin/master
git clean -f
git pull
git checkout master
bundle exec jekyll b
chown -R $USER:$USERGROUP $SITE_PATH