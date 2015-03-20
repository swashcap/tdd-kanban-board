# TDD Kanban Board

> What about those tests? Think those tests still work?

![Toran Billups dropping the metaphoric microphone](public/drop-da-mic.gif)

—Toran Billups

**This repository is a code exercise based on Mr. Billups’ [amazing talk about test-driven development](https://www.youtube.com/watch?v=2b1vcg_XSR8) given at [EmberConf 2015](http://emberconf.com/).**

I have very little experience with TDD, and practically no experience with Ember. But, after watching Mr. Billups’ jaw-dropping talk on YouTube, I figured I’d give both a shot. The whole thing is right there in the video and it’s pretty easy to follow along. (Although, if you’re like me, you’ll probably have to rewatch it a coule times. _Also_, he’s insanely good with Vim.)

Unfortunately, this isn’t web viewable. The application relies on an API for todos (`/api/todos` in _app/routes/todos.js_), which is made testable through [fauxjax](https://github.com/JarrodCTaylor/fauxjax). Also, the app’s images and styles aren’t available. Still! You can run `ember test`, everything passes, and you can drop your own little mic.

## Links:

* [Watch the Video](https://www.youtube.com/watch?v=2b1vcg_XSR8)
* [@toranb on Twitter](https://twitter.com/@toranb)
* [toranb on GitHub](https://github.com/toranb)

---

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

