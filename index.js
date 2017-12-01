var doors = [
  ["the central market stands", "southeast", "the bus station"],
  ["the milk pavilion", "west", "the central market stands"],
  ["the empty pavilion", "southwest", "the milk pavilion"],
  ["the vegetable pavilion", "southwest", "the empty pavilion"],
  ["the fish pavilion", "southwest", "the vegetable pavilion"],
  ["the Uzbek restaurant", "south", "the fish pavilion"],
  ["the Red Cross social center", "east", "the Uzbek restaurant"],
  ["the central market shoemaker", "northeast", "the central market stands"],
  ["\"the pan\"", "northeast", "the central market shoemaker"],
  ["the Vera Muhinas memorial house", "east", "\"the pan\""],
  ["the Dzirnavu-Turgeņeva crossing", "northeast", "the Vera Muhinas memorial house"],
  ["the Vera Muhinas memorial house", "northeast", "the Orthodox Church exterior"],
  ["the Abrenes Street bus station", "east", "the Dzirnavu-Turgeņeva crossing"],
  ["Latgalite", "south", "the Abrenes Street bus station"],
  ["Dagdas Street", "south", "Latgalite"],
  ["Dagdas Street", "southwest", "the synagogue memorial"],
  ["Dagdas Street", "north", "the tunnel"],
  ["the synagogue memorial", "west", "Latgalite"],
  ["Deficits", "northwest", "Goodwill Studio"],
  ["Banuzis", "in", "Gogoļa iela 15"],
  ["Gogoļa iela 15", "northwest", "Deficits"],
  ["Goodwill Studio", "northwest", "the synagogue memorial"],
  ["the Orthodox Church exterior", "northwest", "the soy shop"],
  ["the Orthodox Church exterior", "southeast", "\"the pan\""],
  ["the soy shop", "northwest", "Gogoļa iela 15"],
  ["the Science Academy", "southwest", "the Orthodox Church exterior"],
  ["the Science Academy", "north", "Puškina-Gogoļa"],
  ["Sviesta pika", "in", "Puškina-Gogoļa"],
  ["the Free Riga neighborhood residence", "southwest", "the Science Academy"],
  ["the industrial goods market", "northwest", "the Free Riga neighborhood residence"],
  ["the night market", "northwest", "the industrial goods market"],
  ["the central market stands", "northwest", "the night market"],
  ["the Red Cross social center", "south", "the night market"],
  ["Spikeri", "south", "the Red Cross social center"],
  ["the Spikeri promenade", "south", "Spikeri"],
  ["the Daugava swimming spot", "northwest", "the Spikeri promenade"],
  ["the ghetto museum", "northeast", "the Spikeri promenade"],
  ["the ghetto museum", "southwest", "the fire depot"],
  ["the fire depot", "west", "the green field"],
  ["the green field", "south", "the Free Riga neighborhood residence"],
  ["the green field", "southwest", "the Pushkin Street print shop"],
  ["Pushkin 11", "northwest", "the Pushkin Street print shop"],
  ["Pushkin 11", "southwest", "Puškina-Gogoļa"],
  ["the Hummus Team", "southeast", "Puškina-Gogoļa"],
  ["Hanza Hotel", "southeast", "the Hummus Team"],
  ["the book shops \"Janus\" and \"Gora\"", "southwest", "the Jesus Church"],
  ["\"Agroprojekts\"", "south", "the book shops \"Janus\" and \"Gora\""],
  ["\"Idioma\"", "south", "the green field"],
  ["the Riverside Gallery", "southeast", "the ghetto museum"],
  ["the Riverside Gallery", "w/e", "the fire depot"],
  ["Maza Krasta Street", "east", "\"Agroprojekts\""],
  ["Café Rosemary", "in", "Maskavas iela 50"],
  ["Maskavas iela 50", "northeast", "\"Agroprojekts\""],
  ["Speka Street", "east", "Maza Krasta Street"],
  ["Speka Street", "south", "Maskavas iela 50"],
  ["the tunnel", "east", "Speka Street"],
  ["Vingruma Club parking", "north", "Maskavas iela 50"],
  ["Vingruma Club parking", "southeast", "the Jesus Church"],
  ["Vingruma Club", "in", "Vingruma Club parking"],
  ["the fire depot", "southwest", "the Free Riga neighborhood residence"],
  ["the fire depot", "southeast", "the Red Cross social center"],
  ["Stadions", "southeast", "Maza Krasta Street"],
  ["Stadions", "southwest", "Speka Street"],
  ["the tunnel", "north", "Stadions"],
  ["the fire depot", "northwest", "\"Idioma\""],
  ["\"Idioma\"", "northwest", "Maskavas iela 50"],
  ["the Jesus Church", "south", "Hanza Hotel"],
  ["the Jesus Church", "southwest", "the Belarusian embassy"],
  ["the Belarusian embassy", "southwest", "Goodwill Studio"],
  ["the Orthodox Church", "in", "the Orthodox Church exterior"]
]

