#!/bin/sh

# what to do after cloning a remote repository
echo "First verify your repository name"
git remote -v
echo "setting remote url"
git remote set-url origin https://github.com/wa5qjh/Perl.git
echo "You should see something like this"
echo "  origin  https://github.com/wa5qjh/Perl (fetch)"
echo "  origin  https://github.com/wa5qjh/Perl (push)"
echo "Enable saving credentials"
git config --global credential.helper cache
echo "You may have to enter them once but afterwards,  no more"
echo "Think  we're done"
#

