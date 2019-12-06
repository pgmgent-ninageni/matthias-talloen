(() => {
  const database = {
    tekoop: [
      {
        id: 1,
        sold: 1,
        price: '€ 220.000',
        title: 'appartement 101',
        address: {
          street: '',
          number: '',
          posstalcode: '',
          city: '',
        },
        cat: 'appartement',
        synopsis: 'Appartement met twee slaapkamers en terras',
        isHighlight: true,
        media: [
          {
            src: 'https://matthiastalloen.be/wp-content/uploads/2019/04/20180529_BD-1631-3716-Tinhoutstraat_werfbord-600x445.jpg',
            type: 'image',
            isThumb: true,
          },
        ],
      },
      {
        id: 2,
        sold: 0,
        price: '',
        title: 'nieuwbouwwoningen',
        address: {
          street: '',
          number: '',
          posstalcode: '',
          city: 'doomkerke',
        },
        cat: 'huis',
        synopsis: 'Drie geschakelde nieuwbouwwoningen',
        isHighlight: true,
        media: [
          {
            src: 'https://matthiastalloen.be/wp-content/uploads/2019/04/doomkerkerpano-600x445.jpg',
            type: 'image',
            isThumb: true,
          },
        ],
      },
      {
        id: 3,
        sold: 0,
        price: '',
        title: 'alleenstaande pastoriewoning in ',
        address: {
          street: '',
          number: '',
          posstalcode: '',
          city: 'wingene',
        },
        cat: 'appartement',
        synopsis: 'Ruime alleenstaande woning',
        isHighlight: true,
        media: [
          {
            src: 'https://matthiastalloen.be/wp-content/uploads/2019/05/IMG_9624-cover-600x445.jpg',
            type: 'image',
            isThumb: true,
          },
        ],
      },
      {
        id: 4,
        sold: 1,
        price: '€ 292.500',
        title: 'nieuwbouwwoning',
        address: {
          street: '',
          number: '',
          posstalcode: '',
          city: 'wingene',
        },
        cat: 'huis',
        synopsis: 'Nieuwbouwwoning gelegen in een bosrijke, rustige omgeving',
        isHighlight: false,
        media: [
          {
            src: 'https://matthiastalloen.be/wp-content/uploads/2019/04/08B7EA89-E711-40FA-827D-D394D07B367F-e1557497620546-600x445.jpeg',
            type: 'image',
            isThumb: true,
          },
        ],
      },
      {
        id: 5,
        sold: 2,
        price: '',
        title: 'appartementen in ',
        address: {
          street: '',
          number: '',
          posstalcode: '',
          city: 'oostveld',
        },
        cat: 'appartement',
        synopsis: 'Vijf nieuwbouwappartementen in het rustige Oostveld',
        isHighlight: false,
        media: [
          {
            src: 'https://matthiastalloen.be/wp-content/uploads/2019/04/project-oostveld-gevels-600x445.jpg',
            type: 'image',
            isThumb: true,
          },
        ],
      },
    ],
  realisaties: [
    {
      id: 1,
      title: 'luxevilla in ',
      address: {
        street: '',
        number: '',
        posstalcode: '',
        city: 'moerbrugge',
      },
      synopsis: 'Geklasseerde schuur in een nieuw jasje',
      media: [
        {
          src: 'https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_3178-e1555426410836-600x445.jpg',
          type: 'image',
          isThumb: true,
        },
      ],
    },
    {
      id: 2,
      title: 'landelijke woning in ',
      address: {
        street: '',
        number: '',
        posstalcode: '',
        city: 'zwevezele',
      },
      synopsis: 'Prachtige landelijke woning met hoogwaardige afwerking en materialen',
      media: [
        {
          src: 'https://matthiastalloen.be/wp-content/uploads/2019/05/IMG_2085-600x445.jpg',
          type: 'image',
          isThumb: true,
        },
      ],
    },
    {
      id: 3,
      title: 'gekoppelde woning ',
      address: {
        street: '',
        number: '',
        posstalcode: '',
        city: 'doomkerke',
      },
      synopsis: '2 Ruime halfopen pastorijwoningen',
      media: [
        {
          src: 'https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2631-omslag-copy-600x445.jpg',
          type: 'image',
          isThumb: true,
        },
      ],
    },
  ],
  };
  const app = {
    init () {
    this.cacheElements();
      if (this.highlightElement !== null) {
        this.getHomeHighlight();
      };
      if (this.realisatieElement !== null) {
        this.getRealisation();
      }
      if (this.buyElement !== null) {
        this.getBuy();
      }
    },
    cacheElements () {
      this.highlightElement = document.querySelector('.home_highlights');
      this.realisatieElement = document.querySelector('.realisations');
      this.buyElement = document.querySelector('.buys');
    },
    getHomeHighlight () {
      const highlight = database.tekoop.filter(building => building.isHighlight === true);
      let tempStr = '';
      highlight.forEach(koop => {
        tempStr += `
        <a href="#" class="card">
          ${this.getSold(koop)}
          ${this.getThumbnail(koop.media)}
          <div class="stripes">
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
          </div>
          <div class="card_title">
          <h3>${koop.title} ${koop.address.city}</h3>
          </div>
          <p><span class="label">TE KOOP</span>${koop.synopsis}</p>
        </a>
        `
        this.highlightElement.innerHTML = tempStr;
      })
      return tempStr;
    },
    getRealisation () {
      let tempStr = '';
      database.realisaties.forEach(re => {
        tempStr += `
        <a href="#" class="card_pink card">
          ${this.getThumbnail(re.media)}
          <div class="stripes">
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
          </div>
          <div class="card_title">
          <h3>${re.title} ${re.address.city}</h3>
          </div>
          <p>${re.synopsis}</p>
        </a>
        `
        this.realisatieElement.innerHTML = tempStr;
      })
    },
    getBuy () {
      let tempStr = '';
      database.tekoop.forEach(tk => {
        tempStr += `
        <a href="#" class="card">
          ${this.getSold(tk)}
          ${this.getThumbnail(tk.media)}
          <div class="stripes">
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
          </div>
          <div class="card_title">
          <h3>${tk.title} ${tk.address.city}</h3>
          </div>
          <p><span class="label">TE KOOP</span>${tk.synopsis}</p>
        </a>
        `
        this.buyElement.innerHTML = tempStr;
      })
    },
    getThumbnail(media) {
      const thumb = media.filter(mediaItem => mediaItem.isThumb === true);
      let tempStr = '';
        tempStr =  `<picture class="picture_thumbnail">
                      <img src="${thumb[0].src}" class="thumbnail">
                    </picture>`;

      return tempStr;
    },
    getSold (tekoop) {
      let tempStr = '';
      if (tekoop.sold === 0) {
        tempStr += `
        <div class="tag"><p>verkocht</p></div>`
      }
      else if (tekoop.sold === 1 ){
        tempStr += `
        <div class="tag"><p>${tekoop.price}</p></div>`
      }
      else if (tekoop.sold === 2) {
        tempStr += `
        <div class="tag"><p>2 Loten</p></div>`
      }

      return tempStr;
    }
  }

  app.init();

})();