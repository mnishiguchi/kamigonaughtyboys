(function () {
  // https://discourse.gohugo.io/t/active-links-in-menu/8717/11
  document.addEventListener('turbolinks:load', function () {
    const links = document.getElementsByTagName('a');
    const currentUrl = location.href;
    for (const link of links) {
      if (link.href === currentUrl) {
        link.setAttribute('aria-current', true);
      }
    }
  });
})();
