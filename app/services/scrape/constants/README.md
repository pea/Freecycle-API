a = document.getElementById('uk_group_list').getElementsByTagName("a")
x = []
Object.keys(a).forEach(function(key) { x.push( a[key].pathname.substring(1) ) } )
JSON.stringify(x)

["BarkingandDagenham_freecycle", "freecyclebarnet", "BexleyUK", "BrentUK", "BromleyUK", "HampsteadUK", "kentishtown_freecycle", "camdensouth_freecycle", "CityOfLondon", "Croydon-Freecycle", "EalingUK", "enfield_freecycle", "Feltham-Bedfont-Hanworth-Freecycle", "FreecycleGreenwich", "HackneyUK", "hammersmithandfulhamfreecycle", "HaringeyUK", "HarrowUK", "Havering_freecycle", "hillingdonfreecycle", "HounslowCentralNorthandEast-Freecycle", "Islington-East-Freecycle", "Islington-North-Freecycle", "Islington-South-Freecycle", "islington-west-freecycle", "KensingtonandChelseaFreecycle", "freecycle-kingston", "LambethUK", "LewishamUK", "mertonfreecycle", "MuseumFreecycleUK", "freecycle-newham", "freecycle_redbridge", "richmonduponthamesfreecycle", "southwark-freecycle", "SuttonUK", "towerhamletsfreecycle", "FreecycleWalthamForest", "WandsworthUK", "westminsterukfreecycle"]
