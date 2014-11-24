# portefeuille

A theme for [Ghost](http://github.com/tryghost/ghost/). Portefeuille makes your blog portfolio-ready - ideal for designers who want to try out Ghost as a CMS to showcase their work.

### Features

* [Isotope](http://isotope.metafizzy.co/) gallery filter that integrates with Ghost's tagging system
* Sleek, minimalist layout design
* Responsive

## Installation

```
cd ghost/content/themes
git clone https://github.com/merciba/portefeuille.git
```

Login to the Ghost admin panel, navigate to **Settings** and choose "Portefeuille" as your theme.

## Getting Started

Portefeuille was designed to allow you to use Ghost more or less normally, with a few notable differences:

###1. Tags and Filters

Portefeuille uses the "nav-item" tag to differentiate between pages designed for the gallery, and pages designed for the sidebar (Note: This functionality overrides static pages. You can still create static pages but they won't show up unless you manually link to them. Treat everything as a normal post and filter using the tag "nav-item"). All posts with tag "nav-item" will also be excluded from the Isotope gallery, but added as a "static" link to the nav sidebar.

All other tags show up under the "Works" nav item as Isotope filter categories. So if you create a post with tags "print" and "web", you will see "Print" and "Web" as filter options when you publish. Seamless! (hopefully)

###2. Images

Portefeuille uses each post's "Featured Image" as the image for the Isotope gallery item. You can still add images to the post like normal. 

## Copyright & License

Copyright (c) 2014-2015 Merciba Creative - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
