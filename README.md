# PlanetaryAR

[![Codeship](https://img.shields.io/codeship/d6c1ddd0-16a3-0132-5f85-2e35c05e22b1.svg)](https://app.codeship.com/projects/208744)

## Overview
[PlanetaryAR](http://codemacabre.com/prj/planetaryar/) is an AR / WebVR web app, built using [A-Frame](https://a-frame.io/) and [AR.js](https://github.com/jeromeetienne/AR.js), featuring 3D maps of planetary bodies.

## Usage
PlanetaryAR can be run as a local webpage. For development it is faster to run a local server:
+ Ensure you have [Node.js](https://nodejs.org/) installed
+ From the command-line, `cd` to the `planetaryar` directory
+ Run `npm start`. If your default browser doesn't open automatically, open `localhost:3000` in your browser of choice.

## Resources
Planetary basemaps have been taken from the following locations:
+ Mars: [USGS](https://astrogeology.usgs.gov/search/map/Mars/Viking/MDIM21/Mars_Viking_MDIM21_ClrMosaic_global_232m) (using data from NASA's [Viking](https://www.nasa.gov/mission_pages/viking) mission)
+ Mercury: [USGS](https://astrogeology.usgs.gov/search/map/Mercury/Messenger/Global/Mercury_MESSENGER_MDIS_Basemap_BDR_Mosaic_Global_166m) (using data from NASA's [MESSENGER](https://www.nasa.gov/mission_pages/messenger/main/index.html) mission)
+ Pluto: [NASA](https://www.nasa.gov/image-feature/pluto-global-color-map) (using data from NASA's [New Horizons](https://www.nasa.gov/mission_pages/newhorizons/main/index.html) mission)
+ Venus: [USGS](https://astrogeology.usgs.gov/search/details/Venus/Magellan/Colorized/Venus_Magellan_C3-MDIR_Colorized_Global_Mosaic_4641m) (using data from NASA's [Magellan](http://solarsystem.nasa.gov/missions/magellan) mission)

## License
PlanetaryAR is open source, licensed under the [MIT license](https://github.com/CodeMacabre/marsar/blob/master/LICENSE.md).
