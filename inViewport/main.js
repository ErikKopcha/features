function inViewport(elem, callback, options = {}) {
  return new IntersectionObserver(entries => {
      entries.forEach(entry => callback(entry));
  }, options).observe(document.querySelector(elem));
}

inViewport('.target', element => {
  document.querySelector('.box span strong').textContent = element.isIntersecting;
}, {
  root: document.querySelector('.scroll')
});