var spots = {
  TheCentralMarketStands: {
    id: "e430a7fc80a01d373cbf61a62fdf248f3e863276ec3e7cf0718bce7832366c7b",
    gps: [56.94433, 24.11642],
  },
  TheNightMarket: {
    id: "ebb3d0c36c74462067e6412016f4525e8972e751e3d25e445c7f71c42d611de5",
    gps: [56.94348, 24.11753],
  },
  TheFreeRigaNeighborhoodResidence: {
    id: "98a66494a37e7be09d745676ef190fc144dce12c7baa4ec4c67080984cd4680d",
    gps: [56.94233, 24.12010],
  },
  Banuzis_Exterior: {
    id: "6f71d3a119e107cf507a4e3a05e2417f0d6daf2227a705cac755aedad00d6ab4",
    gps: [56.94317, 24.12433],
  },
  Banuzis: {
    id: "d5d38bd9b28e6f1cd728bd04b5e9db364056c0aa790e06bc7fa21e81a591ebc2",
    gps: [56.94317, 24.12433],
  },
  TheScienceAcademy: {
    id: "6b254751e4f0be9515a460762daeb9007469b61667793e714e9bade62288ce36",
    gps: [56.94356, 24.12101],
  },
  TheSynagogueMemorial: {
    id: "d4c5672b8ba26ec282676be3adfc051c775e4a94f816f9fa64f99f6b69eaee7d",
    gps: [56.94269, 24.12632],
  },
  TheJesusChurch: {
    id: "104bd5a782a0b784a863b7577c6c07703f816a121cdae641585cc1f2bdba8ca6",
    gps: [56.94183, 24.12400],
  },
  TheBookShopsJanusAndGora: {
    id: "309bbaee44abdede91b689328c8722d03ff2185eb38aa4bf1463a88836a73f61",
    gps: [56.94108, 24.12280],
  },
  SviestaPika_Exterior: {
    id: "01dbb1419c61ae69015e1ca6d027ea0ee0bf376bdacee71ba61604ef5038f104",
    gps: [56.94232, 24.12171],
  },
  SviestaPika: {
    id: "617d3be54a49c0159967d14e8e4cf7ed9d5aaddd8394ac24c32f2dbac17aa167",
    gps: [56.94232, 24.12171],
  },
  Deficits: {
    id: "72a3f7c6d4487513ca521b7f6f159c77cc75b9995602edda7490ea14f7406166",
    gps: [56.94309, 24.12450],
  },
  TheMilkPavilion: {
    id: "0538876c89055db0b2fd7f6ffdd4e54b870d314c42621518eadc91f729319712",
    gps: [56.94420, 24.11600],
  },
  TheFishPavilion: {
    id: "f689c61ce4936b2e44cbb26f19c362a26675e600af8ed85829913bf8470a01dc",
    gps: [56.94336, 24.11382],
  },
  TheVegetablePavilion: {
    id: "9ed815b635da1a885f68d8e289535d35afbdceb930bbd76456bf0950d8847a56",
    gps: [56.94362, 24.11441],
  },
  OutsideTheUzbekPlace: {
    id: "ae245ece7da6e3d247aad8dd26820383cb9e1049177d1fbe4d4d198b6b691dc7",
    gps: [56.94304, 24.11411],
  },
  TheEmptyPavilion: {
    id: "88d0a1019e311b66977a48f59b9c202eeeedd2b180f6a23d02ff9f1185612e2e",
    gps: [56.94381, 24.11519],
  },
  TheBusStation: {
    id: "199db25cc396b605b3bf78e0b0179709d8e9b13384c790cb82ce4d584cdd2017",
    gps: [56.94478, 24.11333],
  },
  Agroprojekts: {
    id: "6b9e84ed856d666220c8a8b98dc88501eb241d858c6e8dc82a0455dcc9984fb2",
    gps: [56.93965, 24.12275],
  },
  CafeRosemary_Exterior: {
    id: "146197ac1d66f1612b2e3d72c3541f5804c82b3cee0f29fd2f9ce9f50909fd75",
    gps: [56.93980, 24.12587],
  },
  CafeRosemary: {
    id: "146197ac1d66f1612b2e3d72c3541f5804c82b3cee0f29fd2f9ce9f50909fd75",
    gps: [56.93980, 24.12587],
  },
  DagdasStreet: {
    id: "cbeaf4f7269a774f823e66a31c40048106435eff0bcc784e674fd68cd05ad08d",
    gps: [56.94147, 24.12937],
  },
  GoodwillStudio: {
    id: "07239d44f2a4597908e2386ee478e4d1c510ed61fe1a892ae28588a3db1c6f51",
    gps: [56.94273, 24.12459],
  },
  Idioma: {
    id: "088e1cb0520c9d5f6196681ea13c6e67bc4702bac571f2a8a4a7bf5143eea739",
    gps: [56.94136, 24.11967],
  },
  Latgalite: {
    id: "ef35dc0c58bfea4a478400d1be56647c3e6c602a209f8019ab7b3b4e40036e1e",
    gps: [56.94262, 24.12897],
  },
  MazaKrastaStreet: {
    id: "cdcadd298bbb533bcd6b1bda53f0e9b27afd35129e57311e608c8d4d384c3a30",
    gps: [56.93930, 24.12454],
  },
  Pushkin11: {
    id: "957c14feac9afaa0fd3439572d396ded1e9486fc61fe4126e313d0a01b7fb9a5",
    gps: [56.94202, 24.12103],
  },
  SpekaStreet: {
    id: "6e7d5eace8208cd97898b439f1b2193b91d266585ca8e757b73858bca0270b70",
    gps: [56.93962, 24.12666],
  },
  Spikeri: {
    id: "e2014fea5a29e9b99ebb700a6a524f665c38afafa4da9c212953340bcc4d5d6a",
    gps: [56.94211, 24.11560],
  },
  TheAbrenesStreetBusStation: {
    id: "30bd1448d625bed9c44d07419aa1ac5d900da252bed535744a6970736be1b595",
    gps: [56.94597, 24.13090],
  },
  TheCentralMarketShoemaker: {
    id: "c18c86dc7aa695680c7158046b91b5ae814b87ee1af3f1e95e47777f4302cd9f",
    gps: [56.94461, 24.11880],
  },
  TheDaugavaSwimmingSpot: {
    id: "bafe943042a861fa85c382a92d3f14ea55b5707f932aced7328b6fab5d9ec12f",
    gps: [56.94265, 24.11171],
  },
  TheGhettoMuseum: {
    id: "9edf31a3a2111556a1b457964b3bdfa77f807719a2a095f5335a3fcf9562ccf6",
    gps: [56.94110, 24.11703],
  },
  TheGreenField: {
    id: "ef08484983a2f8b5312d8432f153839d8e91ba5d7652cdb968e76fc0ab66532b",
    gps: [56.94174, 24.12033],
  },
  TheOrthodoxChurch_Exterior: {
    id: "0cfee4810a97563b5bf6aeb293929fa8a4c2d7dc8bad3089fbeb9c56f0229672",
    gps: [56.94398, 24.12308],
  },
  TheOrthodoxChurch: {
    id: "1e226a1cd9ba72f230bf0ec6d0d15ff1d15e7c9f7c68ff414c019c8c61b66048",
    gps: [56.94398, 24.12308],
  },
  ThePan: {
    id: "c56a143ab7d60e761e3eef5f211ccaf43c4aefa2fc3944981f5020730e9ffb42",
    gps: [56.94581, 24.12068],
  },
  ThePushkinStreetPrintShop: {
    id: "76ac0ffd9a3da3c96df9a4fc7ff4124cb39f165032f312b609613411d8c72452",
    gps: [56.94154, 24.12129],
  },
  TheRedCrossSocialCenter: {
    id: "84267a2f80b4000a53565de88ce0e3b93e280f1fce48b8e84618fea1f93800e0",
    gps: [56.94249, 24.11656],
  },
  TheRiversideGallery: {
    id: "aff1c0954053c9f0a702530eab89fe156ed6157d88ed26927ddbacecf529e7cb",
    gps: [56.94064, 24.11788],
  },
  TheSoyShop: {
    id: "9d4fa6597f1ce476dd10327467e22ccae43d937b562c84b27b4849e5d4db14fd",
    gps: [56.94350, 24.12365],
  },
  TheSpikeriPromenade: {
    id: "e7c239b2af4e0a98c48ef4f4d30cbb8d3f2231bdf5223e3a0fc6bd2f129a1157",
    gps: [56.94141, 24.11468],
  },
  TheTunnel: {
    id: "66c0ba38ff0150793cf1097ef09ecd8eb4a0f317006fff40e02c1dfe3c1c8ff7",
    gps: [56.93923, 24.12852],
  },
  TheVeraMuhinasMemorialHouse: {
    id: "ddbc9b681e36ec53f8effdc3e3657934ba9449ed141e2b0f1b9bb592311602fe",
    gps: [56.94515, 24.12429],
  },
  VingrumaClub_Exterior: {
    id: "a87e849b4832d8d55d716a33cbe74efeed522efdad36a3bbb69f2a1fc8efb7db",
    gps: [56.94116, 24.12716],
  },
  VingrumaClub: {
    id: "59ceccb7b9cb1baf7afc4fb064ade8d7a5c7329246f0776a14deba52076a54a9",
    gps: [56.94116, 24.12715],
  },
  TheIndustrialGoodsMarket: {
    id: "35ea29117d61eddc4161890853e2064202d1d13813452e5da94b9c03d3a9c384",
    gps: [56.94288, 24.11910],
  },
  TheHummusTeam: {
    id: "c3d4e63e638ba6dd461c6497ebe8f4a40c803a8c4a2fac00c3f3c82ef31e1298",
    gps: [56.94182, 24.12281],
  },
  DzirnavuTurgeneva: {
    id: "411fe05919a18bdd215949784093a2d1f3146f2598a917661188ad9db247242c",
    gps: [56.94596, 24.12570],
  },
  // RedHouse: {
  //   id: "67a34e6894df0bee39f7e70686c7aa778f0c78f981d9fbae7265ac268a1bb820",
  //   gps: [56.93974, 24.12210],
  // },
  FireStation: {
    id: "0f6087a6a7c5620b09f929bbe575ec0f68e48233f7a90c907c29d9853670f5ab",
    gps: [56.94170, 24.11899],
  },
  BelarusEmbassy: {
    id: "0239ae90fae92647f249d20e802d8c2f78373edcbcec70e989217df0c2f29c38",
    gps: [56.94198, 24.12410],
  },
  Stadions: {
    id: "f4cbc22f5d600d631ce85ed3a260f947a0560fcfda4de86ca695cf588ebab2fc",
    gps: [56.93888, 24.12845],
  },
  HanzaHotel: {
    id: "c24f31ebb8184efde4d5431ece5c8b8539c150b596bf7c6a724241adb411938f",
    gps: [56.94195, 24.12332],
  },
}

