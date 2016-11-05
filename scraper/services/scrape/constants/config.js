exports.freecycle = {
  url: 'https://groups.freecycle.org/group/',
  groups1: ['hammersmithandfulhamfreecycle'],
  groups2: [
            'LambethUK',
            'WandsworthUK',
            'KensingtonandChelseaFreecycle',
            'CityOfLondon',
            'SuttonUK',
            'westminsterukfreecycle',
            'freecycle-kingston',
            'hammersmithandfulhamfreecycle'
          ],
  groups: ["BarkingandDagenham_freecycle","freecyclebarnet","BexleyUK", "BrentUK", "BromleyUK", "HampsteadUK", "kentishtown_freecycle", "camdensouth_freecycle", "CityOfLondon", "Croydon-Freecycle", "EalingUK", "enfield_freecycle", "Feltham-Bedfont-Hanworth-Freecycle", "FreecycleGreenwich", "HackneyUK", "hammersmithandfulhamfreecycle", "HaringeyUK", "HarrowUK", "Havering_freecycle", "hillingdonfreecycle", "HounslowCentralNorthandEast-Freecycle", "Islington-East-Freecycle", "Islington-North-Freecycle", "Islington-South-Freecycle","islington-west-freecycle", "KensingtonandChelseaFreecycle", "freecycle-kingston", "LambethUK", "LewishamUK", "mertonfreecycle", "MuseumFreecycleUK", "freecycle-newham", "freecycle_redbridge", "richmonduponthamesfreecycle", "southwark-freecycle", "SuttonUK", "towerhamletsfreecycle", "FreecycleWalthamForest","WandsworthUK","westminsterukfreecycle","AlderneyUK","AndoverFreecycle","ascot-freecycle","Ash-cum-RidleyUK","AshfordUK","aylesbury_freecycle","banbury_Freecycle","BansteadFreecycle","BasingstokeFreecycle","bexhillfreecycle","BicesterUK","freecyclebognor","BordonAltonPetersfieldUK","bracknell-forest-freecycle","freecyclebrighton","BuckinghamUK","FreecycleBurgessHill","burwash-freecycle","canterburyfreecycle","caterhamUK","freecycle_Chatham","CherwellValleyFreeCycle","ChichesterUK","ChilternFreecycle","chippyfreecycle","CranbrookUK","CrawleyUK","CrowboroughUK","DartfordUK_Freecycle","DorkingUK","DoverFreecycle","eastgrinstead","eastbourne_freecycle","EastleighUK","Elmbridge_Freecycle","Epsom","fareham_freecycle","Farnborough_AldershotUK","Farnham","FavershamUK","freecyclefolkestone","Gillinghamfreecycle","godalmingUK","GosportUK","Gravesend_Freecycle","guernseyfreecycle","guildfordfreecycle","HastingsUK","HavantFreecycle","haywardsheathfreecycle","henleyonthames-freecycle","high_wycombe_freecycle","HooPeninsulaUK","HookHart","HorshamUK","Freecycle-Hove","sheppeyfreecycle","IWFreecycle","JerseyUK","freecyclelancing","LeatherheadUK","freecyclelewesdistrict","LittlehamptonUK","MaidstoneUK","MarlowUK","MidhurstUK","MiltonKeynesUK","newforesteast-freecycle","NewForestNorth","NewForestWestUK","newburyfreecycle","OlneyUK","OxfordUK","OxtedUK","PaddockWood","PortsladeUK","Portsmouth_Freecycle","ReadingUK","ReigateUK","romseyfreecycle","runnymede_freecycle","Rye-EasternRother-UK","freecycle-sevenoaks","sittingbourne","sloughfreecycle","SnodlandUK","southamptonfreecycle","SpelthorneUK","Storrington","freecyclestrood","SurreyHeathUK","Swanley","Tadley","Thanet_freecycle","TonbridgeFreecycle","FreecycleTunbridgeWells","UckfieldFreecycle","ValeWhiteHorseUK","Walderslade_Freecycle","WallingfordUK","westkingsdown_freecycle","WheatleyThameUK","Whitstable","WinchesterUK","windsor-maidenhead-freecycle","WitneyUK","wokingfreecycle","WokinghamFreecycle","WoodleyFreecycle","worthing-freecycle"],
  filter: '/posts/offer?page=1&resultsperpage=10&showall=off&include_offers=off&include_wanteds=off&include_receiveds=off&include_takens=off'
};

exports.google = {
  geolocationURL: 'https://maps.googleapis.com/maps/api/geocode/json'
};

exports.db = {
  url: process.env.MONGODB_URL
};