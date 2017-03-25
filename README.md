# PlanetaryAR

[![Codeship build](https://img.shields.io/codeship/93d279e0-eeea-0134-6d5c-62b847b8d86d/master.svg)](https://app.codeship.com/projects/208744)
[![GitHub issues](https://img.shields.io/github/issues/codemacabre/planetaryar.svg)](https://github.com/codemacabre/planetaryar/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CodeMacabre/planetaryar/blob/master/LICENSE.md)

## Overview
[PlanetaryAR](http://codemacabre.com/prj/planetaryar/) is an augmented reality (AR) web app featuring 3D models of planetary bodies. The app is built using [A-Frame](https://a-frame.io/), [ARToolKit](https://artoolkit.org/) and [AR.js](https://github.com/jeromeetienne/AR.js), .

By visiting the app on a browser which supports [supports WebGL and WebRTC](http://iswebrtcreadyyet.com/) and pointing the device's camera to any of the specially-designed markers (coming soon), PlanetaryAR projects planetary bodies onto 'real-world' space.

Although primarily focused on augmented reality, PlanetaryAR also features a virtual reality (VR) variant. Eventually, PlanetaryAR will build upon these 3D models by offering a more complete map interface.

To test the AR and VR apps, visit the [links](#links) sections below.

## Usage
PlanetaryAR can be run as a local webpage. For development run a local server:
+ Ensure you have [Node.js](https://nodejs.org/) installed
+ From the command-line, navigate to the `planetaryar` directory
+ Run `npm start`. If your default browser doesn't open automatically, open `localhost:3000` in your browser of choice.

## Resources
Planetary basemaps have been taken from the following locations:
+ Mercury: [USGS](https://astrogeology.usgs.gov/search/map/Mercury/Messenger/Global/Mercury_MESSENGER_MDIS_Basemap_BDR_Mosaic_Global_166m) (using data from NASA's [MESSENGER](https://www.nasa.gov/mission_pages/messenger/main/index.html) mission)
+ Venus: [USGS](https://astrogeology.usgs.gov/search/details/Venus/Magellan/Colorized/Venus_Magellan_C3-MDIR_Colorized_Global_Mosaic_4641m) (using data from NASA's [Magellan](http://solarsystem.nasa.gov/missions/magellan) mission)
+ Earth: [NASA](https://visibleearth.nasa.gov/view_cat.php?categoryID=1484) (using data from NASA's [Terra](https://terra.nasa.gov/) satellite)
+ Mars: [USGS](https://astrogeology.usgs.gov/search/map/Mars/Viking/MDIM21/Mars_Viking_MDIM21_ClrMosaic_global_232m) (using data from NASA's [Viking](https://www.nasa.gov/mission_pages/viking) mission)
+ Pluto: [NASA](https://www.nasa.gov/image-feature/pluto-global-color-map) (using data from NASA's [New Horizons](https://www.nasa.gov/mission_pages/newhorizons/main/index.html) mission)

## Links
+ [AR App](https://codemacabre.com/prj/planetaryar/app/ar.html) (use [this marker](https://github.com/artoolkit/artoolkit5/blob/master/doc/patterns/Hiro%20pattern.pdf) to test)
+ [VR App](https://codemacabre.com/prj/planetaryar/app/vr.html)

## License
PlanetaryAR is open source, licensed under the [MIT license](https://github.com/CodeMacabre/marsar/blob/master/LICENSE.md).
