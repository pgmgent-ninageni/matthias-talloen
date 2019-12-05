(() => {
  const targets = document.querySelectorAll('img');

  targets.forEach(element => {
    let source = element.getAttribute('src');
    element.setAttribute('data-src', `${source}`);
    element.removeAttribute('src'); 
  });


  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          img.setAttribute('src', src);
          img.classList.add('fade');

          observer.disconnect();
        }
      });
    });

    io.observe(target)
  };
  setInterval(targets.forEach(lazyLoad),100);
})();