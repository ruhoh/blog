**This version is for [ruhohSpec v2.0.alpha](http://ruhoh.com/edge/) and is only compatible with ruhoh 2.0.x**

A default blog scaffold for **ruhoh** compatible static blog parsers.

## Usage

### ruby 1.9.2+

Presently ruhoh 2.0.alpha should be bundled using bundler so you can use both ruhoh 1.x and ruhoh 2.x at the same time.

#### Clone the Blog Scaffold

    $ git clone git://github.com/ruhoh/blog.git blog-v2

Checkout **2.0.alpha branch**

    $ cd blog-v2
    $ git checkout 2.0.alpha

#### Get Bundler

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

To access the bundled ruhoh (2.0.alpha) you'll need precede your commands with `bundle exec`:

    $ bundle exec ruhoh help


## Upgrading

It's best to first get a fresh blog installed and running locally via bundler as outlined.
Next you'll want to compare your existing ruhoh 1.x blog to the new blog scaffold.

[You can view a comparison of the commits between the two version on GitHub][Compare]

Once you've converted your existing blog, try running it with ruhoh 2.0.x by copying the [Gemfile][] into your existing blog and running it with bundler as outlined above.

When ruhoh 2.0. is officially shipped, you'll be able to download and use it as normal:

    $ gem install ruhoh

But not yet!

## Help

Feel free to submit installation and upgrading issues via [GitHub Issues](https://github.com/ruhoh/blog/issues)
They can be basic trouble-shooting questions.

Also contact me via:

- email: plusjade@gmail.com
- twitter: [@ruhohBlog](http://twitter.com/ruhohBlog)

## Documentation

See <http://ruhoh.com/edge> for full usage and documentation.

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)


[Compare]: https://github.com/ruhoh/blog/compare/2.0.alpha
[Gemfile]: https://github.com/ruhoh/blog/blob/2.0.alpha/Gemfile
