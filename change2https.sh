#!/bin/sh
# Gary Corell
# 04/30/17  07:44 AM
#04/30/17  08:49 AM

echo "Change to HTTPS  mode for github"
echo "checking the current URL's. If we're already in https mode, this wont hurt"
git remote -v
#
echo "First we change the urls"
git remote set-url origin https:github.com/wa5qjh/Perl.git
echo " then verify it was set properly.  you should see something like:"
echo "origin https://github.com/wa5qjh/Perl.git (fetch)"
echo "origin https://github.com/wa5qjh/Perl.git (push)"
git remote -v
echo "git SHOULD recognize that we are changing modes and act accordingly."
echo "next we'll save credentials in cache,  tho you may be asked once "
git config --global credential.helper cache

echo " I think  we're done. just in case tho lets check the urls"
git remote -v

# just incase it's needed, heres a command to set the upstream urls
# git push --set-upstream git@github.com:wa5qjh/Perl.git master
# To revert:  git push --set-upstream https://github.com/wa5qjh/Perl.git master
#


