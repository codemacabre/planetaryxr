window.onload = function() {
  var planetPicker = Math.floor(Math.random() * 6);

  const prevBtn = document.getElementById('prev-planet');
  const nextBtn = document.getElementById('next-planet');
  prevBtn.addEventListener('click', prevPlanet, false);
  nextBtn.addEventListener('click', nextPlanet, false);

  const currentPlanetContainer = document.getElementById('current-planet-container');
  const currentPlanet = document.getElementById('current-planet');

  function setPlanet(planet) {
    // change current-planet innerHtml based on planetPicker value
      switch (planet) {
        case 0:
          console.log('Setting planet to Mercury...');
          currentPlanetContainer.setAttribute('rotation', '0, 0, 0');
          currentPlanet.setAttribute('src', '#txMercury');
          currentPlanet.setAttribute('radius', '0.4');
          // Avg distance from sun: 59.4Gm
          break;
        case 1:
          console.log('Setting planet to Venus...');
          currentPlanetContainer.setAttribute('rotation', '0, 0, -2.6');
          currentPlanet.setAttribute('src', '#txVenus');
          currentPlanet.setAttribute('radius', '0.9');
          // Avg distance from sun: 108.2Gm
          break;
        case 2:
          console.log('Setting planet to Earth...');
          currentPlanetContainer.setAttribute('rotation', '0, 0, -23.4');
          currentPlanet.setAttribute('src', '#txEarth');
          currentPlanet.setAttribute('radius', '1.0');
          // Avg distance from sun: 149.6Gm
          break;
        case 3:
          console.log('Setting planet to Mars...');
          currentPlanetContainer.setAttribute('rotation', '0, 0, -25.2');
          currentPlanet.setAttribute('src', '#txMars');
          currentPlanet.setAttribute('radius', '0.5');
          // Avg distance from sun: 228.0Gm
          break;
        case 4:
          console.log('Setting planet to Jupiter...');
          currentPlanetContainer.setAttribute('rotation', '0, 0, -3.1');
          currentPlanet.setAttribute('src', '#txJupiter');
          currentPlanet.setAttribute('radius', '11.0');
          // Avg distance from sun: 778.3Gm
          break;
        // case 5:
        //   console.log('Setting planet to Saturn...');
        //   currentPlanetContainer.setAttribute('rotation', '0, 0, -26.7');
        //   currentPlanet.setAttribute('src', '#txSaturn');
        //   currentPlanet.setAttribute('radius', '9.1');
        // // Avg distance from sun: 1429.5Gm
        //   break;
        // case 5:
        //   console.log('Setting planet to Uranus...');
        //   currentPlanetContainer.setAttribute('rotation', '0, 0, -82.2');
        //   currentPlanet.setAttribute('src', '#txUranus');
        //   currentPlanet.setAttribute('radius', '4.0');
        // // Avg distance from sun: 2875Gm
        //   break;
        // case 5:
        //   console.log('Setting planet to Neptune...');
        //   currentPlanetContainer.setAttribute('rotation', '0, 0, -28.3');
        //   currentPlanet.setAttribute('src', '#txNeptune');
        //   currentPlanet.setAttribute('radius', '3.9');
        // // Avg distance from sun: 4500Gm
        //   break;
        case 5:
          console.log('Setting planet to Pluto...');
          currentPlanetContainer.setAttribute('rotation', '0, 0, -57.5');
          currentPlanet.setAttribute('src', '#txPluto');
          currentPlanet.setAttribute('radius', '0.2');
          // Avg distance from sun: 5906.4Gm
          break;
    }
  }

  function prevPlanet() {
    planetPicker--;
    if (planetPicker < 0) {
      planetPicker = 5;
    }
    setPlanet(planetPicker);
  }

  function nextPlanet() {
    planetPicker++;
    if (planetPicker > 5) {
      planetPicker = 0;
    }
    setPlanet(planetPicker);
  }

  setPlanet(planetPicker);
};
