# Bookmarklet to Inspect Links on a Page

This is a simple bookmarklet that inspects all links on a webpage. I use it on a regular basis to analyze website for SEO or Web Development purposes and spot potential issues.

# Features

Anchor texts (link texts) are converted to URLs. This allows us to see a quick overview of what is being linked to.

Internal links are highlighted in `hotpink` color with simple dotted border. In addition to this, internal links only include URL path (not a domain name), and if the link goes to the Homepage, simple "HOMEPAGE" string is displayed.

External (outbound) links are highlighted in `blue` color with simple dotted border.

The bookmarklet `works as a toggle` - it can be clicked on again and again.

# How to run this bookmarklet?

Properly formatted javascript code with comments is under the `src` directory. Is is already written as IIFE (Immediately Invoked Function Expression). The usable bookmarklet code (minified and encoded) is under `dist` directory. You can simply copy-paste it to the URL field when creating standard bookmark.

You can also use various online tools to convert the Javascript code to a bookmarklet. For example
https://mrcoles.com/bookmarklet/.


# Download and test locally

You can use `git clone` and install needed dependencies (`bookmarklet` and `nodemon`) via `npm install`. You can then run `npm build` to convert src/index.js to a bookmarklet code (uses `bookmarklet` NPM package)

For convenience, you can also run `npm watch` (uses `nodemon` NPM package). This will watch any changes made to `index.js` file and automatically convert them to bookmarklet code to `dist/bookmarklet.js` file.
