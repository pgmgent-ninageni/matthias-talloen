(() => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  let url = window.location.href;
  url = url.split('/');

  const database = {
    header: {
      nav: [{
        text: 'Te koop',
        link: 'te-koop',
      },
      {
        text: 'Te huur',
        link: 'te-huur',
      },
      {
        text: 'Realisaties',
        link: 'realisaties',
      },
      {
        text: 'het bedrijf',
        link: 'het-bedrijf',
      },
      {
        text: 'Contact',
        link: 'contact',
      },
      ],
      '': {
        directory: {
          grey: '',
          white: '',
        },
        h1: '',
        h2: '',
      },
    },
  }

  header.innerHTML = `
  <div class="background-rose">
    <section class="container">
      <p>bouwpromoter en algemene aannemer</p>
      <div>
        <a href="tel:0495252263">0495 25 22 63</a>
        <p>&nbsp; - &nbsp;</p>
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
        ${createNav()}
      </ul>  
    </nav>
    <section class="container info">
      ${showDirectory()}
    </section>
  </div>
  `;

  footer.innerHTML = `
  
  `;

  function createNav() {
    let tempStr = '';
    database.header.nav.forEach(navitem => {
      tempStr += `<li ${selectActivePage(navitem.link)}><a href="${mappingConstruction()}${navitem.link}/">${navitem.text}</a></li>`;
    });
    return tempStr;
  }

  function mappingConstruction() {
    let tempStr = '';
    for(let i = 0; url.length-5>i; i++) {
      tempStr += '../';
    }
    return tempStr;
  }

  function selectActivePage(a) {
    if(url[url.length-2]==a) {
      return 'class="active"';
    } else {
      return '';
    }
  }

  function showDirectory() {
    
  }

})();