spots.Agroprojekts.en = "\"Agroprojekts\""
spots.Agroprojekts.lv = "Agroprojekts"
spots.Agroprojekts.ru = "Агропроект"
spots.Banuzis.en = "Banuzis"
spots.Banuzis.lv = "Bānūzis"
spots.Banuzis.ru = "Кафе-бар Bānūzis"
spots.Banuzis_Exterior.en = "Gogoļa iela 15"
spots.Banuzis_Exterior.lv = "Gogoļa iela 15"
spots.Banuzis_Exterior.ru = "Gogoļa iela 15"
spots.BelarusEmbassy.en = "The Belarusian embassy"
spots.BelarusEmbassy.lv = "Baltkrievijas pārstāvniecība"
spots.BelarusEmbassy.ru = "Белорусское посольство"
spots.CafeRosemary.en = "Café Rosemary"
spots.CafeRosemary.lv = "Kafejnīca Rozmarīns"
spots.CafeRosemary.ru = "Кафе «Розмарин»"
spots.CafeRosemary_Exterior.en = "Maskavas iela 50"
spots.CafeRosemary_Exterior.lv = "Maskavas iela 50"
spots.CafeRosemary_Exterior.ru = "Maskavas iela 50"
spots.DagdasStreet.en = "Dagdas Street"
spots.DagdasStreet.lv = "Dagdas iela"
spots.DagdasStreet.ru = "Улица дагдас"
spots.Deficits.en = "Deficits"
spots.Deficits.lv = "Deficīts"
spots.Deficits.ru = "Дефицит"
spots.DzirnavuTurgeneva.en = "The Dzirnavu-Turgeņeva crossing"
spots.DzirnavuTurgeneva.lv = "Dzirnavu/Turgeņeva"
spots.DzirnavuTurgeneva.ru = "Dzirnavu/Turgeņeva"
spots.FireStation.en = "The fire depot"
spots.FireStation.lv = "Ugunsdzēsēju depo"
spots.FireStation.ru = "Пожарное депо"
spots.GoodwillStudio.en = "Goodwill Studio"
spots.GoodwillStudio.lv = "Goodwill Studio"
spots.GoodwillStudio.ru = "Goodwill Studio"
spots.HanzaHotel.en = "Hanza Hotel"
spots.HanzaHotel.lv = "Hanza Hotel"
spots.HanzaHotel.ru = "Hanza Hotel"
spots.Idioma.en = "\"Idioma\""
spots.Idioma.lv = "Veikals \"Idioma\""
spots.Idioma.ru = "Магазин «Идиома»"
spots.Latgalite.en = "Latgalite"
spots.Latgalite.lv = "Latgalīte"
spots.Latgalite.ru = "Блошиный рынок"
spots.MazaKrastaStreet.en = "Maza Krasta Street"
spots.MazaKrastaStreet.lv = "Mazā Krasta iela"
spots.MazaKrastaStreet.ru = "Улица Маза Краста"
spots.OutsideTheUzbekPlace.en = "The Uzbek restaurant"
spots.OutsideTheUzbekPlace.lv = "Uzbek restorans"
spots.OutsideTheUzbekPlace.ru = "Узбекский ресторан"
spots.Pushkin11.en = "Pushkin 11"
spots.Pushkin11.lv = "Puškina iela 11"
spots.Pushkin11.ru = "Пушкина 11"
// spots.RedHouse.en = "The red house"
spots.SpekaStreet.en = "Speka Street"
spots.SpekaStreet.lv = "Speķa iela"
spots.SpekaStreet.ru = "Улица Спекя"
spots.Spikeri.en = "Spikeri"
spots.Spikeri.lv = "Spīķeri"
spots.Spikeri.ru = "Спикери"
spots.Stadions.en = "Stadions"
spots.Stadions.lv = "Stadions"
spots.Stadions.ru = "Стадион"
spots.SviestaPika.en = "Sviesta pika"
spots.SviestaPika.lv = "Sviesta pika"
spots.SviestaPika.ru = "Кафе Sviesta pika"
spots.SviestaPika_Exterior.en = "Puškina-Gogoļa"
spots.SviestaPika_Exterior.lv = "Puškina-Gogoļa"
spots.SviestaPika_Exterior.ru = "Puškina-Gogoļa"
spots.TheAbrenesStreetBusStation.en = "The Abrenes Street bus station"
spots.TheAbrenesStreetBusStation.lv = "Abrenes ielas pieturvieta"
spots.TheAbrenesStreetBusStation.ru = "Автобусный парк на улице Абренес"
spots.TheBookShopsJanusAndGora.en = "The book shops \"Janus\" and \"Gora\""
spots.TheBookShopsJanusAndGora.lv = "Grāmatnīcas Janus un Gora"
spots.TheBookShopsJanusAndGora.ru = "Книжные магазины Janus и Gora"
spots.TheBusStation.en = "The bus station"
spots.TheBusStation.lv = "Autoosta"
spots.TheBusStation.ru = "Автостанция"
spots.TheCentralMarketShoemaker.en = "The central market shoemaker"
spots.TheCentralMarketShoemaker.lv = "Kurpnieka darbnīca"
spots.TheCentralMarketShoemaker.ru = "Обувная мастерская"
spots.TheCentralMarketStands.en = "The central market stands"
spots.TheCentralMarketStands.lv = "Centrāltirgus"
spots.TheCentralMarketStands.ru = "Центральный рынок"
spots.TheDaugavaSwimmingSpot.en = "The Daugava swimming spot"
spots.TheDaugavaSwimmingSpot.lv = "Peldvieta Nr. 1"
spots.TheDaugavaSwimmingSpot.ru = "Место для купания №1"
spots.TheEmptyPavilion.en = "The empty pavilion"
spots.TheEmptyPavilion.lv = "Gastronomijas paviljons"
spots.TheEmptyPavilion.ru = "Гастрономический павильон"
spots.TheFishPavilion.en = "The fish pavilion"
spots.TheFishPavilion.lv = "Zivju paviljons"
spots.TheFishPavilion.ru = "Рыбный павильон"
spots.TheFreeRigaNeighborhoodResidence.en = "The Free Riga neighborhood residence"
spots.TheFreeRigaNeighborhoodResidence.lv = "Turgeņeva iela 17"
spots.TheFreeRigaNeighborhoodResidence.ru = "Резиденция Free Riga на Тургенева 17"
spots.TheGhettoMuseum.en = "The ghetto museum"
spots.TheGhettoMuseum.lv = "Geto muzejs"
spots.TheGhettoMuseum.ru = "Гетто музей"
spots.TheGreenField.en = "The green field"
spots.TheGreenField.lv = "Zaļais laikums"
spots.TheGreenField.ru = "Зеленое поле"
spots.TheHummusTeam.en = "The Hummus Team"
spots.TheHummusTeam.lv = "Humusa komanda"
spots.TheHummusTeam.ru = "Команда «Хумус»"
spots.TheIndustrialGoodsMarket.en = "The industrial goods market"
spots.TheIndustrialGoodsMarket.lv = "Rūpniecības preču tirgus"
spots.TheIndustrialGoodsMarket.ru = "Промтоварный рынок"
spots.TheJesusChurch.en = "The Jesus Church"
spots.TheJesusChurch.lv = "Jēzus baznīca"
spots.TheJesusChurch.ru = "Церковь Иисуса"
spots.TheMilkPavilion.en = "The milk pavilion"
spots.TheMilkPavilion.lv = "Piena paviljons"
spots.TheMilkPavilion.ru = "Молочный павильон"
spots.TheNightMarket.en = "The night market"
spots.TheNightMarket.lv = "Nakts tirgus"
spots.TheNightMarket.ru = "Ночной рынок"
spots.TheOrthodoxChurch.en = "The Orthodox Church"
spots.TheOrthodoxChurch.lv = "Vissvētās Dievmātes Pasludināšanas pareizticīgo baznīca"
spots.TheOrthodoxChurch.ru = "Церковь Благовещения Пресвятой Богородицы"
spots.TheOrthodoxChurch_Exterior.en = "The Orthodox Church exterior"
spots.TheOrthodoxChurch_Exterior.lv = "Turgeņeva-Gogoļa"
spots.TheOrthodoxChurch_Exterior.ru = "Turgeņeva-Gogoļa"
spots.ThePan.en = "\"The pan\""
spots.ThePan.lv = "Panna"
spots.ThePan.ru = "Сковородка"
spots.ThePushkinStreetPrintShop.en = "The Pushkin Street print shop"
spots.ThePushkinStreetPrintShop.lv = "Tipogrāfija Puškina iela 12"
spots.ThePushkinStreetPrintShop.ru = "Типография на ул. Пушкина 12"
spots.TheRedCrossSocialCenter.en = "The Red Cross social center"
spots.TheRedCrossSocialCenter.lv = "Sarkanā Krusta sociālais centrs Gaiziņš"
spots.TheRedCrossSocialCenter.ru = "Социальный центр Красного Креста «Гайзиньш»"
spots.TheRiversideGallery.en = "The Riverside Gallery"
spots.TheRiversideGallery.lv = "Krasta darbnīcas"
spots.TheRiversideGallery.ru = "Мастерские на ул. Краста"
spots.TheScienceAcademy.en = "The Science Academy"
spots.TheScienceAcademy.lv = "Latvijas Zinātņu Akadēmija"
spots.TheScienceAcademy.ru = "Академия наук"
spots.TheSoyShop.en = "The soy shop"
spots.TheSoyShop.lv = "Sojas veikals"
spots.TheSoyShop.ru = "«Продукты из сои»"
spots.TheSpikeriPromenade.en = "The Spikeri promenade"
spots.TheSpikeriPromenade.lv = "Spīķeru promenāde"
spots.TheSpikeriPromenade.ru = "Променад спикери"
spots.TheSynagogueMemorial.en = "The synagogue memorial"
spots.TheSynagogueMemorial.lv = "Rīgas Lielās Horālās sinagogas memoriāls"
spots.TheSynagogueMemorial.ru = "Мемориал Большой Хоральной Синагоги"
spots.TheTunnel.en = "The tunnel"
spots.TheTunnel.lv = "Tunelītis"
spots.TheTunnel.ru = "Туннельчик"
spots.TheVegetablePavilion.en = "The vegetable pavilion"
spots.TheVegetablePavilion.lv = "Sakņu paviljons"
spots.TheVegetablePavilion.ru = "Овощной павильон"
spots.TheVeraMuhinasMemorialHouse.en = "The Vera Muhinas memorial house"
spots.TheVeraMuhinasMemorialHouse.lv = "Veras Muhinas memoriālais dzīvoklis"
spots.TheVeraMuhinasMemorialHouse.ru = "Мемориальный музей им. Веры Мухиной"
spots.VingrumaClub.en = "Vingruma Club"
spots.VingrumaClub.lv = "Vingruma klubs"
spots.VingrumaClub.ru = "Vingruma klubs"
spots.VingrumaClub_Exterior.en = "Vingruma Club parking"
spots.VingrumaClub_Exterior.lv = "Vingruma klubs autostāvvieta"
spots.VingrumaClub_Exterior.ru = "Vingruma klubs автостоянка"

