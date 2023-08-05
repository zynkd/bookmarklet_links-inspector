javascript: (function () {
  // Scrape all links & change their `innerText` property to their `href` property
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].innerText = links[i].href;
  }
})();
