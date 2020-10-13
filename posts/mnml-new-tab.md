---
title: I made a browser extension called mnml new tab
date: 2020-04-25
tags:
- coding

---
If you've seen my blog post titled [inspo](/posts/inspo), you already know how impressed I am by [torvim's](https://torvim.github.io/) [inspo](https://u.teknik.io/E32bU.zip) collection.

One day, while randomly browsing images in this collection, I came across the following image:

[![Screenshot of inspiration for mnml new tab](../../assets/images/mnml-inspo.png#markdown)](../../assets/images/mnml-inspo.png)

The screenshot showed a new tab page with a pretty minimal layout.

I had been using other extensions to show bookmarks in the new tab page so that they could be easily accessible, so upon seeing the screenshot from the inspo collection, I decided to create a similar browser extension. There might already be an extension with the exact design (how else would that screenshot exist then?), but creating an extension that I will use daily seemed fun so I went through with it.

## Technical Details

Since chrome, firefox and edge (since it's based on chromium), have adopted the [webextension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) spec so it's easy to develop extensions for all of these browsers using a single codebase. There are some minor differences though. Firefox webextension API's are promise based but chrome is still using the older callback syntax, also functions on chrome are under the `chrome` namespace, as compared to `browser` on firefox. Thankfully, firefox has a handy [polyfill](https://github.com/mozilla/webextension-polyfill) which helps iron out these quirks.

The quote that the new tab page displays is fetched from [quotes.rest](https://quotes.rest/). The extension is written in vanilla javascript. The new tab page shows the first 8 bookmarks from the `Bookmarks Bar` folder on chrome, `Favourites Bar` on edge and the `Bookmarks Toolbar` folder on firefox.

The extension's code is open source and is available [on github](https://github.com/arpitbatra123/mnml-new-tab).

## Screenshots

Here is how the new tab page looks on chrome and firefox and edge:

[![Screenshot of mnml new tab on chrome](../../assets/images/mnml-chrome.png#markdown)](../../assets/images/mnml-chrome.png)

[![Screenshot of mnml new tab on firefox](../../assets/images/mnml-firefox.png#markdown)](../../assets/images/mnml-firefox.png)

[![Screenshot of mnml new tab on edge](../../assets/images/mnml-edge.png#markdown)](../../assets/images/mnml-edge.png)

## Download

* [Firefox Extension](https://addons.mozilla.org/en-GB/firefox/addon/mnml-new-tab/)
* [Chrome Extension](https://chrome.google.com/webstore/detail/mnml-new-tab/mceanpcekehmcfalnmllidcfipajpeml?hl=en)

### Update - 26th September 2020

Added dark mode support:

<video controls autoplay loop>
  <source src="../../assets/images/mnml-new-tab-dark-mode.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>