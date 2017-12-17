var pgLoader;
var camera, controls, amLight, light, scene, renderer;
var geometry, geomTemp, geomDebug, stars, mercury, venus, earth, mars, saturn, uranus, neptune, pluto;
var matDebug, matStars, matMercury, matVenus, matEarth, matMars, matJupiter, matSaturn, matUranus, matNeptune, matPluto;
var txStars, txMercury, txVenus, txEarth, txMars, txJupiter, txSaturn, txUranus, txNeptune, txPluto;

let distMercury = 0;
let distVenus = 1000;
let distEarth = 2000;
let distMars = 3000;
let distJupiter = 4000;
let distSaturn = 5000;
let distUranus = 6000;
let distNeptune = 7000;
let distPluto = 8000;

// Initialise Page Loader
document.addEventListener("DOMContentLoaded", function(e) {
  pgLoader = setTimeout(showPage, 4000);

  function showPage() {
    document.getElementById("load-overlay").style.display = "none";
    document.getElementById("app").style.display = "block";
  }
});

// Initialise UI
var totalPlanets = 9; // Mercury to Pluto
var planetPicker = 0; // Start with Mercury
const prevBtn = document.getElementById('prev-planet');
const nextBtn = document.getElementById('next-planet');
prevBtn.addEventListener('click', prevPlanet, false);
nextBtn.addEventListener('click', nextPlanet, false);

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

function setPlanet(planet){
  switch (planet) {
    case 0:
      console.log('Setting planet to Mercury');
      camera.position.set(distMercury, 0, 32);
      controls.target.set(distMercury, 0, 0);
      break;
    case 1:
      console.log('Setting planet to Venus');
      camera.position.set(distVenus, 0, 32);
      controls.target.set(distVenus, 0, 0);
      break;
    case 2:
      console.log('Setting planet to Earth');
      camera.position.set(distEarth, 0, 32);
      controls.target.set(distEarth, 0, 0);
      break;
    case 3:
      console.log('Setting planet to Mars');
      camera.position.set(distMars, 0, 32);
      controls.target.set(distMars, 0, 0);
      break;
    case 4:
      console.log('Setting planet to Jupiter');
      camera.position.set(distJupiter, 0, 32);
      controls.target.set(distJupiter, 0, 0);
      break;
    case 5:
      console.log('Setting planet to Saturn');
      camera.position.set(distSaturn, 0, 32);
      controls.target.set(distSaturn, 0, 0);
      break;
    case 6:
      console.log('Setting planet to Uranus');
      camera.position.set(distUranus, 0, 32);
      controls.target.set(distUranus, 0, 0);
      break;
    case 7:
      console.log('Setting planet to Neptune');
      camera.position.set(distNeptune, 0, 32);
      controls.target.set(distNeptune, 0, 0);
      break;
    case 8:
      console.log('Setting planet to Pluto');
      camera.position.set(distPluto, 0, 32);
      controls.target.set(distPluto, 0, 0);
      break;
  }
  // stars.position.set(camera.position.x, camera.position.y, camera.position.z);
  controls.update();
}

