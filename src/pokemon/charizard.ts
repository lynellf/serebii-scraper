export default `


<!DOCTYPE html>
<html>

<head>
<title>Charizard - #006 - Serebii.net Pok&eacute;dex</title>
<meta http-equiv="imagetoolbar" CONTENT="no">
	<link rel="stylesheet" type="text/css" href="/style/layout.css" />
<meta name="viewport" content="width=device-width,initial-scale=1" id="viewport-meta">

<script type="text/javascript">
	var viewport_meta = document.getElementById('viewport-meta');
	var viewport_timer;

	// these body*Class are reused in the lbar mobile menu
	function bodyAddClass(className){
		if(document.body) document.body.classList.add(className);
	}
	function bodyRemoveClass(className){
		if(document.body) document.body.className = document.body.className.replace(className,"");
	}

	function viewport_set() {
		// Define our viewport meta values
		var viewports = {
			default: viewport_meta.getAttribute('content'),
			mobileL: 'width=device-width,initial-scale=0.75',
			mobileM: 'width=device-width,initial-scale=0.5',
			mobileS: 'width=device-width,initial-scale=0.4'
		};

		// Change the viewport value based on screen.width
		if(screen.width < 370){
			viewport_meta.setAttribute('content', viewports.mobileS);
			bodyAddClass("nav_mobileS");
			bodyRemoveClass("nav_mobileM");
			bodyRemoveClass("nav_mobileL");
		} else if(screen.width < 505){
			viewport_meta.setAttribute('content', viewports.mobileM);
			bodyRemoveClass("nav_mobileS");
			bodyAddClass("nav_mobileM");
			bodyRemoveClass("nav_mobileL");
		} else if (screen.width < 760){
			viewport_meta.setAttribute('content', viewports.mobileL);
			bodyRemoveClass("nav_mobileS");
			bodyRemoveClass("nav_mobileM");
			bodyAddClass("nav_mobileL");
		} else{
			viewport_meta.setAttribute('content', viewports.default);
			bodyRemoveClass("nav_mobileS");
			bodyRemoveClass("nav_mobileM");
			bodyRemoveClass("nav_mobileL");
		}
	}

	// Set the correct viewport value on page load
	viewport_set();

	/* attach listener to (delay) set the correct viewport after device orientation change or resize. also onload so the nav_mobile* class gets added to body AFTER <body> has loaded */
	if(window.addEventListener){
		window.addEventListener('load', viewport_set);
		window.addEventListener('resize', function(){
			clearTimeout(viewport_timer);
			viewport_timer = setTimeout(viewport_set, 100);
		})
	} else{
		window.attachEvent('onload', viewport_set)
		window.attachEvent('onresize', function(){
			clearTimeout(viewport_timer);
			viewport_timer = setTimeout(viewport_set, 100);
		})
	}

</script>

<!-- GDPR Compliancy -->
<!-- NetworkN CMP Tool -->
<script>
window.cmpConfig = {
    globalVendorListLocation:'https://cmp.network-n.com/vendorlist.json',
    customLogo: 'https://www.serebii.net/extralogo.png',
    customLogoLink: 'https://www.serebii.net/',
    customLogoTitle: 'Serebii.net'
};

!function(e,a){if(function(e){"string"==typeof e&&(e=[e]);for(var n=0;n<e.length;n++)a.cookie=e[n]+
"=;max-age=-1;domain=."+a.domain+";path=/"}(["euconsent","eupubconsent","googlepersonalization"]),
!e.__cmp){e.__cmp=function(){(e.attachEvent||e.addEventListener)("message",function(a){e.__cmp.receiveMessage(a)}
,!1),function n(){if(!e.frames.__cmpLocator)if(a.body){var o=a.createElement("iframe");o.style.display="none",
o.name="__cmpLocator",a.body.appendChild(o)}else setTimeout(n,5)}();var n=[],o=function(a,o,c){"ping"===a?c&&c({
gdprAppliesGlobally:!!(e.__cmp&&e.__cmp.config&&e.__cmp.config.storeConsentGlobally),cmpLoaded:!1}):
n.push({command:a,parameter:o,callback:c})};return o.commandQueue=n,o.receiveMessage=function(e){
var a=e&&e.data&&e.data.__cmpCall;a&&n.push({callId:a.callId,command:a.command,parameter:a.parameter,
event:e})},o.config=e.cmpConfig||{globalVendorListLocation:"https://cmp.network-n.com/vendorlist.json"},
o}();var n=a.createElement("script");n.async=!0,n.src="https://cmp.network-n.com/js/cmp.complete.bundle.js",
a.getElementsByTagName("head")[0].appendChild(n)}}(window,document);
</script>
<!-- GDPR Compliancy -->

<link rel="search" href="/serebii-opensearch.xml" type="application/opensearchdescription+xml" title="Serebii Open Search" />
<link rel="shortcut icon" href="/favicon.ico" />

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPSZKKL');</script>
<!-- End Google Tag Manager -->
<!-- Begin ComScore Tag -->
<script>
!function(o,n){if(o._localCS={consent:null,loaded:!1,tx:null},o._comscore=o._comscore||[],o.__cmp){
o.__cmp("getVendorConsents",[77],function(o,c){function e(o){return"object"==typeof o}c&&(_localCS.consent=e(o)
&&e(o.vendorConsents)&&o.vendorConsents[77],_localCS.consent=_localCS.consent?"1":"0",t())}),function c(){
o.__cmp("ping",null,function(o){if(!1===o.cmpLoaded){if(null===_localCS.tx)return void(_localCS.tx=setTimeout(c,3e3));
t()}o.cmpLoaded&&(clearTimeout(_localCS.tx),t())})}()}function t(){var o,c,e;_localCS.loaded||
(_comscore.push({c1:"2",c2:"25110922",cs_ucfr:_localCS.consent}),c=(o=n).createElement("script"),
e=o.getElementsByTagName("script")[0],c.async=!0,c.src=("https:"==o.location.protocol?"https://sb":"http://b")
+".scorecardresearch.com/beacon.js",e.parentNode.insertBefore(c,e),_localCS.loaded=!0)}o.__cmp||t()}(window,document);
</script>
<noscript><img src="https://sb.scorecardresearch.com/p?c1=2&c2=25110922&cv=2.0&cj=1" /></noscript>
<!-- End ComScore Tag -->

<script src="/dist/serebii2.min.js" async></script>

<meta name="keywords" content="Pokemon, Pok&eacute;dex, Charizard (Pok&eacute;mon),Charizard, Charizard, Sword, Shield" />
<link rel="stylesheet" type="text/css" HREF="/style/dexy-new.css">
<link rel="canonical" href="https://www.serebii.net/pokedex-swsh/charizard" />
<meta property="og:image" content="https://www.serebii.net/pokemon/art/006.png">
<meta property="og:title" content="Charizard #006 - Serebii.net Pok&eacute;dex">
<meta property="og:description" content="Charizard Pok&eacute;mon Serebii.net Pok&eacute;dex providing all details on moves, stats, abilities, evolution data and locations for Pok&eacute;mon Sword & Shield">
<meta name="description" content="Charizard Pok&eacute;mon Serebii.net Pok&eacute;dex providing all details on moves, stats, abilities, evolution data and locations for Pok&eacute;mon Sword & Shield">
<meta name="twitter:card" content="summary_large_image">
<style type="text/css">h1 {font-size:14pt;font-weight:bold;margin-bottom:0px;} h2 { font-size:1em;font-weight:bold;margin-top:0px;margin-bottom:0px; } h3 {font-size:1em;font-weight: bold;margin-top:0px;margin-bottom:0px;}</style>




</head>
<body>

<header id="header">
	<div class="banner">
		<a href="/"><img src="/Banner.jpg" alt="Serebii.net Header"></a>
	</div>

	<nav class="quicklinks">
		<ul>
			<li><b>Quick Links</b></li>
			<li><a href="/index2.shtml">Home</a></li>
			<li><a href="https://forums.serebii.net/" target="blank">Forums</a></li>
			<li><a href="mailto:webmaster@serebii.net">Contact</a></li>
			<li><a href="/discord.shtml">Discord</a></li>
			<li><a href="/pokemon">Pokédex Hub</a></li>
			<li><a href="/pokemongo/pokemon">GO Pokédex</a></li>
			<li><a href="/pokedex-swsh">Sword & Shield Pokédex</a></li>
			<li><a href="/pokearth">Pokéarth</a></li>

			<li class="search">
				<form id="searchbox_018410473690156091934:6gahkiyodbi" action="/search.shtml" style="margin:0px;">
					<input type="hidden" name="cx" value="018410473690156091934:6gahkiyodbi" />
					<input type="hidden" name="cof" value="FORID:11" />
					<input name="q" type="text" size="20" />
					<input type="submit" name="sa" value="Search" />
				</form>
				<script type="text/javascript" src="//www.google.com/coop/cse/brand?form=searchbox_018410473690156091934%3A6gahkiyodbi"></script>
			</li>
		</ul>
	</nav>
</header>


<div id="wrapper">

<ul id="tbar_sticky">
	<li>
		<a href="#lbar" class="navheader" id="tbar_lbar_open"><img src="/hidden/2019-04/burger.svg"></a>
	</li>
	<li>
		<form id="searchbox_018410473690156091934:6gahkiyodbi" action="/search.shtml" style="margin:0px;">
			<input type="hidden" name="cx" value="018410473690156091934:6gahkiyodbi" />
			<input type="hidden" name="cof" value="FORID:11" />
			<input name="q" type="search" placeholder="Search Serebii.net..." />
		</form>
	</li>
	<li>
		<a href="#rbar" class="navheader" id="tbar_rbar_open"><img src="/hidden/2019-04/burger.svg"></a>
	</li>
</ul>
<div id="tbar_backdrop"></div>

<nav id="lbar">
	<ul id="lbar_ul">
		<li>
			<a href="/" class="navheader">Databases</a>
			<ul>
				<li><a href="/index2.shtml">News</a>
				<li><a href="/archive.shtml">Archived news</a></li>
				<li><a href="/pokemon/"><b>Pokédex</b></a></li>
				<li><a href="/pokedex/">-Red/Blue Pokédex</a></li>
				<li><a href="/pokedex-gs/">-Gold/Silver Pokédex</a></li>
				<li><a href="/pokedex-rs/">-Ruby/Sapphire Pokédex</a></li>
				<li><a href="/pokedex-dp/">-Diamond/Pearl Pokédex</a></li>
				<li><a href="/pokedex-bw/">-Black/White Pokédex</a></li>
				<li><a href="/pokedex-xy/">-X & Y Pokédex</a></li>
				<li><a href="/pokedex-sm/">-Sun & Moon Pokédex</a></li>
				<li><a href="/pokedex-sm/">-Let's Go Pokédex</a></li>
				<li><a href="/pokedex-swsh/">-Sword & Shield Pokédex</a></li>
				<li><a href="/pokemongo/pokemon/">-GO Pokédex</a></li>

				<li><strong>Attackdex</strong></li>
				<li><a href="/attackdex-rby/">-Gen 1 Attackdex</a></li>
				<li><a href="/attackdex-gs/">-Gen 2 Attackdex</a></li>
				<li><a href="/attackdex/">-Gen 3 Attackdex</a></li>
				<li><a href="/attackdex-dp/">-Gen 4 Attackdex</a></li>
				<li><a href="/attackdex-bw/">-Gen 5 Attackdex</a></li>
				<li><a href="/attackdex-xy/">-Gen 6 Attackdex</a></li>
				<li><a href="/attackdex-sm/">-Gen 7 Attackdex</a></li>
				<li><a href="/attackdex-swsh/">-Gen 8 Attackdex</a></li>
				<li><a href="/itemdex/">ItemDex</a></li>
				<li><a href="/pokearth/">Pokéarth</a></li>
				<li><a href="/abilitydex/">Abilitydex</a></li>
				<li><a href="/spindex/">Spin-Off Pokédex</a></li>
				<li><a href="/spindex-dp/">Spin-Off Pokédex DP</a></li>
				<li><a href="/spindex-bw/">Spin-Off Pokédex BW</a></li>
				<li><a href="/card/dex/">Cardex</a></li>
				<li><a href="/movies/dex/">Cinematic Pokédex</a></li>
				<li><a href="/games/mechanics.shtml">Game Mechanics</a></li>
				<li><a href="/games/iv-calcswsh.shtml">-Sword/Shield IV Calc.</a></li>
				<li><a href="/potw-swsh">Pokémon of the Week</a></li>
				<li><a href="/potw-swsh/">-8th Gen</a></li>
				<li><a href="/potw-sm/">-7th Gen</a></li>
				<li><a href="/potw-xy/">-6th Gen</a></li>
				<li><a href="http://www.serebiiforums.com" target="blank">Forums</a></li>
				<li><a href="http://advent.serebii.net" target="blank">Advent Calendar</a></li>
				<li><a href="/discord.shtml">Discord Chat</a></li>
				<li><a href="/games/currentevents.shtml">Current & Upcoming Events</a></li>
				<li><a href="/events">Event Database</a></li>
				<li><a href="/swordshield/pokemon.shtml">8th Generation Pokémon</a></li>
			</ul>
		</li>


		<li>
			<a href="/anime/" class="navheader">Anime</a>
			<ul>
				<li><a href="/anime/epiguide/">Episode Listings & Pictures</a>
				<li><a href="/anime/dex/">AniméDex</a></li>
				<li><a href="/anime/characters/">Character Bios</a></li>
				<li><a href="/anime/epiguide/indigo/">The Indigo League</a></li>
				<li><a href="/anime/epiguide/orange/">The Orange League</a></li>
				<li><a href="/anime/epiguide/johto/">The Johto Saga</a></li>
				<li><a href="/anime/epiguide/houen/">The Saga in Hoenn!</a></li>
				<li><a href="/anime/epiguide/kanto/">Kanto Battle Frontier Saga!</a></li>
				<li><a href="/anime/epiguide/shinou/">The Sinnoh Saga!</a></li>
				<li><a href="/anime/epiguide/bestwishes/">Best Wishes - Unova Saga</a></li>
				<li><a href="/anime/epiguide/xy/">XY - Kalos Saga</a></li>
				<li><a href="/anime/epiguide/sunmoon/">Sun & Moon - Alola Saga</a></li>
				<li><a href="/anime/epiguide/pokemon/">Pocket Monster - Galar Saga</a></li>
				<li><a href="/anime/epiguide/chronicles/">Pokémon Chronicles</a></li>
				<li><a href="/anime/epiguide/generations/">Pokémon Generations</a></li>
				<li><a href="/anime/epiguide/twilightwings/">Pokémon Twilight Wings</a></li>
				<li><a href="/anime/epiguide/specials/">The Special Episodes</a></li>
				<li><a href="/anime/banned.shtml">The Banned Episodes</a></li>
				<li><a href="/anime/shiny/">Shiny Pokémon</a></li>
				<li><a href="/anime/movies/">Movies In Anime</a></li>
				<li><a href="/anime/gba/">GBA Video Listings</a></li>
			</ul>
		</li>

		<li>
			<a href="/games/" class="navheader">Video Games</a>
			<ul>
				<li><a href="/pokemon/generation8.shtml"><b>Gen VIII</b></a></li>
				<li><a href="/swordshield/">Sword & Shield</a></li>
				<li><a href="/pokemonhome/">Pokémon HOME</a></li>
				<li><a href="/pokemonmasters/">Pokémon Masters</a></li>
				<li><a href="/pokemonsleep/">Pokémon Sleep</a></li>
				<li><a href="/detectivepikachu2/">Detective Pikachu 2</a></li>
				<li><a href="/pokemon/generation7.shtml"><b>Gen VII</b></a></li>
				<li><a href="/sunmoon/">Sun & Moon</a></li>
				<li><a href="/ultrasunultramoon/">Ultra Sun & Ultra Moon</a></li>
				<li><a href="/letsgopikachueevee/">Let's Go, Pikachu! & Let's Go, Eevee!</a></li>
				<li><a href="/pokemongo/">Pokémon GO</a></li>
				<li><a href="/magikarpjump/">Pokémon: Magikarp Jump</a></li>
				<li><a href="/rumblerush/">Pokémon Rumble Rush</a></li>
				<li><a href="/pokkendx/">Pokkén Tournament DX</a></li>
				<li><a href="/detective/">Detective Pikachu</a></li>
				<li><a href="/quest/">Pokémon Quest</a></li>
				<li><a href="/smashbrosultimate/">Super Smash Bros. Ultimate</a></li>
				<li><a href="/pokemon/generation6.shtml"><b>Gen VI</b></a></li>
				<li><a href="/xy/">X & Y</a></li>
				<li><a href="/omegarubyalphasapphire/">Omega Ruby & Alpha Sapphire</a></li>
				<li><a href="/bank/">Pokémon Bank</a></li>
				<li><a href="/battletrozei/">Pokémon Battle TrozeiPokémon Link: Battle</a></li>
				<li><a href="/artacademy/">Pokémon Art Academy</a></li>
				<li><a href="/bandofthieves/">The Band of Thieves & 1000 Pokémon</a></li>
				<li><a href="/shuffle/">Pokémon Shuffle</a></li>
				<li><a href="/rumbleworld/">Pokémon Rumble World</a></li>
				<li><a href="/supermysterydungeon/">Pokémon Super Mystery Dungeon</a></li>
				<li><a href="/picross/">Pokémon Picross</a></li>
				<li><a href="/detective/">Detective Pikachu</a></li>
				<li><a href="/pokken/">Pokkén Tournament</a></li>
				<li><a href="/duel/">Pokémon Duel</a></li>
				<li><a href="/smashbros3dswiiu/">Smash Bros for 3DS/Wii U</a></li>
				<li><a href="/games/badge/">Nintendo Badge Arcade</a></li>
				<li><a href="/pokemon/generation5.shtml"><b>Gen V</b></a></li>
				<li><a href="/blackwhite/">Black & White</a></li>
				<li><a href="/black2white2/">Black 2 & White 2</a></li>
				<li><a href="/dreamradar/">Pokémon Dream Radar</a></li>
				<li><a href="/trettalab/">Pokémon Tretta Lab</a></li>
				<li><a href="/rumbleu/">Pokémon Rumble U</a></li>
				<li><a href="/dungeoninfinity/">Mystery Dungeon: Gates to Infinity</a></li>
				<li><a href="/conquest/">Pokémon Conquest</a></li>
				<li><a href="/pokepark2/">PokéPark 2: Wonders Beyond</a></li>
				<li><a href="/rumble2/">Pokémon Rumble Blast</a></li>
				<li><a href="/pokedex3d/">Pokédex 3D</a></li>
				<li><a href="/pokedex3dpro/">Pokédex 3D Pro</a></li>
				<li><a href="/typingds/">Learn With Pokémon: Typing Adventure</a></li>
				<li><a href="/card/howtoplayds/">TCG How to Play DS</a></li>
				<li><a href="/pokedexios/">Pokédex for iOS</a></li>
				<li><a href="/pokemon/generation4.shtml"><b>Gen IV</b></a></li>
				<li><a href="/diamondpearl/">Diamond & Pearl</a></li>
				<li><a href="/platinum/">Platinum</a></li>
				<li><a href="/heartgoldsoulsilver/">Heart Gold & Soul Silver</a></li>
				<li><a href="/ranger3/">Pokémon Ranger: Guardian Signs</a></li>
				<li><a href="/melee/">Pokémon Rumble</a></li>
				<li><a href="/dungeon3/">Mystery Dungeon: Blazing, Stormy & Light Adventure Squad</a></li>
				<li><a href="/pokepark/">PokéPark Wii - Pikachu's  Adventure</a></li>
				<li><a href="/battle/">Pokémon Battle Revolution</a></li>
				<li><a href="/dungeonsky/">Mystery Dungeon - Explorers of Sky</a></li>
				<li><a href="/ranger2/">Pokémon Ranger: Shadows of Almia</a></li>
				<li><a href="/dungeon2/">Mystery Dungeon - Explorers of Time & Darkness</a></li>
				<li><a href="/ranch/">My Pokémon Ranch</a></li>
				<li><a href="/battrio/">Pokémon Battrio</a></li>
				<li><a href="/ssbb/">Smash Bros Brawl</a></li>
				<li><a href="/pokemon/generation3.shtml"><b>Gen III</b></a></li>
				<li><a href="/rubysapphire/">Ruby & Sapphire</a></li>
				<li><a href="/fireredleafgreen/">Fire Red & Leaf Green</a></li>
				<li><a href="/emerald/">Emerald</a></li>
				<li><a href="/colosseum/">Pokémon Colosseum</a></li>
				<li><a href="/xd/">Pokémon XD: Gale of Darkness</a></li>
				<li><a href="/dash/">Pokémon Dash</a></li>
				<li><a href="/pokemon_channel/">Pokémon Channel</a></li>
				<li><a href="/pokemon_box/">Pokémon Box: RS</a></li>
				<li><a href="/pinball_rs/">Pokémon Pinball RS</a></li>
				<li><a href="/ranger/">Pokémon Ranger</a></li>
				<li><a href="/mysteriousdungeon/">Mystery Dungeon Red & Blue</a></li>
				<li><a href="/torouze/">PokémonTrozei</a></li>
				<li><a href="/pikachu/">Pikachu DS Tech Demo</a></li>
				<li><a href="/pokeparkfish/">PokéPark Fishing Rally</a></li>
				<li><a href="/e-reader/">The E-Reader</a></li>
				<li><a href="/pokemate/">PokéMate</a></li>
				<li><a href="/pokemon/generation2.shtml"><b>Gen II</b></a></li>
				<li><a href="/gs/">Gold/Silver</a></li>
				<li><a href="/crystal/">Crystal</a></li>
				<li><a href="/stadium2/">Pokémon Stadium 2</a></li>
				<li><a href="/puzzlechallenge/">Pokémon Puzzle Challenge</a></li>
				<li><a href="/mini/">Pokémon Mini</a></li>
				<li><a href="/smash_bros_2/">Super Smash Bros. Melee</a></li>
				<li><a href="/pokemon/generation1.shtml"><b>Gen I</b></a></li>
				<li><a href="/rb/">Red, Blue & Green</a></li>
				<li><a href="/yellow/">Yellow</a></li>
				<li><a href="/puzzleleague/">Pokémon Puzzle League</a></li>
				<li><a href="/snap/">Pokémon Snap</a></li>
				<li><a href="/pinball/">Pokémon Pinball</a></li>
				<li><a href="/stadiumjp/">Pokémon Stadium (Japanese)</a></li>
				<li><a href="/stadium/">Pokémon Stadium</a></li>
				<li><a href="/tradingcardgamegb/">Pokémon Trading Card Game GB</a></li>
				<li><a href="/smash_bros/">Super Smash Bros.</a></li>

				<li><strong>Miscellaneous</strong></li>
				<li><a href="/games/mechanics.shtml">Game Mechanics</a></li>
				<li><a href="/vgc">Video Game Championships</a></li>
				<li><a href="/games/others.shtml">In Other Games</a></li>
				<li><a href="/games/virtualconsole.shtml">Virtual Console</a></li>
				<li><a href="/games/consoles.shtml">Special Edition Consoles</a></li>
				<li><a href="/games/themes.shtml">Pokémon 3DS Themes</a></li>
				<li><a href="/apps">Smartphone & Tablet Apps</a></li>
				<li><a href="/virtualpet">Virtual Pets</a></li>
				<li><a href="/amiibo">amiibo</a></li>
			</ul>
		</li>

		<li>
			<a href="/manga/" class="navheader">Manga</a>
			<ul>
				<li><a href="/manga/">General Information</a>
				<li><a href="/manga/dex">MangaDex</a></li>
				<li><a href="/manga/characters">Character BIOs</a></li>
				<li><a href="/manga/characters-new">Detailed BIOs</a></li>
				<li><a href="/manga/chapter.shtml">Chapter Guides</a></li>
				<li><a href="/manga/volume.shtml">Volume Guides</a></li>
				<li><a href="/manga/rby/">RBG Series</a></li>
				<li><a href="/manga/yellow/">Yellow Series</a></li>
				<li><a href="/manga/gsc/">GSC Series</a></li>
				<li><a href="/manga/rs/">RS Series</a></li>
				<li><a href="/manga/frlg/">FRLG Series</a></li>
				<li><a href="/manga/bf/">Emerald Series</a></li>
				<li><a href="/manga/dp/">DP Series</a></li>
				<li><a href="/manga/pt/">Platinum Series</a></li>
				<li><a href="/manga/hgss/">HGSS Series</a></li>
				<li><a href="/manga/bw/">BW Series</a></li>
				<li><a href="/manga/b2w2/">B2W2 Series</a></li>
				<li><a href="/manga/xy/">XY Series</a></li>
				<li><a href="/manga/oras/">ORAS Series</a></li>
				<li><a href="/manga/sunmoon/">SM Series</a></li>
			</ul>
		</li>

		<li>
			<a href="/movies/" class="navheader">Movies</a>
			<ul>
				<li><strong>Anime</strong></li>
				<li><a href="/movies/mewtwo/origin/">The Origin of Mewtwo</a></li>
				<li><a href="/movies/mewtwo/">Mewtwo Strikes Back</a></li>
				<li><a href="/movies/lugia/">The Power of One</a></li>
				<li><a href="/movies/entei/">Spell Of The Unown</a></li>
				<li><a href="/anime/epiguide/specials/002.shtml">Mewtwo Returns</a></li>
				<li><a href="/movies/serebii/">Celebi: Voice of the Forest</a></li>
				<li><a href="/movies/latias_latios/">Pokémon Heroes</a></li>
				<li><a href="/movies/jirachi/">Jirachi - Wish Maker</a></li>
				<li><a href="/movies/deoxys/">Destiny Deoxys!</a></li>
				<li><a href="/movies/mew/">Lucario and the Mystery of Mew!</a></li>
				<li><a href="/movies/kyogre/">Pokémon Ranger & The Temple of the Sea!</a></li>
				<li><a href="/movies/dp/">The Rise of Darkrai!</a></li>
				<li><a href="/movies/giratina/">Giratina & The Sky Warrior!</a></li>
				<li><a href="/movies/arceus/">Arceus and the Jewel of Life</a></li>
				<li><a href="/movies/celebi/">Zoroark - Master of Illusions</a></li>
				<li><a href="/movies/victini/">Black: Victini & ReshiramWhite: Victini & Zekrom</a></li>
				<li><a href="/movies/kyurem/">Kyurem VS The Sword of Justice</a></li>
				<li><a href="/movies/meloetta/">-Meloetta's Midnight Serenade</a></li>
				<li><a href="/movies/genesect/">Genesect and the Legend Awakened</a></li>
				<li><a href="/movies/xy/">Diancie & The Cocoon of Destruction</a></li>
				<li><a href="/movies/hoopa/">Hoopa & The Clash of Ages</a></li>
				<li><a href="/movies/volcanion/">Volcanion and the Mechanical Marvel</a></li>
				<li><a href="/movies/pokemon20/">Pokémon I Choose You!</a></li>
				<li><a href="/movies/thepowerofus/">Pokémon The Power of Us</a></li>
				<li><a href="/movies/mewtwoevolution/">Mewtwo Strikes Back Evolution</a></li>
				<li><strong>Live Action</strong></li>
				<li><a href="/movies/detectivepikachu/">Pokémon Detective Pikachu</a></li>
			</ul>
		</li>

		<li>
			<a href="/movies/" class="navheader">Pikachu Shorts</a>
			<ul>
				<li><a href="/movies/pikachu1/">Pikachu's Summer Vacation</a></li>
				<li><a href="/movies/pikachu2/">Pikachu's Rescue Adventure</a></li>
				<li><a href="/movies/pikachu3/">Pikachu And Pichu</a></li>
				<li><a href="/movies/pikachu4/">Pikachu's PikaBoo</a></li>
				<li><a href="/movies/pikachu5/">Camp Pikachu!</a></li>
				<li><a href="/movies/pikachu6/">Gotta Dance!!</a></li>
				<li><a href="/movies/pikachu7/">Pikachu's Summer Festival!</a></li>
				<li><a href="/movies/pikachu8/">Pikachu's Ghost Festival!</a></li>
				<li><a href="/movies/pikachu9/">Pikachu's Island Adventure!</a></li>
				<li><a href="/movies/pikachu10/">Pikachu's Exploration Club</a></li>
				<li><a href="/movies/pikachu11/">Pikachu's Great Ice Adventure</a></li>
				<li><a href="/movies/pikachu12/">Pikachu's Sparkling Search</a></li>
				<li><a href="/movies/pikachu13/">Pikachu's Really Mysterious Adventure</a></li>
				<li><a href="/movies/eevee/">Eevee & Friends</a></li>
				<li><a href="/movies/klefki/">Pikachu, What's This Key?</a></li>
				<li><a href="/movies/pikachumusic/">Pikachu & The Pokémon Music Squad</a></li>
			</ul>
		</li>

		<li>
			<a href="/card/" class="navheader">Trading Cards</a>
			<ul>
				<li><a href="/card/dex/">Cardex</a></li>
				<li><a href="/card/dex/extra">-Extra Pokémon Types</a></li>
				<li><a href="/card/dex/trainers">Trainer Cards</a></li>
				<li><a href="/card/dex/energy">Energy Cards</a></li>
				<li><a href="/card/dex/extra/altart.shtml">Alternate Art Cards</a></li>
				<li><a href="/card/english.shtml"><b>English Sets</b></a></li>
				<li><a href="/card/swordshield">-Sword & Shield</a></li>
				<li><a href="/card/cosmiceclipse">-Cosmic Eclipse</a></li>
				<li><a href="/card/hiddenfates">-Hidden Fates</a></li>
				<li><a href="/card/unifiedminds">-Unified Minds</a></li>
				<li><a href="/card/unbrokenbonds">-Unbroken Bonds</a></li>
				<li><a href="/card/pokemondetectivepikachu">-Detective Pikachu</a></li>
				<li><a href="/card/teamup">-Team Up</a></li>
				<li><a href="/card/lostthunder">-Lost Thunder</a></li>
				<li><a href="/card/dragonmajesty">-Dragon Majesty</a></li>
				<li><a href="/card/celestialstorm">-Celestial Storm</a></li>
				<li><a href="/card/forbiddenlight">-Forbidden Light</a></li>
				<li><a href="/card/ultraprism">-Ultra Prism</a></li>
				<li><a href="/card/xy.shtml">-XY Series</a></li>
				<li><a href="/card/bw.shtml">-BW Series</a></li>
				<li><a href="/card/dpt.shtml">-DPtHS Series</a></li>
				<li><a href="/card/ex.shtml">-EX Series</a></li>
				<li><a href="/card/neo.shtml">-Neo/eSeries</a></li>
				<li><a href="/card/first.shtml">-First Gen Series</a></li>
				<li><a href="/card/engpromo.shtml"><b>English Promos</b></a></li>
				<li><a href="/card/swshpromos">-SWSH Promos</a></li>
				<li><a href="/card/smpromos">-SM Promos</a></li>
				<li><a href="/card/xypromos">-XY Promos</a></li>
				<li><a href="/card/bwpromos">-BW Promos</a></li>
				<li><a href="/card/hgsspromo">-HGSS Promo</a></li>
				<li><a href="/card/popseries.shtml">-POP Series</a></li>
				<li><a href="/card/japanese.shtml"><b>Japanese Sets</b></a></li>
				<li><a href="/card/sword">-Sword</a></li>
				<li><a href="/card/shield">-Shield</a></li>
				<li><a href="/card/tagallstars">-Tag All Stars</a></li>
				<li><a href="/card/altergenesis">-Alter Genesis</a></li>
				<li><a href="/card/dreamleague">-Dream League</a></li>
				<li><a href="/card/remixbout">-Remix Bout</a></li>
				<li><a href="/card/miracletwin">-Miracle Twin</a></li>
				<li><a href="/card/skylegend">-Sky Legend</a></li>
				<li><a href="/card/ggend">-GG End</a></li>
				<li><a href="/card/doubleblaze">-Double Blaze</a></li>
				<li><a href="/card/fullmetalwall">-Full Metal Wall</a></li>
				<li><a href="/card/nightunison">-Night Unison</a></li>
				<li><a href="/card/tagbolt">-Tag Bolt</a></li>
				<li><a href="/card/gxultrashiny">-GX Ultra Shiny</a></li>
				<li><a href="/card/vs">-Pokémon VS</a></li>
				<li><a href="/card/jppromo.shtml"><b>Japanese Promos</b></a></li>
				<li><a href="/card/spromo">-S Promos</a></li>
				<li><a href="/card/smpromo">-SM Promos</a></li>

			</ul>
		</li>
	</ul>
</nav>


<script type="text/javascript">

function loadMobileLbar(){
	var tbar_lbar_open=document.getElementById('tbar_lbar_open'),
		tbar_backdrop=document.getElementById('tbar_backdrop'),
		lbar=document.getElementById('lbar'),
		lbarLIs=document.querySelectorAll("#lbar_ul>li .navheader"),
		lbarLIULs=document.querySelectorAll("#lbar_ul>li>ul");

	/* lbar display/hide */
	tbar_lbar_open.onclick=function() {
		if (lbar.className.indexOf("show") > -1){//hide
			lbar.className = lbar.className.replace("show","");
			bodyRemoveClass("nav_modal");
		} else{//show
			lbar.classList.add("show");
			bodyAddClass("nav_modal");
		}

		return false;
	}


	/* background clicked when bar shown */
	tbar_backdrop.onclick=function() {// if the backdrop is clicked, hide menus
		lbar.className = lbar.className.replace("show","");
		rbar.className = rbar.className.replace("show","");
		bodyRemoveClass("nav_modal");
		return false;
	}

	/* handle expand/collapse sub-menus in lbar by attaching click events */
	for(i=0; i<lbarLIs.length; i++){
		lbarLIs[i].onclick=function(i) {
			var elem=this.parentNode.getElementsByTagName("UL")[0];
			var elemDisp=(elem.className.indexOf("show") === -1)

			// hide all ul, then open one if clicked
			for(i2=0; i2<lbarLIULs.length; i2++){
				lbarLIULs[i2].className = lbarLIULs[i2].className.replace("show","");
			}

			if(elemDisp){
				elem.classList.add("show");
			}

			return false;
		}
	}
}
function loadMobileRbar(){
	var tbar_rbar_open=document.getElementById('tbar_rbar_open'),
		rbar=document.getElementById('rbar');

	/* rbar display/hide */
	tbar_rbar_open.onclick=function() {
		if (rbar.className.indexOf("show") > -1){//hide
			rbar.className = rbar.className.replace("show","");
			bodyRemoveClass("nav_modal");
		} else{//show
			rbar.classList.add("show");
			bodyAddClass("nav_modal");
		}

		return false;
	}
}

loadMobileLbar();

/* attach listener to for rbar events AFTER page loads (because #rbar hasn't loaded at this point in page ) */
if(window.addEventListener){
	window.addEventListener('load', loadMobileRbar)
} else{
	window.attachEvent('onload', loadMobileRbar)
}
</script>



<div id="content">
		<div class="center" style="margin-top:10px"><div id="nn_lb1"></div><div id="nn_mobile_lb1"></div></div>
<main>


<div align=center><table align=center width="95%" border="0" cellspacing="0" cellpadding="4">

<tr>

<td align="center" width="25%"><FORM NAME="nav">

 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav.SelectURL.options[document.nav.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>

<option value="#">Kanto: 001 - 151</option>

<option value="/pokedex-swsh/bulbasaur/">001 Bulbasaur</option>
<option value="/pokedex-swsh/ivysaur/">002 Ivysaur</option>
<option value="/pokedex-swsh/venusaur/">003 Venusaur</option>
<option value="/pokedex-swsh/charmander/">004 Charmander</option>
<option value="/pokedex-swsh/charmeleon/">005 Charmeleon</option>
<option value="/pokedex-swsh/charizard/">006 Charizard</option>
<option value="/pokedex-swsh/squirtle/">007 Squirtle</option>
<option value="/pokedex-swsh/wartortle/">008 Wartortle</option>
<option value="/pokedex-swsh/blastoise/">009 Blastoise</option>
<option value="/pokedex-swsh/caterpie/">010 Caterpie</option>
<option value="/pokedex-swsh/metapod/">011 Metapod</option>
<option value="/pokedex-swsh/butterfree/">012 Butterfree</option>
<option value="/pokedex-swsh/pikachu/">025 Pikachu</option>
<option value="/pokedex-swsh/raichu/">026 Raichu</option>
<option value="/pokedex-swsh/clefairy/">035 Clefairy</option>
<option value="/pokedex-swsh/clefable/">036 Clefable</option>
<option value="/pokedex-swsh/vulpix/">037 Vulpix</option>
<option value="/pokedex-swsh/ninetales/">038 Ninetales</option>
<option value="/pokedex-swsh/oddish/">043 Oddish</option>
<option value="/pokedex-swsh/gloom/">044 Gloom</option>
<option value="/pokedex-swsh/vileplume/">045 Vileplume</option>
<option value="/pokedex-swsh/diglett/">050 Diglett</option>
<option value="/pokedex-swsh/dugtrio/">051 Dugtrio</option>
<option value="/pokedex-swsh/meowth/">052 Meowth</option>
<option value="/pokedex-swsh/persian/">053 Persian</option>
<option value="/pokedex-swsh/growlithe/">058 Growlithe</option>
<option value="/pokedex-swsh/arcanine/">059 Arcanine</option>
<option value="/pokedex-swsh/machop/">066 Machop</option>
<option value="/pokedex-swsh/machoke/">067 Machoke</option>
<option value="/pokedex-swsh/machamp/">068 Machamp</option>
<option value="/pokedex-swsh/ponyta/">077 Ponyta</option>
<option value="/pokedex-swsh/rapidash/">078 Rapidash</option>
<option value="/pokedex-swsh/farfetch'd/">083 Farfetch'd</option>
<option value="/pokedex-swsh/shellder/">090 Shellder</option>
<option value="/pokedex-swsh/cloyster/">091 Cloyster</option>
<option value="/pokedex-swsh/gastly/">092 Gastly</option>
<option value="/pokedex-swsh/haunter/">093 Haunter</option>
<option value="/pokedex-swsh/gengar/">094 Gengar</option>
<option value="/pokedex-swsh/onix/">095 Onix</option>
<option value="/pokedex-swsh/krabby/">098 Krabby</option>
<option value="/pokedex-swsh/kingler/">099 Kingler</option>
<option value="/pokedex-swsh/hitmonlee/">106 Hitmonlee</option>
<option value="/pokedex-swsh/hitmonchan/">107 Hitmonchan</option>
<option value="/pokedex-swsh/koffing/">109 Koffing</option>
<option value="/pokedex-swsh/weezing/">110 Weezing</option>
<option value="/pokedex-swsh/rhyhorn/">111 Rhyhorn</option>
<option value="/pokedex-swsh/rhydon/">112 Rhydon</option>
<option value="/pokedex-swsh/goldeen/">118 Goldeen</option>
<option value="/pokedex-swsh/seaking/">119 Seaking</option>
<option value="/pokedex-swsh/mr.mime/">122 Mr. Mime</option>
<option value="/pokedex-swsh/magikarp/">129 Magikarp</option>
<option value="/pokedex-swsh/gyarados/">130 Gyarados</option>
<option value="/pokedex-swsh/lapras/">131 Lapras</option>
<option value="/pokedex-swsh/ditto/">132 Ditto</option>
<option value="/pokedex-swsh/eevee/">133 Eevee</option>
<option value="/pokedex-swsh/vaporeon/">134 Vaporeon</option>
<option value="/pokedex-swsh/jolteon/">135 Jolteon</option>
<option value="/pokedex-swsh/flareon/">136 Flareon</option>
<option value="/pokedex-swsh/snorlax/">143 Snorlax</option>
<option value="/pokedex-swsh/mewtwo/">150 Mewtwo</option>
<option value="/pokedex-swsh/mew/">151 Mew</option>
</SELECT> </FORM></td>

<td align="center" width="25%">

<FORM NAME="nav2">

 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav2.SelectURL.options[document.nav2.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>

<option value="#">Johto: 152 - 251</option>

<option value="/pokedex-swsh/hoothoot/">163 Hoothoot</option>
<option value="/pokedex-swsh/noctowl/">164 Noctowl</option>
<option value="/pokedex-swsh/chinchou/">170 Chinchou</option>
<option value="/pokedex-swsh/lanturn/">171 Lanturn</option>
<option value="/pokedex-swsh/pichu/">172 Pichu</option>
<option value="/pokedex-swsh/cleffa/">173 Cleffa</option>
<option value="/pokedex-swsh/togepi/">175 Togepi</option>
<option value="/pokedex-swsh/togetic/">176 Togetic</option>
<option value="/pokedex-swsh/natu/">177 Natu</option>
<option value="/pokedex-swsh/xatu/">178 Xatu</option>
<option value="/pokedex-swsh/bellossom/">182 Bellossom</option>
<option value="/pokedex-swsh/sudowoodo/">185 Sudowoodo</option>
<option value="/pokedex-swsh/wooper/">194 Wooper</option>
<option value="/pokedex-swsh/quagsire/">195 Quagsire</option>
<option value="/pokedex-swsh/espeon/">196 Espeon</option>
<option value="/pokedex-swsh/umbreon/">197 Umbreon</option>
<option value="/pokedex-swsh/wobbuffet/">202 Wobbuffet</option>
<option value="/pokedex-swsh/steelix/">208 Steelix</option>
<option value="/pokedex-swsh/qwilfish/">211 Qwilfish</option>
<option value="/pokedex-swsh/shuckle/">213 Shuckle</option>
<option value="/pokedex-swsh/sneasel/">215 Sneasel</option>
<option value="/pokedex-swsh/swinub/">220 Swinub</option>
<option value="/pokedex-swsh/piloswine/">221 Piloswine</option>
<option value="/pokedex-swsh/corsola/">222 Corsola</option>
<option value="/pokedex-swsh/remoraid/">223 Remoraid</option>
<option value="/pokedex-swsh/octillery/">224 Octillery</option>
<option value="/pokedex-swsh/delibird/">225 Delibird</option>
<option value="/pokedex-swsh/mantine/">226 Mantine</option>
<option value="/pokedex-swsh/tyrogue/">236 Tyrogue</option>
<option value="/pokedex-swsh/hitmontop/">237 Hitmontop</option>
<option value="/pokedex-swsh/larvitar/">246 Larvitar</option>
<option value="/pokedex-swsh/pupitar/">247 Pupitar</option>
<option value="/pokedex-swsh/tyranitar/">248 Tyranitar</option>
<option value="/pokedex-swsh/celebi/">251 Celebi</option>
</SELECT> </FORM></td>

<td align="center" width="25%"> <FORM NAME="nav4">

 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav4.SelectURL.options[document.nav4.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>

<option value="#">Hoenn: 252-386</option>

<option value="/pokedex-swsh/zigzagoon/">263 Zigzagoon</option>
<option value="/pokedex-swsh/linoone/">264 Linoone</option>
<option value="/pokedex-swsh/lotad/">270 Lotad</option>
<option value="/pokedex-swsh/lombre/">271 Lombre</option>
<option value="/pokedex-swsh/ludicolo/">272 Ludicolo</option>
<option value="/pokedex-swsh/seedot/">273 Seedot</option>
<option value="/pokedex-swsh/nuzleaf/">274 Nuzleaf</option>
<option value="/pokedex-swsh/shiftry/">275 Shiftry</option>
<option value="/pokedex-swsh/wingull/">278 Wingull</option>
<option value="/pokedex-swsh/pelipper/">279 Pelipper</option>
<option value="/pokedex-swsh/ralts/">280 Ralts</option>
<option value="/pokedex-swsh/kirlia/">281 Kirlia</option>
<option value="/pokedex-swsh/gardevoir/">282 Gardevoir</option>
<option value="/pokedex-swsh/nincada/">290 Nincada</option>
<option value="/pokedex-swsh/ninjask/">291 Ninjask</option>
<option value="/pokedex-swsh/shedinja/">292 Shedinja</option>
<option value="/pokedex-swsh/sableye/">302 Sableye</option>
<option value="/pokedex-swsh/mawile/">303 Mawile</option>
<option value="/pokedex-swsh/electrike/">309 Electrike</option>
<option value="/pokedex-swsh/manectric/">310 Manectric</option>
<option value="/pokedex-swsh/roselia/">315 Roselia</option>
<option value="/pokedex-swsh/wailmer/">320 Wailmer</option>
<option value="/pokedex-swsh/wailord/">321 Wailord</option>
<option value="/pokedex-swsh/torkoal/">324 Torkoal</option>
<option value="/pokedex-swsh/trapinch/">328 Trapinch</option>
<option value="/pokedex-swsh/vibrava/">329 Vibrava</option>
<option value="/pokedex-swsh/flygon/">330 Flygon</option>
<option value="/pokedex-swsh/lunatone/">337 Lunatone</option>
<option value="/pokedex-swsh/solrock/">338 Solrock</option>
<option value="/pokedex-swsh/barboach/">339 Barboach</option>
<option value="/pokedex-swsh/whiscash/">340 Whiscash</option>
<option value="/pokedex-swsh/corphish/">341 Corphish</option>
<option value="/pokedex-swsh/crawdaunt/">342 Crawdaunt</option>
<option value="/pokedex-swsh/baltoy/">343 Baltoy</option>
<option value="/pokedex-swsh/claydol/">344 Claydol</option>
<option value="/pokedex-swsh/feebas/">349 Feebas</option>
<option value="/pokedex-swsh/milotic/">350 Milotic</option>
<option value="/pokedex-swsh/duskull/">355 Duskull</option>
<option value="/pokedex-swsh/dusclops/">356 Dusclops</option>
<option value="/pokedex-swsh/wynaut/">360 Wynaut</option>
<option value="/pokedex-swsh/snorunt/">361 Snorunt</option>
<option value="/pokedex-swsh/glalie/">362 Glalie</option>
<option value="/pokedex-swsh/jirachi/">385 Jirachi</option>
</SELECT> </FORM></td>

<td width="25%" align="center"> <FORM NAME="nav5">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav5.SelectURL.options[document.nav5.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
<option value="#">Sinnoh: 387-493</option>

<option value="/pokedex-swsh/budew/">406 Budew</option>
<option value="/pokedex-swsh/roserade/">407 Roserade</option>
<option value="/pokedex-swsh/combee/">415 Combee</option>
<option value="/pokedex-swsh/vespiquen/">416 Vespiquen</option>
<option value="/pokedex-swsh/cherubi/">420 Cherubi</option>
<option value="/pokedex-swsh/cherrim/">421 Cherrim</option>
<option value="/pokedex-swsh/shellos/">422 Shellos</option>
<option value="/pokedex-swsh/gastrodon/">423 Gastrodon</option>
<option value="/pokedex-swsh/drifloon/">425 Drifloon</option>
<option value="/pokedex-swsh/drifblim/">426 Drifblim</option>
<option value="/pokedex-swsh/stunky/">434 Stunky</option>
<option value="/pokedex-swsh/skuntank/">435 Skuntank</option>
<option value="/pokedex-swsh/bronzor/">436 Bronzor</option>
<option value="/pokedex-swsh/bronzong/">437 Bronzong</option>
<option value="/pokedex-swsh/bonsly/">438 Bonsly</option>
<option value="/pokedex-swsh/mimejr./">439 Mime Jr.</option>
<option value="/pokedex-swsh/munchlax/">446 Munchlax</option>
<option value="/pokedex-swsh/riolu/">447 Riolu</option>
<option value="/pokedex-swsh/lucario/">448 Lucario</option>
<option value="/pokedex-swsh/hippopotas/">449 Hippopotas</option>
<option value="/pokedex-swsh/hippowdon/">450 Hippowdon</option>
<option value="/pokedex-swsh/skorupi/">451 Skorupi</option>
<option value="/pokedex-swsh/drapion/">452 Drapion</option>
<option value="/pokedex-swsh/croagunk/">453 Croagunk</option>
<option value="/pokedex-swsh/toxicroak/">454 Toxicroak</option>
<option value="/pokedex-swsh/mantyke/">458 Mantyke</option>
<option value="/pokedex-swsh/snover/">459 Snover</option>
<option value="/pokedex-swsh/abomasnow/">460 Abomasnow</option>
<option value="/pokedex-swsh/weavile/">461 Weavile</option>
<option value="/pokedex-swsh/rhyperior/">464 Rhyperior</option>
<option value="/pokedex-swsh/togekiss/">468 Togekiss</option>
<option value="/pokedex-swsh/leafeon/">470 Leafeon</option>
<option value="/pokedex-swsh/glaceon/">471 Glaceon</option>
<option value="/pokedex-swsh/mamoswine/">473 Mamoswine</option>
<option value="/pokedex-swsh/gallade/">475 Gallade</option>
<option value="/pokedex-swsh/dusknoir/">477 Dusknoir</option>
<option value="/pokedex-swsh/froslass/">478 Froslass</option>
<option value="/pokedex-swsh/rotom/">479 Rotom</option></SELECT> </FORM></td></tr><tr>
<td width="25%" align="center"> <FORM NAME="nav6">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav6.SelectURL.options[document.nav6.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
<option value="#">Unova: 494-649</option>

<option value="/pokedex-swsh/purrloin/">509 Purrloin</option>
<option value="/pokedex-swsh/liepard/">510 Liepard</option>
<option value="/pokedex-swsh/munna/">517 Munna</option>
<option value="/pokedex-swsh/musharna/">518 Musharna</option>
<option value="/pokedex-swsh/pidove/">519 Pidove</option>
<option value="/pokedex-swsh/tranquill/">520 Tranquill</option>
<option value="/pokedex-swsh/unfezant/">521 Unfezant</option>
<option value="/pokedex-swsh/roggenrola/">524 Roggenrola</option>
<option value="/pokedex-swsh/boldore/">525 Boldore</option>
<option value="/pokedex-swsh/gigalith/">526 Gigalith</option>
<option value="/pokedex-swsh/woobat/">527 Woobat</option>
<option value="/pokedex-swsh/swoobat/">528 Swoobat</option>
<option value="/pokedex-swsh/drilbur/">529 Drilbur</option>
<option value="/pokedex-swsh/excadrill/">530 Excadrill</option>
<option value="/pokedex-swsh/timburr/">532 Timburr</option>
<option value="/pokedex-swsh/gurdurr/">533 Gurdurr</option>
<option value="/pokedex-swsh/conkeldurr/">534 Conkeldurr</option>
<option value="/pokedex-swsh/tympole/">535 Tympole</option>
<option value="/pokedex-swsh/palpitoad/">536 Palpitoad</option>
<option value="/pokedex-swsh/seismitoad/">537 Seismitoad</option>
<option value="/pokedex-swsh/throh/">538 Throh</option>
<option value="/pokedex-swsh/sawk/">539 Sawk</option>
<option value="/pokedex-swsh/cottonee/">546 Cottonee</option>
<option value="/pokedex-swsh/whimsicott/">547 Whimsicott</option>
<option value="/pokedex-swsh/basculin/">550 Basculin</option>
<option value="/pokedex-swsh/darumaka/">554 Darumaka</option>
<option value="/pokedex-swsh/darmanitan/">555 Darmanitan</option>
<option value="/pokedex-swsh/maractus/">556 Maractus</option>
<option value="/pokedex-swsh/dwebble/">557 Dwebble</option>
<option value="/pokedex-swsh/crustle/">558 Crustle</option>
<option value="/pokedex-swsh/scraggy/">559 Scraggy</option>
<option value="/pokedex-swsh/scrafty/">560 Scrafty</option>
<option value="/pokedex-swsh/sigilyph/">561 Sigilyph</option>
<option value="/pokedex-swsh/yamask/">562 Yamask</option>
<option value="/pokedex-swsh/cofagrigus/">563 Cofagrigus</option>
<option value="/pokedex-swsh/trubbish/">568 Trubbish</option>
<option value="/pokedex-swsh/garbodor/">569 Garbodor</option>
<option value="/pokedex-swsh/minccino/">572 Minccino</option>
<option value="/pokedex-swsh/cinccino/">573 Cinccino</option>
<option value="/pokedex-swsh/gothita/">574 Gothita</option>
<option value="/pokedex-swsh/gothorita/">575 Gothorita</option>
<option value="/pokedex-swsh/gothitelle/">576 Gothitelle</option>
<option value="/pokedex-swsh/solosis/">577 Solosis</option>
<option value="/pokedex-swsh/duosion/">578 Duosion</option>
<option value="/pokedex-swsh/reuniclus/">579 Reuniclus</option>
<option value="/pokedex-swsh/vanillite/">582 Vanillite</option>
<option value="/pokedex-swsh/vanillish/">583 Vanillish</option>
<option value="/pokedex-swsh/vanilluxe/">584 Vanilluxe</option>
<option value="/pokedex-swsh/karrablast/">588 Karrablast</option>
<option value="/pokedex-swsh/escavalier/">589 Escavalier</option>
<option value="/pokedex-swsh/frillish/">592 Frillish</option>
<option value="/pokedex-swsh/jellicent/">593 Jellicent</option>
<option value="/pokedex-swsh/joltik/">595 Joltik</option>
<option value="/pokedex-swsh/galvantula/">596 Galvantula</option>
<option value="/pokedex-swsh/ferroseed/">597 Ferroseed</option>
<option value="/pokedex-swsh/ferrothorn/">598 Ferrothorn</option>
<option value="/pokedex-swsh/klink/">599 Klink</option>
<option value="/pokedex-swsh/klang/">600 Klang</option>
<option value="/pokedex-swsh/klinklang/">601 Klinklang</option>
<option value="/pokedex-swsh/elgyem/">605 Elgyem</option>
<option value="/pokedex-swsh/beheeyem/">606 Beheeyem</option>
<option value="/pokedex-swsh/litwick/">607 Litwick</option>
<option value="/pokedex-swsh/lampent/">608 Lampent</option>
<option value="/pokedex-swsh/chandelure/">609 Chandelure</option>
<option value="/pokedex-swsh/axew/">610 Axew</option>
<option value="/pokedex-swsh/fraxure/">611 Fraxure</option>
<option value="/pokedex-swsh/haxorus/">612 Haxorus</option>
<option value="/pokedex-swsh/cubchoo/">613 Cubchoo</option>
<option value="/pokedex-swsh/beartic/">614 Beartic</option>
<option value="/pokedex-swsh/shelmet/">616 Shelmet</option>
<option value="/pokedex-swsh/accelgor/">617 Accelgor</option>
<option value="/pokedex-swsh/stunfisk/">618 Stunfisk</option>
<option value="/pokedex-swsh/golett/">622 Golett</option>
<option value="/pokedex-swsh/golurk/">623 Golurk</option>
<option value="/pokedex-swsh/pawniard/">624 Pawniard</option>
<option value="/pokedex-swsh/bisharp/">625 Bisharp</option>
<option value="/pokedex-swsh/rufflet/">627 Rufflet</option>
<option value="/pokedex-swsh/braviary/">628 Braviary</option>
<option value="/pokedex-swsh/vullaby/">629 Vullaby</option>
<option value="/pokedex-swsh/mandibuzz/">630 Mandibuzz</option>
<option value="/pokedex-swsh/heatmor/">631 Heatmor</option>
<option value="/pokedex-swsh/durant/">632 Durant</option>
<option value="/pokedex-swsh/deino/">633 Deino</option>
<option value="/pokedex-swsh/zweilous/">634 Zweilous</option>
<option value="/pokedex-swsh/hydreigon/">635 Hydreigon</option>
<option value="/pokedex-swsh/cobalion/">638 Cobalion</option>
<option value="/pokedex-swsh/terrakion/">639 Terrakion</option>
<option value="/pokedex-swsh/virizion/">640 Virizion</option>
<option value="/pokedex-swsh/reshiram/">643 Reshiram</option>
<option value="/pokedex-swsh/zekrom/">644 Zekrom</option>
<option value="/pokedex-swsh/kyurem/">646 Kyurem</option>
<option value="/pokedex-swsh/keldeo/">647 Keldeo</option></SELECT> </FORM></td>
<td width="25%" align="center"> <FORM NAME="nav7">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav7.SelectURL.options[document.nav7.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
<option value="#">Kalos: 650-721</option>

<option value="/pokedex-swsh/bunnelby/">659 Bunnelby</option>
<option value="/pokedex-swsh/diggersby/">660 Diggersby</option>
<option value="/pokedex-swsh/pancham/">674 Pancham</option>
<option value="/pokedex-swsh/pangoro/">675 Pangoro</option>
<option value="/pokedex-swsh/espurr/">677 Espurr</option>
<option value="/pokedex-swsh/meowstic/">678 Meowstic</option>
<option value="/pokedex-swsh/honedge/">679 Honedge</option>
<option value="/pokedex-swsh/doublade/">680 Doublade</option>
<option value="/pokedex-swsh/aegislash/">681 Aegislash</option>
<option value="/pokedex-swsh/spritzee/">682 Spritzee</option>
<option value="/pokedex-swsh/aromatisse/">683 Aromatisse</option>
<option value="/pokedex-swsh/swirlix/">684 Swirlix</option>
<option value="/pokedex-swsh/slurpuff/">685 Slurpuff</option>
<option value="/pokedex-swsh/inkay/">686 Inkay</option>
<option value="/pokedex-swsh/malamar/">687 Malamar</option>
<option value="/pokedex-swsh/binacle/">688 Binacle</option>
<option value="/pokedex-swsh/barbaracle/">689 Barbaracle</option>
<option value="/pokedex-swsh/helioptile/">694 Helioptile</option>
<option value="/pokedex-swsh/heliolisk/">695 Heliolisk</option>
<option value="/pokedex-swsh/sylveon/">700 Sylveon</option>
<option value="/pokedex-swsh/hawlucha/">701 Hawlucha</option>
<option value="/pokedex-swsh/goomy/">704 Goomy</option>
<option value="/pokedex-swsh/sliggoo/">705 Sliggoo</option>
<option value="/pokedex-swsh/goodra/">706 Goodra</option>
<option value="/pokedex-swsh/phantump/">708 Phantump</option>
<option value="/pokedex-swsh/trevenant/">709 Trevenant</option>
<option value="/pokedex-swsh/pumpkaboo/">710 Pumpkaboo</option>
<option value="/pokedex-swsh/gourgeist/">711 Gourgeist</option>
<option value="/pokedex-swsh/bergmite/">712 Bergmite</option>
<option value="/pokedex-swsh/avalugg/">713 Avalugg</option>
<option value="/pokedex-swsh/noibat/">714 Noibat</option>
<option value="/pokedex-swsh/noivern/">715 Noivern</option>
</SELECT> </FORM></td><td width="25%" align="center"> <FORM NAME="nav8">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav8.SelectURL.options[document.nav8.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
<option value="#">Alola: 722-809</option>
<option value="/pokedex-swsh/rowlet/">722 Rowlet</option>
<option value="/pokedex-swsh/dartrix/">723 Dartrix</option>
<option value="/pokedex-swsh/decidueye/">724 Decidueye</option>
<option value="/pokedex-swsh/litten/">725 Litten</option>
<option value="/pokedex-swsh/torracat/">726 Torracat</option>
<option value="/pokedex-swsh/incineroar/">727 Incineroar</option>
<option value="/pokedex-swsh/popplio/">728 Popplio</option>
<option value="/pokedex-swsh/brionne/">729 Brionne</option>
<option value="/pokedex-swsh/primarina/">730 Primarina</option>
<option value="/pokedex-swsh/grubbin/">736 Grubbin</option>
<option value="/pokedex-swsh/charjabug/">737 Charjabug</option>
<option value="/pokedex-swsh/vikavolt/">738 Vikavolt</option>
<option value="/pokedex-swsh/cutiefly/">742 Cutiefly</option>
<option value="/pokedex-swsh/ribombee/">743 Ribombee</option>
<option value="/pokedex-swsh/wishiwashi/">746 Wishiwashi</option>
<option value="/pokedex-swsh/mareanie/">747 Mareanie</option>
<option value="/pokedex-swsh/toxapex/">748 Toxapex</option>
<option value="/pokedex-swsh/mudbray/">749 Mudbray</option>
<option value="/pokedex-swsh/mudsdale/">750 Mudsdale</option>
<option value="/pokedex-swsh/dewpider/">751 Dewpider</option>
<option value="/pokedex-swsh/araquanid/">752 Araquanid</option>
<option value="/pokedex-swsh/morelull/">755 Morelull</option>
<option value="/pokedex-swsh/shiinotic/">756 Shiinotic</option>
<option value="/pokedex-swsh/salandit/">757 Salandit</option>
<option value="/pokedex-swsh/salazzle/">758 Salazzle</option>
<option value="/pokedex-swsh/stufful/">759 Stufful</option>
<option value="/pokedex-swsh/bewear/">760 Bewear</option>
<option value="/pokedex-swsh/bounsweet/">761 Bounsweet</option>
<option value="/pokedex-swsh/steenee/">762 Steenee</option>
<option value="/pokedex-swsh/tsareena/">763 Tsareena</option>
<option value="/pokedex-swsh/oranguru/">765 Oranguru</option>
<option value="/pokedex-swsh/passimian/">766 Passimian</option>
<option value="/pokedex-swsh/wimpod/">767 Wimpod</option>
<option value="/pokedex-swsh/golisopod/">768 Golisopod</option>
<option value="/pokedex-swsh/pyukumuku/">771 Pyukumuku</option>
<option value="/pokedex-swsh/type:null/">772 Type: Null</option>
<option value="/pokedex-swsh/silvally/">773 Silvally</option>
<option value="/pokedex-swsh/turtonator/">776 Turtonator</option>
<option value="/pokedex-swsh/togedemaru/">777 Togedemaru</option>
<option value="/pokedex-swsh/mimikyu/">778 Mimikyu</option>
<option value="/pokedex-swsh/drampa/">780 Drampa</option>
<option value="/pokedex-swsh/dhelmise/">781 Dhelmise</option>
<option value="/pokedex-swsh/jangmo-o/">782 Jangmo-o</option>
<option value="/pokedex-swsh/hakamo-o/">783 Hakamo-o</option>
<option value="/pokedex-swsh/kommo-o/">784 Kommo-o</option>
<option value="/pokedex-swsh/cosmog/">789 Cosmog</option>
<option value="/pokedex-swsh/cosmoem/">790 Cosmoem</option>
<option value="/pokedex-swsh/solgaleo/">791 Solgaleo</option>
<option value="/pokedex-swsh/lunala/">792 Lunala</option>
<option value="/pokedex-swsh/necrozma/">800 Necrozma</option>
<option value="/pokedex-swsh/marshadow/">802 Marshadow</option>
<option value="/pokedex-swsh/zeraora/">807 Zeraora</option>
<option value="/pokedex-swsh/meltan/">808 Meltan</option>
<option value="/pokedex-swsh/melmetal/">809 Melmetal</option>
</SELECT> </FORM></td><td width="25%" align="center"> <FORM NAME="nav9">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.nav9.SelectURL.options[document.nav9.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
<option value="#">Galar: 810-890</option>
<option value="/pokedex-swsh/grookey/">810 Grookey</option>
<option value="/pokedex-swsh/thwackey/">811 Thwackey</option>
<option value="/pokedex-swsh/rillaboom/">812 Rillaboom</option>
<option value="/pokedex-swsh/scorbunny/">813 Scorbunny</option>
<option value="/pokedex-swsh/raboot/">814 Raboot</option>
<option value="/pokedex-swsh/cinderace/">815 Cinderace</option>
<option value="/pokedex-swsh/sobble/">816 Sobble</option>
<option value="/pokedex-swsh/drizzile/">817 Drizzile</option>
<option value="/pokedex-swsh/inteleon/">818 Inteleon</option>
<option value="/pokedex-swsh/skwovet/">819 Skwovet</option>
<option value="/pokedex-swsh/greedent/">820 Greedent</option>
<option value="/pokedex-swsh/rookidee/">821 Rookidee</option>
<option value="/pokedex-swsh/corvisquire/">822 Corvisquire</option>
<option value="/pokedex-swsh/corviknight/">823 Corviknight</option>
<option value="/pokedex-swsh/blipbug/">824 Blipbug</option>
<option value="/pokedex-swsh/dottler/">825 Dottler</option>
<option value="/pokedex-swsh/orbeetle/">826 Orbeetle</option>
<option value="/pokedex-swsh/nickit/">827 Nickit</option>
<option value="/pokedex-swsh/thievul/">828 Thievul</option>
<option value="/pokedex-swsh/gossifleur/">829 Gossifleur</option>
<option value="/pokedex-swsh/eldegoss/">830 Eldegoss</option>
<option value="/pokedex-swsh/wooloo/">831 Wooloo</option>
<option value="/pokedex-swsh/dubwool/">832 Dubwool</option>
<option value="/pokedex-swsh/chewtle/">833 Chewtle</option>
<option value="/pokedex-swsh/drednaw/">834 Drednaw</option>
<option value="/pokedex-swsh/yamper/">835 Yamper</option>
<option value="/pokedex-swsh/boltund/">836 Boltund</option>
<option value="/pokedex-swsh/rolycoly/">837 Rolycoly</option>
<option value="/pokedex-swsh/carkol/">838 Carkol</option>
<option value="/pokedex-swsh/coalossal/">839 Coalossal</option>
<option value="/pokedex-swsh/applin/">840 Applin</option>
<option value="/pokedex-swsh/flapple/">841 Flapple</option>
<option value="/pokedex-swsh/appletun/">842 Appletun</option>
<option value="/pokedex-swsh/silicobra/">843 Silicobra</option>
<option value="/pokedex-swsh/sandaconda/">844 Sandaconda</option>
<option value="/pokedex-swsh/cramorant/">845 Cramorant</option>
<option value="/pokedex-swsh/arrokuda/">846 Arrokuda</option>
<option value="/pokedex-swsh/barraskewda/">847 Barraskewda</option>
<option value="/pokedex-swsh/toxel/">848 Toxel</option>
<option value="/pokedex-swsh/toxtricity/">849 Toxtricity</option>
<option value="/pokedex-swsh/sizzlipede/">850 Sizzlipede</option>
<option value="/pokedex-swsh/centiskorch/">851 Centiskorch</option>
<option value="/pokedex-swsh/clobbopus/">852 Clobbopus</option>
<option value="/pokedex-swsh/grapploct/">853 Grapploct</option>
<option value="/pokedex-swsh/sinistea/">854 Sinistea</option>
<option value="/pokedex-swsh/polteageist/">855 Polteageist</option>
<option value="/pokedex-swsh/hatenna/">856 Hatenna</option>
<option value="/pokedex-swsh/hattrem/">857 Hattrem</option>
<option value="/pokedex-swsh/hatterene/">858 Hatterene</option>
<option value="/pokedex-swsh/impidimp/">859 Impidimp</option>
<option value="/pokedex-swsh/morgrem/">860 Morgrem</option>
<option value="/pokedex-swsh/grimmsnarl/">861 Grimmsnarl</option>
<option value="/pokedex-swsh/obstagoon/">862 Obstagoon</option>
<option value="/pokedex-swsh/perrserker/">863 Perrserker</option>
<option value="/pokedex-swsh/cursola/">864 Cursola</option>
<option value="/pokedex-swsh/sirfetch'd/">865 Sirfetch'd</option>
<option value="/pokedex-swsh/mr.rime/">866 Mr. Rime</option>
<option value="/pokedex-swsh/runerigus/">867 Runerigus</option>
<option value="/pokedex-swsh/milcery/">868 Milcery</option>
<option value="/pokedex-swsh/alcremie/">869 Alcremie</option>
<option value="/pokedex-swsh/falinks/">870 Falinks</option>
<option value="/pokedex-swsh/pincurchin/">871 Pincurchin</option>
<option value="/pokedex-swsh/snom/">872 Snom</option>
<option value="/pokedex-swsh/frosmoth/">873 Frosmoth</option>
<option value="/pokedex-swsh/stonjourner/">874 Stonjourner</option>
<option value="/pokedex-swsh/eiscue/">875 Eiscue</option>
<option value="/pokedex-swsh/indeedee/">876 Indeedee</option>
<option value="/pokedex-swsh/morpeko/">877 Morpeko</option>
<option value="/pokedex-swsh/cufant/">878 Cufant</option>
<option value="/pokedex-swsh/copperajah/">879 Copperajah</option>
<option value="/pokedex-swsh/dracozolt/">880 Dracozolt</option>
<option value="/pokedex-swsh/arctozolt/">881 Arctozolt</option>
<option value="/pokedex-swsh/dracovish/">882 Dracovish</option>
<option value="/pokedex-swsh/arctovish/">883 Arctovish</option>
<option value="/pokedex-swsh/duraludon/">884 Duraludon</option>
<option value="/pokedex-swsh/dreepy/">885 Dreepy</option>
<option value="/pokedex-swsh/drakloak/">886 Drakloak</option>
<option value="/pokedex-swsh/dragapult/">887 Dragapult</option>
<option value="/pokedex-swsh/zacian/">888 Zacian</option>
<option value="/pokedex-swsh/zamazenta/">889 Zamazenta</option>
<option value="/pokedex-swsh/eternatus/">890 Eternatus</option>

</SELECT> </FORM></td></tr></table><table align=center width="95%" border="0" cellspacing="0" cellpadding="4">
<tr>
<td colspan="2" align="center"> <FORM NAME="cent">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.cent.SelectURL.options[document.cent.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
 <option value="#">Pokédex: A - G</option>

<option value="/pokedex-swsh/abomasnow/">Abomasnow</option>  
<option value="/pokedex-swsh/accelgor/">Accelgor</option>  
<option value="/pokedex-swsh/aegislash/">Aegislash</option>  
<option value="/pokedex-swsh/alcremie/">Alcremie</option>  
<option value="/pokedex-swsh/appletun/">Appletun</option>  
<option value="/pokedex-swsh/applin/">Applin</option>  
<option value="/pokedex-swsh/araquanid/">Araquanid</option>  
<option value="/pokedex-swsh/arcanine/">Arcanine</option>  
<option value="/pokedex-swsh/arctovish/">Arctovish</option>  
<option value="/pokedex-swsh/arctozolt/">Arctozolt</option>  
<option value="/pokedex-swsh/aromatisse/">Aromatisse</option>  
<option value="/pokedex-swsh/arrokuda/">Arrokuda</option>  
<option value="/pokedex-swsh/avalugg/">Avalugg</option>  
<option value="/pokedex-swsh/axew/">Axew</option>  
<option value="/pokedex-swsh/baltoy/">Baltoy</option>  
<option value="/pokedex-swsh/barbaracle/">Barbaracle</option>  
<option value="/pokedex-swsh/barboach/">Barboach</option>  
<option value="/pokedex-swsh/barraskewda/">Barraskewda</option>  
<option value="/pokedex-swsh/basculin/">Basculin</option>  
<option value="/pokedex-swsh/beartic/">Beartic</option>  
<option value="/pokedex-swsh/beheeyem/">Beheeyem</option>  
<option value="/pokedex-swsh/bellossom/">Bellossom</option>  
<option value="/pokedex-swsh/bergmite/">Bergmite</option>  
<option value="/pokedex-swsh/bewear/">Bewear</option>  
<option value="/pokedex-swsh/binacle/">Binacle</option>  
<option value="/pokedex-swsh/bisharp/">Bisharp</option>  
<option value="/pokedex-swsh/blastoise/">Blastoise</option>  
<option value="/pokedex-swsh/blipbug/">Blipbug</option>  
<option value="/pokedex-swsh/boldore/">Boldore</option>  
<option value="/pokedex-swsh/boltund/">Boltund</option>  
<option value="/pokedex-swsh/bonsly/">Bonsly</option>  
<option value="/pokedex-swsh/bounsweet/">Bounsweet</option>  
<option value="/pokedex-swsh/braviary/">Braviary</option>  
<option value="/pokedex-swsh/brionne/">Brionne</option>  
<option value="/pokedex-swsh/bronzong/">Bronzong</option>  
<option value="/pokedex-swsh/bronzor/">Bronzor</option>  
<option value="/pokedex-swsh/budew/">Budew</option>  
<option value="/pokedex-swsh/bulbasaur/">Bulbasaur</option>  
<option value="/pokedex-swsh/bunnelby/">Bunnelby</option>  
<option value="/pokedex-swsh/butterfree/">Butterfree</option>  
<option value="/pokedex-swsh/carkol/">Carkol</option>  
<option value="/pokedex-swsh/caterpie/">Caterpie</option>  
<option value="/pokedex-swsh/celebi/">Celebi</option>  
<option value="/pokedex-swsh/centiskorch/">Centiskorch</option>  
<option value="/pokedex-swsh/chandelure/">Chandelure</option>  
<option value="/pokedex-swsh/charizard/">Charizard</option>  
<option value="/pokedex-swsh/charjabug/">Charjabug</option>  
<option value="/pokedex-swsh/charmander/">Charmander</option>  
<option value="/pokedex-swsh/charmeleon/">Charmeleon</option>  
<option value="/pokedex-swsh/cherrim/">Cherrim</option>  
<option value="/pokedex-swsh/cherubi/">Cherubi</option>  
<option value="/pokedex-swsh/chewtle/">Chewtle</option>  
<option value="/pokedex-swsh/chinchou/">Chinchou</option>  
<option value="/pokedex-swsh/cinccino/">Cinccino</option>  
<option value="/pokedex-swsh/cinderace/">Cinderace</option>  
<option value="/pokedex-swsh/claydol/">Claydol</option>  
<option value="/pokedex-swsh/clefable/">Clefable</option>  
<option value="/pokedex-swsh/clefairy/">Clefairy</option>  
<option value="/pokedex-swsh/cleffa/">Cleffa</option>  
<option value="/pokedex-swsh/clobbopus/">Clobbopus</option>  
<option value="/pokedex-swsh/cloyster/">Cloyster</option>  
<option value="/pokedex-swsh/coalossal/">Coalossal</option>  
<option value="/pokedex-swsh/cobalion/">Cobalion</option>  
<option value="/pokedex-swsh/cofagrigus/">Cofagrigus</option>  
<option value="/pokedex-swsh/combee/">Combee</option>  
<option value="/pokedex-swsh/conkeldurr/">Conkeldurr</option>  
<option value="/pokedex-swsh/copperajah/">Copperajah</option>  
<option value="/pokedex-swsh/corphish/">Corphish</option>  
<option value="/pokedex-swsh/corsola/">Corsola</option>  
<option value="/pokedex-swsh/corviknight/">Corviknight</option>  
<option value="/pokedex-swsh/corvisquire/">Corvisquire</option>  
<option value="/pokedex-swsh/cosmoem/">Cosmoem</option>  
<option value="/pokedex-swsh/cosmog/">Cosmog</option>  
<option value="/pokedex-swsh/cottonee/">Cottonee</option>  
<option value="/pokedex-swsh/cramorant/">Cramorant</option>  
<option value="/pokedex-swsh/crawdaunt/">Crawdaunt</option>  
<option value="/pokedex-swsh/croagunk/">Croagunk</option>  
<option value="/pokedex-swsh/crustle/">Crustle</option>  
<option value="/pokedex-swsh/cubchoo/">Cubchoo</option>  
<option value="/pokedex-swsh/cufant/">Cufant</option>  
<option value="/pokedex-swsh/cursola/">Cursola</option>  
<option value="/pokedex-swsh/cutiefly/">Cutiefly</option>  
<option value="/pokedex-swsh/darmanitan/">Darmanitan</option>  
<option value="/pokedex-swsh/dartrix/">Dartrix</option>  
<option value="/pokedex-swsh/darumaka/">Darumaka</option>  
<option value="/pokedex-swsh/decidueye/">Decidueye</option>  
<option value="/pokedex-swsh/deino/">Deino</option>  
<option value="/pokedex-swsh/delibird/">Delibird</option>  
<option value="/pokedex-swsh/dewpider/">Dewpider</option>  
<option value="/pokedex-swsh/dhelmise/">Dhelmise</option>  
<option value="/pokedex-swsh/diggersby/">Diggersby</option>  
<option value="/pokedex-swsh/diglett/">Diglett</option>  
<option value="/pokedex-swsh/ditto/">Ditto</option>  
<option value="/pokedex-swsh/dottler/">Dottler</option>  
<option value="/pokedex-swsh/doublade/">Doublade</option>  
<option value="/pokedex-swsh/dracovish/">Dracovish</option>  
<option value="/pokedex-swsh/dracozolt/">Dracozolt</option>  
<option value="/pokedex-swsh/dragapult/">Dragapult</option>  
<option value="/pokedex-swsh/drakloak/">Drakloak</option>  
<option value="/pokedex-swsh/drampa/">Drampa</option>  
<option value="/pokedex-swsh/drapion/">Drapion</option>  
<option value="/pokedex-swsh/drednaw/">Drednaw</option>  
<option value="/pokedex-swsh/dreepy/">Dreepy</option>  
<option value="/pokedex-swsh/drifblim/">Drifblim</option>  
<option value="/pokedex-swsh/drifloon/">Drifloon</option>  
<option value="/pokedex-swsh/drilbur/">Drilbur</option>  
<option value="/pokedex-swsh/drizzile/">Drizzile</option>  
<option value="/pokedex-swsh/dubwool/">Dubwool</option>  
<option value="/pokedex-swsh/dugtrio/">Dugtrio</option>  
<option value="/pokedex-swsh/duosion/">Duosion</option>  
<option value="/pokedex-swsh/duraludon/">Duraludon</option>  
<option value="/pokedex-swsh/durant/">Durant</option>  
<option value="/pokedex-swsh/dusclops/">Dusclops</option>  
<option value="/pokedex-swsh/dusknoir/">Dusknoir</option>  
<option value="/pokedex-swsh/duskull/">Duskull</option>  
<option value="/pokedex-swsh/dwebble/">Dwebble</option>  
<option value="/pokedex-swsh/eevee/">Eevee</option>  
<option value="/pokedex-swsh/eiscue/">Eiscue</option>  
<option value="/pokedex-swsh/eldegoss/">Eldegoss</option>  
<option value="/pokedex-swsh/electrike/">Electrike</option>  
<option value="/pokedex-swsh/elgyem/">Elgyem</option>  
<option value="/pokedex-swsh/escavalier/">Escavalier</option>  
<option value="/pokedex-swsh/espeon/">Espeon</option>  
<option value="/pokedex-swsh/espurr/">Espurr</option>  
<option value="/pokedex-swsh/eternatus/">Eternatus</option>  
<option value="/pokedex-swsh/excadrill/">Excadrill</option>  
<option value="/pokedex-swsh/falinks/">Falinks</option>  
<option value="/pokedex-swsh/farfetch'd/">Farfetch'd</option>  
<option value="/pokedex-swsh/feebas/">Feebas</option>  
<option value="/pokedex-swsh/ferroseed/">Ferroseed</option>  
<option value="/pokedex-swsh/ferrothorn/">Ferrothorn</option>  
<option value="/pokedex-swsh/flapple/">Flapple</option>  
<option value="/pokedex-swsh/flareon/">Flareon</option>  
<option value="/pokedex-swsh/flygon/">Flygon</option>  
<option value="/pokedex-swsh/fraxure/">Fraxure</option>  
<option value="/pokedex-swsh/frillish/">Frillish</option>  
<option value="/pokedex-swsh/froslass/">Froslass</option>  
<option value="/pokedex-swsh/frosmoth/">Frosmoth</option>  
<option value="/pokedex-swsh/gallade/">Gallade</option>  
<option value="/pokedex-swsh/galvantula/">Galvantula</option>  
<option value="/pokedex-swsh/garbodor/">Garbodor</option>  
<option value="/pokedex-swsh/gardevoir/">Gardevoir</option>  
<option value="/pokedex-swsh/gastly/">Gastly</option>  
<option value="/pokedex-swsh/gastrodon/">Gastrodon</option>  
<option value="/pokedex-swsh/gengar/">Gengar</option>  
<option value="/pokedex-swsh/gigalith/">Gigalith</option>  
<option value="/pokedex-swsh/glaceon/">Glaceon</option>  
<option value="/pokedex-swsh/glalie/">Glalie</option>  
<option value="/pokedex-swsh/gloom/">Gloom</option>  
<option value="/pokedex-swsh/goldeen/">Goldeen</option>  
<option value="/pokedex-swsh/golett/">Golett</option>  
<option value="/pokedex-swsh/golisopod/">Golisopod</option>  
<option value="/pokedex-swsh/golurk/">Golurk</option>  
<option value="/pokedex-swsh/goodra/">Goodra</option>  
<option value="/pokedex-swsh/goomy/">Goomy</option>  
<option value="/pokedex-swsh/gossifleur/">Gossifleur</option>  
<option value="/pokedex-swsh/gothita/">Gothita</option>  
<option value="/pokedex-swsh/gothitelle/">Gothitelle</option>  
<option value="/pokedex-swsh/gothorita/">Gothorita</option>  
<option value="/pokedex-swsh/gourgeist/">Gourgeist</option>  
<option value="/pokedex-swsh/grapploct/">Grapploct</option>  
<option value="/pokedex-swsh/greedent/">Greedent</option>  
<option value="/pokedex-swsh/grimmsnarl/">Grimmsnarl</option>  
<option value="/pokedex-swsh/grookey/">Grookey</option>  
<option value="/pokedex-swsh/growlithe/">Growlithe</option>  
<option value="/pokedex-swsh/grubbin/">Grubbin</option>  
<option value="/pokedex-swsh/gurdurr/">Gurdurr</option>  
<option value="/pokedex-swsh/gyarados/">Gyarados</option>  
</SELECT> </FORM></td>
<td colspan="2" align="center"> <FORM NAME="coast">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.coast.SelectURL.options[document.coast.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
 <option value="#">Pokédex: H - R</option>

<option value="/pokedex-swsh/hakamo-o/">Hakamo-o</option>  
<option value="/pokedex-swsh/hatenna/">Hatenna</option>  
<option value="/pokedex-swsh/hatterene/">Hatterene</option>  
<option value="/pokedex-swsh/hattrem/">Hattrem</option>  
<option value="/pokedex-swsh/haunter/">Haunter</option>  
<option value="/pokedex-swsh/hawlucha/">Hawlucha</option>  
<option value="/pokedex-swsh/haxorus/">Haxorus</option>  
<option value="/pokedex-swsh/heatmor/">Heatmor</option>  
<option value="/pokedex-swsh/heliolisk/">Heliolisk</option>  
<option value="/pokedex-swsh/helioptile/">Helioptile</option>  
<option value="/pokedex-swsh/hippopotas/">Hippopotas</option>  
<option value="/pokedex-swsh/hippowdon/">Hippowdon</option>  
<option value="/pokedex-swsh/hitmonchan/">Hitmonchan</option>  
<option value="/pokedex-swsh/hitmonlee/">Hitmonlee</option>  
<option value="/pokedex-swsh/hitmontop/">Hitmontop</option>  
<option value="/pokedex-swsh/honedge/">Honedge</option>  
<option value="/pokedex-swsh/hoothoot/">Hoothoot</option>  
<option value="/pokedex-swsh/hydreigon/">Hydreigon</option>  
<option value="/pokedex-swsh/impidimp/">Impidimp</option>  
<option value="/pokedex-swsh/incineroar/">Incineroar</option>  
<option value="/pokedex-swsh/indeedee/">Indeedee</option>  
<option value="/pokedex-swsh/inkay/">Inkay</option>  
<option value="/pokedex-swsh/inteleon/">Inteleon</option>  
<option value="/pokedex-swsh/ivysaur/">Ivysaur</option>  
<option value="/pokedex-swsh/jangmo-o/">Jangmo-o</option>  
<option value="/pokedex-swsh/jellicent/">Jellicent</option>  
<option value="/pokedex-swsh/jirachi/">Jirachi</option>  
<option value="/pokedex-swsh/jolteon/">Jolteon</option>  
<option value="/pokedex-swsh/joltik/">Joltik</option>  
<option value="/pokedex-swsh/karrablast/">Karrablast</option>  
<option value="/pokedex-swsh/keldeo/">Keldeo</option>  
<option value="/pokedex-swsh/kingler/">Kingler</option>  
<option value="/pokedex-swsh/kirlia/">Kirlia</option>  
<option value="/pokedex-swsh/klang/">Klang</option>  
<option value="/pokedex-swsh/klink/">Klink</option>  
<option value="/pokedex-swsh/klinklang/">Klinklang</option>  
<option value="/pokedex-swsh/koffing/">Koffing</option>  
<option value="/pokedex-swsh/kommo-o/">Kommo-o</option>  
<option value="/pokedex-swsh/krabby/">Krabby</option>  
<option value="/pokedex-swsh/kyurem/">Kyurem</option>  
<option value="/pokedex-swsh/lampent/">Lampent</option>  
<option value="/pokedex-swsh/lanturn/">Lanturn</option>  
<option value="/pokedex-swsh/lapras/">Lapras</option>  
<option value="/pokedex-swsh/larvitar/">Larvitar</option>  
<option value="/pokedex-swsh/leafeon/">Leafeon</option>  
<option value="/pokedex-swsh/liepard/">Liepard</option>  
<option value="/pokedex-swsh/linoone/">Linoone</option>  
<option value="/pokedex-swsh/litten/">Litten</option>  
<option value="/pokedex-swsh/litwick/">Litwick</option>  
<option value="/pokedex-swsh/lombre/">Lombre</option>  
<option value="/pokedex-swsh/lotad/">Lotad</option>  
<option value="/pokedex-swsh/lucario/">Lucario</option>  
<option value="/pokedex-swsh/ludicolo/">Ludicolo</option>  
<option value="/pokedex-swsh/lunala/">Lunala</option>  
<option value="/pokedex-swsh/lunatone/">Lunatone</option>  
<option value="/pokedex-swsh/machamp/">Machamp</option>  
<option value="/pokedex-swsh/machoke/">Machoke</option>  
<option value="/pokedex-swsh/machop/">Machop</option>  
<option value="/pokedex-swsh/magikarp/">Magikarp</option>  
<option value="/pokedex-swsh/malamar/">Malamar</option>  
<option value="/pokedex-swsh/mamoswine/">Mamoswine</option>  
<option value="/pokedex-swsh/mandibuzz/">Mandibuzz</option>  
<option value="/pokedex-swsh/manectric/">Manectric</option>  
<option value="/pokedex-swsh/mantine/">Mantine</option>  
<option value="/pokedex-swsh/mantyke/">Mantyke</option>  
<option value="/pokedex-swsh/maractus/">Maractus</option>  
<option value="/pokedex-swsh/mareanie/">Mareanie</option>  
<option value="/pokedex-swsh/marshadow/">Marshadow</option>  
<option value="/pokedex-swsh/mawile/">Mawile</option>  
<option value="/pokedex-swsh/melmetal/">Melmetal</option>  
<option value="/pokedex-swsh/meltan/">Meltan</option>  
<option value="/pokedex-swsh/meowstic/">Meowstic</option>  
<option value="/pokedex-swsh/meowth/">Meowth</option>  
<option value="/pokedex-swsh/metapod/">Metapod</option>  
<option value="/pokedex-swsh/mew/">Mew</option>  
<option value="/pokedex-swsh/mewtwo/">Mewtwo</option>  
<option value="/pokedex-swsh/milcery/">Milcery</option>  
<option value="/pokedex-swsh/milotic/">Milotic</option>  
<option value="/pokedex-swsh/mimejr./">Mime Jr.</option> 
<option value="/pokedex-swsh/mimikyu/">Mimikyu</option>  
<option value="/pokedex-swsh/minccino/">Minccino</option>  
<option value="/pokedex-swsh/morelull/">Morelull</option>  
<option value="/pokedex-swsh/morgrem/">Morgrem</option>  
<option value="/pokedex-swsh/morpeko/">Morpeko</option>  
<option value="/pokedex-swsh/mr.mime/">Mr. Mime</option> 
<option value="/pokedex-swsh/mr.rime/">Mr. Rime</option> 
<option value="/pokedex-swsh/mudbray/">Mudbray</option>  
<option value="/pokedex-swsh/mudsdale/">Mudsdale</option>  
<option value="/pokedex-swsh/munchlax/">Munchlax</option>  
<option value="/pokedex-swsh/munna/">Munna</option>  
<option value="/pokedex-swsh/musharna/">Musharna</option>  
<option value="/pokedex-swsh/natu/">Natu</option>  
<option value="/pokedex-swsh/necrozma/">Necrozma</option>  
<option value="/pokedex-swsh/nickit/">Nickit</option>  
<option value="/pokedex-swsh/nincada/">Nincada</option>  
<option value="/pokedex-swsh/ninetales/">Ninetales</option>  
<option value="/pokedex-swsh/ninjask/">Ninjask</option>  
<option value="/pokedex-swsh/noctowl/">Noctowl</option>  
<option value="/pokedex-swsh/noibat/">Noibat</option>  
<option value="/pokedex-swsh/noivern/">Noivern</option>  
<option value="/pokedex-swsh/nuzleaf/">Nuzleaf</option>  
<option value="/pokedex-swsh/obstagoon/">Obstagoon</option>  
<option value="/pokedex-swsh/octillery/">Octillery</option>  
<option value="/pokedex-swsh/oddish/">Oddish</option>  
<option value="/pokedex-swsh/onix/">Onix</option>  
<option value="/pokedex-swsh/oranguru/">Oranguru</option>  
<option value="/pokedex-swsh/orbeetle/">Orbeetle</option>  
<option value="/pokedex-swsh/palpitoad/">Palpitoad</option>  
<option value="/pokedex-swsh/pancham/">Pancham</option>  
<option value="/pokedex-swsh/pangoro/">Pangoro</option>  
<option value="/pokedex-swsh/passimian/">Passimian</option>  
<option value="/pokedex-swsh/pawniard/">Pawniard</option>  
<option value="/pokedex-swsh/pelipper/">Pelipper</option>  
<option value="/pokedex-swsh/perrserker/">Perrserker</option>  
<option value="/pokedex-swsh/persian/">Persian</option>  
<option value="/pokedex-swsh/phantump/">Phantump</option>  
<option value="/pokedex-swsh/pichu/">Pichu</option>  
<option value="/pokedex-swsh/pidove/">Pidove</option>  
<option value="/pokedex-swsh/pikachu/">Pikachu</option>  
<option value="/pokedex-swsh/piloswine/">Piloswine</option>  
<option value="/pokedex-swsh/pincurchin/">Pincurchin</option>  
<option value="/pokedex-swsh/polteageist/">Polteageist</option>  
<option value="/pokedex-swsh/ponyta/">Ponyta</option>  
<option value="/pokedex-swsh/popplio/">Popplio</option>  
<option value="/pokedex-swsh/primarina/">Primarina</option>  
<option value="/pokedex-swsh/pumpkaboo/">Pumpkaboo</option>  
<option value="/pokedex-swsh/pupitar/">Pupitar</option>  
<option value="/pokedex-swsh/purrloin/">Purrloin</option>  
<option value="/pokedex-swsh/pyukumuku/">Pyukumuku</option>  
<option value="/pokedex-swsh/quagsire/">Quagsire</option>  
<option value="/pokedex-swsh/qwilfish/">Qwilfish</option>  
<option value="/pokedex-swsh/raboot/">Raboot</option>  
<option value="/pokedex-swsh/raichu/">Raichu</option>  
<option value="/pokedex-swsh/ralts/">Ralts</option>  
<option value="/pokedex-swsh/rapidash/">Rapidash</option>  
<option value="/pokedex-swsh/remoraid/">Remoraid</option>  
<option value="/pokedex-swsh/reshiram/">Reshiram</option>  
<option value="/pokedex-swsh/reuniclus/">Reuniclus</option>  
<option value="/pokedex-swsh/rhydon/">Rhydon</option>  
<option value="/pokedex-swsh/rhyhorn/">Rhyhorn</option>  
<option value="/pokedex-swsh/rhyperior/">Rhyperior</option>  
<option value="/pokedex-swsh/ribombee/">Ribombee</option>  
<option value="/pokedex-swsh/rillaboom/">Rillaboom</option>  
<option value="/pokedex-swsh/riolu/">Riolu</option>  
<option value="/pokedex-swsh/roggenrola/">Roggenrola</option>  
<option value="/pokedex-swsh/rolycoly/">Rolycoly</option>  
<option value="/pokedex-swsh/rookidee/">Rookidee</option>  
<option value="/pokedex-swsh/roselia/">Roselia</option>  
<option value="/pokedex-swsh/roserade/">Roserade</option>  
<option value="/pokedex-swsh/rotom/">Rotom</option>  
<option value="/pokedex-swsh/rowlet/">Rowlet</option>  
<option value="/pokedex-swsh/rufflet/">Rufflet</option>  
<option value="/pokedex-swsh/runerigus/">Runerigus</option>  
</SELECT> </FORM></td>
<td colspan="2" align="center"> <FORM NAME="mount">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.mount.SelectURL.options[document.mount.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
 <option value="#">Pokédex: S - Z</option>

<option value="/pokedex-swsh/sableye/">Sableye</option>  
<option value="/pokedex-swsh/salandit/">Salandit</option>  
<option value="/pokedex-swsh/salazzle/">Salazzle</option>  
<option value="/pokedex-swsh/sandaconda/">Sandaconda</option>  
<option value="/pokedex-swsh/sawk/">Sawk</option>  
<option value="/pokedex-swsh/scorbunny/">Scorbunny</option>  
<option value="/pokedex-swsh/scrafty/">Scrafty</option>  
<option value="/pokedex-swsh/scraggy/">Scraggy</option>  
<option value="/pokedex-swsh/seaking/">Seaking</option>  
<option value="/pokedex-swsh/seedot/">Seedot</option>  
<option value="/pokedex-swsh/seismitoad/">Seismitoad</option>  
<option value="/pokedex-swsh/shedinja/">Shedinja</option>  
<option value="/pokedex-swsh/shellder/">Shellder</option>  
<option value="/pokedex-swsh/shellos/">Shellos</option>  
<option value="/pokedex-swsh/shelmet/">Shelmet</option>  
<option value="/pokedex-swsh/shiftry/">Shiftry</option>  
<option value="/pokedex-swsh/shiinotic/">Shiinotic</option>  
<option value="/pokedex-swsh/shuckle/">Shuckle</option>  
<option value="/pokedex-swsh/sigilyph/">Sigilyph</option>  
<option value="/pokedex-swsh/silicobra/">Silicobra</option>  
<option value="/pokedex-swsh/silvally/">Silvally</option>  
<option value="/pokedex-swsh/sinistea/">Sinistea</option>  
<option value="/pokedex-swsh/sirfetch'd/">Sirfetch'd</option>  
<option value="/pokedex-swsh/sizzlipede/">Sizzlipede</option>  
<option value="/pokedex-swsh/skorupi/">Skorupi</option>  
<option value="/pokedex-swsh/skuntank/">Skuntank</option>  
<option value="/pokedex-swsh/skwovet/">Skwovet</option>  
<option value="/pokedex-swsh/sliggoo/">Sliggoo</option>  
<option value="/pokedex-swsh/slurpuff/">Slurpuff</option>  
<option value="/pokedex-swsh/sneasel/">Sneasel</option>  
<option value="/pokedex-swsh/snom/">Snom</option>  
<option value="/pokedex-swsh/snorlax/">Snorlax</option>  
<option value="/pokedex-swsh/snorunt/">Snorunt</option>  
<option value="/pokedex-swsh/snover/">Snover</option>  
<option value="/pokedex-swsh/sobble/">Sobble</option>  
<option value="/pokedex-swsh/solgaleo/">Solgaleo</option>  
<option value="/pokedex-swsh/solosis/">Solosis</option>  
<option value="/pokedex-swsh/solrock/">Solrock</option>  
<option value="/pokedex-swsh/spritzee/">Spritzee</option>  
<option value="/pokedex-swsh/squirtle/">Squirtle</option>  
<option value="/pokedex-swsh/steelix/">Steelix</option>  
<option value="/pokedex-swsh/steenee/">Steenee</option>  
<option value="/pokedex-swsh/stonjourner/">Stonjourner</option>  
<option value="/pokedex-swsh/stufful/">Stufful</option>  
<option value="/pokedex-swsh/stunfisk/">Stunfisk</option>  
<option value="/pokedex-swsh/stunky/">Stunky</option>  
<option value="/pokedex-swsh/sudowoodo/">Sudowoodo</option>  
<option value="/pokedex-swsh/swinub/">Swinub</option>  
<option value="/pokedex-swsh/swirlix/">Swirlix</option>  
<option value="/pokedex-swsh/swoobat/">Swoobat</option>  
<option value="/pokedex-swsh/sylveon/">Sylveon</option>  
<option value="/pokedex-swsh/terrakion/">Terrakion</option>  
<option value="/pokedex-swsh/thievul/">Thievul</option>  
<option value="/pokedex-swsh/throh/">Throh</option>  
<option value="/pokedex-swsh/thwackey/">Thwackey</option>  
<option value="/pokedex-swsh/timburr/">Timburr</option>  
<option value="/pokedex-swsh/togedemaru/">Togedemaru</option>  
<option value="/pokedex-swsh/togekiss/">Togekiss</option>  
<option value="/pokedex-swsh/togepi/">Togepi</option>  
<option value="/pokedex-swsh/togetic/">Togetic</option>  
<option value="/pokedex-swsh/torkoal/">Torkoal</option>  
<option value="/pokedex-swsh/torracat/">Torracat</option>  
<option value="/pokedex-swsh/toxapex/">Toxapex</option>  
<option value="/pokedex-swsh/toxel/">Toxel</option>  
<option value="/pokedex-swsh/toxicroak/">Toxicroak</option>  
<option value="/pokedex-swsh/toxtricity/">Toxtricity</option>  
<option value="/pokedex-swsh/tranquill/">Tranquill</option>  
<option value="/pokedex-swsh/trapinch/">Trapinch</option>  
<option value="/pokedex-swsh/trevenant/">Trevenant</option>  
<option value="/pokedex-swsh/trubbish/">Trubbish</option>  
<option value="/pokedex-swsh/tsareena/">Tsareena</option>  
<option value="/pokedex-swsh/turtonator/">Turtonator</option>  
<option value="/pokedex-swsh/tympole/">Tympole</option>  
<option value="/pokedex-swsh/type:null/">Type: Null</option> 
<option value="/pokedex-swsh/tyranitar/">Tyranitar</option>  
<option value="/pokedex-swsh/tyrogue/">Tyrogue</option>  
<option value="/pokedex-swsh/umbreon/">Umbreon</option>  
<option value="/pokedex-swsh/unfezant/">Unfezant</option>  
<option value="/pokedex-swsh/vanillish/">Vanillish</option>  
<option value="/pokedex-swsh/vanillite/">Vanillite</option>  
<option value="/pokedex-swsh/vanilluxe/">Vanilluxe</option>  
<option value="/pokedex-swsh/vaporeon/">Vaporeon</option>  
<option value="/pokedex-swsh/venusaur/">Venusaur</option>  
<option value="/pokedex-swsh/vespiquen/">Vespiquen</option>  
<option value="/pokedex-swsh/vibrava/">Vibrava</option>  
<option value="/pokedex-swsh/vikavolt/">Vikavolt</option>  
<option value="/pokedex-swsh/vileplume/">Vileplume</option>  
<option value="/pokedex-swsh/virizion/">Virizion</option>  
<option value="/pokedex-swsh/vullaby/">Vullaby</option>  
<option value="/pokedex-swsh/vulpix/">Vulpix</option>  
<option value="/pokedex-swsh/wailmer/">Wailmer</option>  
<option value="/pokedex-swsh/wailord/">Wailord</option>  
<option value="/pokedex-swsh/wartortle/">Wartortle</option>  
<option value="/pokedex-swsh/weavile/">Weavile</option>  
<option value="/pokedex-swsh/weezing/">Weezing</option>  
<option value="/pokedex-swsh/whimsicott/">Whimsicott</option>  
<option value="/pokedex-swsh/whiscash/">Whiscash</option>  
<option value="/pokedex-swsh/wimpod/">Wimpod</option>  
<option value="/pokedex-swsh/wingull/">Wingull</option>  
<option value="/pokedex-swsh/wishiwashi/">Wishiwashi</option>  
<option value="/pokedex-swsh/wobbuffet/">Wobbuffet</option>  
<option value="/pokedex-swsh/woobat/">Woobat</option>  
<option value="/pokedex-swsh/wooloo/">Wooloo</option>  
<option value="/pokedex-swsh/wooper/">Wooper</option>  
<option value="/pokedex-swsh/wynaut/">Wynaut</option>  
<option value="/pokedex-swsh/xatu/">Xatu</option>  
<option value="/pokedex-swsh/yamask/">Yamask</option>  
<option value="/pokedex-swsh/yamper/">Yamper</option>  
<option value="/pokedex-swsh/zacian/">Zacian</option>  
<option value="/pokedex-swsh/zamazenta/">Zamazenta</option>  
<option value="/pokedex-swsh/zekrom/">Zekrom</option>  
<option value="/pokedex-swsh/zeraora/">Zeraora</option>  
<option value="/pokedex-swsh/zigzagoon/">Zigzagoon</option>  
<option value="/pokedex-swsh/zweilous/">Zweilous</option>  
</SELECT> </FORM></td>
<td colspan="2" align="center"> <FORM NAME="galar">
 <SELECT NAME="SelectURL" onChange="document.location.href=document.galar.SelectURL.options[document.galar.SelectURL.selectedIndex].value" style="color:#383838; font-size: 8pt; background:#CEBC77" size=1>
 <option value="#">Galar Pokédex</option>

<option value="/pokedex-swsh/grookey/">001 Grookey</option>
<option value="/pokedex-swsh/thwackey/">002 Thwackey</option>
<option value="/pokedex-swsh/rillaboom/">003 Rillaboom</option>
<option value="/pokedex-swsh/scorbunny/">004 Scorbunny</option>
<option value="/pokedex-swsh/raboot/">005 Raboot</option>
<option value="/pokedex-swsh/cinderace/">006 Cinderace</option>
<option value="/pokedex-swsh/sobble/">007 Sobble</option>
<option value="/pokedex-swsh/drizzile/">008 Drizzile</option>
<option value="/pokedex-swsh/inteleon/">009 Inteleon</option>
<option value="/pokedex-swsh/blipbug/">0010 Blipbug</option>
<option value="/pokedex-swsh/dottler/">011 Dottler</option>
<option value="/pokedex-swsh/orbeetle/">012 Orbeetle</option>
<option value="/pokedex-swsh/caterpie/">013 Caterpie</option>
<option value="/pokedex-swsh/metapod/">014 Metapod</option>
<option value="/pokedex-swsh/butterfree/">015 Butterfree</option>
<option value="/pokedex-swsh/grubbin/">016 Grubbin</option>
<option value="/pokedex-swsh/charjabug/">017 Charjabug</option>
<option value="/pokedex-swsh/vikavolt/">018 Vikavolt</option>
<option value="/pokedex-swsh/hoothoot/">019 Hoothoot</option>
<option value="/pokedex-swsh/noctowl/">020 Noctowl</option>
<option value="/pokedex-swsh/rookidee/">021 Rookidee</option>
<option value="/pokedex-swsh/corvisquire/">022 Corvisquire</option>
<option value="/pokedex-swsh/corviknight/">023 Corviknight</option>
<option value="/pokedex-swsh/skwovet/">024 Skwovet</option>
<option value="/pokedex-swsh/greedent/">025 Greedent</option>
<option value="/pokedex-swsh/pidove/">026 Pidove</option>
<option value="/pokedex-swsh/tranquill/">027 Tranquill</option>
<option value="/pokedex-swsh/unfezant/">028 Unfezant</option>
<option value="/pokedex-swsh/nickit/">029 Nickit</option>
<option value="/pokedex-swsh/thievul/">030 Thievul</option>
<option value="/pokedex-swsh/zigzagoon/">031 Zigzagoon</option>
<option value="/pokedex-swsh/linoone/">032 Linoone</option>
<option value="/pokedex-swsh/obstagoon/">033 Obstagoon</option>
<option value="/pokedex-swsh/wooloo/">034 Wooloo</option>
<option value="/pokedex-swsh/dubwool/">035 Dubwool</option>
<option value="/pokedex-swsh/lotad/">036 Lotad</option>
<option value="/pokedex-swsh/lombre/">037 Lombre</option>
<option value="/pokedex-swsh/ludicolo/">038 Ludicolo</option>
<option value="/pokedex-swsh/seedot/">039 Seedot</option>
<option value="/pokedex-swsh/nuzleaf/">040 Nuzleaf</option>
<option value="/pokedex-swsh/shiftry/">041 Shiftry</option>
<option value="/pokedex-swsh/chewtle/">042 Chewtle</option>
<option value="/pokedex-swsh/drednaw/">043 Drednaw</option>
<option value="/pokedex-swsh/purrloin/">044 Purrloin</option>
<option value="/pokedex-swsh/liepard/">045 Liepard</option>
<option value="/pokedex-swsh/yamper/">046 Yamper</option>
<option value="/pokedex-swsh/boltund/">047 Boltund</option>
<option value="/pokedex-swsh/bunnelby/">048 Bunnelby</option>
<option value="/pokedex-swsh/diggersby/">049 Diggersby</option>
<option value="/pokedex-swsh/minccino/">050 Minccino</option>
<option value="/pokedex-swsh/cinccino/">051 Cinccino</option>
<option value="/pokedex-swsh/bounsweet/">052 Bounsweet</option>
<option value="/pokedex-swsh/steenee/">053 Steenee</option>
<option value="/pokedex-swsh/tsareena/">054 Tsareena</option>
<option value="/pokedex-swsh/oddish/">055 Oddish</option>
<option value="/pokedex-swsh/gloom/">056 Gloom</option>
<option value="/pokedex-swsh/vileplume/">057 Vileplume</option>
<option value="/pokedex-swsh/bellossom/">058 Bellossom</option>
<option value="/pokedex-swsh/budew/">059 Budew</option>
<option value="/pokedex-swsh/roselia/">060 Roselia</option>
<option value="/pokedex-swsh/roserade/">061 Roserade</option>
<option value="/pokedex-swsh/wingull/">062 Wingull</option>
<option value="/pokedex-swsh/pelipper/">063 Pelipper</option>
<option value="/pokedex-swsh/joltik/">064 Joltik</option>
<option value="/pokedex-swsh/galvantula/">065 Galvantula</option>
<option value="/pokedex-swsh/electrike/">066 Electrike</option>
<option value="/pokedex-swsh/manectric/">067 Manectric</option>
<option value="/pokedex-swsh/vulpix/">068 Vulpix</option>
<option value="/pokedex-swsh/ninetales/">069 Ninetales</option>
<option value="/pokedex-swsh/growlithe/">070 Growlithe</option>
<option value="/pokedex-swsh/arcanine/">071 Arcanine</option>
<option value="/pokedex-swsh/vanillite/">072 Vanillite</option>
<option value="/pokedex-swsh/vanillish/">073 Vanillish</option>
<option value="/pokedex-swsh/vanilluxe/">074 Vanilluxe</option>
<option value="/pokedex-swsh/swinub/">075 Swinub</option>
<option value="/pokedex-swsh/piloswine/">076 Piloswine</option>
<option value="/pokedex-swsh/mamoswine/">077 Mamoswine</option>
<option value="/pokedex-swsh/delibird/">078 Delibird</option>
<option value="/pokedex-swsh/snorunt/">079 Snorunt</option>
<option value="/pokedex-swsh/glalie/">080 Glalie</option>
<option value="/pokedex-swsh/froslass/">081 Froslass</option>
<option value="/pokedex-swsh/baltoy/">082 Baltoy</option>
<option value="/pokedex-swsh/claydol/">083 Claydol</option>
<option value="/pokedex-swsh/mudbray/">084 Mudbray</option>
<option value="/pokedex-swsh/mudsdale/">085 Mudsdale</option>
<option value="/pokedex-swsh/dwebble/">086 Dwebble</option>
<option value="/pokedex-swsh/crustle/">087 Crustle</option>
<option value="/pokedex-swsh/golett/">088 Golett</option>
<option value="/pokedex-swsh/golurk/">089 Golurk</option>
<option value="/pokedex-swsh/munna/">090 Munna</option>
<option value="/pokedex-swsh/musharna/">091 Musharna</option>
<option value="/pokedex-swsh/natu/">092 Natu</option>
<option value="/pokedex-swsh/xatu/">093 Xatu</option>
<option value="/pokedex-swsh/stufful/">094 Stufful</option>
<option value="/pokedex-swsh/bewear/">095 Bewear</option>
<option value="/pokedex-swsh/snover/">096 Snover</option>
<option value="/pokedex-swsh/abomasnow/">097 Abomasnow</option>
<option value="/pokedex-swsh/krabby/">098 Krabby</option>
<option value="/pokedex-swsh/kingler/">099 Kingler</option>
<option value="/pokedex-swsh/wooper/">0100 Wooper</option>
<option value="/pokedex-swsh/quagsire/">101 Quagsire</option>
<option value="/pokedex-swsh/corphish/">102 Corphish</option>
<option value="/pokedex-swsh/crawdaunt/">103 Crawdaunt</option>
<option value="/pokedex-swsh/nincada/">104 Nincada</option>
<option value="/pokedex-swsh/ninjask/">105 Ninjask</option>
<option value="/pokedex-swsh/shedinja/">106 Shedinja</option>
<option value="/pokedex-swsh/tyrogue/">107 Tyrogue</option>
<option value="/pokedex-swsh/hitmonlee/">108 Hitmonlee</option>
<option value="/pokedex-swsh/hitmonchan/">109 Hitmonchan</option>
<option value="/pokedex-swsh/hitmontop/">110 Hitmontop</option>
<option value="/pokedex-swsh/pancham/">111 Pancham</option>
<option value="/pokedex-swsh/pangoro/">112 Pangoro</option>
<option value="/pokedex-swsh/klink/">113 Klink</option>
<option value="/pokedex-swsh/klang/">114 Klang</option>
<option value="/pokedex-swsh/klinklang/">115 Klinklang</option>
<option value="/pokedex-swsh/combee/">116 Combee</option>
<option value="/pokedex-swsh/vespiquen/">117 Vespiquen</option>
<option value="/pokedex-swsh/bronzor/">118 Bronzor</option>
<option value="/pokedex-swsh/bronzong/">119 Bronzong</option>
<option value="/pokedex-swsh/ralts/">120 Ralts</option>
<option value="/pokedex-swsh/kirlia/">121 Kirlia</option>
<option value="/pokedex-swsh/gardevoir/">122 Gardevoir</option>
<option value="/pokedex-swsh/gallade/">123 Gallade</option>
<option value="/pokedex-swsh/drifloon/">124 Drifloon</option>
<option value="/pokedex-swsh/drifblim/">125 Drifblim</option>
<option value="/pokedex-swsh/gossifleur/">126 Gossifleur</option>
<option value="/pokedex-swsh/eldegoss/">127 Eldegoss</option>
<option value="/pokedex-swsh/cherubi/">128 Cherubi</option>
<option value="/pokedex-swsh/cherrim/">129 Cherrim</option>
<option value="/pokedex-swsh/stunky/">130 Stunky</option>
<option value="/pokedex-swsh/skuntank/">131 Skuntank</option>
<option value="/pokedex-swsh/tympole/">132 Tympole</option>
<option value="/pokedex-swsh/palpitoad/">133 Palpitoad</option>
<option value="/pokedex-swsh/seismitoad/">134 Seismitoad</option>
<option value="/pokedex-swsh/duskull/">135 Duskull</option>
<option value="/pokedex-swsh/dusclops/">136 Dusclops</option>
<option value="/pokedex-swsh/dusknoir/">137 Dusknoir</option>
<option value="/pokedex-swsh/machop/">138 Machop</option>
<option value="/pokedex-swsh/machoke/">139 Machoke</option>
<option value="/pokedex-swsh/machamp/">140 Machamp</option>
<option value="/pokedex-swsh/gastly/">141 Gastly</option>
<option value="/pokedex-swsh/haunter/">142 Haunter</option>
<option value="/pokedex-swsh/gengar/">143 Gengar</option>
<option value="/pokedex-swsh/magikarp/">144 Magikarp</option>
<option value="/pokedex-swsh/gyarados/">145 Gyarados</option>
<option value="/pokedex-swsh/goldeen/">146 Goldeen</option>
<option value="/pokedex-swsh/seaking/">147 Seaking</option>
<option value="/pokedex-swsh/remoraid/">148 Remoraid</option>
<option value="/pokedex-swsh/octillery/">149 Octillery</option>
<option value="/pokedex-swsh/shellder/">150 Shellder</option>
<option value="/pokedex-swsh/cloyster/">151 Cloyster</option>
<option value="/pokedex-swsh/feebas/">152 Feebas</option>
<option value="/pokedex-swsh/milotic/">153 Milotic</option>
<option value="/pokedex-swsh/basculin/">154 Basculin</option>
<option value="/pokedex-swsh/wishiwashi/">155 Wishiwashi</option>
<option value="/pokedex-swsh/pyukumuku/">156 Pyukumuku</option>
<option value="/pokedex-swsh/trubbish/">157 Trubbish</option>
<option value="/pokedex-swsh/garbodor/">158 Garbodor</option>
<option value="/pokedex-swsh/sizzlipede/">159 Sizzlipede</option>
<option value="/pokedex-swsh/centiskorch/">160 Centiskorch</option>
<option value="/pokedex-swsh/rolycoly/">161 Rolycoly</option>
<option value="/pokedex-swsh/carkol/">162 Carkol</option>
<option value="/pokedex-swsh/coalossal/">163 Coalossal</option>
<option value="/pokedex-swsh/diglett/">164 Diglett</option>
<option value="/pokedex-swsh/dugtrio/">165 Dugtrio</option>
<option value="/pokedex-swsh/drilbur/">166 Drilbur</option>
<option value="/pokedex-swsh/excadrill/">167 Excadrill</option>
<option value="/pokedex-swsh/roggenrola/">168 Roggenrola</option>
<option value="/pokedex-swsh/boldore/">169 Boldore</option>
<option value="/pokedex-swsh/gigalith/">170 Gigalith</option>
<option value="/pokedex-swsh/timburr/">171 Timburr</option>
<option value="/pokedex-swsh/gurdurr/">172 Gurdurr</option>
<option value="/pokedex-swsh/conkeldurr/">173 Conkeldurr</option>
<option value="/pokedex-swsh/woobat/">174 Woobat</option>
<option value="/pokedex-swsh/swoobat/">175 Swoobat</option>
<option value="/pokedex-swsh/noibat/">176 Noibat</option>
<option value="/pokedex-swsh/noivern/">177 Noivern</option>
<option value="/pokedex-swsh/onix/">178 Onix</option>
<option value="/pokedex-swsh/steelix/">179 Steelix</option>
<option value="/pokedex-swsh/arrokuda/">180 Arrokuda</option>
<option value="/pokedex-swsh/barraskewda/">181 Barraskewda</option>
<option value="/pokedex-swsh/meowth/">182 Meowth</option>
<option value="/pokedex-swsh/perrserker/">183 Perrserker</option>
<option value="/pokedex-swsh/persian/">184 Persian</option>
<option value="/pokedex-swsh/milcery/">185 Milcery</option>
<option value="/pokedex-swsh/alcremie/">186 Alcremie</option>
<option value="/pokedex-swsh/cutiefly/">187 Cutiefly</option>
<option value="/pokedex-swsh/ribombee/">188 Ribombee</option>
<option value="/pokedex-swsh/ferroseed/">189 Ferroseed</option>
<option value="/pokedex-swsh/ferrothorn/">190 Ferrothorn</option>
<option value="/pokedex-swsh/pumpkaboo/">191 Pumpkaboo</option>
<option value="/pokedex-swsh/gourgeist/">192 Gourgeist</option>
<option value="/pokedex-swsh/pichu/">193 Pichu</option>
<option value="/pokedex-swsh/pikachu/">194 Pikachu</option>
<option value="/pokedex-swsh/raichu/">195 Raichu</option>
<option value="/pokedex-swsh/eevee/">196 Eevee</option>
<option value="/pokedex-swsh/vaporeon/">197 Vaporeon</option>
<option value="/pokedex-swsh/jolteon/">198 Jolteon</option>
<option value="/pokedex-swsh/flareon/">199 Flareon</option>
<option value="/pokedex-swsh/espeon/">200 Espeon</option>
<option value="/pokedex-swsh/umbreon/">201 Umbreon</option>
<option value="/pokedex-swsh/leafeon/">202 Leafeon</option>
<option value="/pokedex-swsh/glaceon/">203 Glaceon</option>
<option value="/pokedex-swsh/sylveon/">204 Sylveon</option>
<option value="/pokedex-swsh/applin/">205 Applin</option>
<option value="/pokedex-swsh/flapple/">206 Flapple</option>
<option value="/pokedex-swsh/appletun/">207 Appletun</option>
<option value="/pokedex-swsh/espurr/">208 Espurr</option>
<option value="/pokedex-swsh/meowstic/">209 Meowstic</option>
<option value="/pokedex-swsh/swirlix/">210 Swirlix</option>
<option value="/pokedex-swsh/slurpuff/">211 Slurpuff</option>
<option value="/pokedex-swsh/spritzee/">212 Spritzee</option>
<option value="/pokedex-swsh/aromatisse/">213 Aromatisse</option>
<option value="/pokedex-swsh/dewpider/">214 Dewpider</option>
<option value="/pokedex-swsh/araquanid/">215 Araquanid</option>
<option value="/pokedex-swsh/wynaut/">216 Wynaut</option>
<option value="/pokedex-swsh/wobbuffet/">217 Wobbuffet</option>
<option value="/pokedex-swsh/farfetch'd/">218 Farfetch'd</option>
<option value="/pokedex-swsh/sirfetch'd/">219 Sirfetch'd</option>
<option value="/pokedex-swsh/chinchou/">220 Chinchou</option>
<option value="/pokedex-swsh/lanturn/">221 Lanturn</option>
<option value="/pokedex-swsh/croagunk/">222 Croagunk</option>
<option value="/pokedex-swsh/toxicroak/">223 Toxicroak</option>
<option value="/pokedex-swsh/scraggy/">224 Scraggy</option>
<option value="/pokedex-swsh/scrafty/">225 Scrafty</option>
<option value="/pokedex-swsh/stunfisk/">226 Stunfisk</option>
<option value="/pokedex-swsh/shuckle/">227 Shuckle</option>
<option value="/pokedex-swsh/barboach/">228 Barboach</option>
<option value="/pokedex-swsh/whiscash/">229 Whiscash</option>
<option value="/pokedex-swsh/shellos/">230 Shellos</option>
<option value="/pokedex-swsh/gastrodon/">231 Gastrodon</option>
<option value="/pokedex-swsh/wimpod/">232 Wimpod</option>
<option value="/pokedex-swsh/golisopod/">233 Golisopod</option>
<option value="/pokedex-swsh/binacle/">234 Binacle</option>
<option value="/pokedex-swsh/barbaracle/">235 Barbaracle</option>
<option value="/pokedex-swsh/corsola/">236 Corsola</option>
<option value="/pokedex-swsh/cursola/">237 Cursola</option>
<option value="/pokedex-swsh/impidimp/">238 Impidimp</option>
<option value="/pokedex-swsh/morgrem/">239 Morgrem</option>
<option value="/pokedex-swsh/grimmsnarl/">240 Grimmsnarl</option>
<option value="/pokedex-swsh/hatenna/">241 Hatenna</option>
<option value="/pokedex-swsh/hattrem/">242 Hattrem</option>
<option value="/pokedex-swsh/hatterene/">243 Hatterene</option>
<option value="/pokedex-swsh/salandit/">244 Salandit</option>
<option value="/pokedex-swsh/salazzle/">245 Salazzle</option>
<option value="/pokedex-swsh/pawniard/">246 Pawniard</option>
<option value="/pokedex-swsh/bisharp/">247 Bisharp</option>
<option value="/pokedex-swsh/throh/">248 Throh</option>
<option value="/pokedex-swsh/sawk/">249 Sawk</option>
<option value="/pokedex-swsh/koffing/">250 Koffing</option>
<option value="/pokedex-swsh/weezing/">251 Weezing</option>
<option value="/pokedex-swsh/bonsly/">252 Bonsly</option>
<option value="/pokedex-swsh/sudowoodo/">253 Sudowoodo</option>
<option value="/pokedex-swsh/cleffa/">254 Cleffa</option>
<option value="/pokedex-swsh/clefairy/">255 Clefairy</option>
<option value="/pokedex-swsh/clefable/">256 Clefable</option>
<option value="/pokedex-swsh/togepi/">257 Togepi</option>
<option value="/pokedex-swsh/togetic/">258 Togetic</option>
<option value="/pokedex-swsh/togekiss/">259 Togekiss</option>
<option value="/pokedex-swsh/munchlax/">260 Munchlax</option>
<option value="/pokedex-swsh/snorlax/">261 Snorlax</option>
<option value="/pokedex-swsh/cottonee/">262 Cottonee</option>
<option value="/pokedex-swsh/whimsicott/">263 Whimsicott</option>
<option value="/pokedex-swsh/rhyhorn/">264 Rhyhorn</option>
<option value="/pokedex-swsh/rhydon/">265 Rhydon</option>
<option value="/pokedex-swsh/rhyperior/">266 Rhyperior</option>
<option value="/pokedex-swsh/gothita/">267 Gothita</option>
<option value="/pokedex-swsh/gothorita/">268 Gothorita</option>
<option value="/pokedex-swsh/gothitelle/">269 Gothitelle</option>
<option value="/pokedex-swsh/solosis/">270 Solosis</option>
<option value="/pokedex-swsh/duosion/">271 Duosion</option>
<option value="/pokedex-swsh/reuniclus/">272 Reuniclus</option>
<option value="/pokedex-swsh/karrablast/">273 Karrablast</option>
<option value="/pokedex-swsh/escavalier/">274 Escavalier</option>
<option value="/pokedex-swsh/shelmet/">275 Shelmet</option>
<option value="/pokedex-swsh/accelgor/">276 Accelgor</option>
<option value="/pokedex-swsh/elgyem/">277 Elgyem</option>
<option value="/pokedex-swsh/beheeyem/">278 Beheeyem</option>
<option value="/pokedex-swsh/cubchoo/">279 Cubchoo</option>
<option value="/pokedex-swsh/beartic/">280 Beartic</option>
<option value="/pokedex-swsh/rufflet/">281 Rufflet</option>
<option value="/pokedex-swsh/braviary/">282 Braviary</option>
<option value="/pokedex-swsh/vullaby/">283 Vullaby</option>
<option value="/pokedex-swsh/mandibuzz/">284 Mandibuzz</option>
<option value="/pokedex-swsh/skorupi/">285 Skorupi</option>
<option value="/pokedex-swsh/drapion/">286 Drapion</option>
<option value="/pokedex-swsh/litwick/">287 Litwick</option>
<option value="/pokedex-swsh/lampent/">288 Lampent</option>
<option value="/pokedex-swsh/chandelure/">289 Chandelure</option>
<option value="/pokedex-swsh/inkay/">290 Inkay</option>
<option value="/pokedex-swsh/malamar/">291 Malamar</option>
<option value="/pokedex-swsh/sneasel/">292 Sneasel</option>
<option value="/pokedex-swsh/weavile/">293 Weavile</option>
<option value="/pokedex-swsh/sableye/">294 Sableye</option>
<option value="/pokedex-swsh/mawile/">295 Mawile</option>
<option value="/pokedex-swsh/maractus/">296 Maractus</option>
<option value="/pokedex-swsh/sigilyph/">297 Sigilyph</option>
<option value="/pokedex-swsh/riolu/">298 Riolu</option>
<option value="/pokedex-swsh/lucario/">299 Lucario</option>
<option value="/pokedex-swsh/torkoal/">300 Torkoal</option>
<option value="/pokedex-swsh/mimikyu/">301 Mimikyu</option>
<option value="/pokedex-swsh/cufant/">302 Cufant</option>
<option value="/pokedex-swsh/copperajah/">303 Copperajah</option>
<option value="/pokedex-swsh/qwilfish/">304 Qwilfish</option>
<option value="/pokedex-swsh/frillish/">305 Frillish</option>
<option value="/pokedex-swsh/jellicent/">306 Jellicent</option>
<option value="/pokedex-swsh/mareanie/">307 Mareanie</option>
<option value="/pokedex-swsh/toxapex/">308 Toxapex</option>
<option value="/pokedex-swsh/cramorant/">309 Cramorant</option>
<option value="/pokedex-swsh/toxel/">310 Toxel</option>
<option value="/pokedex-swsh/toxtricity/">311 Toxtricity</option>
<option value="/pokedex-swsh/silicobra/">312 Silicobra</option>
<option value="/pokedex-swsh/sandaconda/">313 Sandaconda</option>
<option value="/pokedex-swsh/hippopotas/">314 Hippopotas</option>
<option value="/pokedex-swsh/hippowdon/">315 Hippowdon</option>
<option value="/pokedex-swsh/durant/">316 Durant</option>
<option value="/pokedex-swsh/heatmor/">317 Heatmor</option>
<option value="/pokedex-swsh/helioptile/">318 Helioptile</option>
<option value="/pokedex-swsh/heliolisk/">319 Heliolisk</option>
<option value="/pokedex-swsh/hawlucha/">320 Hawlucha</option>
<option value="/pokedex-swsh/trapinch/">321 Trapinch</option>
<option value="/pokedex-swsh/vibrava/">322 Vibrava</option>
<option value="/pokedex-swsh/flygon/">323 Flygon</option>
<option value="/pokedex-swsh/axew/">324 Axew</option>
<option value="/pokedex-swsh/fraxure/">325 Fraxure</option>
<option value="/pokedex-swsh/haxorus/">326 Haxorus</option>
<option value="/pokedex-swsh/yamask/">327 Yamask</option>
<option value="/pokedex-swsh/runerigus/">328 Runerigus</option>
<option value="/pokedex-swsh/cofagrigus/">329 Cofagrigus</option>
<option value="/pokedex-swsh/honedge/">330 Honedge</option>
<option value="/pokedex-swsh/doublade/">331 Doublade</option>
<option value="/pokedex-swsh/aegislash/">332 Aegislash</option>
<option value="/pokedex-swsh/ponyta/">333 Ponyta</option>
<option value="/pokedex-swsh/rapidash/">334 Rapidash</option>
<option value="/pokedex-swsh/sinistea/">335 Sinistea</option>
<option value="/pokedex-swsh/polteageist/">336 Polteageist</option>
<option value="/pokedex-swsh/indeedee/">337 Indeedee</option>
<option value="/pokedex-swsh/phantump/">338 Phantump</option>
<option value="/pokedex-swsh/trevenant/">339 Trevenant</option>
<option value="/pokedex-swsh/morelull/">340 Morelull</option>
<option value="/pokedex-swsh/shiinotic/">341 Shiinotic</option>
<option value="/pokedex-swsh/oranguru/">342 Oranguru</option>
<option value="/pokedex-swsh/passimian/">343 Passimian</option>
<option value="/pokedex-swsh/morpeko/">344 Morpeko</option>
<option value="/pokedex-swsh/falinks/">345 Falinks</option>
<option value="/pokedex-swsh/drampa/">346 Drampa</option>
<option value="/pokedex-swsh/turtonator/">347 Turtonator</option>
<option value="/pokedex-swsh/togedemaru/">348 Togedemaru</option>
<option value="/pokedex-swsh/snom/">349 Snom</option>
<option value="/pokedex-swsh/frosmoth/">350 Frosmoth</option>
<option value="/pokedex-swsh/clobbopus/">351 Clobbopus</option>
<option value="/pokedex-swsh/grapploct/">352 Grapploct</option>
<option value="/pokedex-swsh/pincurchin/">353 Pincurchin</option>
<option value="/pokedex-swsh/mantyke/">354 Mantyke</option>
<option value="/pokedex-swsh/mantine/">355 Mantine</option>
<option value="/pokedex-swsh/wailmer/">356 Wailmer</option>
<option value="/pokedex-swsh/wailord/">357 Wailord</option>
<option value="/pokedex-swsh/bergmite/">358 Bergmite</option>
<option value="/pokedex-swsh/avalugg/">359 Avalugg</option>
<option value="/pokedex-swsh/dhelmise/">360 Dhelmise</option>
<option value="/pokedex-swsh/lapras/">361 Lapras</option>
<option value="/pokedex-swsh/lunatone/">362 Lunatone</option>
<option value="/pokedex-swsh/solrock/">363 Solrock</option>
<option value="/pokedex-swsh/mimejr./">364 Mime Jr.</option>
<option value="/pokedex-swsh/mr.mime/">365 Mr. Mime</option>
<option value="/pokedex-swsh/mr.rime/">366 Mr. Rime</option>
<option value="/pokedex-swsh/darumaka/">367 Darumaka</option>
<option value="/pokedex-swsh/darmanitan/">368 Darmanitan</option>
<option value="/pokedex-swsh/stonjourner/">369 Stonjourner</option>
<option value="/pokedex-swsh/eiscue/">370 Eiscue</option>
<option value="/pokedex-swsh/duraludon/">371 Duraludon</option>
<option value="/pokedex-swsh/rotom/">372 Rotom</option>
<option value="/pokedex-swsh/ditto/">373 Ditto</option>
<option value="/pokedex-swsh/dracozolt/">374 Dracozolt</option>
<option value="/pokedex-swsh/arctozolt/">375 Arctozolt</option>
<option value="/pokedex-swsh/dracovish/">376 Dracovish</option>
<option value="/pokedex-swsh/arctovish/">377 Arctovish</option>
<option value="/pokedex-swsh/charmander/">378 Charmander</option>
<option value="/pokedex-swsh/charmeleon/">379 Charmeleon</option>
<option value="/pokedex-swsh/charizard/">380 Charizard</option>
<option value="/pokedex-swsh/type:null/">381 Type: Null</option>
<option value="/pokedex-swsh/silvally/">382 Silvally</option>
<option value="/pokedex-swsh/larvitar/">383 Larvitar</option>
<option value="/pokedex-swsh/pupitar/">384 Pupitar</option>
<option value="/pokedex-swsh/tyranitar/">385 Tyranitar</option>
<option value="/pokedex-swsh/deino/">386 Deino</option>
<option value="/pokedex-swsh/zweilous/">387 Zweilous</option>
<option value="/pokedex-swsh/hydreigon/">388 Hydreigon</option>
<option value="/pokedex-swsh/goomy/">389 Goomy</option>
<option value="/pokedex-swsh/sliggoo/">390 Sliggoo</option>
<option value="/pokedex-swsh/goodra/">391 Goodra</option>
<option value="/pokedex-swsh/jangmo-o/">392 Jangmo-o</option>
<option value="/pokedex-swsh/hakamo-o/">393 Hakamo-o</option>
<option value="/pokedex-swsh/kommo-o/">394 Kommo-o</option>
<option value="/pokedex-swsh/dreepy/">395 Dreepy</option>
<option value="/pokedex-swsh/drakloak/">396 Drakloak</option>
<option value="/pokedex-swsh/dragapult/">397 Dragapult</option>
<option value="/pokedex-swsh/zacian/">398 Zacian</option>
<option value="/pokedex-swsh/zamazenta/">399 Zamazenta</option>
<option value="/pokedex-swsh/eternatus/">400 Eternatus</option>
</SELECT> </FORM></td>
</tr></table></div>



<div align="center"><table class="dextab">
  <tr>
    <td width="65%"><table  width="100%" border="0" cellspacing="0" cellpadding="0">
  		<tr>
    		<td width="32" align="center"><img src="/pokedex-swsh/icon/006.png"></td>
		<td><h1>&nbsp;#006 Charizard</h1></td></tr></table></td>
    <td class="footop"><a href="#general">General</a></td>
    <td class="footop"><a href="#location">Location</a></td>
    <td class="footop"><a href="#attacks">Attacks</a></td>
    <td class="footop"><a href="#stats">Stats</a></td>
    <td class="footop"><a href="egg.shtml">Egg Moves</a></td>

  </tr></table>
<table class="dextab">
      <tr >
	<td width="25%" class="curr"><a href="/pokedex-swsh/charizard">Gen VIII Dex</a></td>

	<td width="25%" class="pkmn"><a href="/pokedex-sm/006.shtml">Gen VII Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-xy/006.shtml">Gen VI Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-bw/006.shtml">Gen V Dex</a></td></tr><tr>	<td width="25%" class="pkmn"><a href="/pokedex-dp/006.shtml">Gen IV Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-rs/006.shtml">Gen III Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-gs/006.shtml">Gen II Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex/006.shtml">Gen I Dex</a></td>  </tr></table><p><a name="general"></a><table class="dextable">
		<tr>
			<td class="fooevo">Picture</td>
		</tr>
		<tr>
			<td class="fooinfo" align="center"><table><tr><td class="pkmn"><img src="/swordshield/pokemon/006.png" alt="Normal Sprite" /></td><td class="pkmn"><img src="/Shiny/SWSH/006.png" alt="Shiny Sprite" /></td></tr></table></td></table><table class="dextable">
		<tr>
			<td class="fooevo">Name</td>
			<td class="fooevo">Other Names</td>
			<td class="fooevo">No.</td>
			<td class="fooevo">Gender Ratio</td>
			<td class="fooevo">Type</td>
		</tr>
		<tr>

			<td class="fooinfo">Charizard</td>
			<td class="fooinfo"><table width="120" cellspacing="0" cellpadding="0">
			<tr> <td><b>Japan</b>: </td><td>Lizardon<br />&#12522;&#12470;&#12540;&#12489;&#12531;</td></tr>
			<tr> <td><b>French</b>: </td><td>Dracaufeu</td></tr>
			<tr> <td><b>German</b>: </td><td>Glurak</td></tr>
			<tr> <td><b>Korean</b>: </td><td>&#47532;&#51088;&#47805;</td></tr>
			</table></td>
			<td class="fooinfo"><table width="120" cellspacing="0" cellpadding="0"><tr> <td><b>National</b>: </td><td>#006</td></tr>
			<tr><td><b>Galar</b>: </td><td>#380</td></tr>
			</table></td>
			<td class="fooinfo"><table width="120" cellspacing="0" cellpadding="0"><tr> <td>Male <font color="#499FFF">&#9794;</font>:</td><td>88.14%</td></tr><tr><td>Female <font color="#F6814A">&#9792;</font>:</td><td>11.86%</td></tr></table></td>
			<td class="cen"><a href="/pokedex-swsh/fire.shtml"><img src="/pokedex-bw/type/fire.gif" border="0" alt="Fire-type" class="typeimg" /></a> <a href="/pokedex-swsh/flying.shtml"><img src="/pokedex-bw/type/flying.gif"  alt="Flying-type" class="typeimg" /></a></td>

		</tr>
		<tr>
			<td class="foo">Classification</td>
			<td class="foo">Height</td>
			<td class="foo">Weight</td>
			<td class="foo">Capture Rate</td>
			<td class="foo">Base Egg Steps</td>
		</tr>
		<tr>
			<td class="fooinfo">Flame Pok&eacute;mon</td>
			<td class="fooinfo">5'07"<br />
			1.7m</td>
			<td class="fooinfo">199.5lbs<br />
			90.5kg</td><td class="fooinfo">45</td><td class="fooinfo">5,120</td>
		</tr></table>
		<table class="dextable">		<tr>
			<td align="left" colspan="6" class="fooleft"><b>Abilities</b>: <a href="/abilitydex/blaze.shtml"><b>Blaze</b></a> - <a href="/abilitydex/solarpower.shtml"><b>Solar Power</b></a> <i>(Hidden Ability)</i> </td>
		</tr>
		<tr>
			<td align="left" colspan="5" class="fooinfo">
<a href="/abilitydex/blaze.shtml"><b>Blaze</b></a>: When HP is below 1/3rd its maximum, power of Fire-type moves is increased by 50%. <br />
<b>Hidden Ability</b> <i>(Available)</i>: <br /><a href="/abilitydex/solarpower.shtml"><b>Solar Power</b></a>: During sunshine, the Pok&eacute;mon&#x2019;s Special Attack raises to 1.5 times but HP decreases by 1/8th the maximum HP every turn. </td>
		</tr>
		<tr>
			<td class="foo">Experience Growth</td>
						<td class="foo">Base Happiness</td>
						<td class="foo">Effort Values Earned</td>
			<td class="foo">Dyanamax Capable?</td>
		</tr>
		<tr>
		<td class="fooinfo">1,059,862 Points<br>Medium Slow</td>
			<td class="fooinfo"></td> 			<td class="fooinfo">3 Sp. Attack Point(s)<br /></td><td class="fooinfo">
			Charizard can Dynamax
		</tr>


	</table>
<table class="dextable">
	<tr>
		<td colspan="18" class="foo">
		<h2>Weakness</h2>
		</td>
	</tr>
<tr>	
	<td class="footype">
		<a href="/attackdex-swsh/normal.shtml"><img src="/games/type/normal2.gif" alt="Attacking Move Type: Normal-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/fire.shtml"><img src="/games/type/fire2.gif" alt="Attacking Move Type: Fire-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/water.shtml"><img src="/games/type/water2.gif" alt="Attacking Move Type: Water-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/electric.shtml"><img src="/games/type/electric2.gif" alt="Attacking Move Type: Electric-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/grass.shtml"><img src="/games/type/grass2.gif" alt="Attacking Move Type: Grass-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/ice.shtml"><img src="/games/type/ice2.gif" alt="Attacking Move Type: Ice-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/fighting.shtml"><img src="/games/type/fighting2.gif" alt="Attacking Move Type: Fighting-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/poison.shtml"><img src="/games/type/poison2.gif" alt="Attacking Move Type: Poison-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/ground.shtml"><img src="/games/type/ground2.gif" alt="Attacking Move Type: Ground-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/flying.shtml"><img src="/games/type/flying2.gif" alt="Attacking Move Type: Flying-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/psychict.shtml"><img src="/games/type/psychic2.gif" alt="Attacking Move Type: Psychic-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/bug.shtml"><img src="/games/type/bug2.gif" alt="Attacking Move Type: Bug-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/rock.shtml"><img src="/games/type/rock2.gif" alt="Attacking Move Type: Rock-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/ghost.shtml"><img src="/games/type/ghost2.gif" alt="Attacking Move Type: Ghost-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/dragon.shtml"><img src="/games/type/dragon2.gif" alt="Attacking Move Type: Dragon-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/dark.shtml"><img src="/games/type/dark2.gif" alt="Attacking Move Type: Dark-type" border="0" /></a>
		</td>
		<td class="footype">
		<a href="/attackdex-swsh/steel.shtml"><img src="/games/type/steel2.gif" alt="Attacking Move Type: Steel-type" border="0" /></a>
		</td>		<td class="footype">
		<a href="/attackdex-swsh/fairy.shtml"><img src="/games/type/fairy2.gif" alt="Attacking Move Type: Fairy-type" border="0" /></a>
		</td>
</tr>
<tr>
			<td class="footype">*1</td>
			<td class="footype">*0.5</td>
			<td class="footype">*2</td>
			<td class="footype">*2</td>
			<td class="footype">*0.25</td>
			<td class="footype">*1</td>
			<td class="footype">*0.5</td>
			<td class="footype">*1</td>
			<td class="footype">*0</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*0.25</td>
			<td class="footype">*4</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*0.5</td>
			<td class="footype">*0.5</td>
		</tr>
</table>

<table class="dextable">
		<tr>
			<td class="footwo">Wild Hold Item</td>
			<td class="footwo">Egg Groups</td>
		</tr>
		<tr>
			<td class="cen">&nbsp;</td>
			<td class="fooinfo" align="center"><table class="dexitem"><tr ><td ><form name="breed"><select  NAME="SelectURL" onChange="document.location.href=this.options[this.selectedIndex].value" style="color:#000000; font-size: 1em; background:#507C36">
			<option value="/pokedex-swsh/egg/monster.shtml">Monster</option><option value="/pokedex-swsh/001.shtml">Bulbasaur</option><option value="/pokedex-swsh/002.shtml">Ivysaur</option><option value="/pokedex-swsh/003.shtml">Venusaur</option><option value="/pokedex-swsh/004.shtml">Charmander</option><option value="/pokedex-swsh/005.shtml">Charmeleon</option><option value="/pokedex-swsh/006.shtml">Charizard</option><option value="/pokedex-swsh/007.shtml">Squirtle</option><option value="/pokedex-swsh/008.shtml">Wartortle</option><option value="/pokedex-swsh/009.shtml">Blastoise</option><option value="/pokedex-swsh/111.shtml">Rhyhorn</option><option value="/pokedex-swsh/112.shtml">Rhydon</option><option value="/pokedex-swsh/131.shtml">Lapras</option><option value="/pokedex-swsh/143.shtml">Snorlax</option><option value="/pokedex-swsh/246.shtml">Larvitar</option><option value="/pokedex-swsh/247.shtml">Pupitar</option><option value="/pokedex-swsh/248.shtml">Tyranitar</option><option value="/pokedex-swsh/459.shtml">Snover</option><option value="/pokedex-swsh/460.shtml">Abomasnow</option><option value="/pokedex-swsh/464.shtml">Rhyperior</option><option value="/pokedex-swsh/610.shtml">Axew</option><option value="/pokedex-swsh/611.shtml">Fraxure</option><option value="/pokedex-swsh/612.shtml">Haxorus</option><option value="/pokedex-swsh/694.shtml">Helioptile</option><option value="/pokedex-swsh/695.shtml">Heliolisk</option><option value="/pokedex-swsh/712.shtml">Bergmite</option><option value="/pokedex-swsh/713.shtml">Avalugg</option><option value="/pokedex-swsh/757.shtml">Salandit</option><option value="/pokedex-swsh/758.shtml">Salazzle</option><option value="/pokedex-swsh/776.shtml">Turtonator</option><option value="/pokedex-swsh/780.shtml">Drampa</option><option value="/pokedex-swsh/833.shtml">Chewtle</option><option value="/pokedex-swsh/834.shtml">Drednaw</option><option value="/pokedex-swsh/132.shtml">Ditto</option></select></form></td><td ><a href="/pokedex-swsh/egg/monster.shtml">Monster</a></td></tr>
	
	<tr ><td ><form name="breed2"><select NAME="SelectURL" onChange="document.location.href=this.options[this.selectedIndex].value" style="color:#000000; font-size: 1em; background:#507C36">
			<option value="/pokedex-swsh/egg/dragon.shtml">Dragon</option><option value="/pokedex-swsh/004.shtml">Charmander</option><option value="/pokedex-swsh/005.shtml">Charmeleon</option><option value="/pokedex-swsh/006.shtml">Charizard</option><option value="/pokedex-swsh/129.shtml">Magikarp</option><option value="/pokedex-swsh/130.shtml">Gyarados</option><option value="/pokedex-swsh/328.shtml">Trapinch</option><option value="/pokedex-swsh/329.shtml">Vibrava</option><option value="/pokedex-swsh/330.shtml">Flygon</option><option value="/pokedex-swsh/349.shtml">Feebas</option><option value="/pokedex-swsh/350.shtml">Milotic</option><option value="/pokedex-swsh/559.shtml">Scraggy</option><option value="/pokedex-swsh/560.shtml">Scrafty</option><option value="/pokedex-swsh/610.shtml">Axew</option><option value="/pokedex-swsh/611.shtml">Fraxure</option><option value="/pokedex-swsh/612.shtml">Haxorus</option><option value="/pokedex-swsh/633.shtml">Deino</option><option value="/pokedex-swsh/634.shtml">Zweilous</option><option value="/pokedex-swsh/635.shtml">Hydreigon</option><option value="/pokedex-swsh/694.shtml">Helioptile</option><option value="/pokedex-swsh/695.shtml">Heliolisk</option><option value="/pokedex-swsh/704.shtml">Goomy</option><option value="/pokedex-swsh/705.shtml">Sliggoo</option><option value="/pokedex-swsh/706.shtml">Goodra</option><option value="/pokedex-swsh/714.shtml">Noibat</option><option value="/pokedex-swsh/715.shtml">Noivern</option><option value="/pokedex-swsh/757.shtml">Salandit</option><option value="/pokedex-swsh/758.shtml">Salazzle</option><option value="/pokedex-swsh/776.shtml">Turtonator</option><option value="/pokedex-swsh/780.shtml">Drampa</option><option value="/pokedex-swsh/782.shtml">Jangmo-o</option><option value="/pokedex-swsh/783.shtml">Hakamo-o</option><option value="/pokedex-swsh/784.shtml">Kommo-o</option><option value="/pokedex-swsh/840.shtml">Applin</option><option value="/pokedex-swsh/841.shtml">Flapple</option><option value="/pokedex-swsh/842.shtml">Appletun</option><option value="/pokedex-swsh/843.shtml">Silicobra</option><option value="/pokedex-swsh/844.shtml">Sandaconda</option><option value="/pokedex-swsh/884.shtml">Duraludon</option><option value="/pokedex-swsh/885.shtml">Dreepy</option><option value="/pokedex-swsh/886.shtml">Drakloak</option><option value="/pokedex-swsh/887.shtml">Dragapult</option><option value="/pokedex-swsh/132.shtml">Ditto</option></select></form></td><td ><a href="/pokedex-swsh/egg/dragon.shtml">Dragon</a></td></tr></table></td>

		</tr>
</table><table class="dextable" align="center">
		<tr>
			<td class="fooevo">Evolutionary Chain</td>
		</tr>
		<tr>
			<td class="fooinfo" align="center"><table class="evochain">
			<tr><td class="pkmn"><a href="/pokedex-swsh/charmander"><img src="/swordshield/pokemon/004.png" border="0" alt="Charmander" width="100" /></a></td>
			<td ><img src="/pokedex-swsh/evoicon/l16.png" alt="Level " title="Level " /></td>
			<td class="pkmn"><a href="/pokedex-swsh/charmeleon"><img src="/swordshield/pokemon/005.png" border="0" alt="Charmeleon" width="100" /></a></td><td ><img src="/pokedex-swsh/evoicon/l36.png" alt="Level " title="Level " /></td><td class="pkmn"><a href="/pokedex-swsh/charizard"><img src="/swordshield/pokemon/006.png" border="0" alt="Charizard" width="100" /></a></td><td ><img src="/pokedex-sm/evoicon/mega384.png" alt="Gigantamax" /></td><td class="pkmn"><a href="/pokedex-swsh/charizard"><img src="/swordshield/pokemon/006-gi.png" border="0" alt="Gigantamax Charizard"width="100" /></a></td></tr></table></td>
		</tr>
</table>

		<a name="location"></a><table class="dextable">
	<tr>
		<td class="fooevo" colspan="3"><h2>Locations</h2> - <a href="locations.shtml"><i>In-Depth Details</i></a></td>
	</tr>
	<tr>
		<td class="foox">Sword</td>
		<td class="fooinfo" >Max Raid Battles: <a href="/pokearth/galar/hammerlockehills.shtml">Hammerlocke Hills</a>, <br />Gigantamax Raid Battles: <a href="/pokearth/galar/lakeofoutrage.shtml">Lake of Outrage</a></td>
	</tr>
	<tr>
		<td class="fooy" >Shield</td>
		<td class="fooinfo" >Max Raid Battles: <a href="/pokearth/galar/hammerlockehills.shtml">Hammerlocke Hills</a>, <br />Gigantamax Raid Battles: <a href="/pokearth/galar/lakeofoutrage.shtml">Lake of Outrage</a></td>
	</tr>
	</table><a name="location"></a><table class="dextable">
	<tr>
		<td class="fooevo" colspan="3">Flavor Text</td>
	</tr><tr><td class="cen" rowspan="2" width="32"><img src="/pokedex-swsh/icon/006.png" alt="Charizard Sprite" /></td><td class="foox">Sword</td><td class="fooinfo">It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.</td></tr><td class="fooy">Shield</td><td class="fooinfo">Its wings can carry this Pok&eacute;mon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.</td></tr><tr><td class="cen" rowspan="2" width="32"><img src="/pokedex-swsh/icon/006-gi.png" alt="Charizard Sprite" /></td><td class="foox">Sword</td><td class="fooinfo">This colossal, flame-winged figure of a Charizard was brought about by Gigantamax energy.</td></tr><td class="fooy">Shield</td><td class="fooinfo">The flame inside its body burns hotter than 3,600 degrees Fahrenheit. When Charizard roars, that temperature climbs even higher.</td></tr></table><br /><br /><table class="anctab" align="center"><tr><td class="fooblack" width="10%"><h2>Attacks</h2></td><td class="fooblack" align="center" width="30%"><a href="#attacks">Level Up</a></td><td class="fooblack" align="center" width="30%"><a href="#tmhm">TM & HM</a></td><td class="fooblack" align="center" width="30%"><a href="#egg">Egg Moves</a></td>
</tr></table><br /><a name="attacks"></a><table class="dextable"><tr ><td colspan="10" class="fooevo"><h3><a name="standardlevel"></a>Standard Level Up</h3></td></tr><tr><th class="attheader">Level</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th></tr><tr>
				<td rowspan="2" class="fooinfo">Evolve</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/airslash.shtml">Air Slash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Air Slash - Flying-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Air Slash: Special Move"></td>
				<td class="cen">75</td>
				<td class="cen">95</td>
				<td class="cen">15</td>
				<td class="cen">30</td></tr>
				<tr><td class="fooinfo" colspan="6">The user attacks with a blade of air that slices even the sky. This may also make the target flinch.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/airslash.shtml">Air Slash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Air Slash - Flying-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Air Slash: Special Move"></td>
				<td class="cen">75</td>
				<td class="cen">95</td>
				<td class="cen">15</td>
				<td class="cen">30</td></tr>
				<tr><td class="fooinfo" colspan="6">The user attacks with a blade of air that slices even the sky. This may also make the target flinch.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dragonclaw.shtml">Dragon Claw</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Dragon Claw - Dragon-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Dragon Claw: Physical Move"></td>
				<td class="cen">80</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user slashes the target with huge sharp claws.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/heatwave.shtml">Heat Wave</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Heat Wave - Fire-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Heat Wave: Special Move"></td>
				<td class="cen">95</td>
				<td class="cen">90</td>
				<td class="cen">10</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The user attacks by exhaling hot breath on opposing Pok&eacute;mon. This may also leave those Pok&eacute;mon with a burn.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/scratch.shtml">Scratch</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Scratch - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Scratch: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">35</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">Hard, pointed, sharp claws rake the target to inflict damage.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/growl.shtml">Growl</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Growl - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Growl: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user growls in an endearing way, making opposing Pok&eacute;mon less wary. This lowers their Attack stats.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/ember.shtml">Ember</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Ember - Fire-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Ember: Special Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">25</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is attacked with small flames. This may also leave the target with a burn.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/smokescreen.shtml">Smokescreen</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Smokescreen - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Smokescreen: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user releases an obscuring cloud of smoke or ink. This lowers the target's accuracy.</td></tr><tr>
				<td rowspan="2" class="fooinfo">12</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dragonbreath.shtml">Dragon Breath</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Dragon Breath - Dragon-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Dragon Breath: Special Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">30</td></tr>
				<tr><td class="fooinfo" colspan="6">The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis.</td></tr><tr>
				<td rowspan="2" class="fooinfo">19</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/firefang.shtml">Fire Fang</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Fire Fang - Fire-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fire Fang: Physical Move"></td>
				<td class="cen">65</td>
				<td class="cen">95</td>
				<td class="cen">15</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn.</td></tr><tr>
				<td rowspan="2" class="fooinfo">24</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/slash.shtml">Slash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Slash - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Slash: Physical Move"></td>
				<td class="cen">70</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is attacked with a slash of claws or blades. Critical hits land more easily.</td></tr><tr>
				<td rowspan="2" class="fooinfo">30</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/flamethrower.shtml">Flamethrower</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Flamethrower - Fire-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Flamethrower: Special Move"></td>
				<td class="cen">90</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is scorched with an intense blast of fire. This may also leave the target with a burn.</td></tr><tr>
				<td rowspan="2" class="fooinfo">39</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/scaryface.shtml">Scary Face</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Scary Face - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Scary Face: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user frightens the target with a scary face to harshly lower its Speed stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">46</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/firespin.shtml">Fire Spin</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Fire Spin - Fire-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Fire Spin: Special Move"></td>
				<td class="cen">35</td>
				<td class="cen">85</td>
				<td class="cen">15</td>
				<td class="cen">100</td></tr>
				<tr><td class="fooinfo" colspan="6">The target becomes trapped within a fierce vortex of fire that rages for four to five turns.</td></tr><tr>
				<td rowspan="2" class="fooinfo">54</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/inferno.shtml">Inferno</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Inferno - Fire-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Inferno: Special Move"></td>
				<td class="cen">100</td>
				<td class="cen">50</td>
				<td class="cen">5</td>
				<td class="cen">100</td></tr>
				<tr><td class="fooinfo" colspan="6">The user attacks by engulfing the target in an intense fire. This leaves the target with a burn.</td></tr><tr>
				<td rowspan="2" class="fooinfo">62</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/flareblitz.shtml">Flare Blitz</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Flare Blitz - Fire-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Flare Blitz: Physical Move"></td>
				<td class="cen">120</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn.</td></tr></table><br /><table class="dextable"><tr ><td colspan="10" class="fooevo"><a name="tmhm"></a><h3>Technical Machine Attacks</h3></th></tr><tr><th class="attheader">TM #</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm00.shtml">TM00</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/megapunch.shtml">Mega Punch</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Mega Punch - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Mega Punch: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">85</td>
					<td class="cen">20</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is slugged by a punch thrown with muscle-packed power.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm01.shtml">TM01</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/megakick.shtml">Mega Kick</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Mega Kick - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Mega Kick: Physical Move"></td>
					<td class="cen">120</td>
					<td class="cen">75</td>
					<td class="cen">5</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is attacked by a kick launched with muscle-packed power.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm03.shtml">TM03</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/firepunch.shtml">Fire Punch</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Fire Punch - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fire Punch: Physical Move"></td>
					<td class="cen">75</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is punched with a fiery fist. This may also leave the target with a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm05.shtml">TM05</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/thunderpunch.shtml">Thunder Punch</a></td>
					<td class="cen"><img src="/pokedex-bw/type/electric.gif" alt="Thunder Punch - Electric-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Thunder Punch: Physical Move"></td>
					<td class="cen">75</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is punched with an electrified fist. This may also leave the target with paralysis.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm06.shtml">TM06</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/fly.shtml">Fly</a></td>
					<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Fly - Flying-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fly: Physical Move"></td>
					<td class="cen">90</td>
					<td class="cen">95</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user flies up into the sky and then strikes its target on the next turn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm08.shtml">TM08</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/hyperbeam.shtml">Hyper Beam</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Hyper Beam - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Hyper Beam: Special Move"></td>
					<td class="cen">150</td>
					<td class="cen">90</td>
					<td class="cen">5</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is attacked with a powerful beam. The user can't move on the next turn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm09.shtml">TM09</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/gigaimpact.shtml">Giga Impact</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Giga Impact - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Giga Impact: Physical Move"></td>
					<td class="cen">150</td>
					<td class="cen">90</td>
					<td class="cen">5</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user charges at the target using every bit of its power. The user can't move on the next turn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm11.shtml">TM11</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/solarbeam.shtml">Solar Beam</a></td>
					<td class="cen"><img src="/pokedex-bw/type/grass.gif" alt="Solar Beam - Grass-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Solar Beam: Special Move"></td>
					<td class="cen">120</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">In this two-turn attack, the user gathers light, then blasts a bundled beam on the next turn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm13.shtml">TM13</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/firespin.shtml">Fire Spin</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Fire Spin - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Fire Spin: Special Move"></td>
					<td class="cen">35</td>
					<td class="cen">85</td>
					<td class="cen">15</td>
					<td class="cen">100</td></tr>
					<tr><td class="fooinfo" colspan="6">The target becomes trapped within a fierce vortex of fire that rages for four to five turns.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm15.shtml">TM15</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dig.shtml">Dig</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ground.gif" alt="Dig - Ground-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Dig: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user burrows into the ground, then attacks on the next turn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm21.shtml">TM21</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/rest.shtml">Rest</a></td>
					<td class="cen"><img src="/pokedex-bw/type/psychic.gif" alt="Rest - Psychic-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Rest: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user goes to sleep for two turns. This fully restores the user's HP and heals any status conditions.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm22.shtml">TM22</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/rockslide.shtml">Rock Slide</a></td>
					<td class="cen"><img src="/pokedex-bw/type/rock.gif" alt="Rock Slide - Rock-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Rock Slide: Physical Move"></td>
					<td class="cen">75</td>
					<td class="cen">90</td>
					<td class="cen">10</td>
					<td class="cen">30</td></tr>
					<tr><td class="fooinfo" colspan="6">Large boulders are hurled at opposing Pok&eacute;mon to inflict damage. This may also make the opposing Pok&eacute;mon flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm24.shtml">TM24</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/snore.shtml">Snore</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Snore - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Snore: Special Move"></td>
					<td class="cen">50</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">30</td></tr>
					<tr><td class="fooinfo" colspan="6">This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm25.shtml">TM25</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/protect.shtml">Protect</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Protect - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Protect: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm26.shtml">TM26</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/scaryface.shtml">Scary Face</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Scary Face - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Scary Face: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user frightens the target with a scary face to harshly lower its Speed stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm30.shtml">TM30</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/steelwing.shtml">Steel Wing</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Steel Wing - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Steel Wing: Physical Move"></td>
					<td class="cen">70</td>
					<td class="cen">90</td>
					<td class="cen">25</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is hit with wings of steel. This may also raise the user's Defense stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm31.shtml">TM31</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/attract.shtml">Attract</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Attract - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Attract: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">If it is the opposite gender of the user, the target becomes infatuated and less likely to attack.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm34.shtml">TM34</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/sunnyday.shtml">Sunny Day</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Sunny Day - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Sunny Day: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">5</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user intensifies the sun for five turns, powering up Fire-type moves. It lowers the power of Water-type moves.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm37.shtml">TM37</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/beatup.shtml">Beat Up</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Beat Up - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Beat Up: Physical Move"></td>
					<td class="cen">??</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user gets all party Pok&eacute;mon to attack the target. The more party Pok&eacute;mon, the greater the number of attacks.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm38.shtml">TM38</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/will-o-wisp.shtml">Will-O-Wisp</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Will-O-Wisp - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Will-O-Wisp: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">85</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user shoots a sinister flame at the target to inflict a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm39.shtml">TM39</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/facade.shtml">Facade</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Facade - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Facade: Physical Move"></td>
					<td class="cen">70</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">This attack move doubles its power if the user is poisoned, burned, or paralyzed.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm40.shtml">TM40</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/swift.shtml">Swift</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Swift - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Swift: Special Move"></td>
					<td class="cen">60</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">Star-shaped rays are shot at opposing Pok&eacute;mon. This attack never misses.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm41.shtml">TM41</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/helpinghand.shtml">Helping Hand</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Helping Hand - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Helping Hand: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user assists an ally by boosting the power of that ally's attack.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm43.shtml">TM43</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/brickbreak.shtml">Brick Break</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fighting.gif" alt="Brick Break - Fighting-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Brick Break: Physical Move"></td>
					<td class="cen">75</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks with a swift chop. It can also break barriers, such as Light Screen and Reflect.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm46.shtml">TM46</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/weatherball.shtml">Weather Ball</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Weather Ball - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Weather Ball: Special Move"></td>
					<td class="cen">50</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">This attack move varies in power and type depending on the weather.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm48.shtml">TM48</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/rocktomb.shtml">Rock Tomb</a></td>
					<td class="cen"><img src="/pokedex-bw/type/rock.gif" alt="Rock Tomb - Rock-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Rock Tomb: Physical Move"></td>
					<td class="cen">60</td>
					<td class="cen">95</td>
					<td class="cen">15</td>
					<td class="cen">100</td></tr>
					<tr><td class="fooinfo" colspan="6">Boulders are hurled at the target. This also lowers the target's Speed stat by preventing its movement.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm59.shtml">TM59</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/fling.shtml">Fling</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Fling - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fling: Physical Move"></td>
					<td class="cen">??</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user flings its held item at the target to attack. This move's power and effects depend on the item.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm65.shtml">TM65</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/shadowclaw.shtml">Shadow Claw</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ghost.gif" alt="Shadow Claw - Ghost-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Shadow Claw: Physical Move"></td>
					<td class="cen">70</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user slashes with a sharp claw made from shadows. Critical hits land more easily.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm68.shtml">TM68</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/firefang.shtml">Fire Fang</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Fire Fang - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fire Fang: Physical Move"></td>
					<td class="cen">65</td>
					<td class="cen">95</td>
					<td class="cen">15</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm76.shtml">TM76</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/round.shtml">Round</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Round - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Round: Special Move"></td>
					<td class="cen">60</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks the target with a song. Others can join in the Round to increase the power of the attack.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm78.shtml">TM78</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/acrobatics.shtml">Acrobatics</a></td>
					<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Acrobatics - Flying-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Acrobatics: Physical Move"></td>
					<td class="cen">55</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user nimbly strikes the target. If the user is not holding an item, this attack inflicts massive damage.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm81.shtml">TM81</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/bulldoze.shtml">Bulldoze</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ground.gif" alt="Bulldoze - Ground-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Bulldoze: Physical Move"></td>
					<td class="cen">60</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">100</td></tr>
					<tr><td class="fooinfo" colspan="6">The user strikes everything around it by stomping down on the ground. This lowers the Speed stats of those hit.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm92.shtml">TM92</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/mysticalfire.shtml">Mystical Fire</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Mystical Fire - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Mystical Fire: Special Move"></td>
					<td class="cen">75</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">100</td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm94.shtml">TM94</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/falseswipe.shtml">False Swipe</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="False Swipe - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="False Swipe: Physical Move"></td>
					<td class="cen">40</td>
					<td class="cen">100</td>
					<td class="cen">40</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">A restrained attack that prevents the target from fainting. The target is left with at least 1 HP.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm95.shtml">TM95</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/airslash.shtml">Air Slash</a></td>
					<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Air Slash - Flying-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Air Slash: Special Move"></td>
					<td class="cen">75</td>
					<td class="cen">95</td>
					<td class="cen">15</td>
					<td class="cen">30</td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks with a blade of air that slices even the sky. This may also make the target flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm97.shtml">TM97</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/brutalswing.shtml">Brutal Swing</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Brutal Swing - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Brutal Swing: Physical Move"></td>
					<td class="cen">60</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user swings its body around violently to inflict damage on everything in its vicinity.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm99.shtml">TM99</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/breakingswipe.shtml">Breaking Swipe</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Breaking Swipe - Dragon-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Breaking Swipe: Physical Move"></td>
					<td class="cen">60</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">100</td></tr>
					<tr><td class="fooinfo" colspan="6">The user swings its tough tail wildly and attacks opposing Pok&eacute;mon. This also lowers their Attack stats.</td></tr></table><table class="dextable"><tr ><td colspan="10" class="fooevo"><a name="tmhm"></a><h3>Technical Record Attacks</h3></th></tr><tr><th class="attheader">TR #</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr00.shtml">TR00</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/swordsdance.shtml">Swords Dance</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Swords Dance - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Swords Dance: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr01.shtml">TR01</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/bodyslam.shtml">Body Slam</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Body Slam - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Body Slam: Physical Move"></td>
					<td class="cen">85</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">30</td></tr>
					<tr><td class="fooinfo" colspan="6">The user drops onto the target with its full body weight. This may also leave the target with paralysis.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr02.shtml">TR02</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/flamethrower.shtml">Flamethrower</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Flamethrower - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Flamethrower: Special Move"></td>
					<td class="cen">90</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is scorched with an intense blast of fire. This may also leave the target with a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr10.shtml">TR10</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/earthquake.shtml">Earthquake</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ground.gif" alt="Earthquake - Ground-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Earthquake: Physical Move"></td>
					<td class="cen">100</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user sets off an earthquake that strikes every Pok&eacute;mon around it.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr15.shtml">TR15</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/fireblast.shtml">Fire Blast</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Fire Blast - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Fire Blast: Special Move"></td>
					<td class="cen">110</td>
					<td class="cen">85</td>
					<td class="cen">5</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr20.shtml">TR20</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/substitute.shtml">Substitute</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Substitute - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Substitute: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user creates a substitute for itself using some of its HP. The substitute serves as the user's decoy.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr24.shtml">TR24</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/outrage.shtml">Outrage</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Outrage - Dragon-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Outrage: Physical Move"></td>
					<td class="cen">120</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user rampages and attacks for two to three turns. The user then becomes confused.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr26.shtml">TR26</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/endure.shtml">Endure</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Endure - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Endure: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user endures any attack with at least 1 HP. Its chance of failing rises if it is used in succession.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr27.shtml">TR27</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/sleeptalk.shtml">Sleep Talk</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Sleep Talk - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Sleep Talk: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">While it is asleep, the user randomly uses one of the moves it knows.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr31.shtml">TR31</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/irontail.shtml">Iron Tail</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Iron Tail - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Iron Tail: Physical Move"></td>
					<td class="cen">100</td>
					<td class="cen">75</td>
					<td class="cen">15</td>
					<td class="cen">30</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is slammed with a steel-hard tail. This may also lower the target's Defense stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr32.shtml">TR32</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/crunch.shtml">Crunch</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Crunch - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Crunch: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">20</td></tr>
					<tr><td class="fooinfo" colspan="6">The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr36.shtml">TR36</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/heatwave.shtml">Heat Wave</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Heat Wave - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Heat Wave: Special Move"></td>
					<td class="cen">95</td>
					<td class="cen">90</td>
					<td class="cen">10</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks by exhaling hot breath on opposing Pok&eacute;mon. This may also leave those Pok&eacute;mon with a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr41.shtml">TR41</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/blazekick.shtml">Blaze Kick</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Blaze Kick - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Blaze Kick: Physical Move"></td>
					<td class="cen">85</td>
					<td class="cen">90</td>
					<td class="cen">10</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The user launches a kick that lands a critical hit more easily. This may also leave the target with a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr43.shtml">TR43</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/overheat.shtml">Overheat</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Overheat - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Overheat: Special Move"></td>
					<td class="cen">130</td>
					<td class="cen">90</td>
					<td class="cen">5</td>
					<td class="cen">100</td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks the target at full power. The attack's recoil harshly lowers the user's Sp. Atk stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr47.shtml">TR47</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dragonclaw.shtml">Dragon Claw</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Dragon Claw - Dragon-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Dragon Claw: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user slashes the target with huge sharp claws.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr51.shtml">TR51</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dragondance.shtml">Dragon Dance</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Dragon Dance - Dragon-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Dragon Dance: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user vigorously performs a mystic, powerful dance that raises its Attack and Speed stats.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr55.shtml">TR55</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/flareblitz.shtml">Flare Blitz</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Flare Blitz - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Flare Blitz: Physical Move"></td>
					<td class="cen">120</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr62.shtml">TR62</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dragonpulse.shtml">Dragon Pulse</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Dragon Pulse - Dragon-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Dragon Pulse: Special Move"></td>
					<td class="cen">85</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The target is attacked with a shock wave generated by the user's gaping mouth.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr64.shtml">TR64</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/focusblast.shtml">Focus Blast</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fighting.gif" alt="Focus Blast - Fighting-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Focus Blast: Special Move"></td>
					<td class="cen">120</td>
					<td class="cen">70</td>
					<td class="cen">5</td>
					<td class="cen">10</td></tr>
					<tr><td class="fooinfo" colspan="6">The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr85.shtml">TR85</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/workup.shtml">Work Up</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Work Up - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Work Up: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">30</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user is roused, and its Attack and Sp. Atk stats increase.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr88.shtml">TR88</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/heatcrash.shtml">Heat Crash</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Heat Crash - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Heat Crash: Physical Move"></td>
					<td class="cen">??</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td></tr>
					<tr><td class="fooinfo" colspan="6">The user slams its target with its flame-covered body. The more the user outweighs the target, the greater the move's power.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr89.shtml">TR89</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/hurricane.shtml">Hurricane</a></td>
					<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Hurricane - Flying-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Hurricane: Special Move"></td>
					<td class="cen">110</td>
					<td class="cen">70</td>
					<td class="cen">10</td>
					<td class="cen">30</td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. This may also confuse the target.</td></tr></table><table class="dextable"><tr ><td colspan="9" class="fooevo"><a name="eggmoves"></a><h3>Egg Moves</h3> <a href="egg.shtml"><font size="1"><i>(Details)</i></a></td></tr><tr><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th> <th class="attheader">&nbsp;</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/bellydrum.shtml">Belly Drum</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Belly Drum - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Belly Drum: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">101</td>
				<td class="cen">10</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#bellydrum"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user maximizes its Attack stat in exchange for HP equal to half its max HP.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/ancientpower.shtml">Ancient Power</a></td>
				<td class="cen"><img src="/pokedex-bw/type/rock.gif" alt="Ancient Power - Rock-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Ancient Power: Special Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">5</td>
				<td class="cen">10</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#ancientpower"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user attacks with a prehistoric power. This may also raise all the user's stats at once.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/bite.shtml">Bite</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Bite - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Bite: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">25</td>
				<td class="cen">30</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#bite"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The target is bitten with viciously sharp fangs. This may also make the target flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dragonrush.shtml">Dragon Rush</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Dragon Rush - Dragon-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Dragon Rush: Physical Move"></td>
				<td class="cen">100</td>
				<td class="cen">75</td>
				<td class="cen">10</td>
				<td class="cen">20</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#dragonrush"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/metalclaw.shtml">Metal Claw</a></td>
				<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Metal Claw - Steel-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Metal Claw: Physical Move"></td>
				<td class="cen">50</td>
				<td class="cen">95</td>
				<td class="cen">35</td>
				<td class="cen">10</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#metalclaw"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The target is raked with steel claws. This may also raise the user's Attack stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/counter.shtml">Counter</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fighting.gif" alt="Counter - Fighting-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Counter: Physical Move"></td>
				<td class="cen">??</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#counter"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">A retaliation move that counters any physical attack, inflicting double the damage taken.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/wingattack.shtml">Wing Attack</a></td>
				<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Wing Attack - Flying-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Wing Attack: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">35</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#wingattack"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The target is struck with large, imposing wings spread wide to inflict damage.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dragontail.shtml">Dragon Tail</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Dragon Tail - Dragon-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Dragon Tail: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">90</td>
				<td class="cen">10</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><a href="egg.shtml#dragontail"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The target is knocked away, and a different Pok&eacute;mon is dragged out. In the wild, this ends a battle against a single Pok&eacute;mon.</td></tr></tbody></table><p><table  class="dextable"><thead><tr ><td colspan="9" class="fooevo">Move Tutor Attacks</th></tr><tr><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/blastburn.shtml">Blast Burn</a></td><td align="center" class="fooinfo"><img src="/pokedex-bw/type/fire.gif"></td><td align="center" class="fooinfo"><img src="/pokedex-bw/type/special.png"></td><td align="center" class="fooinfo">150</td><td align="center" class="fooinfo">90</td><td align="center" class="fooinfo">5</td><td align="center" class="fooinfo">--</td></tr><tr><td colspan="8" class="fooinfo">The target is razed by a fiery explosion. The user can't move on the next turn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/firepledge.shtml">Fire Pledge</a></td><td align="center" class="fooinfo"><img src="/pokedex-bw/type/fire.gif"></td><td align="center" class="fooinfo"><img src="/pokedex-bw/type/special.png"></td><td align="center" class="fooinfo">80</td><td align="center" class="fooinfo">100</td><td align="center" class="fooinfo">10</td><td align="center" class="fooinfo">--</td></tr><tr><td colspan="8" class="fooinfo">A column of fire hits the target. When used with its grass equivalent, its power increases and a vast sea of fire appears.</td></tr></table><p><table class="dextable"><tr ><td colspan="10" class="fooevo"><h3>Usable Max Moves</h3></th></tr><tr><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Max Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th><th class="attheader" width="10%">Form</th></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxflare.shtml">Max Flare</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Max Flare - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">140(Phy)/150(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Fire-type attack Dynamax Pok&eacute;mon use. The user intensifies the sun for five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxlightning.shtml">Max Lightning</a></td>
					<td class="cen"><img src="/pokedex-bw/type/electric.gif" alt="Max Lightning - Electric-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">130</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is an Electric-type attack Dynamax Pok&eacute;mon use. The user turns the ground into Electric Terrain for five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxstrike.shtml">Max Strike</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Max Strike - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">150(Phy)/150(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Normal-type attack Dynamax Pok&eacute;mon use. This lowers the target's Speed stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxknuckle.shtml">Max Knuckle</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fighting.gif" alt="Max Knuckle - Fighting-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">90(Phy)/95(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Fighting-type attack Dynamax Pok&eacute;mon use. This raises ally Pok&eacute;mon's Attack stats.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxphantasm.shtml">Max Phantasm</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ghost.gif" alt="Max Phantasm - Ghost-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">120</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Ghost-type attack Dynamax Pok&eacute;mon use. This lowers the target's Defense stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxairstream.shtml">Max Airstream</a></td>
					<td class="cen"><img src="/pokedex-bw/type/flying.gif" alt="Max Airstream - Flying-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">130(Phy)/140(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Flying-type attack Dynamax Pok&eacute;mon use. This raises ally Pok&eacute;mon's Speed stats.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxwyrmwind.shtml">Max Wyrmwind</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dragon.gif" alt="Max Wyrmwind - Dragon-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">140(Phy)/130(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Dragon-type attack Dynamax Pok&eacute;mon use. This lowers the target's Attack stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxrockfall.shtml">Max Rockfall</a></td>
					<td class="cen"><img src="/pokedex-bw/type/rock.gif" alt="Max Rockfall - Rock-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">130(Phy)/110(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Rock-type attack Dynamax Pok&eacute;mon use. The user summons a sandstorm lasting five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxquake.shtml">Max Quake</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ground.gif" alt="Max Quake - Ground-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">130</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Ground-type attack Dynamax Pok&eacute;mon use. This raises ally Pok&eacute;mon's Sp. Def stats.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxdarkness.shtml">Max Darkness</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Max Darkness - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">130</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Dark-type attack Dynamax Pok&eacute;mon use. This lowers the target's Sp. Def stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxovergrowth.shtml">Max Overgrowth</a></td>
					<td class="cen"><img src="/pokedex-bw/type/grass.gif" alt="Max Overgrowth - Grass-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">140</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Grass-type attack Dynamax Pok&eacute;mon use. The user turns the ground into Grassy Terrain for five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxsteelspike.shtml">Max Steelspike</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Max Steelspike - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">130</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This is a Steel-type attack Dynamax Pok&eacute;mon use. This raises ally Pok&eacute;mon's Defense stats.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxguard.shtml">Max Guard</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Max Guard - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png"></td>
					<td class="cen"></td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006.png" alt="Charizard" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/g-maxwildfire.shtml">G-Max Wildfire</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="G-Max Wildfire - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">140(Phy)/150(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/006-gi.png" alt="Gigantamax Charizard" /></td></tr></table></td></tr>
					
					<tr><td class="fooinfo" colspan="6">A Fire-type attack that Gigantamax Charizard use. This move continues to deal damage to opponents for four turns.</td></tr></table><br /><br /><a name="stats"></a><table class="dextable"><tr>
<td colspan="8" class="fooevo"><h2>Stats</h2></td></tr><tr>
<td colspan="2" width="14%">&nbsp;</td>
<td align="center" class="fooevo">HP</td>
<td align="center" class="fooevo">Attack</td>
<td align="center" class="fooevo">Defense</td>
<td align="center" class="fooevo">Sp. Attack</td>
<td align="center" class="fooevo">Sp. Defense</td>
<td align="center" class="fooevo">Speed</td></tr>
<tr><td colspan="2" width="14%" class="fooinfo">Base Stats - Total: 534</td>
<td align="center" class="fooinfo">78</td>
<td align="center" class="fooinfo">84</td>
<td align="center" class="fooinfo">78</td>
<td align="center" class="fooinfo">109</td>
<td align="center" class="fooinfo">85</td>
<td align="center" class="fooinfo">100</td></tr>
<tr><td rowspan="2" width="14%" class="foohin">Max Stats<br /><i>Hindering Nature</i></td>
<td class="foohin">Lv. 50</td>
<td align="center" class="foohin">138 - 185</td>
<td align="center" class="foohin">80 - 122</td>
<td align="center" class="foohin">74 - 117</td>
<td align="center" class="foohin">102 - 144</td>
<td align="center" class="foohin">81 - 123</td>
<td align="center" class="foohin">94 - 136</td></tr>
<tr><td class="foohin">Lv. 100</td>
<td align="center" class="foohin">266 - 360</td>
<td align="center" class="foohin">155 - 240</td>
<td align="center" class="foohin">144 - 229</td>
<td align="center" class="foohin">200 - 285</td>
<td align="center" class="foohin">157 - 242</td>
<td align="center" class="foohin">184 - 269</td></tr>

<tr><td rowspan="2" width="14%" class="fooinfo">Max Stats<br /><i>Neutral Nature</i></td>
<td class="fooinfo">Lv. 50</td>
<td align="center" class="fooinfo">138 - 185</td>
<td align="center" class="fooinfo">89 - 136</td>
<td align="center" class="fooinfo">83 - 130</td>
<td align="center" class="fooinfo">114 - 161</td>
<td align="center" class="fooinfo">90 - 137</td>
<td align="center" class="fooinfo">105 - 152</td></tr>
<tr><td class="fooinfo">Lv. 100</td>
<td align="center" class="fooinfo">266 - 360</td>
<td align="center" class="fooinfo">173 - 267</td>
<td align="center" class="fooinfo">161 - 255</td>
<td align="center" class="fooinfo">223 - 317</td>
<td align="center" class="fooinfo">175 - 269</td>
<td align="center" class="fooinfo">205 - 299</td></tr>


<tr><td rowspan="2" width="14%" class="fooben">Max Stats<br /><i>Beneficial Nature</i></td>
<td class="fooben">Lv. 50</td>
<td align="center" class="fooben">138 - 185</td>
<td align="center" class="fooben">97 - 149</td>
<td align="center" class="fooben">91 - 143</td>
<td align="center" class="fooben">125 - 177</td>
<td align="center" class="fooben">99 - 150</td>
<td align="center" class="fooben">115 - 167</td></tr>
<tr><td class="fooben">Lv. 100</td>
<td align="center" class="fooben">266 - 360</td>
<td align="center" class="fooben">190 - 293</td>
<td align="center" class="fooben">177 - 280</td>
<td align="center" class="fooben">245 - 348</td>
<td align="center" class="fooben">192 - 295</td>
<td align="center" class="fooben">225 - 328</td></tr>


</table><a name="general"></a><table class="dextable" align="center">
	<tr>
			<td class="fooevo" colspan="4"><h2>Gigantamax Charizard</h2></td>
		</tr><tr>
					<td class="fooevo" width="120" colspan="4">Picture</td></tr>
					<td class="fooinfo" align="center" colspan="4"><img src="/swordshield/pokemon/006-gi.png" alt="Gigantamax Charizard Image" /> <img src="/Shiny/SWSH/006-gi.png" alt="Shiny Gigantamax Charizard Image" /></td>
		</tr><tr>
			<td class="fooevo">Type</td>
			<td class="fooevo">Height</td>
			<td class="fooevo">Weight</td>
			</tr>
		<tr>
			
			<td class="cen"><a href="/pokedex-swsh/fire.shtml"><img src="/pokedex-bw/type/fire.gif" border="0" alt="Fire-type" class="typeimg" /></a> <a href="/pokedex-swsh/flying.shtml"><img src="/pokedex-bw/type/flying.gif"  alt="Flying-type" class="typeimg" /></a></td>
			<td class="fooinfo">91'10"<br />
			28m</td>
			<td class="fooinfo">????lbs<br />
			????kg</td>
</tr>
</table><p>
<table width="100%" border="0" cellpadding="4">
	<tr>
		<td width="50%" align="left">
		
<table border="0">
	<tr>
		<td width="left">
		<--- 
		</td>
		<td>
		<a href="/pokedex-swsh/charmeleon/"><img src="/pokedex-swsh/icon/005.png" alt="Charmeleon"  border="0"></a>
		</td>
		<td align="center">
		<a href="/pokedex-swsh/charmeleon/">#005<br />Charmeleon
		</td>
	</tr>
</table>

		</td>
		<td width="50%" align="right">
		<table border="0">
	<tr>
		<td align="center">
		<a href="/pokedex-swsh/squirtle/">#007<br />Squirtle
		</td>
		<td>
		<a href="/pokedex-swsh/squirtle/"><img src="/pokedex-swsh/icon/007.png" alt="Squirtle" border="0"></a>
		</td>
		<td width="right">
		---> 
		</td>
	</tr>
</table>

		</td>
	</tr>
</table>
</div>
</td>
</main></div><!-- END id="content" -->


<aside id="rbar">
<div class="navheader">Picture</div><br /><table width="140" class="art" cellspacing="0" cellpadding="0"><tr><td align="center"><a href="/pokemon/charizard/"><img src="/art/th/6.png" border="0" alt="Charizard Art" /></a></td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Name</td><td class="tooltabhead">Jp. Name</td></tr><tr><td class="tooltabcon">Charizard</td><td class="tooltabcon">Lizardon<br />&#12522;&#12470;&#12540;&#12489;&#12531;</td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Gender</td><td class="tooltabhead">Type</td></tr><tr><td class="tooltabcon"><table width="60" cellspacing="0" cellpadding="0"><tr> <td>&nbsp;<font color="#499FFF" size="1">&#9794;</font>:</td><td>88.14%</td></tr><tr><td>&nbsp;<font color="#F6807A" size="1">&#9792;</font>:</td><td>11.86%</td></tr></table></td><td class="tooltabcon"><a href="/pokedex-sm/fire.shtml"><img src="/pokedex-bw/type/fire.gif" border="0" alt="Fire-type" /></a> <a href="/pokedex-sm/flying.shtml"><img src="/pokedex-bw/type/flying.gif" border="0" alt="Flying-type" /></a></td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Classification</td></tr><tr><td class="tooltabcon">Flame Pokémon</td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Height</td><td class="tooltabhead">Weight</td></tr><tr><td class="tooltabcon">5’07”<br />
			1.7m</td><td class="tooltabcon">199.5lbs<br />
			90.5kg</td></tr></table>

			
			<br />
<div class="alterdex"><br /><a href="/pokedex-swsh/charizard/"><b>Pokédex</b></a><br /></div><div class="alterdex"><br /><a href="/events/dex/006.shtml"><b>Events</b></a><br /></div>
<div class="alterdex"><br /><a href="/anime/dex/006.shtml"><b>Anime Appearances</b></a><br /></div>
<div class="alterdex"><br /><a href="/card/dex/006.shtml"><b>Cards</b></a><br /></div>
<div class="alterdex"><br /><a href="/movies/dex/006.shtml"><b>Cinematic Pok&eacute;dex</b></a><br /></div>
<div class="alterdex"><br /><a href="/manga/dex/006.shtml"><b>Manga Appearances</b></a><br /></div>
<div class="alterdex"><br /><a href="/pokemongo/pokemon/006.shtml"><b>Pokémon GO</b></a><br /></div>
<table width="140" class="tooltab">
<tr><td class="tooltabhead" width="34">Prev.</td><td  width="99%">&nbsp;</td><td class="tooltabhead" width="32">Next</td></tr>
<tr><td class="tooltabcon" width="34"><a href="/pokedex-swsh/charmeleon"><img src="/pokedex-swsh/icon/005.png" border="0" /></a></td><td  width="99%">&nbsp;</td><td class="tooltabcon" width="32"><a href="/pokedex-swsh/squirtle"><img src="/pokedex-swsh/icon/007.png" border="0" /></a></td></tr></table>

</div>
</aside>

</div><!-- END id="wrapper" -->



<footer id="footer">
	<div class="copyright">
		<a href="#top" alt="Top of Page" title="Top of Page" class="totop"></a>

		All Content is &copy; Copyright of Serebii.net 1999-2019. |
		<a href="/privacy.shtml">Privacy Policy</a> |
		<a style="cursor:pointer"  href="javascript:window.__cmp('showConsentModal')">Manage Cookie Settings</a><br/>
		Pokémon and All Respective Names are Trademark &amp; &copy; of Nintendo 1996-2019
	</div>

	<div style="height:102px">
		<div id="nn_lb2"></div><div id="nn_mobile_lb2"></div>
	</div>
</footer>


</body>
</html>
`;