spotsByEnglish = {}
Object.keys(spots).forEach(function (k) {
  spotsByEnglish[spots[k].en.toLowerCase()] = k
  spots[k].links = []
})

doors.forEach(function (x) {
  var src = spotsByEnglish[x[0].toLowerCase()]
  var dst = spotsByEnglish[x[2].toLowerCase()]
  spots[src].links.push(dst)
  spots[dst].links.push(src)
})

var styles = {
  streets: "mapbox://styles/mapbox/streets-v10",
  mbrock: "mapbox://styles/mbrock/cj695s4cb22s82sl87jt4f3hx",
  alphaStreets: "mapbox://styles/mbrock/cj6on1zks1u2s2rmeejcov8gz",
}

function startMinimap () {
  console.log(document.querySelectorAll("#map"))
  mapboxgl.accessToken = 'pk.eyJ1IjoibWJyb2NrIiwiYSI6ImNpc3c2ZzRsMzAwMXoyem8zN3dndWhqMnAifQ.OvrTplj54KtcgDmDmlQQoQ'
  var map = new mapboxgl.Map({
    container: document.querySelector("#map"),
    style: styles.mbrock,
    center: [24.11335, 56.94473],
    pitch: 20,
    bearing: 0,
    zoom: 15,
  })
  window.mymap = map

  var features = []
  
  Object.keys(spots).forEach(function (k) {
    var x = spots[k].gps
    var el = document.createElement("div")
    el.className = "marker"
    var spot = new mapboxgl.Marker(el).setLngLat([x[1], x[0]])
    spot.addTo(map)
    spots[k].marker = spot
    spot.getElement().onclick = function () { goTo(k) }
    spots[k].links.forEach(function (y) {
      features.push({
        'type': 'Feature',
        'properties': {
          'color': "#ffffff",
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [x[1], x[0]],
            [spots[y].gps[1], spots[y].gps[0]],
          ]
        }
      })
    })
  })

  console.log(features)
  
  map.on("load", function () {
    map.addLayer({
      id: "lines",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: features
        }
      },
      paint: {
        "line-color": "#ffff00",
        "line-width": 2
      }
    })
  })
  
  spots.TheBusStation.marker.getElement().classList.toggle("active", true)
}