function init() {
  // Set up main camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, 32);

  // Initialise scene
  scene = new THREE.Scene();

  // Add lighting
  amLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
  scene.add(amLight);


  //#region Initialise textures & materials
  let loader = new THREE.TextureLoader();
  txStars = loader.load('assets/textures/star-map.jpg');
  txMercury = loader.load('assets/textures/mercury.jpg');
  txVenus = loader.load('assets/textures/venus.jpg');
  txEarth = loader.load('assets/textures/earth.jpg');
  txMars = loader.load('assets/textures/mars.jpg');
  txJupiter = loader.load('assets/textures/jupiter.jpg');
  txSaturn = loader.load('assets/textures/saturn.jpg');
  txUranus = loader.load('assets/textures/uranus.jpg');
  txNeptune = loader.load('assets/textures/neptune.jpg');
  txPluto = loader.load('assets/textures/pluto.jpg');
  
  matDebug = new THREE.LineBasicMaterial({
    color: 0xff0000
  });
  matStars = new THREE.MeshPhongMaterial({
    map: txStars
  });
  matMercury = new THREE.MeshPhongMaterial({
    map: txMercury
  });
  matVenus = new THREE.MeshPhongMaterial({
    map: txVenus
  });
  matEarth = new THREE.MeshPhongMaterial({
    map: txEarth
  });
  matMars = new THREE.MeshPhongMaterial({
    map: txMars
  });
  matJupiter = new THREE.MeshPhongMaterial({
    map: txJupiter
  });
  matSaturn = new THREE.MeshPhongMaterial({
    map: txSaturn
  });
  matUranus = new THREE.MeshPhongMaterial({
    map: txUranus
  });
  matNeptune = new THREE.MeshPhongMaterial({
    map: txNeptune
  });
  matPluto = new THREE.MeshPhongMaterial({
    map: txPluto
  });
  //#endregion

  // Add starfield to scene
  // geometry = new THREE.SphereGeometry(5000, 32, 32);
  // stars = new THREE.Mesh(geometry, matStars);
  // stars.material.side = THREE.BackSide;
  // stars.position.set(camera.position.x, camera.position.y, camera.position.z);
  // scene.add(stars);

  //#region Add planets to scene
  geometry = new THREE.SphereGeometry(6, 64, 64);
  geomDebug = new THREE.Geometry();
  geomDebug.vertices.push(new THREE.Vector3(0, -10, 0));
  geomDebug.vertices.push(new THREE.Vector3(0, 10, 0));
  
  mercury = new THREE.Mesh(geometry, matMercury);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distMercury, 0, 0);
  debugAxis.rotation.z = -0.03560472;
  debugAxis.add(mercury);
  scene.add(debugAxis);

  venus = new THREE.Mesh(geometry, matVenus);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distVenus, 0, 0);
  debugAxis.rotation.z = -0.0453786;
  debugAxis.add(venus);
  scene.add(debugAxis);

  earth = new THREE.Mesh(geometry, matEarth);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distEarth, 0, 0);
  debugAxis.rotation.z = -0.408407;
  debugAxis.add(earth);
  scene.add(debugAxis);

  mars = new THREE.Mesh(geometry, matMars);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distMars, 0, 0);
  debugAxis.rotation.z = -0.439823;
  debugAxis.add(mars);
  scene.add(debugAxis);

  jupiter = new THREE.Mesh(geometry, matJupiter);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distJupiter, 0, 0);
  debugAxis.rotation.z = -0.05462881;
  debugAxis.add(jupiter);
  scene.add(debugAxis);

  saturn = new THREE.Mesh(geometry, matSaturn);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distSaturn, 0, 0);
  debugAxis.rotation.z = -0.4660029;
  debugAxis.add(saturn);
  scene.add(debugAxis);

  uranus = new THREE.Mesh(geometry, matUranus);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distUranus, 0, 0);
  debugAxis.rotation.z = -1.434661;
  debugAxis.add(uranus);
  scene.add(debugAxis);

  neptune = new THREE.Mesh(geometry, matNeptune);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distNeptune, 0, 0);
  debugAxis.rotation.z = -0.4939282;
  debugAxis.add(neptune);
  scene.add(debugAxis);

  pluto = new THREE.Mesh(geometry, matPluto);
  debugAxis = new THREE.Line(geomDebug, matDebug);
  debugAxis.position.set(distPluto, 0, 0);
  debugAxis.rotation.z = -1.003564;
  debugAxis.add(pluto);
  scene.add(debugAxis);
  //#endregion
  
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add orbit controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 7;
  controls.maxDistance = 90;
  controls.target.set(distMercury, 0, 0);
}

function animate() {
  requestAnimationFrame(animate);
  mercury.rotateY(0.01);
  venus.rotateY(0.01);
  earth.rotateY(0.01);
  mars.rotateY(0.01);
  jupiter.rotateY(0.01);
  saturn.rotateY(0.01);
  uranus.rotateY(0.01);
  neptune.rotateY(0.01);
  pluto.rotateY(0.01);
  renderer.render(scene, camera);
}

init();
animate();