// Note: dataset` property was specifically introduced to provide a standardized and safe
// way to add custom data to DOM objects (HTML elements) in a way that's guaranteed not
// to conflict with standard properties or attributes (e.g. future standard could
// potentially overwrite our custom property)

// Note: `innerText` is aware of style and won't return the text of elements that are
// hidden via CSS (`display: none` or `visibility: hidden`) - but `textContent` will

javascript: (function () {
  const links = document.getElementsByTagName('a');
  const currentDomain = window.location.hostname;

  for (let link of links) {
    try {
      // Using built-in `URL` object to create a parse-able URL string from
      // which we can extract comp such as hostname, pathname, protocol etc.

      // `new URL(link.href)` creates a new `URL` object (built-in object)
      // from the URL string in `link.href`. This object breaks down the URL
      // into its components such as protocol, hostname, pathname, etc.
      // which can be accessed (parsed) using their respective properties.
      const urlObject = new URL(link.href);
      const linkDomain = urlObject.hostname;
      const linkPath = urlObject.pathname;

      // Checking for our custom "originalAnchorText" property under `dataset` property
      // If nothing is there, we either didn't run the bookmarklet or anchor texts
      // were restored to their original value. In this case, we will store the
      // original anchor texts under `dataset.originalAnchorText` so that we can restore
      // it later. Only after we have the backup, we update the `textContent` prop.
      if (link.dataset.originalAnchorText === undefined) {
        link.dataset.originalAnchorText = link.textContent;
        link.style.fontWeight = 'bold';
        link.style.fontSize = '16px';
        link.style.minWidth = '150px';

        if (currentDomain === linkDomain) {
          linkPath === '/'
            ? (link.textContent = 'HOMEPAGE')
            : (link.textContent = linkPath);
          link.style.border = '2px dotted #00b4f5';
          link.style.color = '#00b4f5';
        } else {
          link.textContent = link.href;
          link.style.border = '2px dotted hotpink';
          link.style.color = 'hotpink';
        }
      } else {
        // If we already stored something, let's restore it & clear the backup
        link.textContent = link.dataset.originalAnchorText;
        delete link.dataset.originalAnchorText;
        link.style.fontWeight = 'normal';
        link.style.border = '';
        link.style.color = '';
        link.style.fontSize = '';
        link.style.minWidth = '';
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
