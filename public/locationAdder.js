
// config map
let config = {
    minZoom: 7,
    maxZoom: 18,
  };
  // magnification with which the map will start
  const zoom = 18;
  // co-ordinates
  const lat = 23.725089;
  const lng = 90.392968;
  
  // calling map
  const map = L.map("map", config).setView([lat, lng], zoom);
  
  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  
  // --------------------------------------------------------------
  // create seearch button
  
  // add "random" button
  const buttonTemplate = `<div class="leaflet-search"></div><div class="auto-search-wrapper max-height"><input type="text" id="marker" autocomplete="off"  aria-describedby="instruction" aria-label="Search ..." /><div id="instruction" class="hidden">When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.</div></div>`;
  
  // create custom button
  const customControl = L.Control.extend({
    // button position
    options: {
      className: "leaflet-autocomplete",
    },
  
    // method
    onAdd: function () {
      return this._initialLayout();
    },
  
    _initialLayout: function () {
      // create button
      const container = L.DomUtil.create(
        "div",
        "leaflet-bar " + this.options.className
      );
  
      L.DomEvent.disableClickPropagation(container);
  
      container.innerHTML = buttonTemplate;
  
      return container;
    },
  });
  
  // adding new button to map controll
  map.addControl(new customControl());
  
  // --------------------------------------------------------------
  
  // input element
  const root = document.getElementById("marker");
  
  function addClassToParent() {
    const searchBtn = document.querySelector(".leaflet-search");
    searchBtn.addEventListener("click", (e) => {
      // toggle class
      e.target
        .closest(".leaflet-autocomplete")
        .classList.toggle("active-autocomplete");
  
      // add placeholder
      root.placeholder = "Search ...";
  
      // focus on input
      root.focus();
  
      // click on clear button
      clickOnClearButton();
    });
  }
  
  // function click on clear button
  function clickOnClearButton() {
    document.querySelector(".auto-clear").click();
  }
  
  addClassToParent();
  
  // function clear input
  map.on("click", () => {
    document
      .querySelector(".leaflet-autocomplete")
      .classList.remove("active-autocomplete");
  
    clickOnClearButton();
  });
  
  // autocomplete section
  // more config find in https://github.com/tomik23/autocomplete
  // --------------------------------------------------------------
  
  new Autocomplete("marker", {
    delay: 1000,
    selectFirst: true,
    howManyCharacters: 2,
  
    onSearch: function ({ currentValue }) {
      const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&q=${encodeURI(
        currentValue
      )}`;
  
      /**
       * Promise
       */
      return new Promise((resolve) => {
        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            resolve(data.features);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    },
  
    onResults: ({ currentValue, matches, template }) => {
      const regex = new RegExp(currentValue, "i");
      // checking if we have results if we don't
      // take data from the noResults method
      return matches === 0
        ? template
        : matches
            .map((element) => {
              return `
                <li role="option">
                  <p>${element.properties.display_name.replace(
                    regex,
                    (str) => `<b>${str}</b>`
                  )}</p>
                </li> `;
            })
            .join("");
    },
  
    onSubmit: ({ object }) => {
      const { display_name } = object.properties;
      const cord = object.geometry.coordinates;
    
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

     axios.post('/customer/location',{lat:cord[1],lng:cord[0]}).then(res=>{
            console.log(res);
     });
  
      // remove last marker
      map.eachLayer(function (layer) {
        if (layer.options && layer.options.pane === "markerPane") {
          if (layer._icon.classList.contains("leaflet-marker-locate")) {
            map.removeLayer(layer);
          }
        }
      });
  
      // add marker
      console.log(cord);
      const marker = L.marker([cord[1], cord[0]], {
        title: display_name,
      });
  
      // add marker to map
      marker.addTo(map).bindPopup(display_name);
  
      // set marker to coordinates
      map.setView([cord[1], cord[0]], 8);
  
      // add class to marker
      L.DomUtil.addClass(marker._icon, "leaflet-marker-locate");
    },
  
    // the method presents no results
    noResults: ({ currentValue, template }) =>
      template(`<li>No results found: "${currentValue}"</li>`),
  });