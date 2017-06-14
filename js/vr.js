var loader;
document.addEventListener("DOMContentLoaded", function(e) {
  loader = setTimeout(showPage, 4000);

  function showPage() {
    document.getElementById("load-overlay").style.display = "none";
    document.getElementById("app").style.display = "block";
  }
});

window.onload = function() {
  var totalPlanets = 9; // Update this as more planets are added
  var planetPicker = 5; // Start with Saturn
  var tempCamZoom = '0 0 1000';
  var camZoom = '0 0 1000';

  // Initialise UI
  const prevBtn = document.getElementById('prev-planet');
  const nextBtn = document.getElementById('next-planet');
  prevBtn.addEventListener('click', prevPlanet, false);
  nextBtn.addEventListener('click', nextPlanet, false);

  // Get A-Frame components
  const camera = document.getElementById('camera');
  const currentPlanetContainer = document.getElementById('current-planet-container');
  const currentPlanetRotation = document.getElementById('current-planet-rotation');
  const currentPlanet = document.getElementById('current-planet');
  const currentPlanetName = document.getElementById('planet-name');
  const ring = document.getElementById('ring');

  function setPlanet(planet) {
    switch (planet) {
      case 0:
        console.log('Setting planet to Mercury');
        currentPlanetName.innerHTML = 'Mercury';
        currentPlanetContainer.setAttribute('rotation', '0 0 -2.04');
        // currentPlanetRotation.setAttribute('animation.dur', '140760');
        currentPlanet.setAttribute('src', '#txMercury');
        currentPlanet.setAttribute('radius', '2.440');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 12';
        zoomToFit();
        break;
      case 1:
        console.log('Setting planet to Venus');
        currentPlanetName.innerHTML = 'Venus';
        currentPlanetContainer.setAttribute('rotation', '0 0 -2.6');
        // currentPlanetRotation.setAttribute('animation.dur', '583260');
        // currentPlanetRotation.setAttribute('animation.dir', 'reverse');
        currentPlanet.setAttribute('src', '#txVenus');
        currentPlanet.setAttribute('radius', '6.052');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 30';
        zoomToFit();
        break;
      case 2:
        console.log('Setting planet to Earth');
        currentPlanetName.innerHTML = 'Earth';
        currentPlanetContainer.setAttribute('rotation', '0 0 -23.4');
        // currentPlanetRotation.setAttribute('animation.dur', '2393');
        currentPlanet.setAttribute('src', '#txEarth');
        currentPlanet.setAttribute('radius', '6.371');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 32';
        zoomToFit();
        break;
      case 3:
        console.log('Setting planet to Mars');
        currentPlanetName.innerHTML = 'Mars';
        currentPlanetContainer.setAttribute('rotation', '0 0 -25.2');
        // currentPlanetRotation.setAttribute('animation.dur', '2462');
        currentPlanet.setAttribute('src', '#txMars');
        currentPlanet.setAttribute('radius', '3.390');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 18';
        zoomToFit();
        break;
      case 4:
        console.log('Setting planet to Jupiter');
        currentPlanetName.innerHTML = 'Jupiter';
        currentPlanetContainer.setAttribute('rotation', '0 0 -3.13');
        // currentPlanetRotation.setAttribute('animation.dur', '993');
        currentPlanet.setAttribute('src', '#txJupiter');
        currentPlanet.setAttribute('radius', '69.911');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 350';
        zoomToFit();
        break;
      case 5:
        console.log('Setting planet to Saturn');
        currentPlanetName.innerHTML = 'Saturn';
        currentPlanetContainer.setAttribute('rotation', '0 0 -26.7');
        // currentPlanetRotation.setAttribute('animation.dur', '1066');
        currentPlanet.setAttribute('src', '#txSaturn');
        currentPlanet.setAttribute('radius', '58.232');
        currentPlanet.setAttribute('scale', '1 0.9 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 265';
        zoomToFit();
        break;
      case 6:
        console.log('Setting planet to Uranus');
        currentPlanetName.innerHTML = 'Uranus';
        currentPlanetContainer.setAttribute('rotation', '0 0 -82.2');
        // currentPlanetRotation.setAttribute('animation.dur', '1724');
        // currentPlanetRotation.setAttribute('animation.dir', 'reverse');
        currentPlanet.setAttribute('src', '#txUranus');
        currentPlanet.setAttribute('radius', '25.362');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 130';
        zoomToFit();
        break;
      case 7:
        console.log('Setting planet to Neptune');
        currentPlanetName.innerHTML = 'Neptune';
        currentPlanetContainer.setAttribute('rotation', '0 0 -28.3');
        // currentPlanetRotation.setAttribute('animation.dur', '1611');
        currentPlanet.setAttribute('src', '#txNeptune');
        currentPlanet.setAttribute('radius', '24.622');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 125';
        zoomToFit();
        break;
      case 8:
        console.log('Setting planet to Pluto');
        currentPlanetName.innerHTML = 'Pluto ';
        currentPlanetContainer.setAttribute('rotation', '0 0 -57.5');
        // currentPlanetRotation.setAttribute('animation.dur', '15329;');
        // currentPlanetRotation.setAttribute('animation.dir', 'reverse');
        currentPlanet.setAttribute('src', '#txPluto');
        currentPlanet.setAttribute('radius', '1.186');
        currentPlanet.setAttribute('scale', '1 1 1');
        tempCamZoom = camZoom;
        camZoom = '0 0 6';
        zoomToFit();
        break;
    }
    checkForRings();
  }

  function checkForRings() {
    if(planetPicker === 5) {
       // Saturn
      ring.setAttribute('visible', 'true');
      ring.setAttribute('src', '#txSaturnRing');
      ring.setAttribute('width', '280.44');
      ring.setAttribute('height', '280.44');
    // } else if(planetPicker === 6) {
    //   // Uranus
    //   ring.setAttribute('visible', 'true');
    //   ring.setAttribute('src', '#txUranusRing');
    //   ring.setAttribute('width', '196');
    //   ring.setAttribute('height', '196');
    // } else if(planetPicker === 7) {
    //   // Neptune
    //   ring.setAttribute('visible', 'true');
    //   ring.setAttribute('src', '#txNeptuneRing');
    //   ring.setAttribute('width', '125.864');
    //   ring.setAttribute('height', '125.864');
    } else {
      ring.setAttribute('visible', 'false');

      ring.setAttribute('radius-inner', '0');
      ring.setAttribute('radius-outer', '0');
    }
  }

  function zoomToFit() {
    console.log('Zooming camera to fit (' + camZoom +')');
    camera.removeAttribute('animation');
    camera.setAttribute('animation', 'property: position; dur: 2000; easing: easeInOutSine; to: ' + camZoom + ';');
  }

  function prevPlanet() {
    planetPicker--;
    if (planetPicker < 0) {
      planetPicker = (totalPlanets - 1);
    }
    setPlanet(planetPicker);
  }

  function nextPlanet() {
    planetPicker++;
    if (planetPicker > (totalPlanets - 1)) {
      planetPicker = 0;
    }
    setPlanet(planetPicker);
  }

  setPlanet(planetPicker);
};
