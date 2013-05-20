**This version is for [ruhohSpec v2.1](http://ruhoh.com/docs/2) and is only compatible with ruhoh 2.1.x**

A default blog scaffold for **ruhoh** compatible static blog parsers.

## Usage

### ruby 1.9.2+

#### Clone the Blog Scaffold

    $ git clone git://github.com/ruhoh/blog.git blog
    $ cd blog

#### Get Bundler

It is recommended to use bundler to manage ruhoh versions.

Do you have bundler?

    $ bundle -v
    
If it's not found, install it:

    $ gem install bundler
    
More info on bundler: http://gembundler.com/

#### Bundle Install

This blog ships with its own [Gemfile][]. All you need to do is install the bundle.

Navigate to the root of this repository and execute:

    $ bundle install

#### Run Ruhoh from the Bundle

Once the bundle is completed, run:

    $ bundle exec rackup -p 9292

This starts a web server that hosts your blog here: [http://localhost:9292](http://localhost:9292)

To access the bundled ruhoh (2.1) you'll need precede your commands with `bundle exec`:

    $ bundle exec ruhoh help

#### Run without Bundler

To omit calling `bundler` with every command download the gem into your global environment:

    $ gem install ruhoh

Now you can make calls without bundler:

    $ ruhoh help
    $ ruhoh console

Note this will set `ruhoh` to the latest version so you can no longer easily switch across ruhoh versions.

#### Make it Your Own

The origin initially points to: git@github.com:ruhoh/blog.git

To add your own remote, first create a new repository on GitHub. ex: git@github.com:USERNAME/my-ruhoh-blog.git

    $ git remote rm origin
    $ git remote add origin git@github.com:USERNAME/my-ruhoh-blog.git

Now you can add your own content and push it to your repository:

    $ git add .
    $ git commit -m 'some new content'

## Upgrading

[Upgrade Reference](http://ruhoh.com/docs/2/upgrading)

It's best to first get a fresh blog installed and running locally via bundler as outlined.
Next you'll want to compare your existing ruhoh 1.x and 2.0.alpha blog to the newest blog scaffold.

Once you've converted your existing blog, try running it with ruhoh 2.1 by copying the [Gemfile][] into your existing blog and running it with bundler as outlined above.

## Help

Feel free to submit installation and upgrading issues via [GitHub Issues](https://github.com/ruhoh/blog/issues)
They can be basic trouble-shooting questions.

Also contact me via:

- email: plusjade@gmail.com
- twitter: [@ruhohBlog](http://twitter.com/ruhohBlog)

## Documentation

See <http://ruhoh.com/docs/2> for full usage and documentation.

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

[Gemfile]: https://github.com/ruhoh/blog/blob/master/Gemfile
