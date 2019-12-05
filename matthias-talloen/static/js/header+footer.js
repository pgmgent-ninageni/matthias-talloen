(() => {
  
  const header = document.querySelector('header');
  header.innerHTML = `
  <div class="background-rose">
    <section class="container">
      <p>bouwpromoter en algemene aannemer</p>
      <div>
        <a href="tel:0495252263">0495 25 22 63</a>
        <p> - </p>
        <a href="mailto:info@matthiastalloen.be">info@matthiastalloen.be</a>
      </div>
    </section>
  </div>
  <div class="background-pink">
    <nav class="container">
      <a href="${mappingConstruction()}">
        <img src="https://matthiastalloen.be/wp-content/uploads/2019/03/matthias-talloen-logo-white.svg" width="186" height="38" alt="Matthias Talloen">
      </a>
      <ul>
        <li><a href="${mappingConstruction()}te-koop/">Te koop</a></li>
        <li><a href="${mappingConstruction()}te-huur/">Te huur</a></li>
        <li><a href="${mappingConstruction()}realisaties/">Realisaties</a></li>
        <li><a href="${mappingConstruction()}het-bedrijf/">het bedrijf</a></li>
        <li><a href="${mappingConstruction()}contact/">Contact</a></li>
      </ul>  
    </nav>
    <section class="container info">
    </section>
  </div>
  `;

  function mappingConstruction() {
    // let url = window.location.href.split('/');
    let tempStr = '';
    // for(let i = 0; url.length-2>i; i++) {
    //   tempStr += '../';
    // }

    // console.log(tempStr);
    return tempStr;
  }

})();