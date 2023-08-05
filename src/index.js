// Note: dataset` property was specifically introduced to provide a standardized and safe
// way to add custom data to DOM objects (HTML elements) in a way that's guaranteed not
// to conflict with standard properties or attributes (e.g. future standard could
// potentially overwrite our custom property)

// Note: `innerText` is aware of style and won't return the text of elements that are
// hidden via CSS (`display: none` or `visibility: hidden`) - but `textContent` will

javascript: (function () {
  const links = document.getElementsByTagName('a');

  for (let link of links) {
    // Checking for our custom "originalAnchorText" property under `dataset` property
    // If nothing is there, we either didn't run the bookmarklet or anchor texts
    // were restored to their original value. In this case, we will store the
    // original anchor texts under `dataset.originalAnchorText` so that we can restore
    // it later. Only after we have the backup, we update the `textContent` prop.
    if (link.dataset.originalAnchorText === undefined) {
      link.dataset.originalAnchorText = link.textContent;
      link.textContent = link.href;
    } else {
      // If we already stored something, let's restore it & clear the backup
      link.textContent = link.dataset.originalAnchorText;
      delete link.dataset.originalAnchorText;
    }
  }
})();
