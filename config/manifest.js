/* eslint-env node */

'use strict';

module.exports = function() {
  return {
    name: "simple-github-viewer",
    short_name: "gh-viewer",
    description: "",
    start_url: "./",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#00d1b2",
    icons: [
      {
        "src": "images/icon-192.png",
        "sizes": "192x192",
        "type": "image/png"
      }
    ]
  };
}
