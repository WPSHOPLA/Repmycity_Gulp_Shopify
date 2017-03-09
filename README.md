# RepMyCity.com project setup and guidelines

## 1. Technologies

Some technologies you should have already installed:

* Ruby 2.0 (type `ruby -v` to see what version you have.
* [Homebrew](http://brew.sh/)
* [Bundler](http://bundler.io)
* [Node](http://nodejs.org/)
* [npm](http://npmjs.com/)
* [Gulp](http://gulpjs.com/)

Gulp powers the Javascript/SASS/Shopify compilation, transpiling, and
bundling.

Front-end frameworks:
* [Zurb Foundation 6](http://foundation.zurb.com/sites/docs/grid.html)
* [AngularJS](http://angularjs.org)

Platforms:
* [Shopify Custom Theme](http://shopify.com)

## 2. Getting Started

The very first thing you'll need to do is to fork the [Github project](https://github.com/julianjorgensen/repmycity).

Clone your fork and add the upstream:

`git remote add upstream https://github.com/julianjorgensen/repmycity`


### 2.1 Steps to install

1. `bundle install`
2. `npm install` (install packages based on package.json file) Note: you may need to run `npm cache clean`
3. `npm start`


## 3. Commits and branches

`master` branch is the main branch.

Any features/fixes should be developed in a feature branch based off of the latest `upstream/master`:

```
git checkout master
git fetch upstream && git merge upstream/master
git checkout -b feature-foo-bar
```

Be cognizant of your commits. That is, don't just `git commit -a`; instead,
inspect your commits and ensure you are committing what you intend to commit,
and that you are not forgetting to add any new files. The [Github desktop
application](https://mac.github.com) or [GitX](http://rowanj.github.io/gitx/)
are great tools that help with this.

After committing, do a pull request. [Hub](https://hub.github.com) makes this
easy from the command line. (We recommend not aliasing `git` to `hub`.)

`hub pull-request -b coverall:master --browse`


## 4. Javascripts

### 4.1 Adding Javascript files

| Custom JS                       | Vendor JS                    |
| ------------------------------- |:----------------------------:|
| `_source/assets/javascript`     | `_source/assets/javascript/vendor`   |

*After adding the new Javascript file, remember to also add it to the gulp config file located here: `gulp/config.yml`.*

### 4.2 Third-party scripts (vendor)

All Third-party Javascripts goes into `_source/assets/javascript/vendor` folder, unless it is a frame-work; then it may need to be installed as a node package (`package.json`).

### 4.3 Javascript manifest and compiler

All javascript files gets compiled into one manifest .js file using the files specified in: `gulp/config.yml` (in the Javascript section).

If you want to understand how the bundling works, see the gulp files `gulp/tasks/javascript.js` and `gulp/tasks/watch.js`.

## 5. Styles

### 5.1 SASS
SASS files (using the SCSS variety) can be found in `_source/assets/styles`. The main "manifest" for this site is found in `_source/assets/styles/main.scss`, so if you create a new file or remove an existing, you'll need to update the manifest.

If you want to understand how the bundling works, see the gulp file `gulp/tasks/sass.js` and `gulp/tasks/watch.js`

### 5.2 Foundation
Zurb Foundation framework is very similar to Bootstrap. The difference is that Foundation is maintained more often (because it is commercialized) and Foundation 6 already supports Flexbox (as opposed to Bootstrap 3).

Here are some documentation of the basic components using Foundation:
  [Grid (using Flex)](http://foundation.zurb.com/sites/docs/flex-grid.html)
  [More details on Flexbox here](http://foundation.zurb.com/sites/docs/flexbox.html)
  [Forms](http://foundation.zurb.com/sites/docs/forms.html)
  [Buttons](http://foundation.zurb.com/sites/docs/button.html)
  [Visibility (depending on screen widths)](http://foundation.zurb.com/sites/docs/visibility.html)

### 5.3 Customizing Foundation

You can add/remove Foundation style modules in the file `_source/assets/styles/main.scss` simply by uncommenting/commenting the include line.

Foundation variables can found in `_source/assets/styles/_settings.scss`.
So **before** overriding any Foundation styles, check to see if there is a corresponding variable you can set in the `_source/assets/styles/_settings.scss` configuration file.

### 5.4 Style architecture
We are using the [SMACSS (Scalable and Modular CSS)](https://smacss.com) architecture. (It is simpler than it sounds).

#### 5.4.1 Helpers
Helpers include mixins, functions and other minor style classes that are repeated throughout the site.

#### 5.4.2 Base styles
Base styles include setting heading sizes, default link styles, default font styles, and body backgrounds. There should be absolutely no need to use !important in a Base style.

#### 5.4.3 layouts
There is a distinction between layouts dictating the **major** and **minor** components of a page. The minor components—such as a callout, or login form, or a navigation item—sit within the scope of major components such as a header or footer. The minor components are often referred to as **Modules**. The major components are referred to as **Layout styles**.

#### 5.4.4 Modules
A Module is a more discrete component of the page. It is your navigation bars and your carousels and your dialogs and your widgets and so on. This is the meat of the page. Modules sit inside Layout components. Modules can sometimes sit within other Modules, too. Each Module should be designed to exist as a standalone component. In doing so, the page will be more flexible. If done right, Modules can easily be moved to different parts of the layout without breaking.

Avoid using IDs for modules - they should only use classes.

#### 5.4.5 States
A state is something that augments and overrides all other styles. For example, an accordion section may be in a collapsed or expanded state. A message may be in a success or error state.

States are generally applied to the same element as a layout rule or applied to the same element as a base module class.

#### 5.4.6 !Important
As a rule of thumb, the use of `!important` should almost **never** be used. Organizing your styles correctly, will automatically create the correct hierarchy.

**You can learn about the ordering and semantics in the style manifest file located under `_source/assets/styles/main.scss`.**


## 6. Typography

### 6.1 Use only em and rem

When possible, use the rem and em units to size everything. Not just font size, but also padding, margins, and any length value. This ensures that your design scales up and down uniformly if the user changes their browser's text size. It's common for vision-impaired users to resize their browser up to 200% zoom.

You can use the Sass function to make it a little easier. The rem-calc() function can take one or more pixel values and convert them to proper rem values.

```
.element {
  width: rem-calc(300);
  padding: rem-calc(10 16);
}
```

### 6.2 em vs rem

While em is relative to the font-size of its direct or nearest parent, rem is only relative to the html (root) font-size.
This is crucial to understand, so if in doubt, [please read](https://j.eremy.net/confused-about-rem-and-em/)

### 6.3 Font scales for breakpoints

Foundation includes two typographic scales. One uses a narrow range of sizes for small- and medium-sized screens, and the other uses a wider range of sizes for large-sized screens. You can change these scales, or add new ones for other breakpoints, by editing the $header-sizes map in the Foundation Settings File.


## 7. TypeKit Information
