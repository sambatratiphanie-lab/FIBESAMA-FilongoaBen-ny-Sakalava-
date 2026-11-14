/* FIBESAMA: fandikana teny (MG / FR / EN). Ny teny malagasy no fototra; ity rakitra ity no mandika azy. */
(function () {
  var L = '';
  try { L = (new URLSearchParams(location.search).get('lang') || '').toLowerCase(); } catch (e) {}
  try { if (L) localStorage.setItem('fibesama-lang', L); else L = localStorage.getItem('fibesama-lang') || ''; } catch (e) {}
  if (!/^(mg|fr|en)$/.test(L)) L = 'mg';
  window.LANG = L; document.documentElement.lang = L;
  var D = {
"Hiditra": [
"Connexion",
"Sign in"
],
"Fikambanana": [
"L'association",
"Association"
],
"Fiaraha-monina": [
"Société",
"Society"
],
"Faritra": [
"Régions",
"Regions"
],
"Vaovao": [
"Actualités",
"News"
],
"Horonantsary": [
"Vidéos",
"Videos"
],
"Tantara": [
"Histoire",
"History"
],
"Vakoka": [
"Patrimoine",
"Heritage"
],
"Sary": [
"Photos",
"Photos"
],
"Fifandraisana": [
"Contact",
"Contact"
],
"Fikambanana sosialy": [
"Association sociale",
"Social association"
],
"Filongoaben'ny Sakalava eto Madagasikara": [
"Union des Sakalava de Madagascar",
"Union of the Sakalava of Madagascar"
],
"Mitahiry ny tantara, ny vakoka ary ny fomban-drazana sakalava, sady manamafy ny firaisankina sy ny fifanampiana eo amin'ny taranaka sakalava manerana an'i Madagasikara sy any ivelany.": [
"Préserver l'histoire, le patrimoine et les coutumes ancestrales sakalava, et renforcer l'unité et l'entraide entre les descendants sakalava à travers Madagascar et à l'étranger.",
"Preserving Sakalava history, heritage and ancestral customs, and strengthening unity and mutual support among Sakalava descendants across Madagascar and abroad."
],
"Fantaro ny FIBESAMA": [
"Découvrir la FIBESAMA",
"Discover FIBESAMA"
],
"Tantara sakalava": [
"Histoire sakalava",
"Sakalava history"
],
"Ao anatiny": [
"Sommaire",
"Contents"
],
"Tsindrio ny fizarana tianao hovakiana": [
"Cliquez sur la section que vous souhaitez lire",
"Click the section you want to read"
],
"Momba anay": [
"À propos",
"About us"
],
"Iza moa izahay?": [
"Qui sommes-nous ?",
"Who are we?"
],
"Ny fiaviana sy ny lalan-tantara": [
"Origines et parcours historique",
"Origins and historical path"
],
"Tanin'ny Doany sy ny ranomasina": [
"Terre des Doany et de la mer",
"Land of the Doany and the sea"
],
"Fomban-drazana sy finoana": [
"Coutumes et croyances",
"Customs and beliefs"
],
"Mpitondra": [
"Dirigeants",
"Leaders"
],
"Ampanjaka sy fifandraisana": [
"Rois et relations",
"Royals and relations"
],
"Tontolo sakalava": [
"Le monde sakalava",
"The Sakalava world"
],
"Mpanohana": [
"Partenaires",
"Sponsors"
],
"Dokam-barotra sy tambajotra": [
"Publicité et réseau",
"Advertising and network"
],
"Ny vaovao farany": [
"Les dernières actualités",
"Latest news"
],
"Vidéo sy fandaharana": [
"Vidéos et émissions",
"Videos and programmes"
],
"Andao hifandray": [
"Restons en contact",
"Let's keep in touch"
],
"Momba ny FIBESAMA": [
"À propos de la FIBESAMA",
"About FIBESAMA"
],
"Fikambanana iray, foko iray, fo iray": [
"Une association, un peuple, un cœur",
"One association, one people, one heart"
],
"Ny FIBESAMA (": [
"La FIBESAMA (",
"FIBESAMA ("
],
"dagasikara) dia fikambanana sosialy mampivondrona ny Sakalava sy ireo tia ny kolontsaina sakalava, na aiza na aiza misy azy.": [
"dagasikara) est une association sociale qui rassemble les Sakalava et tous ceux qui aiment la culture sakalava, où qu'ils se trouvent.",
"dagasikara) is a social association that brings together the Sakalava and all who love Sakalava culture, wherever they are."
],
"Natsangana izy mba ho toerana iraisana ifanampiana, ifampizarana ary itahirizana ny maha-Sakalava: ny fiteny, ny fanajana ny ampanjaka sy ny razana, ny fombafomba ary ny fihavanana. Mikatsaka ny fampandrosoana ny mpikambana sy ny faritra misy azy koa izy, amin'ny alalan'ny fanabeazana, ny asa sosialy ary ny fiaraha-miasa.": [
"Elle a été créée pour être un lieu commun d'entraide, de partage et de préservation de l'identité sakalava : la langue, le respect des rois et des ancêtres, les coutumes et le fihavanana. Elle œuvre aussi au développement de ses membres et de leurs régions, par l'éducation, l'action sociale et la coopération.",
"It was founded as a shared place for mutual help, sharing and preserving Sakalava identity: the language, respect for the royals and the ancestors, the customs and fihavanana (kinship). It also works for the development of its members and their regions through education, social action and cooperation."
],
"Daty nananganana": [
"Date de création",
"Founded"
],
"Ho fenoina": [
"À compléter",
"To be completed"
],
"Filoha amin'izao fotoana": [
"Président(e) actuel(le)",
"Current president"
],
"Foibe": [
"Siège",
"Headquarters"
],
"Mahajanga (Foibe nasionaly)": [
"Mahajanga (siège national)",
"Mahajanga (national headquarters)"
],
"Fahazoan-dalana / Récépissé": [
"Autorisation / Récépissé",
"Registration / Récépissé"
],
"Mpikambana voasoratra": [
"Membres inscrits",
"Registered members"
],
"Sampana / faritra": [
"Sections / régions",
"Branches / regions"
],
"Taona niasana": [
"Années d'activité",
"Years of activity"
],
"Hetsika natao": [
"Activités réalisées",
"Activities held"
],
"🎯 Tanjona": [
"🎯 Objectifs",
"🎯 Goals"
],
"💪 Hery": [
"💪 Forces",
"💪 Strengths"
],
"⚖️ Fanamby (lesoka)": [
"⚖️ Défis (faiblesses)",
"⚖️ Challenges (weaknesses)"
],
"Firaisankina": [
"Unité",
"Unity"
],
"Mampivondrona ny Sakalava rehetra, na Menabe na Boeny na Avaratra, ho fianakaviana iray tsy mizarazara.": [
"Rassembler tous les Sakalava, du Menabe, du Boeny ou du Nord, en une seule famille indivisible.",
"Bringing all Sakalava together, from Menabe, Boeny or the North, as one undivided family."
],
"Fitahirizana vakoka": [
"Préservation du patrimoine",
"Heritage preservation"
],
"Miaro sy mampita amin'ny taranaka ny fiteny, ny tantara, ny fomban-drazana ary ny toerana masina.": [
"Protéger et transmettre aux générations la langue, l'histoire, les coutumes et les lieux sacrés.",
"Protecting and passing on the language, history, customs and sacred places to future generations."
],
"Fanabeazana": [
"Éducation",
"Education"
],
"Manohana ny tanora amin'ny fianarana sy ny fanofanana, ary mampahafantatra azy ireo ny fiaviany.": [
"Soutenir les jeunes dans leurs études et leur formation, et leur faire connaître leurs origines.",
"Supporting young people in their studies and training, and teaching them about their roots."
],
"Fampandrosoana": [
"Développement",
"Development"
],
"Mitarika tetikasa sosialy sy ara-toekarena ho an'ny mpikambana sy ny faritra sakalava.": [
"Mener des projets sociaux et économiques pour les membres et les régions sakalava.",
"Running social and economic projects for members and Sakalava regions."
],
"Tambajotra midadasika": [
"Un vaste réseau",
"A wide network"
],
"Mpikambana miely manerana ny Nosy sy any ivelany, mifandray amin'ny tambajotra sosialy.": [
"Des membres répartis dans toute l'île et à l'étranger, reliés par les réseaux sociaux.",
"Members spread across the island and abroad, connected through social media."
],
"Fototra ara-kolontsaina matanjaka": [
"Un socle culturel solide",
"A strong cultural foundation"
],
"Kolontsaina velona sy hajaina: ny ampanjaka, ny doany ary ny lanonana lehibe mbola mitohy hatramin'izao.": [
"Une culture vivante et respectée : les rois, les doany et les grandes cérémonies perdurent encore aujourd'hui.",
"A living, respected culture: the royals, the doany and the great ceremonies continue to this day."
],
"Fahavononana": [
"Engagement",
"Commitment"
],
"Mpikambana mazoto sy tanora maro te-handray anjara amin'ny fampandrosoana.": [
"Des membres motivés et de nombreux jeunes désireux de contribuer au développement.",
"Motivated members and many young people eager to take part in development."
],
"Fandaminana maoderina": [
"Une organisation moderne",
"Modern organisation"
],
"Fitantanana mpikambana amin'ny fomba nomerika sy voaaro tsara.": [
"Une gestion des membres numérique et bien sécurisée.",
"Digital, well-secured member management."
],
"Loharanom-bola": [
"Financement",
"Funding"
],
"Mbola voafetra ny vola miditra, ka ilaina ny fandraisana anjaran'ny mpikambana sy ny mpiara-miasa.": [
"Les ressources restent limitées ; la contribution des membres et des partenaires est nécessaire.",
"Resources are still limited, so contributions from members and partners are needed."
],
"Elanelana ara-jeografika": [
"Distance géographique",
"Geographic distance"
],
"Miparitaka lavitra ny mpikambana, ka sarotra indraindray ny fihaonana sy ny fifandraisana.": [
"Les membres sont dispersés, ce qui rend parfois difficiles les rencontres et la communication.",
"Members live far apart, which sometimes makes meetings and communication difficult."
],
"Fampitana amin'ny tanora": [
"Transmission aux jeunes",
"Passing on to the young"
],
"Tandindomin-doza ny fiteny sy ny fomba sasany raha tsy ampitaina tsara amin'ny taranaka vaovao.": [
"La langue et certaines coutumes sont menacées si elles ne sont pas bien transmises aux nouvelles générations.",
"The language and some customs are at risk if they are not passed on well to new generations."
],
"Fahafantarana": [
"Visibilité",
"Visibility"
],
"Mbola tsy fantatry ny besinimaro tsara ny asa ataon'ny fikambanana; izany no anton'ity tranonkala ity.": [
"Le travail de l'association reste peu connu du grand public ; c'est la raison d'être de ce site.",
"The public does not yet know the association's work well; that is why this website exists."
],
"Ireo hery sy fanamby ireo dia ohatra voalohany. Afaka ovain'ny birao araka ny zava-misy marina ao amin'ny FIBESAMA.": [
"Ces forces et défis sont des exemples de départ. Le bureau peut les modifier selon la réalité de la FIBESAMA.",
"These strengths and challenges are initial examples. The board can change them to match FIBESAMA's actual situation."
],
"Tiako": [
"J'aime",
"Like"
],
"Hevitra": [
"Commenter",
"Comment"
],
"Zarao": [
"Partager",
"Share"
],
"Manaraka": [
"S'abonner",
"Follow"
],
"Avy aiza ny Sakalava?": [
"D'où viennent les Sakalava ?",
"Where do the Sakalava come from?"
],
"Ny Sakalava dia anisan'ny vondrom-bahoaka lehibe indrindra eto Madagasikara, miaina amin'ny morontsiraka andrefana, manomboka eo amin'ny manodidina ny Onilahy any atsimo ka hatrany Nosy Be any avaratra. Fanjakana sakalava matanjaka no niorina tamin'ity faritra ity tamin'ny taonjato faha-17 sy faha-18.": [
"Les Sakalava sont l'un des plus grands peuples de Madagascar. Ils vivent sur la côte ouest, des environs de l'Onilahy au sud jusqu'à Nosy Be au nord. De puissants royaumes sakalava se sont établis dans cette région aux XVIIe et XVIIIe siècles.",
"The Sakalava are one of the largest peoples of Madagascar. They live on the west coast, from around the Onilahy river in the south up to Nosy Be in the north. Powerful Sakalava kingdoms were founded in this region in the 17th and 18th centuries."
],
"✊🏻 Tantaran'ny Sakalava": [
"✊🏻 Histoire des Sakalava",
"✊🏻 History of the Sakalava"
],
"Iza no atao hoe Sakalava?": [
"Qui sont les Sakalava ?",
"Who are the Sakalava?"
],
"Fijery ankapobeny momba ny tany, ny anarana, ny fizarana, ny finoana ary ny mpifanolo-bodirindrina amin'ny vondrom-poko sakalava.": [
"Vue d'ensemble sur la terre, le nom, les divisions, les croyances et les voisins du peuple sakalava.",
"An overview of the land, the name, the divisions, the beliefs and the neighbours of the Sakalava people."
],
"🌴 Vahoaka iray amin'ny morontsiraka andrefana": [
"🌴 Un peuple de la côte ouest",
"🌴 A people of the west coast"
],
"Anisan'ny vondrom-poko lehibe indrindra eto Madagasikara ny Sakalava. Mivelatra amin'ny faritra telo izy ireo:": [
"Les Sakalava sont l'un des plus grands groupes ethniques de Madagascar. Ils s'étendent sur trois zones :",
"The Sakalava are one of the largest ethnic groups in Madagascar. They spread over three areas:"
],
"Atsimo-andrefana": [
"Sud-Ouest",
"South-west"
],
"Andrefana": [
"Ouest",
"West"
],
"Avaratra-andrefana": [
"Nord-Ouest",
"North-west"
],
"Raha arahina ny morontsiraka, dia manomboka eo amin'i Toliara any atsimo ny tanin'ny Sakalava ka miakatra hatrany Ampasimena any avaratra:": [
"En suivant la côte, le pays sakalava commence à Toliara au sud et remonte jusqu'à Ampasimena au nord :",
"Following the coast, Sakalava land starts at Toliara in the south and runs up to Ampasimena in the north:"
],
"Ny Lakandranon'i Mozambika no mamaritra azy eo amin'ny ilany andrefana.": [
"Le canal du Mozambique en marque la limite à l'ouest.",
"The Mozambique Channel marks its western edge."
],
"Lehiben'ny Sakalava sy ny mpanaraka azy, tany Morondava (« Chefs Sakalaves et leur suite »). Karatra postaly tamin'ny fiandohan'ny taonjato faha-20.": [
"Chefs sakalava et leur suite, à Morondava. Carte postale du début du XXe siècle.",
"Sakalava chiefs and their retinue in Morondava. Postcard from the early 20th century."
],
"🌴 Avy aiza ny anarana hoe \"Sakalava\"?": [
"🌴 D'où vient le nom « Sakalava » ?",
"🌴 Where does the name \"Sakalava\" come from?"
],
"Tsy misy dika iray tokana azo antoka, fa fanazavana maromaro no ambara:": [
"Il n'existe pas d'explication unique et certaine, mais plusieurs interprétations sont avancées :",
"There is no single, certain meaning, but several explanations are given:"
],
"\"Olona monina any amin'ny lohasaha lava\".": [
"« Les gens qui vivent dans les longues vallées ».",
"\"People who live in the long valleys\"."
],
"\"Saka lava\", izay manondro ny fiparitahan'ny vahoaka eo amin'ny tany midadasika.": [
"« Saka lava », qui évoque la dispersion du peuple sur un vaste territoire.",
"\"Saka lava\", referring to the people spreading over a vast territory."
],
"Fifandraisana amin'ny fanitarana nataon'ny fanjakana sakalava taloha.": [
"Un lien avec l'expansion des anciens royaumes sakalava.",
"A link with the expansion of the old Sakalava kingdoms."
],
"Anarana mitondra hevitra ara-tantara sy ara-jeografika àry izy, ka tsy azo fehezina amin'ny dika iray monja.": [
"C'est donc un nom chargé de sens historique et géographique, qui ne peut se réduire à une seule interprétation.",
"So it is a name with historical and geographical meaning that cannot be reduced to a single interpretation."
],
"🌴 Ny Sakalavan'i Fiherenana": [
"🌴 Les Sakalava du Fiherenana",
"🌴 The Sakalava of Fiherenana"
],
"Ao amin'ny fizarana ara-tantara sy ara-politika, ny Sakalavan'i Fiherenana no mibahana ny atsimo-andrefana, ary i Toliara no renivohiny. Mifamatotra amin'ny reniranon'i Fiherenana ny tantarany, ary koa amin'ny tantaran'ny fanjakana sy ny tromba, toa an'i": [
"Dans les divisions historiques et politiques, les Sakalava du Fiherenana dominent le sud-ouest, avec Toliara pour capitale. Leur histoire est liée au fleuve Fiherenana, ainsi qu'à l'histoire des royaumes et des tromba, comme",
"Among the historical and political divisions, the Sakalava of Fiherenana hold the south-west, with Toliara as their capital. Their history is tied to the Fiherenana river, and to the history of the kingdoms and the tromba, such as"
],
"🌴 Finoana sy kolontsaina": [
"🌴 Croyances et culture",
"🌴 Beliefs and culture"
],
"Rafitra ara-panahy matanjaka no iorenan'ny fiainana sakalava:": [
"La vie sakalava repose sur un système spirituel solide :",
"Sakalava life rests on a strong spiritual system:"
],
"Fanahin'ny mpanjaka sy ny razana, heverina ho mbola \"velona\" foana. Amin'ny alalan'olona voafidy no isehoany.": [
"Les esprits des rois et des ancêtres, considérés comme toujours « vivants ». Ils se manifestent à travers des personnes choisies.",
"The spirits of kings and ancestors, seen as still \"alive\". They appear through chosen people."
],
"Mariky ny fahefana masina. Izy no fitaovana iantohana ny fifandraisana amin'ny razana.": [
"Symbole du pouvoir sacré. C'est l'instrument qui assure le lien avec les ancêtres.",
"Symbol of sacred power. It is the instrument through which contact with the ancestors is kept."
],
"🏛️ Doany sy toerana masina": [
"🏛️ Doany et lieux sacrés",
"🏛️ Doany and sacred places"
],
"Toerana anatanterahana ny fombafomba, izay itondrana fanatitra toy ny toaka, tantely, paraky sy ny sisa. Any Menabe sy Boina no tena mbola mafy orina ireo fomba ireo.": [
"Lieux où se déroulent les rites et où l'on apporte des offrandes comme le rhum, le miel, le tabac, etc. C'est au Menabe et au Boina que ces coutumes restent les plus ancrées.",
"Places where rituals are held and offerings such as rum, honey and tobacco are brought. These customs remain strongest in Menabe and Boina."
],
"🌴 Ireo mpifanolo-bodirindrina": [
"🌴 Les voisins",
"🌴 The neighbours"
],
"Foko maro no mifanila amin'ny Sakalava:": [
"De nombreux peuples côtoient les Sakalava :",
"Many peoples live next to the Sakalava:"
],
"Avaratra": [
"Nord",
"North"
],
"Avaratra-atsinanana": [
"Nord-Est",
"North-east"
],
"Atsinanana": [
"Est",
"East"
],
"Merina sy Betsileo": [
"Merina et Betsileo",
"Merina and Betsileo"
],
"Atsimo-atsinanana": [
"Sud-Est",
"South-east"
],
"Atsimo": [
"Sud",
"South"
],
"🌴 Raha fintinina": [
"🌴 En résumé",
"🌴 In short"
],
"Vondrom-poko lehibe manana tantara lalina ny Sakalava. I": [
"Les Sakalava forment un grand peuple à l'histoire profonde.",
"The Sakalava are a large people with a deep history."
],
", ao Manja ao amin'ny faritra Menabe ankehitriny, no fototra niandohan'ny fanjakana sakalava.": [
", à Manja, dans l'actuelle région Menabe, est le berceau du royaume sakalava.",
", in Manja in today's Menabe region, is the cradle of the Sakalava kingdom."
],
"Tsy eo amin'ny politika ihany no ahitana ny herin'ny Sakalava, fa indrindra eo amin'ny": [
"La force des Sakalava ne se limite pas à la politique, elle réside surtout dans",
"The strength of the Sakalava lies not only in politics, but above all in"
],
"finoana": [
"la croyance",
"their beliefs"
],
"(tromba), ny": [
"(tromba), le",
"(tromba),"
],
"fanajana ny razana": [
"respect des ancêtres",
"respect for the ancestors"
],
"ary ny": [
"et les",
"and"
],
"toerana masina": [
"lieux sacrés",
"sacred places"
],
"Loharano: soratr'i Remangaloha Tsy Manao Mbeto.": [
"Source : texte de Remangaloha Tsy Manao Mbeto.",
"Source: text by Remangaloha Tsy Manao Mbeto."
],
"Fiandohana · taonjato faha-16 – 17": [
"Origines · XVIe – XVIIe siècle",
"Origins · 16th – 17th century"
],
"Ny taranaka Maroserana": [
"La dynastie Maroserana",
"The Maroserana dynasty"
],
"Ny fanjakana sakalava dia naorin'ny taranaka mpanjaka Maroserana (na Volamena), izay nipoitra tany amin'ny faritra atsimo-andrefana. Nitarika vahoaka samihafa izy ireo ka nanangana fanjakana iray niitatra nianavaratra.": [
"Le royaume sakalava a été fondé par la dynastie royale Maroserana (ou Volamena), originaire du sud-ouest. Elle a fédéré des peuples divers et fondé un royaume qui s'est étendu vers le nord.",
"The Sakalava kingdom was founded by the Maroserana (or Volamena) royal dynasty, which came from the south-west. They led diverse peoples and built a kingdom that spread northwards."
],
"Taonjato faha-17": [
"XVIIe siècle",
"17th century"
],
"Andriamandazoala sy ny zanany": [
"Andriamandazoala et ses fils",
"Andriamandazoala and his sons"
],
"Andriamandazoala no mpanjaka voalohany nanorina ny fanjakana sakalava tany Menabe. Andriamandresy zanany no nandimby azy, fa Andriamisara rahalahiny kosa lasa mpitsabo sy mpanandro, ary nanamboatra ny dady voalohany.": [
"Andriamandazoala fut le premier roi fondateur du royaume sakalava au Menabe. Son fils Andriamandresy lui succéda, tandis que son frère Andriamisara devint guérisseur et devin, et fabriqua le premier dady.",
"Andriamandazoala was the first king to found the Sakalava kingdom in Menabe. His son Andriamandresy succeeded him, while his brother Andriamisara became a healer and diviner and made the first dady."
],
"Vakio ny tantaran'Andriamisara →": [
"Lire l'histoire d'Andriamisara →",
"Read the story of Andriamisara →"
],
"Tokony ho taonjato faha-17": [
"Vers le XVIIe siècle",
"Around the 17th century"
],
"Fanjakana Menabe": [
"Le royaume du Menabe",
"The Menabe kingdom"
],
"Andriandahifotsy, zanaky ny anabavin'Andriamandresy sy Andriamisara, no nandimby ny fanjakana ary nampiray sy nanamafy ny fanjakana Menabe, any amin'ny manodidina ny Morondava sy Tsiribihina. Ny anarana hoe \"Sakalava\" dia lasa nampiasaina ho an'ny vahoaka teo ambany fitondran'izy ireo.": [
"Andriandahifotsy, fils de la sœur d'Andriamandresy et d'Andriamisara, hérita du royaume, puis unifia et consolida le Menabe, autour de Morondava et de la Tsiribihina. Le nom « Sakalava » fut alors donné au peuple placé sous leur autorité.",
"Andriandahifotsy, son of the sister of Andriamandresy and Andriamisara, inherited the kingdom, then united and strengthened Menabe around Morondava and the Tsiribihina. The name \"Sakalava\" came to be used for the people under their rule."
],
"Fiandohan'ny taonjato faha-18": [
"Début du XVIIIe siècle",
"Early 18th century"
],
"Fiitarana nianavaratra: Boeny": [
"L'expansion vers le nord : le Boeny",
"Expansion northwards: Boeny"
],
"Andriamandisoarivo, zanak'Andriandahifotsy, no nitarika ny fiitarana nianavaratra ka nanorina ny fanjakana Boeny. Lasa seranana ara-barotra manan-danja eo amin'ny Lakandranon'i Mozambika i Mahajanga.": [
"Andriamandisoarivo, fils d'Andriandahifotsy, mena l'expansion vers le nord et fonda le royaume du Boeny. Mahajanga devint un port commercial important du canal du Mozambique.",
"Andriamandisoarivo, son of Andriandahifotsy, led the expansion northwards and founded the Boeny kingdom. Mahajanga became an important trading port on the Mozambique Channel."
],
"Taonjato faha-18": [
"XVIIIe siècle",
"18th century"
],
"Vanim-potoana nahery": [
"L'âge de la puissance",
"The age of power"
],
"Ny fanjakana sakalava no anisan'ny nanana faritany midadasika indrindra teto Madagasikara. Nanana fifandraisana ara-barotra tamin'ny mpivarotra Swahili, Arabo, Indiana ary Eoropeana ny Boeny. Nalaza ny Mpanjakavavy Ravahiny tamin'ny faran'io taonjato io.": [
"Le royaume sakalava compta parmi les plus vastes de Madagascar. Le Boeny entretenait des relations commerciales avec des marchands swahilis, arabes, indiens et européens. La reine Ravahiny fut célèbre à la fin de ce siècle.",
"The Sakalava kingdom was among the largest in Madagascar. Boeny traded with Swahili, Arab, Indian and European merchants. Queen Ravahiny was famous at the end of that century."
],
"1824 – 1840 eo ho eo": [
"Vers 1824 – 1840",
"Around 1824 – 1840"
],
"Fifandonana sy fifindrana": [
"Conflits et migrations",
"Conflicts and migrations"
],
"Nobodoin'ny tafika merina tamin'ny andron'i Radama I i Mahajanga tamin'ny 1824. Nifindra nianavaratra ny ampahany tamin'ny fianakaviana mpanjaka Boeny, nankany amin'ny faritra Analalava sy Nosy Be, ary nifandray tamin'ny Frantsay ny mpanjakavavy Tsiomeko tamin'ny 1840 teo ho eo.": [
"Mahajanga fut prise par l'armée merina sous Radama Ier en 1824. Une partie de la famille royale du Boeny migra vers le nord, vers Analalava et Nosy Be, et la reine Tsiomeko se tourna vers les Français vers 1840.",
"Mahajanga was taken by the Merina army under Radama I in 1824. Part of the Boeny royal family moved north to the Analalava and Nosy Be area, and Queen Tsiomeko turned to the French around 1840."
],
"Fanjanahantany": [
"Colonisation",
"Colonial era"
],
"Nandritra ny fanjanahantany frantsay dia very fahefana ara-politika ny ampanjaka, saingy nitohy ny fanajana azy sy ny fomba masina, toy ny fanompoana ny dady (fitahirizana masina an'ny mpanjaka teo aloha).": [
"Pendant la colonisation française, les rois perdirent leur pouvoir politique, mais le respect qu'on leur portait et les rites sacrés se poursuivirent, comme le culte des dady (reliques sacrées des anciens rois).",
"During French colonial rule the royals lost political power, but respect for them and the sacred rites continued, such as the service of the dady (sacred relics of former kings)."
],
"Ankehitriny": [
"Aujourd'hui",
"Today"
],
"Kolontsaina velona": [
"Une culture vivante",
"A living culture"
],
"Mbola misy ampanjaka sakalava hajaina ao amin'ny faritra maro, ary mbola atao ny lanonana lehibe toy ny Fanompoambe any Mahajanga sy ny Fitampoha any Menabe. Ny fikambanana toy ny FIBESAMA no manohy ny fampiraisana sy ny fitahirizana izany.": [
"Des rois sakalava sont encore respectés dans de nombreuses régions, et les grandes cérémonies comme le Fanompoambe à Mahajanga et le Fitampoha au Menabe se tiennent toujours. Des associations comme la FIBESAMA poursuivent ce travail d'unité et de préservation.",
"Sakalava royals are still respected in many regions, and great ceremonies such as the Fanompoambe in Mahajanga and the Fitampoha in Menabe are still held. Associations like FIBESAMA carry on this work of unity and preservation."
],
"Olo-malaza · taonjato faha-17": [
"Personnage célèbre · XVIIe siècle",
"Famous figure · 17th century"
],
"Andriamisara: mpanjaka sa moasy?": [
"Andriamisara : roi ou guérisseur ?",
"Andriamisara: king or healer?"
],
"Olona iray tena fantatry ny Sakalava rehetra Andriamisara, nefa tsy mitovy ny tantara ambara momba azy arakaraka ny faritra. Inona no fantatra momba azy, ary nahoana no mbola hajaina toy izao ny anarany?": [
"Andriamisara est connu de tous les Sakalava, mais les récits à son sujet diffèrent selon les régions. Que sait-on de lui, et pourquoi son nom est-il encore si vénéré ?",
"Every Sakalava knows Andriamisara, yet the stories about him differ from region to region. What do we know about him, and why is his name still so revered?"
],
"Andriamisara, araka ny lovantsofina (sary vita tanana)": [
"Andriamisara, selon la tradition orale (dessin à la main)",
"Andriamisara, according to oral tradition (hand drawing)"
],
"Ny anarana mihitsy dia efa mitantara ny momba azy, satria ahitana teny roa:": [
"Son nom raconte déjà son histoire, car il réunit deux mots :",
"His name already tells his story, since it is made of two words:"
],
"Avy amin'ny hoe \"andriana\", izany hoe mpanjaka na taranaka mpanjaka.": [
"De « andriana », c'est-à-dire roi ou de lignée royale.",
"From \"andriana\", meaning king or of royal descent."
],
"Midika hoe mpitsabo na moasy. Ny \"misara\" dia fianakaviana taranaka arabo nalaza tamin'ny fahaizany mitsabo sy manandro.": [
"Signifie guérisseur ou devin. Les « misara » étaient une famille de descendance arabe, réputée pour son savoir de guérison et de divination.",
"Means healer or diviner. The \"misara\" were a family of Arab descent known for their skill in healing and divination."
],
"Fomba fitantara roa": [
"Deux versions du récit",
"Two versions of the story"
],
"🌊 Any Boeny": [
"🌊 Au Boeny",
"🌊 In Boeny"
],
"Ny lovantsofina eto dia mitantara fa nanjaka Andriamisara, ary izy no niteraka an'Andriamandisoarivo, ilay nanorina ny fanjakana Boeny.": [
"La tradition orale d'ici raconte qu'Andriamisara a régné et qu'il est le père d'Andriamandisoarivo, fondateur du royaume du Boeny.",
"The oral tradition here says that Andriamisara reigned, and that he was the father of Andriamandisoarivo, founder of the Boeny kingdom."
],
"🌳 Any Menabe": [
"🌳 Au Menabe",
"🌳 In Menabe"
],
"Ny lovantsofina any kosa milaza fa na dia nateraky ny fianakaviana mpanjaka aza izy, dia tsy nitondra fanjakana mihitsy. Tany Menabe izy no maty ary tao Bengy no nametrahana azy.": [
"La tradition de là-bas affirme au contraire que, bien qu'issu de la famille royale, il n'a jamais régné. Il est mort au Menabe et a été inhumé à Bengy.",
"The tradition there says instead that although he was born into the royal family, he never ruled. He died in Menabe and was laid to rest at Bengy."
],
"Zazalahy roa, reny roa": [
"Deux garçons, deux mères",
"Two boys, two mothers"
],
"Ny fanjakana sakalava tany Menabe dia natsangan'Andriamandazoala, avy amin'ny taranaka mpanjaka Maroserana, izay ambaran'ny lovantsofina fa avy amin'ny Arabo no fiaviany. Vady roa mpirahavavy no nanan'io mpanjaka io, ary samy nanome zazalahy azy izy ireo:": [
"Le royaume sakalava du Menabe a été fondé par Andriamandazoala, de la dynastie royale Maroserana, dont la tradition dit qu'elle serait d'origine arabe. Ce roi avait deux épouses, deux sœurs, qui lui donnèrent chacune un fils :",
"The Sakalava kingdom of Menabe was founded by Andriamandazoala, of the Maroserana royal line, which tradition says was of Arab origin. This king had two wives who were sisters, and each gave him a son:"
],
"Ny zokiny,": [
"L'aînée,",
"The elder,"
],
", dia tsy nanaovana fomba ara-dalàna ny fanambadiany. Izy no niteraka an'i": [
", n'a pas été épousée selon les rites officiels. Elle donna naissance à",
", was not married according to the official rites. She gave birth to"
],
", ilay hantsoina hoe": [
", celui que l'on appellera",
", who would later be called"
],
"taty aoriana.": [
"plus tard.",
"."
],
"Ny zandriny,": [
"La cadette,",
"The younger,"
],
", kosa dia novadiana tamin'ny fomba feno sy ara-dalàna. Izy no niteraka an'i": [
", fut au contraire épousée selon les rites complets et officiels. Elle donna naissance à",
", on the other hand, was married with the full, official rites. She gave birth to"
],
", ilay ho lasa": [
", le futur",
", who would become"
],
"Nanana zanakavavy iray koa Andriamandazoala, saingy tsy voatahiry ny anarany.": [
"Andriamandazoala avait aussi une fille, mais son nom n'a pas été conservé.",
"Andriamandazoala also had a daughter, but her name has not been kept."
],
"Andriamisara no teraka voalohany. Kanefa araka ny fomba amam-panao, ny zanaky ny vady vita fomba no raisina ho lahimatoa. Andriamandresy àry no nisolo ny rainy teo amin'ny seza fiandrianana. Tsy nanaraka ny lalan'ny fitondrana Andriamisara, fa nanokana ny fiainany ho amin'ny fitsaboana sy ny fanandroana.": [
"Andriamisara était le premier-né. Mais selon la coutume, c'est le fils de l'épouse mariée selon les rites qui est considéré comme l'aîné. C'est donc Andriamandresy qui succéda à son père sur le trône. Andriamisara ne suivit pas la voie du pouvoir et consacra sa vie à la guérison et à la divination.",
"Andriamisara was the first-born. But by custom, the son of the wife married with the rites is regarded as the eldest. So Andriamandresy took his father's place on the throne. Andriamisara did not follow the path of power and devoted his life to healing and divination."
],
"Ny niandohan'ny dady": [
"L'origine des dady",
"The origin of the dady"
],
"Andriamisara no voalohany nanao": [
"Andriamisara fut le premier à fabriquer un",
"Andriamisara was the first to make a"
],
"relique royale": [
"relique royale",
"royal relic"
],
") teo amin'ny Sakalava. Rehefa nodimandry Andriamandresy rahalahiny, dia izy no naka ampahany tamin'ny vatana mba hanaovana ireo fitahirizana masina ireo. Izy koa no fototry ny taranaka": [
") chez les Sakalava. À la mort de son frère Andriamandresy, c'est lui qui préleva une partie du corps pour confectionner ces reliques sacrées. Il est aussi à l'origine de la lignée des",
") among the Sakalava. When his brother Andriamandresy died, he took part of the body to make these sacred relics. He is also the founder of the"
],
"Na dia efa nodimandry aza Andriamandresy, dia tsy Andriamisara no nisolo azy teo amin'ny fitondrana. Ny zanaky ny anabavin'izy mirahalahy,": [
"Bien qu'Andriamandresy fût mort, ce n'est pas Andriamisara qui lui succéda au pouvoir. Le fils de la sœur des deux frères,",
"Although Andriamandresy had died, it was not Andriamisara who succeeded him. The son of the brothers' sister,"
],
", no nandray ny fitondrana. Mbola tsy niorina tamin'izany ny fanjakana Boeny. Andriandahifotsy indray no ray niteraka an'": [
", prit le pouvoir. Le royaume du Boeny n'existait pas encore. Andriandahifotsy fut à son tour le père d'",
", took power. The Boeny kingdom did not yet exist. Andriandahifotsy in turn was the father of"
],
", izay nanorina ny fanjakana Boeny, sy": [
", fondateur du royaume du Boeny, et d'",
", who founded the Boeny kingdom, and"
],
", izay nandimby azy tany Menabe.": [
", qui lui succéda au Menabe.",
", who succeeded him in Menabe."
],
"Tetiarana tsotsotra araka ny lovantsofina voalaza eto. Ireo misy sisiny mena no nanjaka.": [
"Arbre généalogique simplifié selon la tradition orale citée ici. Ceux encadrés en rouge ont régné.",
"Simplified family tree according to the oral tradition told here. Those outlined in red reigned."
],
"Tamin'ny nodimandry Andriamisara, dia tao": [
"À la mort d'Andriamisara, c'est à",
"When Andriamisara died, it was at"
],
", any Menabe, no nametrahana azy, ary natao dady koa ny ampahany tamin'ny vatany. Taty aoriana, rehefa nifindra nianavaratra Andriamandisoarivo sy ny vahoakany, dia nentin'izy ireo niaraka taminy ny": [
", au Menabe, qu'il fut inhumé, et une partie de son corps fut aussi transformée en dady. Plus tard, quand Andriamandisoarivo et son peuple migrèrent vers le nord, ils emportèrent avec eux le",
", in Menabe, that he was laid to rest, and part of his body was also made into a dady. Later, when Andriamandisoarivo and his people moved north, they took with them the"
],
"nisy ny dadin'Andriandahifotsy sy Andriamisara. Avy amin'izany no niandohan'ny fanompoana ireo dady ireo any Boeny, izay mitohy hatramin'izao ao amin'ny Doany Miadana any Mahajanga.": [
"contenant les dady d'Andriandahifotsy et d'Andriamisara. C'est l'origine du culte de ces dady au Boeny, qui se perpétue aujourd'hui au Doany Miadana de Mahajanga.",
"holding the dady of Andriandahifotsy and Andriamisara. This is the origin of the service of these dady in Boeny, which continues today at the Doany Miadana in Mahajanga."
],
"Ka iza marina àry izy?": [
"Alors, qui était-il vraiment ?",
"So who was he really?"
],
"Raha ampitahaina ireo lovantsofina roa, dia misy teboka iombonany: samy manaiky izy ireo fa avy amin'ny fianakaviana mpanjaka Andriamisara, ary samy manantitrantitra ny fahaizany nitsabo sy nanandro.": [
"Si l'on compare les deux traditions, elles ont un point commun : toutes deux reconnaissent qu'Andriamisara était issu de la famille royale, et toutes deux insistent sur son savoir de guérisseur et de devin.",
"Comparing the two traditions, they share common ground: both agree that Andriamisara came from the royal family, and both stress his skill in healing and divination."
],
"Ny daty anefa no manampy hanavaka azy. Tamin'ny faran'ny taonjato faha-17 no teraka Andriamandisoarivo, zanak'Andriandahifotsy, ary tamin'izay dia efa tsy teo intsony Andriamisara. Sarotra noho izany ny hanaiky fa izy no rain'Andriamandisoarivo araka ny ambaran'ny lovantsofina any Boeny. Ny fitantarana any Menabe no mifanaraka kokoa amin'ny filaharam-potoana: tsy nanjaka Andriamisara, tsy nankany Boeny, ary tany Bengy no nandevenana azy.": [
"Ce sont les dates qui permettent de trancher. Andriamandisoarivo, fils d'Andriandahifotsy, est né à la fin du XVIIe siècle, et Andriamisara n'était alors plus de ce monde. Il est donc difficile d'admettre qu'il soit le père d'Andriamandisoarivo, comme le dit la tradition du Boeny. Le récit du Menabe concorde mieux avec la chronologie : Andriamisara n'a pas régné, n'est pas allé au Boeny, et a été inhumé à Bengy.",
"The dates help settle it. Andriamandisoarivo, son of Andriandahifotsy, was born at the end of the 17th century, when Andriamisara was no longer alive. So it is hard to accept that he was Andriamandisoarivo's father, as the Boeny tradition says. The Menabe account fits the chronology better: Andriamisara did not reign, did not go to Boeny, and was buried at Bengy."
],
"Raha fintinina:": [
"En résumé :",
"In short:"
],
"taranaka mpanjaka sakalava tokoa Andriamisara, ary olona nanana fahalalana lalina momba ny fitsaboana sy ny fanandroana nentin-drazana. Izany no nahatonga azy ho anisan'ireo olona manan-danja indrindra eo amin'ny tantara sy ny finoana sakalava.": [
"Andriamisara était bien de lignée royale sakalava, et un homme doté d'un savoir profond en médecine et en divination traditionnelles. C'est ce qui fait de lui l'une des figures les plus importantes de l'histoire et des croyances sakalava.",
"Andriamisara was indeed of Sakalava royal descent, and a man with deep knowledge of traditional healing and divination. That is what makes him one of the most important figures in Sakalava history and belief."
],
"📚 Fanamarihana: ny daty sy ny filaharan'ny mpanjaka sasany dia mbola iadian-kevitry ny mpahay tantara, ary samy manana ny lovantsofiny ny faritra tsirairay. Raisina ho fanazavana ankapobeny ireto, ary azon'ny zokiolona sy ny mpahay tantara sakalava atao tsara kokoa.": [
"📚 Remarque : les dates et l'ordre de certains rois sont encore débattus par les historiens, et chaque région a sa propre tradition orale. Ces informations sont générales, et les anciens et les historiens sakalava peuvent les préciser.",
"📚 Note: the dates and order of some kings are still debated by historians, and each region has its own oral tradition. This is general information, and Sakalava elders and historians can refine it."
],
"Fiitarana": [
"Expansion",
"Expansion"
],
"Ny tanin'ny Sakalava, avy atsimo ka hatrany avaratra": [
"Le pays sakalava, du sud au nord",
"Sakalava land, from south to north"
],
"ATSIMO": [
"SUD",
"SOUTH"
],
"Faritra niaviana voalohany araka ny lovantsofina.": [
"Région d'origine selon la tradition orale.",
"Region of origin according to oral tradition."
],
"ANDREFANA": [
"OUEST",
"WEST"
],
"Morondava, Belo-sur-Tsiribihina. Tanin'ny Fitampoha sy ny baobab.": [
"Morondava, Belo-sur-Tsiribihina. Terre du Fitampoha et des baobabs.",
"Morondava, Belo-sur-Tsiribihina. Land of the Fitampoha and the baobabs."
],
"Maintirano sy ny morontsiraka afovoany.": [
"Maintirano et la côte centrale.",
"Maintirano and the central coast."
],
"AVARATRA ANDREFANA": [
"NORD-OUEST",
"NORTH-WEST"
],
"Mahajanga, Marovoay. Foiben'ny fanjakana Boeny.": [
"Mahajanga, Marovoay. Centre du royaume du Boeny.",
"Mahajanga, Marovoay. Heart of the Boeny kingdom."
],
"AVARATRA": [
"NORD",
"NORTH"
],
"Bemihisatra sy Bemazava, taranaka mpanjaka nifindra avaratra.": [
"Bemihisatra et Bemazava, lignées royales parties vers le nord.",
"Bemihisatra and Bemazava, royal lines that moved north."
],
"Ny Sakalava Boeny": [
"Les Sakalava du Boeny",
"The Sakalava of Boeny"
],
"Boeny, tanin'ny Doany sy ny ranomasina": [
"Le Boeny, terre des Doany et de la mer",
"Boeny, land of the Doany and the sea"
],
"Ny Boeny no fanjakana sakalava avaratra-andrefana, niorina teo amin'ny manodidina ny helodranon'i Bombetoka sy ny reniranon'i Betsiboka. Lasa toerana fihaonan'ny kolontsaina maro i Mahajanga noho ny varotra an-dranomasina.": [
"Le Boeny est le royaume sakalava du nord-ouest, établi autour de la baie de Bombetoka et du fleuve Betsiboka. Grâce au commerce maritime, Mahajanga est devenue un carrefour de nombreuses cultures.",
"Boeny is the north-western Sakalava kingdom, founded around Bombetoka Bay and the Betsiboka river. Thanks to sea trade, Mahajanga became a meeting point of many cultures."
],
"Any Mahajanga no misy ny": [
"C'est à Mahajanga que se trouve le",
"Mahajanga is home to the"
],
", toerana masina itahirizana ny": [
", lieu sacré où sont conservés les",
", the sacred place where the"
],
"an'ireo mpanjaka Boeny teo aloha, fantatra amin'ny anarana hoe": [
"des anciens rois du Boeny, connus sous le nom de",
"of the former Boeny kings are kept, known as"
],
". Isan-taona, matetika amin'ny volana Jolay, no atao ny": [
". Chaque année, généralement en juillet, a lieu le",
". Every year, usually in July, the"
],
": fandroana ireo fitahirizana masina, izay mahasarika olona an'arivony avy amin'ny faritra maro.": [
" : le bain des reliques sacrées, qui attire des milliers de personnes venues de nombreuses régions.",
"takes place: the bathing of the sacred relics, which draws thousands of people from many regions."
],
"Ny doany sy ny fanompoana": [
"Le doany et le fanompoana",
"The doany and the fanompoana"
],
"Ny fefy fotsy sy mena manodidina ny doany, ny filaharana mitondra ny entana masina voafono lamba fotsy, ary ny vahoaka maro tonga manatrika.": [
"La clôture blanche et rouge autour du doany, la procession portant les objets sacrés enveloppés de tissu blanc, et la foule venue y assister.",
"The white and red fence around the doany, the procession carrying the sacred objects wrapped in white cloth, and the crowds who come to attend."
],
"Fefin'ny doany: fotsy sy mena": [
"Clôture du doany : blanc et rouge",
"The doany fence: white and red"
],
"Vahoaka maro manatrika ny lanonana eo anoloan'ny doany (sary: Moov.mg)": [
"Une foule nombreuse assiste à la cérémonie devant le doany (photo : Moov.mg)",
"A large crowd attends the ceremony in front of the doany (photo: Moov.mg)"
],
"Mitondra ny entana masina voafono lamba fotsy eo akaikin'ny doany": [
"Port des objets sacrés enveloppés de tissu blanc près du doany",
"Carrying the sacred objects wrapped in white cloth near the doany"
],
"Mitondra entana masina eo an-doha": [
"Objets sacrés portés sur la tête",
"Sacred objects carried on the head"
],
"Vehivavy mitondra harona eo an-doha mandritra ny filaharana": [
"Femmes portant des paniers sur la tête pendant la procession",
"Women carrying baskets on their heads during the procession"
],
"Mandeha manaraka ny fefin'ny doany": [
"Marche le long de la clôture du doany",
"Walking along the doany fence"
],
"Ny filaharana lehibe mankany amin'ny toerana masina": [
"La grande procession vers le lieu sacré",
"The great procession to the sacred place"
],
"Vakoka sy fomban-drazana": [
"Patrimoine et coutumes",
"Heritage and customs"
],
"Ny harena tsy mety lany": [
"Une richesse inépuisable",
"A treasure that never runs out"
],
"Ny kolontsaina sakalava dia mifototra amin'ny fanajana ny razana sy ny ampanjaka, ny fifandraisana amin'ny tontolo masina ary ny fihavanana.": [
"La culture sakalava repose sur le respect des ancêtres et des rois, le lien avec le monde sacré et le fihavanana.",
"Sakalava culture is rooted in respect for the ancestors and the royals, the bond with the sacred world, and fihavanana (kinship)."
],
"Ampanjaka sy Doany": [
"Rois et Doany",
"Royals and Doany"
],
"Ny ampanjaka no tandindon'ny firaisankina. Ny doany no toeram-ponenany sy toerana masina, voafehin'ny fady maro.": [
"Le roi est le symbole de l'unité. Le doany est sa résidence et un lieu sacré, régi par de nombreux fady (interdits).",
"The king is the symbol of unity. The doany is his residence and a sacred place, governed by many fady (taboos)."
],
"Fitahirizana masina an'ireo mpanjaka efa nodimandry, heverina ho mitondra ny hasin'izy ireo. Hajaina sy tsaboina amin'ny fombafomba manokana.": [
"Reliques sacrées des rois défunts, considérées comme porteuses de leur caractère sacré. Elles sont respectées et entretenues selon des rites particuliers.",
"Sacred relics of departed kings, believed to carry their sacredness. They are honoured and cared for through special rites."
],
"Fanompoambe sy Fitampoha": [
"Fanompoambe et Fitampoha",
"Fanompoambe and Fitampoha"
],
"Lanonana lehibe fandroana ny dady: ny Fanompoambe any Boeny, ary ny Fitampoha any Menabe izay tsy atao afa-tsy isaky ny taona maromaro.": [
"Grandes cérémonies du bain des dady : le Fanompoambe au Boeny, et le Fitampoha au Menabe, qui n'a lieu que tous les quelques années.",
"Great ceremonies for bathing the dady: the Fanompoambe in Boeny, and the Fitampoha in Menabe, held only every few years."
],
"Fomba ivelomin'ny fanahin'ireo mpanjaka teo aloha amin'ny olona velona, ahafahany manome torohevitra sy fitahiana. Anisan'ny tena maha-izy azy ny kolontsaina sakalava.": [
"Pratique par laquelle les esprits des anciens rois reviennent à travers des personnes vivantes, pour donner conseils et bénédictions. C'est l'un des traits les plus marquants de la culture sakalava.",
"The practice through which the spirits of former kings come back through living people, to give advice and blessings. It is one of the most defining features of Sakalava culture."
],
"Fady": [
"Fady (interdits)",
"Fady (taboos)"
],
"Ireo fady mifandray amin'ny ampanjaka, ny doany ary ny andro masina no mitahiry ny filaminana sy ny fanajana eo amin'ny fiarahamonina.": [
"Les fady liés aux rois, au doany et aux jours sacrés préservent l'ordre et le respect dans la société.",
"The fady linked to the royals, the doany and sacred days keep order and respect in society."
],
"Ny loko mena": [
"La couleur rouge",
"The colour red"
],
"Ny mena no loko mifandray amin'ny fanjakana sy ny ampanjaka. Hita amin'ny lamba, ny saina ary ny haingo amin'ny lanonana.": [
"Le rouge est la couleur associée à la royauté et aux rois. On la retrouve dans les tissus, les drapeaux et les parures des cérémonies.",
"Red is the colour linked to royalty and the royals. It appears in cloth, flags and ceremonial adornments."
],
"Fanosotra tarehy vita amin'ny hazo totoina, ampiasain'ny vehivavy any avaratra-andrefana mba hiarovana ny hoditra sy ho haingo.": [
"Masque de beauté à base de bois broyé, utilisé par les femmes du nord-ouest pour protéger la peau et comme parure.",
"A face paste made from ground wood, used by women in the north-west to protect the skin and as adornment."
],
"Mozika sy dihy": [
"Musique et danse",
"Music and dance"
],
"Ny salegy any avaratra sy ny kilalaky any Menabe no mampiaiky volana manerana ny Nosy. Ankoatra izay, misy ihany koa ny hira sy dihy masina amin'ny lanonana.": [
"Le salegy au nord et le kilalaky au Menabe font vibrer toute l'île. Il existe aussi des chants et des danses sacrés pour les cérémonies.",
"Salegy in the north and kilalaky in Menabe get the whole island moving. There are also sacred songs and dances for ceremonies."
],
"Fiteny sakalava": [
"La langue sakalava",
"The Sakalava language"
],
"Fitenim-paritra malagasy manana ny voambolany sy ny feony manokana, samy hafa kely eo amin'ny Menabe, Boeny ary avaratra.": [
"Un dialecte malgache avec son propre vocabulaire et ses sonorités, légèrement différent entre le Menabe, le Boeny et le nord.",
"A Malagasy dialect with its own vocabulary and sounds, slightly different between Menabe, Boeny and the north."
],
"Fomba sy lanonana": [
"Rites et cérémonies",
"Rites and ceremonies"
],
"Ny tromba, ny fivoriana manodidina ny ampanjaka, ny antsiva (akorandriaka atao trompetra amin'ny lanonana) ary ny haingo fotsy amin'ny tarehy.": [
"Le tromba, les rassemblements autour du roi, l'antsiva (conque servant de trompe lors des cérémonies) et les décorations blanches sur le visage.",
"The tromba, gatherings around the royals, the antsiva (a conch shell blown as a horn at ceremonies) and white face decorations."
],
"Fivoriana sy fombafomba manodidina ny tromba": [
"Rassemblement et rites autour du tromba",
"Gathering and rites around the tromba"
],
"Lanonana manodidina ny ampanjaka: haingo fotsy amin'ny tarehy sy satroka mena": [
"Cérémonie autour du roi : décorations blanches sur le visage et chapeaux rouges",
"Ceremony around the royals: white face decorations and red hats"
],
"Antsiva, akorandriaka ampiasaina amin'ny lanonana": [
"Antsiva, conque utilisée lors des cérémonies",
"Antsiva, a conch used at ceremonies"
],
"Vondron'olona misy marika fotsy amin'ny handrina": [
"Groupe de personnes portant une marque blanche sur le front",
"Group of people with a white mark on the forehead"
],
"Lehilahy mitana lefona, mifehy lamba fotsy ny loha": [
"Homme tenant une lance, la tête ceinte d'un tissu blanc",
"Man holding a spear, head wrapped in white cloth"
],
"Fifandraisana amin'ny mpitondra": [
"Relations avec les dirigeants",
"Relations with leaders"
],
"Ampanjaka, foko ary fikambanana": [
"Rois, peuple et association",
"Royals, people and association"
],
"Taloha": [
"Autrefois",
"In the past"
],
", ny ampanjaka no nitondra ny fanjakana: izy no nitsara, nampiray ny vahoaka ary nifampiraharaha tamin'ny fanjakana hafa sy ny mpivarotra vahiny. Nisy fifanarahana sy fifandonana teo amin'ny fanjakana sakalava sy ny fanjakana merina, ary taty aoriana tamin'ny Frantsay.": [
", le roi gouvernait le royaume : il rendait la justice, unissait le peuple et traitait avec les autres royaumes et les marchands étrangers. Il y eut des alliances et des conflits entre les royaumes sakalava et le royaume merina, puis plus tard avec les Français.",
", the king ruled the kingdom: he judged, united the people and dealt with other kingdoms and foreign traders. There were alliances and conflicts between the Sakalava kingdoms and the Merina kingdom, and later with the French."
],
", ny ampanjaka sakalava dia mitazona anjara toerana ara-kolontsaina sy ara-pitondrantena. Izy no mpiambina ny fomba sy ny toerana masina, ary manan-danja amin'ny fampihavanana sy ny fifampiresahana amin'ny fanjakana sy ny fiarahamonina.": [
", les rois sakalava conservent un rôle culturel et moral. Ils sont les gardiens des coutumes et des lieux sacrés, et jouent un rôle important dans la réconciliation et le dialogue avec l'État et la société.",
", Sakalava royals keep a cultural and moral role. They are the guardians of customs and sacred places, and play an important part in reconciliation and dialogue with the state and society."
],
"Ny FIBESAMA dia mikatsaka fifandraisana feno fanajana amin'ny ampanjaka sy ny raiamandreny sakalava, ary miara-miasa amin'ny manampahefana sy ny fikambanana hafa ho tombontsoan'ny foko.": [
"La FIBESAMA recherche des relations empreintes de respect avec les rois et les anciens sakalava, et collabore avec les autorités et d'autres associations au bénéfice du peuple.",
"FIBESAMA seeks respectful relations with the Sakalava royals and elders, and works with the authorities and other associations for the good of the people."
],
"Ireo mpiara-miasa amin'ny FIBESAMA": [
"Les partenaires de la FIBESAMA",
"FIBESAMA's partners"
],
"Anaran'ny ampanjaka na doany": [
"Nom du roi ou du doany",
"Name of the royal or doany"
],
"Raiamandreny / Zokiolona": [
"Notables / Anciens",
"Elders"
],
"Manampahefana eo an-toerana": [
"Autorités locales",
"Local authorities"
],
"Fikambanana mpiara-miasa": [
"Associations partenaires",
"Partner associations"
],
"Fenoy araka ny fifandraisana tena misy amin'izao fotoana.": [
"À compléter selon les relations réelles actuelles.",
"To be filled in according to current actual relations."
],
"Ireo ampanjaka sakalava": [
"Les rois sakalava",
"The Sakalava royals"
],
"Mbola mitarika ny lanonana sy ny fanompoana ary hajain'ny vahoaka ireo ampanjaka sakalava amin'izao fotoana izao.": [
"Les rois sakalava d'aujourd'hui dirigent toujours les cérémonies et le fanompoana, et sont respectés par le peuple.",
"Today's Sakalava royals still lead the ceremonies and the fanompoana, and are respected by the people."
],
"Prince Dina Herimisy Guy, Ampanjaka ben'ny Boeny": [
"Prince Dina Herimisy Guy, Grand roi du Boeny",
"Prince Dina Herimisy Guy, Great King of Boeny"
],
"Prince Dina Herimisy Guy eo amin'ny seza fiandrianana": [
"Prince Dina Herimisy Guy sur le trône",
"Prince Dina Herimisy Guy on the throne"
],
"Ampanjaka ben'ny Boeny": [
"Grand roi du Boeny",
"Great King of Boeny"
],
"Ampanjaka ben'ny Boeny ankehitriny.": [
"Grand roi actuel du Boeny.",
"The current Great King of Boeny."
],
"Ampanjaka vavy sakalava": [
"Reine sakalava",
"Sakalava queen"
],
"Ampanjaka": [
"Roi / Reine",
"Royal"
],
"Ampanjaka sakalava": [
"Roi sakalava",
"Sakalava royal"
],
"Eo amin'ny lanonana, miaraka amin'ny vahoaka.": [
"Lors d'une cérémonie, avec le peuple.",
"At a ceremony, with the people."
],
"Mitondra ny satroka sy ny fitafiana fanao amin'ny lanonana.": [
"Portant le chapeau et la tenue de cérémonie.",
"Wearing the ceremonial hat and dress."
],
"Prince Dina Herimisy Guy mitsidika ny vahoaka": [
"Prince Dina Herimisy Guy à la rencontre du peuple",
"Prince Dina Herimisy Guy meeting the people"
],
"Ampanjaka sy ny mpanampy azy": [
"Le roi et ses assistants",
"The royal and attendants"
],
"Ampanjaka sy ny raiamandreny eo amin'ny filaharana": [
"Le roi et les anciens dans la procession",
"The royal and the elders in the procession"
],
"Sarin'ny lanonana sy ny fiainana sakalava. Tsindrio ny sary iray hanitarana azy.": [
"Images des cérémonies et de la vie sakalava. Cliquez sur une photo pour l'agrandir.",
"Pictures of ceremonies and Sakalava life. Click a photo to enlarge it."
],
"Baobab sy omby": [
"Baobabs et zébus",
"Baobabs and zebu"
],
"Fefin'ny doany": [
"Clôture du doany",
"Doany fence"
],
"Filaharana amin'ny lanonana": [
"Procession lors d'une cérémonie",
"Procession at a ceremony"
],
"Fanompoana": [
"Fanompoana (service rituel)",
"Fanompoana (ritual service)"
],
"Lehiben'ny Sakalava, Morondava (taloha)": [
"Chefs sakalava, Morondava (autrefois)",
"Sakalava chiefs, Morondava (in the past)"
],
"Dokam-barotra sy mpiara-miasa": [
"Publicité et partenaires",
"Advertising and partners"
],
"Toerana ho an'ny mpanohana": [
"Espace pour les sponsors",
"Space for sponsors"
],
"Ny orinasa sy ny mpiara-miasa manohana ny FIBESAMA dia afaka mampiseho ny dokam-barony eto, ary hiely manerana ny tambajotra sosialy sakalava.": [
"Les entreprises et partenaires qui soutiennent la FIBESAMA peuvent afficher leur publicité ici, diffusée sur tout le réseau social sakalava.",
"Companies and partners who support FIBESAMA can show their advertising here, shared across the Sakalava social network."
],
"Toerana lehibe": [
"Grand emplacement",
"Main slot"
],
"Ny dokam-barotrao eto": [
"Votre publicité ici",
"Your advert here"
],
"Sary na sora-baventy (1200 × 400). Mifandraisa amin'ny birao.": [
"Image ou bannière (1200 × 400). Contactez le bureau.",
"Image or banner (1200 × 400). Contact the board."
],
"Toerana 2": [
"Emplacement 2",
"Slot 2"
],
"Logo mpiara-miasa": [
"Logo partenaire",
"Partner logo"
],
"Toerana 3": [
"Emplacement 3",
"Slot 3"
],
"Hetsika ho avy": [
"Événements à venir",
"Upcoming events"
],
"Fanambarana na fanasana": [
"Annonce ou invitation",
"Announcement or invitation"
],
"Araho ny FIBESAMA": [
"Suivez la FIBESAMA",
"Follow FIBESAMA"
],
"Ireo hetsika, fanambarana ary vaovao avy amin'ny FIBESAMA sy ny tontolo sakalava.": [
"Les événements, annonces et nouvelles de la FIBESAMA et du monde sakalava.",
"Events, announcements and news from FIBESAMA and the Sakalava world."
],
"Nisokatra ny tranonkala FIBESAMA": [
"Ouverture du site de la FIBESAMA",
"The FIBESAMA website is open"
],
"Misokatra ho an'ny rehetra izao ny tranonkalan'ny FIBESAMA. Eto no ahitana ny tantara, ny vakoka ary ny vaovao momba ny Sakalava sy ny fikambanana.": [
"Le site de la FIBESAMA est désormais ouvert à tous. Vous y trouverez l'histoire, le patrimoine et les actualités des Sakalava et de l'association.",
"The FIBESAMA website is now open to everyone. Here you will find the history, heritage and news of the Sakalava and the association."
],
"Vidéo": [
"Vidéos",
"Videos"
],
"Horonantsarin'ny lanonana, ny fihaonana ary ny tantara sakalava.": [
"Vidéos des cérémonies, des rencontres et de l'histoire sakalava.",
"Videos of ceremonies, gatherings and Sakalava history."
],
"Tsy mbola misy horonantsary.": [
"Aucune vidéo pour le moment.",
"No videos yet."
],
"Alefaso amin'ny birao ny rohy YouTube na Facebook an'ny lanonana sy hetsika, dia hiseho eto.": [
"Envoyez au bureau les liens YouTube ou Facebook des cérémonies et événements, et ils apparaîtront ici.",
"Send the board YouTube or Facebook links of ceremonies and events, and they will appear here."
],
"Te hifandray aminay?": [
"Vous souhaitez nous contacter ?",
"Want to get in touch?"
],
"Na te ho mpikambana ianao, na te hiara-miasa, na manana fanontaniana momba ny kolontsaina sakalava, aza misalasala.": [
"Que vous souhaitiez devenir membre, collaborer ou poser une question sur la culture sakalava, n'hésitez pas.",
"Whether you want to become a member, work with us or ask about Sakalava culture, don't hesitate."
],
"Finday": [
"Téléphone",
"Phone"
],
"Mailaka": [
"E-mail",
"Email"
],
"Adiresy": [
"Adresse",
"Address"
],
"Anarana": [
"Nom",
"Name"
],
"Finday na mailaka": [
"Téléphone ou e-mail",
"Phone or email"
],
"Hafatra": [
"Message",
"Message"
],
"Alefaso ny hafatra": [
"Envoyer le message",
"Send message"
],
"Ny hafatra dia misokatra amin'ny mailakao na WhatsApp. Tsy misy angona voatahiry ato amin'ity tranonkala ity.": [
"Le message s'ouvre dans votre messagerie ou WhatsApp. Aucune donnée n'est conservée sur ce site.",
"The message opens in your email app or WhatsApp. No data is stored on this website."
],
"Filongoaben'ny Sakalava eto Madagasikara. Fikambanana sosialy ho an'ny firaisankina, ny fitahirizana vakoka ary ny fampandrosoana.": [
"Union des Sakalava de Madagascar. Association sociale pour l'unité, la préservation du patrimoine et le développement.",
"Union of the Sakalava of Madagascar. A social association for unity, heritage preservation and development."
],
"Firaisankina · Fanajana · Fandrosoana": [
"Unité · Respect · Progrès",
"Unity · Respect · Progress"
],
"Pejy": [
"Pages",
"Pages"
],
"Apetraho amin'ny findainao ity tranonkala ity mba hamakiana azy na tsy misy internet aza.": [
"Installez ce site sur votre téléphone pour le consulter même sans internet.",
"Install this website on your phone to read it even without internet."
],
"📲 Apetraho": [
"📲 Installer",
"📲 Install"
],
"Loharano ankapobeny momba ny tantara: J. Lombard,": [
"Sources générales sur l'histoire : J. Lombard,",
"General sources on the history: J. Lombard,"
],
"(1991); ary ny lovantsofina sakalava. Ny votoaty dia mety hohatsaraina amin'ny fanampian'ny zokiolona sy mpahay tantara.": [
"(1991) ; et la tradition orale sakalava. Le contenu peut être amélioré avec l'aide des anciens et des historiens.",
"(1991); and Sakalava oral tradition. The content can be improved with help from elders and historians."
],
"FIBESAMA. Zo rehetra voatokana.": [
"FIBESAMA. Tous droits réservés.",
"FIBESAMA. All rights reserved."
],
"Fandraisana": [
"Accueil",
"Home"
],
"Sommaire": [
"Sommaire",
"Contents"
],
"Tsindrio ▼ hidinana amin'ny pejy manaraka": [
"Appuyez sur ▼ pour passer à la page suivante",
"Press ▼ to go to the next page"
],
"Kaonty FIBESAMA": [
"Compte FIBESAMA",
"FIBESAMA account"
],
"Midira mba hahafahanao manome \"tiako\", maneho hevitra, manaraka ny vaovao ary mandefa hafatra.": [
"Connectez-vous pour aimer, commenter, suivre l'actualité et envoyer des messages.",
"Sign in to like, comment, follow the news and send messages."
],
"Hiditra amin'ny Google": [
"Se connecter avec Google",
"Sign in with Google"
],
"na": [
"ou",
"or"
],
"Hisoratra anarana": [
"Créer un compte",
"Create account"
],
"Tongasoa,": [
"Bienvenue,",
"Welcome,"
],
"Afaka manome \"tiako\", maneho hevitra ary mandefa hafatra ianao izao.": [
"Vous pouvez maintenant aimer, commenter et envoyer des messages.",
"You can now like, comment and send messages."
],
"Hivoaka": [
"Se déconnecter",
"Sign out"
],
"Adikao ny rohy": [
"Copier le lien",
"Copy link"
],
"Apetraho ny FIBESAMA": [
"Installer la FIBESAMA",
"Install FIBESAMA"
],
"Hisokatra toy ny application ao amin'ny findainao.": [
"S'ouvrira comme une application sur votre téléphone.",
"Opens like an app on your phone."
],
"Apetraho": [
"Installer",
"Install"
],
"Hikaroka: Andriamisara, doany, tromba...": [
"Rechercher : Andriamisara, doany, tromba...",
"Search: Andriamisara, doany, tromba..."
],
"Hikaroka": [
"Rechercher",
"Search"
],
"Ovay ny loko (maizina/mazava)": [
"Changer le thème (sombre/clair)",
"Switch theme (dark/light)"
],
"Sokajy": [
"Catégories",
"Categories"
],
"Ny ao anatiny": [
"Sommaire",
"Contents"
],
"Lehiben'ny Sakalava sy ny mpanaraka azy tany Morondava": [
"Chefs sakalava et leur suite à Morondava",
"Sakalava chiefs and their retinue in Morondava"
],
"Sarin'Andriamisara araka ny lovantsofina": [
"Portrait d'Andriamisara selon la tradition orale",
"Portrait of Andriamisara according to oral tradition"
],
"Tetiarana: Andriamandazoala sy ny taranany": [
"Arbre généalogique : Andriamandazoala et ses descendants",
"Family tree: Andriamandazoala and his descendants"
],
"Rohy ho fenoina": [
"Lien à compléter",
"Link to be added"
],
"Fizarana": [
"Section",
"Section"
],
"Fizarana teo aloha": [
"Section précédente",
"Previous section"
],
"Fizarana manaraka": [
"Section suivante",
"Next section"
],
"Manaraka: Sommaire": [
"Suivant : Sommaire",
"Next: Contents"
],
"Akatona": [
"Fermer",
"Close"
],
"Anarana (raha vao hisoratra)": [
"Nom (pour une inscription)",
"Name (if signing up)"
],
"Teny miafina (6 litera farafahakeliny)": [
"Mot de passe (6 caractères minimum)",
"Password (at least 6 characters)"
],
"Teo aloha": [
"Précédent",
"Previous"
],
"Apetraho ny application": [
"Installer l'application",
"Install the app"
],
"Tsy mbola misy vaovao.": [
"Aucune actualité pour le moment.",
"No news yet."
],
"Mbola amboarina ny fidirana amin'ny kaonty. Ho vonona tsy ho ela.": [
"La connexion aux comptes est en cours de préparation. Bientôt disponible.",
"Account sign-in is being set up. Coming soon."
],
"Voaray ny hevitrao ✓": [
"Commentaire reçu ✓",
"Comment received ✓"
],
"Tsy mbola misy hevitra. Ianao no voalohany!": [
"Aucun commentaire pour l'instant. Soyez le premier !",
"No comments yet. Be the first!"
],
"Tsy mbola misy hevitra. Ho afaka maneho hevitra ianao rehefa vonona ny kaonty.": [
"Aucun commentaire. Vous pourrez commenter dès que les comptes seront prêts.",
"No comments yet. You'll be able to comment once accounts are ready."
],
"Mampiditra...": [
"Chargement...",
"Loading..."
],
"Tsy manaraka intsony ianao": [
"Vous n'êtes plus abonné",
"You've unfollowed"
],
"Hahazo ny vaovao ianao ✓": [
"Vous recevrez les actualités ✓",
"You'll get the news ✓"
],
"Diso ny mailaka na ny teny miafina.": [
"E-mail ou mot de passe incorrect.",
"Wrong email or password."
],
"Voaray ny hafatrao ✓ Hamaly anao ny birao.": [
"Message reçu ✓ Le bureau vous répondra.",
"Message received ✓ The board will reply to you."
],
"Tsy tafiditra ny fifandraisana amin'ny kaonty.": [
"Impossible de se connecter au service de comptes.",
"Could not connect to the account service."
],
"Voadika ny rohy ✓": [
"Lien copié ✓",
"Link copied ✓"
],
"Midira aloha mba hanaraka ny vaovao.": [
"Connectez-vous d'abord pour suivre l'actualité.",
"Sign in first to follow the news."
],
"Midira aloha mba haneho hevitra.": [
"Connectez-vous d'abord pour commenter.",
"Sign in first to comment."
],
"Midira aloha mba hanome \"tiako\".": [
"Connectez-vous d'abord pour aimer.",
"Sign in first to like."
],
"Soraty ny hevitrao...": [
"Écrivez votre commentaire...",
"Write your comment..."
],
"Alefaso": [
"Envoyer",
"Send"
],
"Atoa / Ramatoa ...": [
"M. / Mme ...",
"Mr / Ms ..."
],
"Mbola tsy voafetra ny mailaka na WhatsApp an'ny FIBESAMA.": [
"L'e-mail ou le WhatsApp de la FIBESAMA n'est pas encore défini.",
"FIBESAMA's email or WhatsApp has not been set yet."
],
"Tsindrio ny bokotra \"Partager\" (⬆️) ary safidio \"Sur l'écran d'accueil\".": [
"Appuyez sur « Partager » (⬆️) puis choisissez « Sur l'écran d'accueil ».",
"Tap \"Share\" (⬆️) then choose \"Add to Home Screen\"."
],
"Ao amin'ny menu an'ny navigateur (⋮), safidio \"Installer l'application\" na \"Ajouter à l'écran d'accueil\".": [
"Dans le menu du navigateur (⋮), choisissez « Installer l'application » ou « Ajouter à l'écran d'accueil ».",
"In the browser menu (⋮), choose \"Install app\" or \"Add to Home screen\"."
],
"Hafatra avy amin'ny tranonkala FIBESAMA": [
"Message depuis le site FIBESAMA",
"Message from the FIBESAMA website"
],
"Fiteny": [
"Langue",
"Language"
],
"Ampanjaka Salima Binty Said Yahaya, Mpanjakaben'ny Maroambitsy": [
"Reine Salima Binty Said Yahaya, souveraine du Maroambitsy",
"Queen Salima Binty Said Yahaya, sovereign of Maroambitsy"
],
"Mpanjakaben'ny Maroambitsy": [
"Souveraine du Maroambitsy",
"Sovereign of Maroambitsy"
],
"Nandimby ny reniny, Ampanjaka Amina Said, tamin'ny 2023.": [
"A succédé à sa mère, la reine Amina Said, en 2023.",
"Succeeded her mother, Queen Amina Said, in 2023."
],
"Vakio ny tantaran'ny Maroambitsy →": [
"Lire l'histoire du Maroambitsy →",
"Read the history of Maroambitsy →"
],
"Ampanjaka Amina Said, Ampanjaka ny Sakalavan'ny Maroambitsy (1939 – 2023)": [
"Reine Amina Said, reine des Sakalava du Maroambitsy (1939 – 2023)",
"Queen Amina Said, queen of the Sakalava of Maroambitsy (1939 – 2023)"
],
"Ampanjaka ny Sakalavan'ny Maroambitsy": [
"Reine des Sakalava du Maroambitsy",
"Queen of the Sakalava of Maroambitsy"
],
"1939 – 2023. Nitondra ny fanjakana Maroambitsy nanomboka tamin'ny 1981.": [
"1939 – 2023. A régné sur le Maroambitsy à partir de 1981.",
"1939 – 2023. Ruled the Maroambitsy kingdom from 1981."
],
"Efatra mirahalahy, anisan'izany Andrianahilitsiarivo faralahy": [
"Quatre frères, dont Andrianahilitsiarivo, le cadet",
"Four brothers, including Andrianahilitsiarivo, the youngest"
],
"sy": [
"et",
"and"
],
"Fanjakana Maroambitsy · Mitsinjo": [
"Royaume du Maroambitsy · Mitsinjo",
"Kingdom of Maroambitsy · Mitsinjo"
],
"Ny Ampanjaka sakalavan'ny Maroambitsy": [
"Les reines sakalava du Maroambitsy",
"The Sakalava queens of Maroambitsy"
],
"Ny tantaran'ny Ampanjaka Amina Said, izay nitondra nanomboka tamin'ny 1981 ka hatramin'ny 2023, sy ny fanandratana ny zanany vavy, Ampanjaka Salima, ho mpandimby azy.": [
"L'histoire de la reine Amina Said, qui a régné de 1981 à 2023, et l'intronisation de sa fille, la reine Salima, qui lui succède.",
"The story of Queen Amina Said, who reigned from 1981 to 2023, and the enthronement of her daughter, Queen Salima, as her successor."
],
"Tao Mitsinjo no nahaterahan'ny Ampanjaka Amina Said, tamin'ny taona 1939. Said no anaran'ny rainy, ary Ronkia kosa ny an'ny reniny.": [
"La reine Amina Said est née en 1939 à Mitsinjo. Son père s'appelait Said et sa mère Ronkia.",
"Queen Amina Said was born in 1939 in Mitsinjo. Her father was named Said and her mother Ronkia."
],
"Ny nenitoany (angovaviny), Moana Salima, izay nantsoina hoe Manjakareniniarivo, no nitaiza azy. Rehefa nodimandry io farany, dia izy no nisolo azy teo amin'ny fitondrana nanomboka tamin'ny taona 1981, ary nitondra ny fanjakana hatramin'ny nodimandriany tamin'ny volana Jona 2023.": [
"Elle a été élevée par sa tante (angovavy), Moana Salima, appelée Manjakareniniarivo. À la mort de celle-ci, c'est elle qui lui a succédé au pouvoir à partir de 1981, et elle a régné jusqu'à son décès en juin 2023.",
"She was raised by her aunt (angovavy), Moana Salima, known as Manjakareniniarivo. When her aunt died, she succeeded her as ruler from 1981, and reigned until her own death in June 2023."
],
"Zanakavavy roa no naterany: ny Princesse Salima sy ny Princesse Sama.": [
"Elle a eu deux filles : la princesse Salima et la princesse Sama.",
"She had two daughters: Princess Salima and Princess Sama."
],
"Ampanjaka Salima Binty Said Yahaya, eo anivon'ny vahoaka": [
"La reine Salima Binty Said Yahaya, au milieu du peuple",
"Queen Salima Binty Said Yahaya, among the people"
],
"Ny 9 Jona 2023 no voatendry hisolo ny reniny ny Ampanjaka Salima Binty Said Yahaya. Nanaraka izany ny lanonana Haribahiny, izay namarana ny fisaonana ny Ampanjaka Amina Said. Ny Alarobia 19 Jolay 2023 kosa no nanandratana azy ho Mpanjakaben'ny Maroambitsy, teo imason'ny fokonolona.": [
"Le 9 juin 2023, la reine Salima Binty Said Yahaya a été désignée pour succéder à sa mère. Vint ensuite la cérémonie Haribahiny, qui a clos le deuil de la reine Amina Said. Le mercredi 19 juillet 2023, elle a été intronisée souveraine du Maroambitsy devant la population.",
"On 9 June 2023, Queen Salima Binty Said Yahaya was chosen to succeed her mother. This was followed by the Haribahiny ceremony, which ended the mourning for Queen Amina Said. On Wednesday 19 July 2023 she was enthroned as sovereign of Maroambitsy before the community."
],
"Nanatrika io lanonana io ny rangitsy sy ny ben'ny varavara, ny manantany, ireo sahan'ny razan'ampanjaka maro, ary mpanompo an-jatony maro. Tonga nanatrika koa ireo manampahefana maro ao amin'ny Distrikan'i Mitsinjo. Ny 31 Jolay 2023 no nokasaina hanatanterahan'ny Ampanjaka vao napetraka ny fanompoana KIPA.": [
"La cérémonie s'est déroulée en présence des rangitsy et du ben'ny varavara, du manantany, de nombreux saha (médiums) des ancêtres royaux et de centaines de mpanompo (serviteurs). De nombreuses autorités du district de Mitsinjo y ont également assisté. Le 31 juillet 2023 était prévu pour le fanompoana KIPA de la nouvelle reine.",
"The ceremony was attended by the rangitsy and the ben'ny varavara, the manantany, many saha (mediums) of the royal ancestors and hundreds of mpanompo (servants). Many officials of the Mitsinjo district also attended. The KIPA fanompoana of the newly enthroned queen was planned for 31 July 2023."
],
"Ny razana nipoirany": [
"Les ancêtres dont elle descend",
"The ancestors she descends from"
],
"Ity ny filaharan'ny taranaka, manomboka amin'i Andriamandisoarivo ka hatramin'ny Ampanjaka Salima. Ny anarana ao anaty fononteny dia araka ny voasoratra tany am-boalohany.": [
"Voici la lignée, d'Andriamandisoarivo jusqu'à la reine Salima. Les noms entre parenthèses sont repris tels qu'ils figurent dans le texte d'origine.",
"Here is the lineage, from Andriamandisoarivo down to Queen Salima. The names in brackets are given as they appear in the original text."
],
"Loharano: Jeannot, DLCC Mitsinjo (Jolay 2023); tantara fohy momba ny Ampanjaka Amina Said; Zafi-Dorian'i Dadilahy Ndranikendraza (Doany Bezavo).": [
"Sources : Jeannot, DLCC Mitsinjo (juillet 2023) ; bref historique de la reine Amina Said ; Zafi-Dorian'i Dadilahy Ndranikendraza (Doany Bezavo).",
"Sources: Jeannot, DLCC Mitsinjo (July 2023); short history of Queen Amina Said; Zafi-Dorian'i Dadilahy Ndranikendraza (Doany Bezavo)."
],
"Doany Bezavo, fiandohan'ny fanjakana Boeny": [
"Doany Bezavo, berceau du royaume du Boeny",
"Doany Bezavo, cradle of the Boeny kingdom"
],
"Hatramin'ny andron'ny Mpanjaka Ndriamandisoarivo, mpanorina ny fanjakana Boeny, dia isan-taona no atao any Boeny ny lanonana Fanompoa. Roa no tena lehibe indrindra:": [
"Depuis l'époque du roi Ndriamandisoarivo, fondateur du royaume du Boeny, la cérémonie du Fanompoa a lieu chaque année au Boeny. Deux d'entre elles sont les plus importantes :",
"Since the time of King Ndriamandisoarivo, founder of the Boeny kingdom, the Fanompoa ceremony has been held every year in Boeny. Two are the most important:"
],
"🌊 Fanompoambe, Mahajanga": [
"🌊 Fanompoambe, Mahajanga",
"🌊 Fanompoambe, Mahajanga"
],
"Ao amin'ny Doany Miarinarivo, manodidina ny volana Jolay (Volambita). Ny Mitahy, izany hoe ireo fitahirizana masina (reliques), no sasana.": [
"Au Doany Miarinarivo, vers le mois de juillet (Volambita). On y lave les Mitahy, c'est-à-dire les reliques sacrées.",
"At the Doany Miarinarivo, around July (Volambita). The Mitahy, the sacred relics, are washed."
],
"🌳 Fanompoa Valibolamena, Bezavo": [
"🌳 Fanompoa Valibolamena, Bezavo",
"🌳 Fanompoa Valibolamena, Bezavo"
],
"Ao amin'ny Doany Bezavo any Maroambitsy, manodidina ny volana Oktobra. Tsy ireo fitahirizana masina no karakaraina fa ny razana mihitsy, voatahiry ao amin'ny Zomba.": [
"Au Doany Bezavo, au Maroambitsy, vers le mois d'octobre. Ce ne sont pas les reliques que l'on honore, mais les ancêtres eux-mêmes, conservés dans le Zomba.",
"At the Doany Bezavo in Maroambitsy, around October. It is not the relics that are honoured, but the ancestors themselves, kept in the Zomba."
],
"Fefy roa sosona vita amin'ny tsato-kazo, ny Fiaromby, no miaro ny Zomba ary manasaraka ny faritra masina indrindra. Ny tena votoatin'ny lanonana dia ny fandrakofana amin'ny sarona ny fatin'ireo mpanjaka voalohany tao Boeny, izay mandry ao amin'ny Zomba. Mitovitovy amin'ny famadihana any Imerina izany.": [
"Une double clôture de pieux, le Fiaromby, protège le Zomba et isole l'espace le plus sacré. Le cœur de la cérémonie consiste à recouvrir d'un linceul les dépouilles des premiers rois du Boeny qui reposent dans le Zomba. Cela rappelle le famadihana (retournement des morts) de l'Imerina.",
"A double fence of stakes, the Fiaromby, protects the Zomba and sets apart the most sacred area. The heart of the ceremony is covering with a shroud the remains of the first kings of Boeny who rest in the Zomba. It resembles the famadihana (turning of the dead) of Imerina."
],
"Ankoatra ny maha-masina azy, mariky ny firaisankin'ny Sakalava rehetra ity Fanompoa ity: tsy ho an'ny any Maroambitsy ihany, fa ho an'ny faritra Boeny manontolo, hatrany Ambongo sy Melaky aza.": [
"Au-delà de son caractère sacré, ce Fanompoa est un symbole d'unité pour tous les Sakalava : pas seulement ceux du Maroambitsy, mais de tout le Boeny, et jusqu'à l'Ambongo et au Melaky.",
"Beyond being sacred, this Fanompoa is a symbol of unity for all Sakalava: not only those of Maroambitsy, but the whole Boeny region, and even as far as Ambongo and Melaky."
],
"Ranomasin'olona no manenika an'i Bezavo amin'izany andro izany, mponina sy mpitsidika mifangaro: vehivavy miakanjo lambahoany maro loko, lehilahy mikitamby. Tsy maintsy manaja ny fitafy nentim-paharazana ireo mpandray anjara, ary voarara ny kiraro.": [
"Ces jours-là, une marée humaine envahit Bezavo, habitants et visiteurs mêlés : femmes en lambahoany multicolores, hommes en kitamby. Les participants doivent respecter la tenue traditionnelle, et les chaussures sont interdites.",
"On those days a sea of people fills Bezavo, residents and visitors together: women in colourful lambahoany, men wearing the kitamby. Participants must respect traditional dress, and shoes are forbidden."
],
"Mandritra ny alin'ny Alahady, alin'ny andro lehibe, dia mihira sy mandihy hatramin'ny maraina i Bezavo: izany no atao hoe Tsimandrimandry. Mamaky ny fahanginana mahazatra amin'ity tanàna kely voahodidin'ny zavamaniry ity io fiambenana io, eto amin'ny toerana nahaterahan'ny fanjakana sakalava any Boeny.": [
"Toute la nuit du dimanche, veille du grand jour, Bezavo chante et danse jusqu'à l'aube : c'est le Tsimandrimandry. Cette veillée rompt le calme habituel de ce petit village entouré de verdure, lieu de naissance du royaume sakalava du Boeny.",
"All through Sunday night, the eve of the great day, Bezavo sings and dances until dawn: this is the Tsimandrimandry. The vigil breaks the usual calm of this small village surrounded by greenery, the birthplace of the Sakalava kingdom of Boeny."
],
"Ny Alatsinainy, rehefa mipoaka ny basy ary manomboka ny hira masina (Kolondoy) miaraka amin'ny tehaka, dia mandeha ny filaharana mankany amin'ny manda Valamena. Mbola hita ao ireo siny tranainy sy fitaovana fandrahoan-tsakafo nampiasain'ny mpanjaka.": [
"Le lundi, au son des salves de fusil (basy) et des chants sacrés (Kolondoy) rythmés par les battements de mains, la procession s'élance vers l'enceinte Valamena. On peut encore y voir les anciennes jarres et les ustensiles de cuisine utilisés par les rois.",
"On Monday, as the rifle volleys (basy) ring out and the sacred songs (Kolondoy) begin with clapping, the procession sets off towards the Valamena enclosure. The old jars and cooking utensils used by the kings can still be seen there."
],
"Tsikelikely dia miditra ao anatin'ny manda ny filaharana, ao amin'ny Zomba masina misy ny sisa tavela tamin'ireo mpanjaka voalohan'i Boeny. Any ivelany kosa, vavolombelona maro no manaraka maso ny lanonana sady miara-mihira sy mandihy.": [
"Peu à peu, la procession entre dans l'enceinte qui protège le Zomba sacré, où reposent les restes des premiers rois du Boeny. Dehors, de nombreux témoins suivent la cérémonie tout en prenant part aux chants et aux danses traditionnels.",
"Little by little the procession enters the enclosure guarding the sacred Zomba, where the remains of the first kings of Boeny lie. Outside, many onlookers follow the ceremony while joining in the traditional songs and dances."
],
"Raha ny Prince Dina Herimisy Guy no manohy ny taranaka Ndriamifehinarivo ao amin'ny Doany Miarinarivo any Mahajanga, dia ny Ampanjaka Salima Said kosa no mitazona ny taranaka Ndriamandrantsiarivo ao amin'ny Doany Bezavo. Samy taranaky ny mpanjaka lehibe Ndriamandisoarivo, mpanorina ny fanjakana Boeny, izy roa.": [
"Si le prince Dina Herimisy Guy perpétue la lignée de Ndriamifehinarivo au Doany Miarinarivo de Mahajanga, c'est la reine Salima Said qui porte la lignée de Ndriamandrantsiarivo au Doany Bezavo. Tous deux descendent du grand roi Ndriamandisoarivo, fondateur du royaume du Boeny.",
"While Prince Dina Herimisy Guy carries on the line of Ndriamifehinarivo at the Doany Miarinarivo in Mahajanga, Queen Salima Said holds the line of Ndriamandrantsiarivo at the Doany Bezavo. Both descend from the great king Ndriamandisoarivo, founder of the Boeny kingdom."
],
"Ampanjaka Issa Tsimiaro III, Ampanjaka antakarana": [
"Ampanjaka Issa Tsimiaro III, roi antakarana",
"Ampanjaka Issa Tsimiaro III, Antakarana king"
],
"Ampanjaka antakarana": [
"Roi antakarana",
"Antakarana king"
],
"Ampanjaka Issa Tsimiaro III mitarika ny filaharana, mitana sabatra": [
"Le roi Issa Tsimiaro III mène la procession, sabre en main",
"King Issa Tsimiaro III leading the procession, sword in hand"
],
"Vehivavy mitafy lamba fanao amin'ny lanonana": [
"Femmes vêtues des étoffes de la cérémonie",
"Women wearing ceremonial cloth"
],
"Filaharana misy lefona sy lamba mena": [
"Procession avec lances et étoffes rouges",
"Procession with spears and red cloth"
],
"Ny filaharana lehibe nandritra ny Fisehana": [
"La grande procession pendant le Fisehana",
"The great procession during the Fisehana"
],
"Vahoaka marobe tonga nanatrika ny Fisehana tao Ampasinantenina": [
"Une foule nombreuse venue assister au Fisehana à Ampasinantenina",
"Large crowds attending the Fisehana at Ampasinantenina"
],
"Iza ny Antakarana?": [
"Qui sont les Antakarana ?",
"Who are the Antakarana?"
],
"Anisan'ireo foko 18 eto Madagasikara ny Antakarana (na Antankarana). Ny anarany dia midika hoe \"ireo avy any amin'ny harana\", satria feno vato maranitra, na tsingy, ny tany nentim-paharazana onenany: ny faritra Ankarana.": [
"Les Antakarana (ou Antankarana) font partie des 18 ethnies de Madagascar. Leur nom signifie « ceux des rochers », car leur terre ancestrale, la région de l'Ankarana, est couverte de roches acérées, les tsingy.",
"The Antakarana (or Antankarana) are one of the 18 ethnic groups of Madagascar. Their name means \"those of the rocks\", because their ancestral land, the Ankarana region, is covered in sharp rock formations called tsingy."
],
"Any amin'ny faritra avaratra indrindra amin'ny Nosy no onenan'izy ireo, manodidina an'i Antsiranana (Diego-Suarez), Ambilobe ary Vohémar. Eo akaikin'ny valan-javaboarin'ny Ankarana izy ireo, izay feno tsingy sy zohy mirakitra tantara. Toerana masina ho an'ny Antakarana ny Tsingy ao Ankarana.": [
"Ils vivent à l'extrême nord de l'île, autour d'Antsiranana (Diego-Suarez), d'Ambilobe et de Vohémar, à proximité du parc de l'Ankarana, plein de tsingy et de grottes chargées d'histoire. Les tsingy de l'Ankarana sont un lieu sacré pour les Antakarana.",
"They live in the far north of the island, around Antsiranana (Diego-Suarez), Ambilobe and Vohémar, close to the Ankarana park with its tsingy and caves full of history. The tsingy of Ankarana are a sacred place for the Antakarana."
],
"Ny tantarany": [
"Leur histoire",
"Their history"
],
"Mifamatotra akaiky amin'ny Mpanjaka Andriantsirototra, nanorina ny fanjakana tamin'ny taonjato faha-17, ny tantaran'ny Antakarana. Tamin'ny taonjato faha-19, nandritra ny ady tamin'ny fanjakana merina tamin'ny andron'i Radama I sy Ranavalona I, dia nialokaloka tany amin'ireo zohy ao Ankarana ny vahoaka Antakarana sy ny mpanjakany Tsimiaro mba tsy ho voasambotra.": [
"L'histoire des Antakarana est étroitement liée au roi Andriantsirototra, qui fonda le royaume au XVIIe siècle. Au XIXe siècle, pendant la guerre contre le royaume merina sous Radama Ier et Ranavalona Ire, le peuple antakarana et son roi Tsimiaro se réfugièrent dans les grottes de l'Ankarana pour échapper à la capture.",
"Antakarana history is closely tied to King Andriantsirototra, who founded the kingdom in the 17th century. In the 19th century, during the war with the Merina kingdom under Radama I and Ranavalona I, the Antakarana people and their king Tsimiaro took refuge in the caves of Ankarana to avoid capture."
],
"Nifanaiky izy ireo tamin'izay fa raha tafavoaka velona, dia hiditra amin'ny finoana silamo. Noho io tantara io, ny ankamaroan'ny Antakarana ankehitriny dia manaraka ny finoana silamo, miaraka amin'ny finoana nentim-paharazana.": [
"Ils firent alors le vœu, s'ils survivaient, d'embrasser l'islam. C'est pourquoi la plupart des Antakarana sont aujourd'hui musulmans, tout en gardant leurs croyances ancestrales.",
"They vowed then that if they survived, they would embrace Islam. Because of this story, most Antakarana today are Muslim, alongside their ancestral beliefs."
],
"🔴 Zafiny Mena sy ⚪ Zafiny Fotsy": [
"🔴 Zafiny Mena et ⚪ Zafiny Fotsy",
"🔴 Zafiny Mena and ⚪ Zafiny Fotsy"
],
"Avy amin'ny taranaka Maroserana, izay ambara fa nentin'Andriamisara avy any Menabe, ny razambe fototry ny fanjakana sakalava. Niely izy ireo ary namorona fanjakana maro: Menabe, Boina, Bemazava, Antakarana sy ny sisa. Tao anatin'io fianakaviana lehibe io no nisy fizarana roa:": [
"Les ancêtres fondateurs des royaumes sakalava sont issus de la dynastie Maroserana, que l'on dit amenée du Menabe par Andriamisara. Elle s'est répandue et a fondé de nombreux royaumes : Menabe, Boina, Bemazava, Antakarana, etc. Au sein de cette grande famille sont apparues deux branches :",
"The founding ancestors of the Sakalava kingdoms come from the Maroserana dynasty, said to have been brought from Menabe by Andriamisara. It spread and founded many kingdoms: Menabe, Boina, Bemazava, Antakarana and others. Within this great family two branches emerged:"
],
"🔴 Zafiny Mena": [
"🔴 Zafiny Mena",
"🔴 Zafiny Mena"
],
"Zanaky ny mena: mifandray amin'ny hery, ny masoandro, ny hasin'ny mpanjaka ary ny fahefana ara-politika. Tandindon'ny fiainana, ny ady ary ny fitondrana ny mena.": [
"Enfants du rouge : liés à la force, au soleil, au caractère sacré du roi et au pouvoir politique. Le rouge symbolise la vie, la guerre et le gouvernement.",
"Children of red: linked to strength, the sun, the sacredness of the king and political power. Red stands for life, war and rule."
],
"⚪ Zafiny Fotsy": [
"⚪ Zafiny Fotsy",
"⚪ Zafiny Fotsy"
],
"Zanaky ny fotsy: mifandray amin'ny fahadiovana, ny volana, ny razana ary ny hasina ara-panahy. Tandindon'ny fahamasinana, ny fomban-drazana ary ny fifandraisana amin'ny razana ny fotsy.": [
"Enfants du blanc : liés à la pureté, à la lune, aux ancêtres et au sacré spirituel. Le blanc symbolise la sainteté, les coutumes et le lien avec les ancêtres.",
"Children of white: linked to purity, the moon, the ancestors and spiritual sacredness. White stands for holiness, ancestral custom and the bond with the ancestors."
],
"Tsy fifandrafiana io fizarana io tamin'ny voalohany, fa rafitra ara-tsoatoavina nifameno teo amin'ny fahefana sy ny fomban-drazana. Rehefa nifindra nianavaratra ireo taranaka sakalava (Boina, Nosy Be, Nosy Komba, Antakarana), dia nentiny niaraka taminy io rafitra io. Mandraka ankehitriny, mbola hita amin'ny fombafomba any Nosy Komba sy any amin'ny faritra Antakarana ny andraikitra voazara araka izany.": [
"Cette division n'était pas, à l'origine, une rivalité, mais un système de valeurs où pouvoir et tradition se complétaient. Lorsque les lignées sakalava migrèrent vers le nord (Boina, Nosy Be, Nosy Komba, Antakarana), elles emportèrent ce système avec elles. Aujourd'hui encore, les rôles répartis selon ce principe se retrouvent dans les rites de Nosy Komba et du pays antakarana.",
"At first this division was not a rivalry, but a value system in which power and tradition complemented each other. When the Sakalava lines moved north (Boina, Nosy Be, Nosy Komba, Antakarana), they carried this system with them. To this day, roles shared out this way can still be seen in the rites of Nosy Komba and the Antakarana region."
],
"Fomban-drazana mampiavaka azy": [
"Des coutumes qui les distinguent",
"Distinctive customs"
],
"Fomba lehibe indrindra ao amin'ny fanjakana antakarana, atao isaky ny dimy taona eo ho eo. Manangana hazo lava be (fara) ny vahoaka hanomezana voninahitra ny razana sy ny mpanjaka. Telo ny toerana anaovana azy: manomboka any Ankiabe, mandalo any Ampasibe, ary mifarana any Ambatoharanana.": [
"Le plus grand rite du royaume antakarana, célébré environ tous les cinq ans. Le peuple dresse un très grand mât (fara) pour honorer les ancêtres et le roi. Il se déroule en trois lieux : il commence à Ankiabe, passe par Ampasibe et s'achève à Ambatoharanana.",
"The greatest rite of the Antakarana kingdom, held about every five years. The people raise a very tall mast (fara) to honour the ancestors and the king. It takes place in three places: it starts at Ankiabe, passes through Ampasibe and ends at Ambatoharanana."
],
"Hentitra ny fady ao amin'ny faritra Ankarana, indrindra momba ny zohy. Fady, ohatra, ny mitondra henan-kisoa, ny firaisana ara-nofo alohan'ny hidirana ao, ary ny fidiran'ny vehivavy mandeha fotoana amin'ny zohy sasany.": [
"Les fady sont stricts dans la région de l'Ankarana, surtout concernant les grottes. Il est interdit par exemple d'y apporter du porc, d'avoir des rapports sexuels avant d'y entrer, et certaines grottes sont interdites aux femmes pendant leurs règles.",
"The fady (taboos) are strict in the Ankarana region, especially around the caves. For example, it is forbidden to bring pork, to have sexual relations before entering, and some caves are closed to menstruating women."
],
"Manaja fatratra ny rafitra nentim-paharazana sy ny Ampanjaka ny Antakarana. Mbola hajaina ny mpanjaka ankehitriny ary manana fahefana ara-panahy.": [
"Les Antakarana respectent profondément l'organisation traditionnelle et le roi, qui reste aujourd'hui honoré et détient une autorité spirituelle.",
"The Antakarana deeply respect the traditional order and the king, who is still honoured today and holds spiritual authority."
],
"Dihy nentim-paharazana mirakitra tantara maro momba ny foko Antakarana. Mila fianarana manokana izy satria maro ny fady amin'ny fandihizana azy, ary tsy amin'ny asan-drazana rehetra no anaovana azy. Mila fitaovana manokana toy ny \"hazolahy\" sy fitafiana voatokana izy, ary vitsy sisa no mahafantatra ireo fombany rehetra.": [
"Danse traditionnelle porteuse de nombreuses histoires du peuple antakarana. Elle demande un apprentissage particulier, car sa pratique est entourée de nombreux fady, et elle n'est pas exécutée à toutes les cérémonies. Elle nécessite des objets spécifiques comme le « hazolahy » et une tenue dédiée, et peu de gens en connaissent encore tous les rites.",
"A traditional dance that carries many stories of the Antakarana people. It must be specially learned, as it is surrounded by many fady, and it is not performed at every ceremony. It requires special items such as the \"hazolahy\" and dedicated dress, and few people still know all its rites."
],
"Mandraka ankehitriny, mbola toerana anaovana sorona sy fangatahana tsodrano amin'ny razana (joro) ho an'ny Antakarana ny zohy ao Ankarana.": [
"Aujourd'hui encore, les grottes de l'Ankarana restent pour les Antakarana un lieu de sacrifices et de demande de bénédiction aux ancêtres (joro).",
"To this day the caves of Ankarana remain a place where the Antakarana make offerings and ask the ancestors for blessings (joro)."
],
"🎌 Tsangantsainy": [
"🎌 Tsangantsainy",
"🎌 Tsangantsainy"
],
"👑 Fanajana ny Ampanjaka": [
"👑 Respect du roi",
"👑 Respect for the king"
],
"Fivelomana": [
"Activités",
"Livelihood"
],
"Faritra amoron-dranomasina sy manana tany lonaka ny avaratra, ka mivelona indrindra amin'ny jono, ny fambolena fary (indrindra manodidina an'Ambilobe), vary ary lavanila, ary ny fiompiana omby ny Antakarana.": [
"Le nord étant une région côtière aux terres fertiles, les Antakarana vivent surtout de la pêche, de la culture de la canne à sucre (notamment autour d'Ambilobe), du riz et de la vanille, ainsi que de l'élevage de zébus.",
"The north is a coastal region with fertile land, so the Antakarana live mainly from fishing, growing sugar cane (especially around Ambilobe), rice and vanilla, and raising zebu."
],
"Fisehana any Ampasinantenina": [
"Le Fisehana à Ampasinantenina",
"The Fisehana at Ampasinantenina"
],
"Ny Fisehana no fanatanterahana ny famindrana ny Ampanjaka, fomba lehibe ho an'ny foko Antakarana. Ny Ampanjaka Issa Tsimiaro III no nitarika izany tao Ampasinantenina, ary vahoaka manodidina ny 15 000 no tonga nanome voninahitra azy.": [
"Le Fisehana est l'accomplissement du transfert (famindrana) du roi, un grand rite pour le peuple antakarana. Il a été conduit par le roi Issa Tsimiaro III à Ampasinantenina, et quelque 15 000 personnes sont venues l'honorer.",
"The Fisehana is the carrying out of the king's famindrana (transfer), a major rite for the Antakarana people. It was led by King Issa Tsimiaro III at Ampasinantenina, and some 15,000 people came to honour it."
],
"Tonga nanatrika koa ny Préfet Hermine Tsirinary, solontenan'ny fitondram-panjakana, niaraka tamin'ireo tompon'andraikitra avy amin'ny Distrikan'Ambilobe sy ny Faritra DIANA. Fotoana nampiraisana ny vahoaka sy nanehoana ny kolontsaina antakarana izany.": [
"La préfète Hermine Tsirinary, représentant l'État, y a également assisté, accompagnée de responsables du district d'Ambilobe et de la région DIANA. Ce fut un moment d'unité et de mise en valeur de la culture antakarana.",
"Prefect Hermine Tsirinary, representing the state, also attended, together with officials from the Ambilobe district and the DIANA region. It was a moment of unity and a showcase of Antakarana culture."
],
"Loharano: Gasykanto Project (#fokomalagasy); Vohemar Antique (Zafiny Fotsy sy Zafiny Mena); Aleva Honogno, Ambilobe, 30 Oktobra 2014 (Rebiky); Bebel Betombo, mpanao gazety (Tsangantsainy); sary: Fisehana Ampasinantenina.": [
"Sources : Gasykanto Project (#fokomalagasy) ; Vohemar Antique (Zafiny Fotsy et Zafiny Mena) ; Aleva Honogno, Ambilobe, 30 octobre 2014 (Rebiky) ; Bebel Betombo, journaliste (Tsangantsainy) ; photos : Fisehana d'Ampasinantenina.",
"Sources: Gasykanto Project (#fokomalagasy); Vohemar Antique (Zafiny Fotsy and Zafiny Mena); Aleva Honogno, Ambilobe, 30 October 2014 (Rebiky); Bebel Betombo, journalist (Tsangantsainy); photos: Fisehana at Ampasinantenina."
],
"Foko Antakarana · Ankarana, Ambilobe": [
"Peuple antakarana · Ankarana, Ambilobe",
"Antakarana people · Ankarana, Ambilobe"
],
"Ny Antakarana, mpiambina ny tsingy": [
"Les Antakarana, gardiens des tsingy",
"The Antakarana, guardians of the tsingy"
],
"Ny fiaviany, ny tantarany, ny fomban-drazany, ary ny Fisehana lehibe notarihin'ny Ampanjaka Issa Tsimiaro III tao Ampasinantenina.": [
"Leurs origines, leur histoire, leurs coutumes, et le grand Fisehana conduit par le roi Issa Tsimiaro III à Ampasinantenina.",
"Their origins, history and customs, and the great Fisehana led by King Issa Tsimiaro III at Ampasinantenina."
],
"Vakio ny tantaran'ny Antakarana →": [
"Lire l'histoire des Antakarana →",
"Read the history of the Antakarana →"
],
"Ampanjaka Issa Tsimiaro III, mitafy satroka volamena sy mitana sabatra, entin'ny vahoaka": [
"Le roi Issa Tsimiaro III, coiffé d'or et sabre en main, porté par le peuple",
"King Issa Tsimiaro III, in a gold hat and holding a sword, carried by the people"
],
"Vahoaka an'arivony manodidina ny tsangantsainy": [
"Des milliers de personnes autour du mât",
"Thousands of people around the mast"
],
"Ny sainam-pirenena sy ny saina misy volana sy kintana mena eo amin'ny tsangantsainy": [
"Le drapeau national et le drapeau au croissant et à l'étoile rouges sur le mât",
"The national flag and the flag with the red crescent and star on the mast"
],
"Mpandihy mitafy satroka misy kintana ary mitana basy hazo": [
"Danseur coiffé d'un chapeau à étoile, fusil de bois en main",
"Dancer in a star hat, holding a wooden rifle"
],
"Lehilahy miakatra amin'ny tsangantsainy": [
"Un homme grimpe au mât",
"A man climbing the mast"
],
"Tovolahy miakatra eo akaikin'ny tsangantsainy": [
"Des jeunes hommes montent près du mât",
"Young men climbing up near the mast"
],
"Mpandihy mitafy mena mitana basy hazo": [
"Danseur en rouge avec un fusil de bois",
"Dancer in red with a wooden rifle"
],
"Vahoaka maro manatrika ny lanonana": [
"Une foule nombreuse assiste à la cérémonie",
"Large crowds attend the ceremony"
],
"Mpandihy mitafy mena eo anivon'ny vahoaka": [
"Danseur en rouge au milieu de la foule",
"Dancer in red among the crowd"
],
"Mpandihy vehivavy mitafy satroka misy kintana": [
"Danseuse coiffée d'un chapeau à étoile",
"Woman dancer in a star hat"
],
"Mpandihy sy vehivavy mandritra ny lanonana": [
"Danseur et femme pendant la cérémonie",
"Dancer and woman during the ceremony"
],
"Lehilahy roa mandeha eo amin'ny kianja fanaovana ny lanonana": [
"Deux hommes marchent sur le lieu de la cérémonie",
"Two men walking across the ceremony ground"
],
"Fiarahabana ireo vahiny eo ambanin'ny tranolay": [
"Salutation des invités sous la tente",
"Greeting the guests under the tent"
],
"Vahoaka marobe eo akaikin'ny hazo lehibe": [
"Une grande foule près du grand arbre",
"Large crowds by the great tree"
],
"Vahoaka sy mpitandro filaminana manodidina ny kianja": [
"La foule et les forces de l'ordre autour de l'esplanade",
"Crowds and security forces around the ground"
],
"Vahiny nasaina eo ambanin'ny tranolay": [
"Invités sous la tente",
"Invited guests under the tent"
],
"Vahiny maro nanatrika ny lanonana": [
"De nombreux invités à la cérémonie",
"Many guests at the ceremony"
],
"Raiamandreny sy vahoaka eo akaikin'ny tranolay": [
"Anciens et habitants près de la tente",
"Elders and people near the tent"
],
"Sarin'ny Tsangantsainy": [
"Photos du Tsangantsainy",
"Photos of the Tsangantsainy"
],
"Ireto ny sarin'ny fankalazana ny Tsangantsainy: ny fananganana ny tsangantsainy, ny dihy, ny Ampanjaka ary ny vahoaka marobe tonga nanatrika.": [
"Voici des images de la célébration du Tsangantsainy : l'érection du mât, les danses, le roi et la foule nombreuse venue y assister.",
"Here are pictures of the Tsangantsainy celebration: raising the mast, the dances, the king and the large crowds who came to attend."
]
};
  var I = L === 'fr' ? 0 : 1;
  var P = [
    [/^(\d+) fizarana$/, function (m) { return m[1] + ' sections'; }],
    [/^Manaraka: (.+)$/, function (m) { return (I ? 'Next: ' : 'Suivant : ') + T(m[1]); }],
    [/^Teo aloha: (.+)$/, function (m) { return (I ? 'Previous: ' : 'Précédent : ') + T(m[1]); }],
    [/^Tsy nisy hita ho an'ny « (.+) »\.?$/, function (m) { return (I ? 'No results for “' + m[1] + '”.' : 'Aucun résultat pour « ' + m[1] + ' ».'); }]
  ];
  function T(s) {
    if (L === 'mg' || !s) return s;
    var k = s.trim().replace(/\s+/g, ' '), r = D[k];
    r = r ? r[I] : null;
    if (r == null) for (var j = 0; j < P.length; j++) { var m = k.match(P[j][0]); if (m) { r = P[j][1](m); break; } }
    if (r == null) return s;
    var lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0];
    if (/^[.,;:!?)]/.test(r) && !/^ :/.test(r)) lead = '';
    if (!lead && /^[.,;:]/.test(k) && !/^[ .,;:]/.test(r)) lead = ' ';
    if (/'$/.test(r)) trail = ''; else if (/'$/.test(k) && !trail) trail = ' ';
    return lead + r.replace(/^ /, ' ') + trail;
  }
  window.T = T;
  var sel = document.getElementById('langSel');
  if (sel) {
    sel.value = L;
    sel.addEventListener('change', function () {
      try { localStorage.setItem('fibesama-lang', sel.value); } catch (e) {}
      var u = new URL(location.href); u.searchParams.set('lang', sel.value); location.href = u.toString();
    });
  }
  if (L === 'mg') return;
  var A = ['placeholder', 'aria-label', 'title', 'data-title', 'data-sub', 'alt'];
  function attrs(el) { for (var i = 0; i < A.length; i++) { var v = el.getAttribute(A[i]); if (v) { var t = T(v); if (t !== v) el.setAttribute(A[i], t); } } }
  function text(n) { var t = T(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
  function run(root) {
    if (root.nodeType === 3) { if (!root.parentNode || !root.parentNode.closest('script,style')) text(root); return; }
    if (root.nodeType !== 1 || root.closest('script,style')) return;
    attrs(root); root.querySelectorAll('*').forEach(attrs);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = w.nextNode())) if (!n.parentNode.closest('script,style')) list.push(n);
    list.forEach(text);
  }
  run(document.body);
  document.title = L === 'fr' ? 'FIBESAMA · Sakalava' : 'FIBESAMA · Sakalava';
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type === 'characterData') text(m.target);
      else if (m.type === 'attributes') attrs(m.target);
      else m.addedNodes.forEach(run);
    });
  }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: A });
  var al = window.alert; window.alert = function (m) { return al.call(window, T(String(m))); };
})();
