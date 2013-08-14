# Themes

This readme is for the sake of the users who were using ruhoh
before the theme was made modular and are confused as to why
their blog doesn't build and how to fix it quickly.

## Re-adding the default theme

There's almost no work to do
if you haven't modified the default twitter theme.

Get a fresh clone of `twitter-bootstrap-2` (it's the exact same as what you were using before):

    git submodule add https://github.com/ruhoh/theme-twitter-bootstrap-2.git twitter-bootstrap-2

And then edit `config.yml` such that the line that reads `twitter` above the line `use: theme`
now reads `twitter-bootstrap-2`.

    rsync -av config.yml config.yml.bak
    sed -e 's/twitter/twitter-bootstrap-2/' config.yml.bak > config.yml

You can `rm config.yml.bak` once you're sure that your site builds.

# Creating a repo for a custom theme

The very fact that you're reading this points to the probability that 
you had modified the default theme, made commits, and got a bunch of merge conflicts.

(and you might be really angry about it, but don't be. stay calm. drink the ruhoh kool-aid)

1. Head over to <https://github.com/new>
  (or whatever your favorite git site is)
  and create a new empty repository for your theme.

2. Undo the merge conflicts you just created.

        git reset HEAD
        git checkout twitter

3. Add your new empty repository as a submodule

        git submodule add <your repo> twitter-custom

3. Copy your modified theme into the empty repository

        rsync -av twitter/ twitter-custom/

4. Remove the old custom theme

        git rm -rf twitter

5. And then try the merge again

        git pull upstream master

5. There's a possibility that you'll need to remove the old theme again and commit

        git rm -rf twitter
        git commit -m "added my custom theme as a submodule"