function flyTo (k) {
  Object.values(spots).forEach(function(spot) {
    spot.marker.getElement().classList.toggle("active", false)
  })
  spots[k].marker.getElement().classList.toggle("active", true)
  var x = spots[k].gps[0]
  var y = spots[k].gps[1]
  setTimeout(
    function () {
      mymap.resize()
      setTimeout(
        function () {
          mymap.flyTo({
            center: [y + 0.001, x - 0.001],
            speed: 1,
            pitch: 30,
            bearing: 0,
            zoom: 15,
          })
        }, 20
      )
    }, 20
  )
}

startMinimap()

var lang

function speak (k) {
  lang = k
  document.querySelector("html").setAttribute("lang", k)
}

var currentSpot

function goTo (k) {
  currentSpot = k
  
  document.querySelector("video").src = (
    "https://d2ayo97fkylvct.cloudfront.net/" +
      spots[k].id +
      "/720p-vp9/clip.webm"
  )

  document.querySelector("h1").innerText = spots[k][lang]
  var box = document.querySelector("#story")

  var article = document.querySelector("article[data-spot=" + k + "]")
  if (article) {
    box.innerHTML = article.innerHTML
  } else {
    box.innerHTML = spots[k][lang] + "."
  }

  var menu = document.querySelector("nav")
  menu.innerHTML = ""
  
  if (spots[k].links.length > 0) {
    spots[k].links.forEach(function (linkKey) {
      var link = document.createElement("BUTTON")
      link.innerText = spots[linkKey][lang]
      link.onclick = function () { goTo(linkKey) }
      menu.appendChild(link)
    })
  }
  
  flyTo(k)
}

document.querySelector("select").onchange = function(x) {
  speak(x.target.value)
  goTo(currentSpot)
}

speak("lv")
goTo("TheBusStation")
