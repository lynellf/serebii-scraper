export default `


<!DOCTYPE html>
<html>

<head>
<title>Meowth - #052 - Serebii.net Pok&eacute;dex</title>
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

<meta name="keywords" content="Pokemon, Pok&eacute;dex, Meowth (Pok&eacute;mon),Meowth, Meowth, Sword, Shield" />
<link rel="stylesheet" type="text/css" HREF="/style/dexy-new.css">
<link rel="canonical" href="https://www.serebii.net/pokedex-swsh/meowth" />
<meta property="og:image" content="https://www.serebii.net/pokemon/art/052-g.png">
<meta property="og:title" content="Meowth #052 - Serebii.net Pok&eacute;dex">
<meta property="og:description" content="Meowth Pok&eacute;mon Serebii.net Pok&eacute;dex providing all details on moves, stats, abilities, evolution data and locations for Pok&eacute;mon Sword & Shield">
<meta name="description" content="Meowth Pok&eacute;mon Serebii.net Pok&eacute;dex providing all details on moves, stats, abilities, evolution data and locations for Pok&eacute;mon Sword & Shield">
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
    		<td width="32" align="center"><img src="/pokedex-swsh/icon/052.png"></td>
		<td><h1>&nbsp;#052 Meowth</h1></td></tr></table></td>
    <td class="footop"><a href="#general">General</a></td>
    <td class="footop"><a href="#location">Location</a></td>
    <td class="footop"><a href="#attacks">Attacks</a></td>
    <td class="footop"><a href="#stats">Stats</a></td>
    <td class="footop"><a href="egg.shtml">Egg Moves</a></td>

  </tr></table>
<table class="dextab">
      <tr >
	<td width="25%" class="curr"><a href="/pokedex-swsh/meowth">Gen VIII Dex</a></td>

	<td width="25%" class="pkmn"><a href="/pokedex-sm/052.shtml">Gen VII Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-xy/052.shtml">Gen VI Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-bw/052.shtml">Gen V Dex</a></td></tr><tr>	<td width="25%" class="pkmn"><a href="/pokedex-dp/052.shtml">Gen IV Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-rs/052.shtml">Gen III Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex-gs/052.shtml">Gen II Dex</a></td>	<td width="25%" class="pkmn"><a href="/pokedex/052.shtml">Gen I Dex</a></td>  </tr></table><p><a name="general"></a><table class="dextable">
		<tr>
			<td class="fooevo">Picture</td>
		</tr>
		<tr>
			<td class="fooinfo" align="center"><table><tr><td class="pkmn"><img id="sprite-regular" src="/swordshield/pokemon/052-g.png" alt="Normal Sprite" /></td><td class="pkmn"><img id="sprite-shiny" src="/Shiny/SWSH/052-g.png" /></td></tr></table><div align="center"><a class="sprite-select" title="Regular Form" data-key="052" href="#"><img src="/pokedex-swsh/icon/052.png" alt="Regular Form"  class="pkmn" /></a>
<a class="sprite-select" title="Alola Form" data-key="052-a" href="#"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" class="pkmn" /></a>
<a class="sprite-select" title="Galarian Form" data-key="052-g" href="#"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" class="pkmn" /></a></div>
					<script>
				function $c(classname, node) { // get elements by class
					if(!node) node = document.getElementsByTagName('body')[0];
					var a = [];
					var re = new RegExp('\\b' + classname + '\\b');
					var els = node.getElementsByTagName("*");
					for(var i=0, j=els.length; i<j; i++)
						if(re.test(els[i].className))a.push(els[i]);
					return a;
				}
				function event_add(obj,type,fn) { // add event
					if (obj.addEventListener)	obj.addEventListener(type,fn,false );
					else if (obj.attachEvent) {
						obj["e"+type+fn] = fn;
						obj.attachEvent( "on"+type, function() { obj["e"+type+fn](); } );
					}
				}
				forms = $c('sprite-select');
				i=forms.length-1; do {
					form = forms[i];
					event_add(form, 'click', function() {
						var key = this.getAttribute('data-key');
						document.getElementById('sprite-regular').src = '//www.serebii.net/swordshield/pokemon/' + key + '.png';
						document.getElementById('sprite-shiny').src = '//www.serebii.net/Shiny/SWSH/' + key + '.png';
					});
				} while(i--);
			</script>
</td></table><table class="dextable">
		<tr>
			<td class="fooevo">Name</td>
			<td class="fooevo">Other Names</td>
			<td class="fooevo">No.</td>
			<td class="fooevo">Gender Ratio</td>
			<td class="fooevo">Type</td>
		</tr>
		<tr>

			<td class="fooinfo">Meowth</td>
			<td class="fooinfo"><table width="120" cellspacing="0" cellpadding="0">
			<tr> <td><b>Japan</b>: </td><td>Nyarth<br />&#12491;&#12515;&#12540;&#12473;</td></tr>
			<tr> <td><b>French</b>: </td><td>Miaouss</td></tr>
			<tr> <td><b>German</b>: </td><td>Mauzi</td></tr>
			<tr> <td><b>Korean</b>: </td><td>&#45208;&#50745;</td></tr>
			</table></td>
			<td class="fooinfo"><table width="120" cellspacing="0" cellpadding="0"><tr> <td><b>National</b>: </td><td>#052</td></tr>
			<tr><td><b>Galar</b>: </td><td>#182</td></tr>
			</table></td>
			<td class="fooinfo"><table width="120" cellspacing="0" cellpadding="0"><tr> <td>Male <font color="#499FFF">&#9794;</font>:</td><td>50.2%</td></tr><tr><td>Female <font color="#F6814A">&#9792;</font>:</td><td>49.8%</td></tr></table></td>
			<td class="cen"><table cellspacing="0" cellpadding="0"><tr><td width="50%">Normal</td><td width="50%">
	<a href="/pokedex-swsh/normal.shtml"><img src="/pokedex-bw/type/normal.gif" border="0"  alt="Normal-type" /></a>	</td></tr><tr><td width="50%">Alolan</td><td width="50%">
	<a href="/pokedex-swsh/dark.shtml"><img src="/pokedex-bw/type/dark.gif" alt="Dark-type"  border="0" /></a>	</td></tr><tr><td width="50%">Galarian</td><td width="50%">
	<a href="/pokedex-swsh/steel.shtml"><img src="/pokedex-bw/type/steel.gif" alt="Steel-type"  border="0" /></a>	</td></tr></table></td>

		</tr>
		<tr>
			<td class="foo">Classification</td>
			<td class="foo">Height</td>
			<td class="foo">Weight</td>
			<td class="foo">Capture Rate</td>
			<td class="foo">Base Egg Steps</td>
		</tr>
		<tr>
			<td class="fooinfo">Scratch Cat Pok&eacute;mon</td>
			<td class="fooinfo">1'04" / 1'04"<br />
			0.4m / 0.4m</td>
			<td class="fooinfo">9.3lbs / 9.3lbs<br />
			4.2kg / 4.2kg</td><td class="fooinfo">255</td><td class="fooinfo">5,120</td>
		</tr></table>
		<table class="dextable">		<tr>
			<td align="left" colspan="6" class="fooleft"><b>Abilities</b>: <a href="/abilitydex/pickup.shtml"><b>Pickup</b></a> - <a href="/abilitydex/technician.shtml"><b>Technician</b></a> - <a href="/abilitydex/unnerve.shtml"><b>Unnerve</b></a> <i>(Hidden)</i> (Normal Forme) - <a href="/abilitydex/pickup.shtml"><b>Pickup</b></a>- <a href="/abilitydex/technician.shtml"><b>Technician</b></a> - <a href="/abilitydex/rattled.shtml"><b>Rattled</b></a> <i>(Hidden)</i>  (Alola Form) - <a href="/abilitydex/pickup.shtml"><b>Pickup</b></a>- <a href="/abilitydex/toughclaws.shtml"><b>Tough Claws</b></a> - <a href="/abilitydex/unnerve.shtml"><b>Unnerve</b></a> <i>(Hidden)</i>  (Galarian Form)</td>
		</tr>
		<tr>
			<td align="left" colspan="5" class="fooinfo">
<a href="/abilitydex/pickup.shtml"><b>Pickup</b></a>: Has a 10% chance of finding and holding an item after battle. Will not work if this Pok&eacute;mon is already holding an item. From Black & White, it allows for the user to pick up the item of its opponent or ally if they used up the item in battle. <br />
<a href="/abilitydex/technician.shtml"><b>Technician</b></a>: Moves with a base power of 60 or less are boosted in power by 50% <br />
<b>Hidden Ability</b>: <i>(Available through transfer)</i><br /><a href="/abilitydex/unnerve.shtml"><b>Unnerve</b></a>: The opponent Pok&eacute;mon will never use their held Berry while the Pok&eacute;mon is in battle.  <br />
<b>Alola Form Abilities</b>:<br /><a href="/abilitydex/pickup.shtml"><b>Pickup</b></a>: Has a 10% chance of finding and holding an item after battle. Will not work if this Pok&eacute;mon is already holding an item. From Black & White, it allows for the user to pick up the item of its opponent or ally if they used up the item in battle. <br />
<a href="/abilitydex/technician.shtml"><b>Technician</b></a>: Moves with a base power of 60 or less are boosted in power by 50% <br />
<b>Hidden Ability</b>:  <i>(Not Available)</i><br /><a href="/abilitydex/rattled.shtml"><b>Rattled</b></a>: Speed is raised by one stage when the Pok&eacute;mon is hit by a Bug-type, Ghost-type or Dark-type move or is Intimidated <br />
<b>Galarian Form Abilities</b>:<br /><a href="/abilitydex/pickup.shtml"><b>Pickup</b></a>: Has a 10% chance of finding and holding an item after battle. Will not work if this Pok&eacute;mon is already holding an item. From Black & White, it allows for the user to pick up the item of its opponent or ally if they used up the item in battle. <br />
<a href="/abilitydex/toughclaws.shtml"><b>Tough Claws</b></a>: Increases the power of moves that make physical contact by 30% <br />
<b>Hidden Ability</b>:  <i>(Available)</i><br /><a href="/abilitydex/unnerve.shtml"><b>Unnerve</b></a>: The opponent Pok&eacute;mon will never use their held Berry while the Pok&eacute;mon is in battle.  </td>
		</tr>
		<tr>
			<td class="foo">Experience Growth</td>
						<td class="foo">Base Happiness</td>
						<td class="foo">Effort Values Earned</td>
			<td class="foo">Dyanamax Capable?</td>
		</tr>
		<tr>
		<td class="fooinfo">1,000,000 Points<br>Medium Fast</td>
			<td class="fooinfo"></td> 			<td class="fooinfo">1 Speed Point(s)<br /><b>Alola Form</b><br />1 Speed Point(s)<br /><b>Galarian Form</b><br />1 Attack Point(s)<br /></td><td class="fooinfo">
			Meowth can Dynamax
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
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*2</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*0</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
		</tr>
	<tr>
		<td colspan="18" class="foo">
		Damage Taken <i>Alola Form</i>
		</td>
	</tr>
<tr>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*2</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*0</td>
			<td class="footype">*2</td>
			<td class="footype">*1</td>
			<td class="footype">*0.5</td>
			<td class="footype">*1</td>
			<td class="footype">*0.5</td>
			<td class="footype">*1</td>
			<td class="footype">*2</td>
		</tr>

	<tr>
		<td colspan="18" class="foo">
		Damage Taken <i>Galarian Form</i>
		</td>
	</tr>
<tr>
			<td class="footype">*0.5</td>
			<td class="footype">*2</td>
			<td class="footype">*1</td>
			<td class="footype">*1</td>
			<td class="footype">*0.5</td>
			<td class="footype">*0.5</td>
			<td class="footype">*2</td>
			<td class="footype">*0</td>
			<td class="footype">*2</td>
			<td class="footype">*0.5</td>
			<td class="footype">*0.5</td>
			<td class="footype">*0.5</td>
			<td class="footype">*0.5</td>
			<td class="footype">*1</td>
			<td class="footype">*0.5</td>
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
			<td class="cen">&nbsp;<b>Regular Form</b><br /><a href="/itemdex/quickclaw.shtml"><img src="/itemdex/sprites/quickclaw.png" alt="Quick Claw"  border="0" /><br />Quick Claw</a> - 5%<br /><b>Alolan Form</b><br /><a href="/itemdex/quickclaw.shtml"><img src="/itemdex/sprites/quickclaw.png" alt="Quick Claw" border="0" /><br />Quick Claw</a> - 5%</td>
			<td class="fooinfo" align="center"><table class="dexitem"><tr ><td ><form name="breed"><select  NAME="SelectURL" onChange="document.location.href=this.options[this.selectedIndex].value" style="color:#000000; font-size: 1em; background:#507C36">
			<option value="/pokedex-swsh/egg/field.shtml">Field</option><option value="/pokedex-swsh/025.shtml">Pikachu</option><option value="/pokedex-swsh/026.shtml">Raichu</option><option value="/pokedex-swsh/037.shtml">Vulpix</option><option value="/pokedex-swsh/038.shtml">Ninetales</option><option value="/pokedex-swsh/050.shtml">Diglett</option><option value="/pokedex-swsh/051.shtml">Dugtrio</option><option value="/pokedex-swsh/052.shtml">Meowth</option><option value="/pokedex-swsh/053.shtml">Persian</option><option value="/pokedex-swsh/058.shtml">Growlithe</option><option value="/pokedex-swsh/059.shtml">Arcanine</option><option value="/pokedex-swsh/077.shtml">Ponyta</option><option value="/pokedex-swsh/078.shtml">Rapidash</option><option value="/pokedex-swsh/083.shtml">Farfetch'd</option><option value="/pokedex-swsh/111.shtml">Rhyhorn</option><option value="/pokedex-swsh/112.shtml">Rhydon</option><option value="/pokedex-swsh/133.shtml">Eevee</option><option value="/pokedex-swsh/134.shtml">Vaporeon</option><option value="/pokedex-swsh/135.shtml">Jolteon</option><option value="/pokedex-swsh/136.shtml">Flareon</option><option value="/pokedex-swsh/194.shtml">Wooper</option><option value="/pokedex-swsh/195.shtml">Quagsire</option><option value="/pokedex-swsh/196.shtml">Espeon</option><option value="/pokedex-swsh/197.shtml">Umbreon</option><option value="/pokedex-swsh/215.shtml">Sneasel</option><option value="/pokedex-swsh/220.shtml">Swinub</option><option value="/pokedex-swsh/221.shtml">Piloswine</option><option value="/pokedex-swsh/225.shtml">Delibird</option><option value="/pokedex-swsh/263.shtml">Zigzagoon</option><option value="/pokedex-swsh/264.shtml">Linoone</option><option value="/pokedex-swsh/273.shtml">Seedot</option><option value="/pokedex-swsh/274.shtml">Nuzleaf</option><option value="/pokedex-swsh/275.shtml">Shiftry</option><option value="/pokedex-swsh/303.shtml">Mawile</option><option value="/pokedex-swsh/309.shtml">Electrike</option><option value="/pokedex-swsh/310.shtml">Manectric</option><option value="/pokedex-swsh/320.shtml">Wailmer</option><option value="/pokedex-swsh/321.shtml">Wailord</option><option value="/pokedex-swsh/324.shtml">Torkoal</option><option value="/pokedex-swsh/434.shtml">Stunky</option><option value="/pokedex-swsh/435.shtml">Skuntank</option><option value="/pokedex-swsh/448.shtml">Lucario</option><option value="/pokedex-swsh/449.shtml">Hippopotas</option><option value="/pokedex-swsh/450.shtml">Hippowdon</option><option value="/pokedex-swsh/461.shtml">Weavile</option><option value="/pokedex-swsh/464.shtml">Rhyperior</option><option value="/pokedex-swsh/470.shtml">Leafeon</option><option value="/pokedex-swsh/471.shtml">Glaceon</option><option value="/pokedex-swsh/473.shtml">Mamoswine</option><option value="/pokedex-swsh/509.shtml">Purrloin</option><option value="/pokedex-swsh/510.shtml">Liepard</option><option value="/pokedex-swsh/517.shtml">Munna</option><option value="/pokedex-swsh/518.shtml">Musharna</option><option value="/pokedex-swsh/527.shtml">Woobat</option><option value="/pokedex-swsh/528.shtml">Swoobat</option><option value="/pokedex-swsh/529.shtml">Drilbur</option><option value="/pokedex-swsh/530.shtml">Excadrill</option><option value="/pokedex-swsh/554.shtml">Darumaka</option><option value="/pokedex-swsh/555.shtml">Darmanitan</option><option value="/pokedex-swsh/559.shtml">Scraggy</option><option value="/pokedex-swsh/560.shtml">Scrafty</option><option value="/pokedex-swsh/572.shtml">Minccino</option><option value="/pokedex-swsh/573.shtml">Cinccino</option><option value="/pokedex-swsh/613.shtml">Cubchoo</option><option value="/pokedex-swsh/614.shtml">Beartic</option><option value="/pokedex-swsh/631.shtml">Heatmor</option><option value="/pokedex-swsh/659.shtml">Bunnelby</option><option value="/pokedex-swsh/660.shtml">Diggersby</option><option value="/pokedex-swsh/674.shtml">Pancham</option><option value="/pokedex-swsh/675.shtml">Pangoro</option><option value="/pokedex-swsh/677.shtml">Espurr</option><option value="/pokedex-swsh/678.shtml">Meowstic</option><option value="/pokedex-swsh/700.shtml">Sylveon</option><option value="/pokedex-swsh/725.shtml">Litten</option><option value="/pokedex-swsh/726.shtml">Torracat</option><option value="/pokedex-swsh/727.shtml">Incineroar</option><option value="/pokedex-swsh/728.shtml">Popplio</option><option value="/pokedex-swsh/729.shtml">Brionne</option><option value="/pokedex-swsh/730.shtml">Primarina</option><option value="/pokedex-swsh/749.shtml">Mudbray</option><option value="/pokedex-swsh/750.shtml">Mudsdale</option><option value="/pokedex-swsh/759.shtml">Stufful</option><option value="/pokedex-swsh/760.shtml">Bewear</option><option value="/pokedex-swsh/765.shtml">Oranguru</option><option value="/pokedex-swsh/766.shtml">Passimian</option><option value="/pokedex-swsh/777.shtml">Togedemaru</option><option value="/pokedex-swsh/810.shtml">Grookey</option><option value="/pokedex-swsh/811.shtml">Thwackey</option><option value="/pokedex-swsh/812.shtml">Rillaboom</option><option value="/pokedex-swsh/813.shtml">Scorbunny</option><option value="/pokedex-swsh/814.shtml">Raboot</option><option value="/pokedex-swsh/815.shtml">Cinderace</option><option value="/pokedex-swsh/816.shtml">Sobble</option><option value="/pokedex-swsh/817.shtml">Drizzile</option><option value="/pokedex-swsh/818.shtml">Inteleon</option><option value="/pokedex-swsh/819.shtml">Skwovet</option><option value="/pokedex-swsh/820.shtml">Greedent</option><option value="/pokedex-swsh/827.shtml">Nickit</option><option value="/pokedex-swsh/828.shtml">Thievul</option><option value="/pokedex-swsh/831.shtml">Wooloo</option><option value="/pokedex-swsh/832.shtml">Dubwool</option><option value="/pokedex-swsh/835.shtml">Yamper</option><option value="/pokedex-swsh/836.shtml">Boltund</option><option value="/pokedex-swsh/843.shtml">Silicobra</option><option value="/pokedex-swsh/844.shtml">Sandaconda</option><option value="/pokedex-swsh/862.shtml">Obstagoon</option><option value="/pokedex-swsh/863.shtml">Perrserker</option><option value="/pokedex-swsh/865.shtml">Sirfetch'd</option><option value="/pokedex-swsh/875.shtml">Eiscue</option><option value="/pokedex-swsh/877.shtml">Morpeko</option><option value="/pokedex-swsh/878.shtml">Cufant</option><option value="/pokedex-swsh/879.shtml">Copperajah</option><option value="/pokedex-swsh/132.shtml">Ditto</option></select></form></td><td ><a href="/pokedex-swsh/egg/field.shtml">Field</a></td></tr></table></td>

		</tr>
</table><table class="dextable" align="center">
		<tr>
			<td class="fooevo">Evolutionary Chain</td>
		</tr>
		<tr>
			<td class="fooinfo" align="center"><table class="evochain">
			<tr ><td class="pkmn" rowspan="2"><a href="/pokedex-swsh/meowth"><img src="/swordshield/pokemon/052.png" border="0" width="100" /></a></td>
			<td ><img src="/pokedex-swsh/evoicon/mega384.png" alt="Gigantamax" /></td><td class="pkmn"><a href="/pokedex-swsh/meowth"><img src="/swordshield/pokemon/052-gi.png" border="0" alt="Gigantamax Meowth" width="100" /></a></td>
</tr><tr><td ><img src="/pokedex-swsh/evoicon/l28.png" title="Level " /></td>
			<td class="pkmn"><a href="/pokedex-swsh/persian"><img src="/swordshield/pokemon/053.png" border="0" width="100" /></a></td></tr><tr><td class="pkmn"><a href="/pokedex-swsh/meowth"><img src="/swordshield/pokemon/052-a.png" border="0" width="100" /></a></td>
			<td ><img src="/pokedex-swsh/evoicon/happiness.png" title="Level Up with Happiness Value at 220 " /></td>
			<td class="pkmn"><a href="/pokedex-swsh/persian"><img src="/swordshield/pokemon/053-a.png" border="0" width="100" /></a></td></tr><tr><td class="pkmn"><a href="/pokedex-swsh/meowth"><img src="/swordshield/pokemon/052-g.png" border="0" width="100" /></a></td>
			<td ><img src="/pokedex-swsh/evoicon/l28.png" title="Level 28" /></td>
			<td class="pkmn"><a href="/pokedex-swsh/perrserker"><img src="/swordshield/pokemon/863.png" border="0" width="100" /></a></td></tr></table></td>
		</tr>
</table>

		<table class="dextable">
		<tr>
			<td class="fooevo">Alternate Forms</td>
		</tr>
		<tr>
			<td class="fooinfo" align="center"> <table >
			<tr><td class="pkmn"><b>Kantonian Form</b></td><td class="pkmn"><b>Alola Form</b></td><td class="pkmn"><b>Galarian Form</b></td></tr><tr><td class="pkmn"><img src="/swordshield/pokemon/052.png" alt="Kantonian Form" alt="Kantonian Form" class="formpic" /></td><td class="pkmn"><img src="/swordshield/pokemon/052-a.png" alt="Alola Form" alt="Alola Form" class="formpic" /></td><td class="pkmn"><img src="/swordshield/pokemon/052-g.png" alt="Galarian Form" alt="Galarian Form" class="formpic" /></td></tr><tr></tr></table><table class="pkmn"><tr>
			<td>Meowth is one of several Pokémon that have Region Forms. If caught or bred from a parent that originates in Alola, it will have its Alola Form and if caught or bed from a parent from Galar, it will be in its Galarian Form</td></tr></table></td>
		</tr>
	</table><a name="location"></a><table class="dextable">
	<tr>
		<td class="fooevo" colspan="3"><h2>Locations</h2> - <a href="locations.shtml"><i>In-Depth Details</i></a></td>
	</tr>
	<tr>
		<td class="foox">Sword</td>
		<td class="fooinfo" ><a href="/pokearth/galar/route4.shtml">Route 4</a> (Galarian)<br />Trade in Turffield (Kantonian)<br />Max Raid Battles: <a href="/pokearth/galar/dustybowl.shtml">Dusty Bowl</a>, <a href="/pokearth/galar/giant'sseat.shtml">Giant's Seat</a>, <a href="/pokearth/galar/stonywilderness.shtml">Stony Wilderness</a></td><td class="foodet" align="center"><a href="locations.shtml#sword">Details</a></td>
	</tr>
	<tr>
		<td class="fooy" >Shield</td>
		<td class="fooinfo" ><a href="/pokearth/galar/route4.shtml">Route 4</a> (Galarian)<br />Trade in Turffield (Kantonian)<br />Max Raid Battles: <a href="/pokearth/galar/dustybowl.shtml">Dusty Bowl</a>, <a href="/pokearth/galar/giant'sseat.shtml">Giant's Seat</a>, <a href="/pokearth/galar/stonywilderness.shtml">Stony Wilderness</a></td><td class="foodet" align="center"><a href="locations.shtml#shield">Details</a></td>
	</tr>
	</table><a name="location"></a><table class="dextable">
	<tr>
		<td class="fooevo" colspan="3">Flavor Text</td>
	</tr><tr><td class="cen" rowspan="2" width="32"><img src="/pokedex-swsh/icon/052.png" alt="Meowth Sprite" /></td><td class="foox">Sword</td><td class="fooinfo">It loves to collect shiny things. If it's in a good mood, it might even let its Trainer have a look at its hoard of treasures.</td></tr><td class="fooy">Shield</td><td class="fooinfo">It washes its face regularly to keep the coin on its forehead spotless. It doesn't get along with Galarian Meowth.</td></tr><tr><td class="cen" rowspan="2" width="32"><img src="/pokedex-swsh/icon/052-a.png" alt="Meowth Sprite" /></td><td class="foox">Sword</td><td class="fooinfo">It's accustomed to luxury because it used to live with Alolan royalty. As a result, it's very picky about food.</td></tr><td class="fooy">Shield</td><td class="fooinfo">Deeply proud and keenly smart, this Pok&eacute;mon moves with cunning during battle and relentlessly attacks enemies' weak points.</td></tr><tr><td class="cen" rowspan="2" width="32"><img src="/pokedex-swsh/icon/052-g.png" alt="Meowth Sprite" /></td><td class="foox">Sword</td><td class="fooinfo">Living with a savage, seafaring people has toughened this Pok&eacute;mon's body so much that parts of it have turned to iron.</td></tr><td class="fooy">Shield</td><td class="fooinfo">These daring Pok&eacute;mon have coins on their foreheads. Darker coins are harder, and harder coins garner more respect among Meowth.</td></tr><tr><td class="cen" rowspan="2" width="32"><img src="/pokedex-swsh/icon/052-gi.png" alt="Meowth Sprite" /></td><td class="foox">Sword</td><td class="fooinfo">The pattern that has appeared on its giant coin is thought to be the key to unlocking the secrets of the Dynamax phenomenon.</td></tr><td class="fooy">Shield</td><td class="fooinfo">Its body has grown incredibly long and the coin on its forehead has grown incredibly large&#8212;all thanks to Gigantamax power.</td></tr></table><br /><br /><table class="anctab" align="center"><tr><td class="fooblack" width="10%"><h2>Attacks</h2></td><td class="fooblack" align="center" width="30%"><a href="#attacks">Level Up</a></td><td class="fooblack" align="center" width="30%"><a href="#tmhm">TM & HM</a></td><td class="fooblack" align="center" width="30%"><a href="#egg">Egg Moves</a></td>
</tr></table><br /><table class="anctab" align="center"><tr><td class="fooblack" width="10%">Level Up Anchors</td><td class="fooblack" align="center" width="30%"><a href="#galarianlevel">Galarian</a></td><td class="fooblack" align="center" width="30%"><a href="#alolalevel">Alolan</a></td>
	<td class="fooblack" align="center" width="30%"><a href="#standardlevel">Standard</a></td>
</tr></table><a name="attacks"></a><table class="dextable"><tr ><td colspan="10" class="fooevo"><h3><a name="galarianlevel"></a>Galarian Form Level Up</h3></td></tr><tr><th class="attheader">Level</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/fakeout.shtml">Fake Out</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Fake Out - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fake Out: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">100</td></tr>
				<tr><td class="fooinfo" colspan="6">This attack hits first and makes the target flinch. It only works the first turn each time the user enters battle.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/growl.shtml">Growl</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Growl - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Growl: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user growls in an endearing way, making opposing Pok&eacute;mon less wary. This lowers their Attack stats.</td></tr><tr>
				<td rowspan="2" class="fooinfo">4</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/honeclaws.shtml">Hone Claws</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Hone Claws - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Hone Claws: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">101</td>
				<td class="cen">15</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user sharpens its claws to boost its Attack stat and accuracy.</td></tr><tr>
				<td rowspan="2" class="fooinfo">8</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/scratch.shtml">Scratch</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Scratch - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Scratch: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">35</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">Hard, pointed, sharp claws rake the target to inflict damage.</td></tr><tr>
				<td rowspan="2" class="fooinfo">12</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/payday.shtml">Pay Day</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Pay Day - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Pay Day: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.</td></tr><tr>
				<td rowspan="2" class="fooinfo">16</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/metalclaw.shtml">Metal Claw</a></td>
				<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Metal Claw - Steel-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Metal Claw: Physical Move"></td>
				<td class="cen">50</td>
				<td class="cen">95</td>
				<td class="cen">35</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is raked with steel claws. This may also raise the user's Attack stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">20</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/taunt.shtml">Taunt</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Taunt - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Taunt: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is taunted into a rage that allows it to use only attack moves for three turns.</td></tr><tr>
				<td rowspan="2" class="fooinfo">24</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/swagger.shtml">Swagger</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Swagger - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Swagger: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">85</td>
				<td class="cen">15</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user enrages and confuses the target. However, this also sharply raises the target's Attack stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">29</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/furyswipes.shtml">Fury Swipes</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Fury Swipes - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fury Swipes: Physical Move"></td>
				<td class="cen">18</td>
				<td class="cen">80</td>
				<td class="cen">15</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is raked with sharp claws or scythes quickly two to five times in a row.</td></tr><tr>
				<td rowspan="2" class="fooinfo">32</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/screech.shtml">Screech</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Screech - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Screech: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">85</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">An earsplitting screech harshly lowers the target's Defense stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">36</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/slash.shtml">Slash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Slash - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Slash: Physical Move"></td>
				<td class="cen">70</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is attacked with a slash of claws or blades. Critical hits land more easily.</td></tr><tr>
				<td rowspan="2" class="fooinfo">40</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/metalsound.shtml">Metal Sound</a></td>
				<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Metal Sound - Steel-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Metal Sound: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">85</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">A horrible sound like scraping metal harshly lowers the target's Sp. Def stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">44</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/thrash.shtml">Thrash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Thrash - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Thrash: Physical Move"></td>
				<td class="cen">120</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user rampages and attacks for two to three turns. The user then becomes confused.</td></tr></table><a name="attacks"></a><table class="dextable"><tr ><td colspan="10" class="fooevo"><h3><a name="standardlevel"></a>Standard Level Up</h3></td></tr><tr><th class="attheader">Level</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/fakeout.shtml">Fake Out</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Fake Out - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fake Out: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">100</td></tr>
				<tr><td class="fooinfo" colspan="6">This attack hits first and makes the target flinch. It only works the first turn each time the user enters battle.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/growl.shtml">Growl</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Growl - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Growl: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user growls in an endearing way, making opposing Pok&eacute;mon less wary. This lowers their Attack stats.</td></tr><tr>
				<td rowspan="2" class="fooinfo">4</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/feint.shtml">Feint</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Feint - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Feint: Physical Move"></td>
				<td class="cen">30</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">This attack hits a target using a move such as Protect or Detect. This also lifts the effects of those moves.</td></tr><tr>
				<td rowspan="2" class="fooinfo">8</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/scratch.shtml">Scratch</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Scratch - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Scratch: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">35</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">Hard, pointed, sharp claws rake the target to inflict damage.</td></tr><tr>
				<td rowspan="2" class="fooinfo">12</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/payday.shtml">Pay Day</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Pay Day - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Pay Day: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.</td></tr><tr>
				<td rowspan="2" class="fooinfo">16</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/bite.shtml">Bite</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Bite - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Bite: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">25</td>
				<td class="cen">30</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is bitten with viciously sharp fangs. This may also make the target flinch.</td></tr><tr>
				<td rowspan="2" class="fooinfo">20</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/taunt.shtml">Taunt</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Taunt - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Taunt: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is taunted into a rage that allows it to use only attack moves for three turns.</td></tr><tr>
				<td rowspan="2" class="fooinfo">24</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/assurance.shtml">Assurance</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Assurance - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Assurance: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">If the target has already taken some damage in the same turn, this attack's power is doubled.</td></tr><tr>
				<td rowspan="2" class="fooinfo">29</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/furyswipes.shtml">Fury Swipes</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Fury Swipes - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fury Swipes: Physical Move"></td>
				<td class="cen">18</td>
				<td class="cen">80</td>
				<td class="cen">15</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is raked with sharp claws or scythes quickly two to five times in a row.</td></tr><tr>
				<td rowspan="2" class="fooinfo">32</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/screech.shtml">Screech</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Screech - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Screech: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">85</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">An earsplitting screech harshly lowers the target's Defense stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">36</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/slash.shtml">Slash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Slash - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Slash: Physical Move"></td>
				<td class="cen">70</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is attacked with a slash of claws or blades. Critical hits land more easily.</td></tr><tr>
				<td rowspan="2" class="fooinfo">40</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/nastyplot.shtml">Nasty Plot</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Nasty Plot - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Nasty Plot: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">101</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user stimulates its brain by thinking bad thoughts. This sharply raises the user's Sp. Atk stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">44</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/playrough.shtml">Play Rough</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fairy.gif" alt="Play Rough - Fairy-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Play Rough: Physical Move"></td>
				<td class="cen">90</td>
				<td class="cen">90</td>
				<td class="cen">10</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The user plays rough with the target and attacks it. This may also lower the target's Attack stat.</td></tr></table><br /><a name="attacks"></a><table class="dextable"><tr ><td colspan="10" class="fooevo"><h3><a name="alolalevel"></a>Alola Form Level Up</h3></td></tr><tr><th class="attheader">Level</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/fakeout.shtml">Fake Out</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Fake Out - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fake Out: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">100</td></tr>
				<tr><td class="fooinfo" colspan="6">This attack hits first and makes the target flinch. It only works the first turn each time the user enters battle.</td></tr><tr>
				<td rowspan="2" class="fooinfo">&#8212;</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/growl.shtml">Growl</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Growl - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Growl: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user growls in an endearing way, making opposing Pok&eacute;mon less wary. This lowers their Attack stats.</td></tr><tr>
				<td rowspan="2" class="fooinfo">4</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/feint.shtml">Feint</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Feint - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Feint: Physical Move"></td>
				<td class="cen">30</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">This attack hits a target using a move such as Protect or Detect. This also lifts the effects of those moves.</td></tr><tr>
				<td rowspan="2" class="fooinfo">8</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/scratch.shtml">Scratch</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Scratch - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Scratch: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">35</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">Hard, pointed, sharp claws rake the target to inflict damage.</td></tr><tr>
				<td rowspan="2" class="fooinfo">12</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/payday.shtml">Pay Day</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Pay Day - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Pay Day: Physical Move"></td>
				<td class="cen">40</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.</td></tr><tr>
				<td rowspan="2" class="fooinfo">16</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/bite.shtml">Bite</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Bite - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Bite: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">25</td>
				<td class="cen">30</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is bitten with viciously sharp fangs. This may also make the target flinch.</td></tr><tr>
				<td rowspan="2" class="fooinfo">20</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/taunt.shtml">Taunt</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Taunt - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Taunt: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is taunted into a rage that allows it to use only attack moves for three turns.</td></tr><tr>
				<td rowspan="2" class="fooinfo">24</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/assurance.shtml">Assurance</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Assurance - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Assurance: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">If the target has already taken some damage in the same turn, this attack's power is doubled.</td></tr><tr>
				<td rowspan="2" class="fooinfo">29</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/furyswipes.shtml">Fury Swipes</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Fury Swipes - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Fury Swipes: Physical Move"></td>
				<td class="cen">18</td>
				<td class="cen">80</td>
				<td class="cen">15</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The target is raked with sharp claws or scythes quickly two to five times in a row.</td></tr><tr>
				<td rowspan="2" class="fooinfo">32</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/screech.shtml">Screech</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Screech - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Screech: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">85</td>
				<td class="cen">40</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">An earsplitting screech harshly lowers the target's Defense stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">36</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/nightslash.shtml">Night Slash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Night Slash - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Night Slash: Physical Move"></td>
				<td class="cen">70</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user slashes the target the instant an opportunity arises. Critical hits land more easily.</td></tr><tr>
				<td rowspan="2" class="fooinfo">40</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/nastyplot.shtml">Nasty Plot</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Nasty Plot - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Nasty Plot: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">101</td>
				<td class="cen">20</td>
				<td class="cen">--</td></tr>
				<tr><td class="fooinfo" colspan="6">The user stimulates its brain by thinking bad thoughts. This sharply raises the user's Sp. Atk stat.</td></tr><tr>
				<td rowspan="2" class="fooinfo">44</td>
				<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/playrough.shtml">Play Rough</a></td>
				<td class="cen"><img src="/pokedex-bw/type/fairy.gif" alt="Play Rough - Fairy-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Play Rough: Physical Move"></td>
				<td class="cen">90</td>
				<td class="cen">90</td>
				<td class="cen">10</td>
				<td class="cen">10</td></tr>
				<tr><td class="fooinfo" colspan="6">The user plays rough with the target and attacks it. This may also lower the target's Attack stat.</td></tr></table><table class="dextable"><tr ><td colspan="10" class="fooevo"><a name="tmhm"></a><h3>Technical Machine Attacks</h3></th></tr><tr><th class="attheader">TM #</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th><th class="attheader" width="5%">Form</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm02.shtml">TM02</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/payday.shtml">Pay Day</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Pay Day - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Pay Day: Physical Move"></td>
					<td class="cen">40</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm15.shtml">TM15</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/dig.shtml">Dig</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ground.gif" alt="Dig - Ground-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Dig: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user burrows into the ground, then attacks on the next turn.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm16.shtml">TM16</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/screech.shtml">Screech</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Screech - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Screech: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">85</td>
					<td class="cen">40</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">An earsplitting screech harshly lowers the target's Defense stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm21.shtml">TM21</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/rest.shtml">Rest</a></td>
					<td class="cen"><img src="/pokedex-bw/type/psychic.gif" alt="Rest - Psychic-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Rest: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user goes to sleep for two turns. This fully restores the user's HP and heals any status conditions.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm23.shtml">TM23</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/thief.shtml">Thief</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Thief - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Thief: Physical Move"></td>
					<td class="cen">60</td>
					<td class="cen">100</td>
					<td class="cen">25</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm24.shtml">TM24</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/snore.shtml">Snore</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Snore - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Snore: Special Move"></td>
					<td class="cen">50</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">30</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm25.shtml">TM25</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/protect.shtml">Protect</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Protect - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Protect: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm27.shtml">TM27</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/icywind.shtml">Icy Wind</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ice.gif" alt="Icy Wind - Ice-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Icy Wind: Special Move"></td>
					<td class="cen">55</td>
					<td class="cen">95</td>
					<td class="cen">15</td>
					<td class="cen">100</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks with a gust of chilled air. This also lowers opposing Pok&eacute;mon's Speed stats.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm29.shtml">TM29</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/charm.shtml">Charm</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fairy.gif" alt="Charm - Fairy-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Charm: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user gazes at the target rather charmingly, making it less wary. This harshly lowers the target's Attack stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm31.shtml">TM31</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/attract.shtml">Attract</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Attract - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Attract: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">If it is the opposite gender of the user, the target becomes infatuated and less likely to attack.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm33.shtml">TM33</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/raindance.shtml">Rain Dance</a></td>
					<td class="cen"><img src="/pokedex-bw/type/water.gif" alt="Rain Dance - Water-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Rain Dance: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">5</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user summons a heavy rain that falls for five turns, powering up Water-type moves. It lowers the power of Fire-type moves.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm34.shtml">TM34</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/sunnyday.shtml">Sunny Day</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fire.gif" alt="Sunny Day - Fire-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Sunny Day: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">5</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user intensifies the sun for five turns, powering up Fire-type moves. It lowers the power of Water-type moves.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm39.shtml">TM39</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/facade.shtml">Facade</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Facade - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Facade: Physical Move"></td>
					<td class="cen">70</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This attack move doubles its power if the user is poisoned, burned, or paralyzed.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm40.shtml">TM40</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/swift.shtml">Swift</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Swift - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Swift: Special Move"></td>
					<td class="cen">60</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">Star-shaped rays are shot at opposing Pok&eacute;mon. This attack never misses.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm56.shtml">TM56</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/u-turn.shtml">U-turn</a></td>
					<td class="cen"><img src="/pokedex-bw/type/bug.gif" alt="U-turn - Bug-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="U-turn: Physical Move"></td>
					<td class="cen">70</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">After making its attack, the user rushes back to switch places with a party Pok&eacute;mon in waiting.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm57.shtml">TM57</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/payback.shtml">Payback</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Payback - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Payback: Physical Move"></td>
					<td class="cen">50</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user stores power, then attacks. If the user moves after the target, this attack's power will be doubled.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm58.shtml">TM58</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/assurance.shtml">Assurance</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Assurance - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Assurance: Physical Move"></td>
					<td class="cen">60</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">If the target has already taken some damage in the same turn, this attack's power is doubled.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm65.shtml">TM65</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/shadowclaw.shtml">Shadow Claw</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ghost.gif" alt="Shadow Claw - Ghost-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Shadow Claw: Physical Move"></td>
					<td class="cen">70</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user slashes with a sharp claw made from shadows. Critical hits land more easily.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm76.shtml">TM76</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/round.shtml">Round</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Round - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Round: Special Move"></td>
					<td class="cen">60</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks the target with a song. Others can join in the Round to increase the power of the attack.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tm79.shtml">TM79</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/retaliate.shtml">Retaliate</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Retaliate - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Retaliate: Physical Move"></td>
					<td class="cen">70</td>
					<td class="cen">100</td>
					<td class="cen">5</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user gets revenge for a fainted ally. If an ally fainted in the previous turn, this move's power is increased.</td></tr></table><table class="dextable"><tr ><td colspan="10" class="fooevo"><a name="tmhm"></a><h3>Technical Record Attacks</h3></th></tr><tr><th class="attheader">TR #</th><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th><th class="attheader" width="5%">Form</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr00.shtml">TR00</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/swordsdance.shtml">Swords Dance</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Swords Dance - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Swords Dance: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr01.shtml">TR01</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/bodyslam.shtml">Body Slam</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Body Slam - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Body Slam: Physical Move"></td>
					<td class="cen">85</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">30</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user drops onto the target with its full body weight. This may also leave the target with paralysis.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr08.shtml">TR08</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/thunderbolt.shtml">Thunderbolt</a></td>
					<td class="cen"><img src="/pokedex-bw/type/electric.gif" alt="Thunderbolt - Electric-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Thunderbolt: Special Move"></td>
					<td class="cen">90</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">10</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">A strong electric blast crashes down on the target. This may also leave the target with paralysis.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr09.shtml">TR09</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/thunder.shtml">Thunder</a></td>
					<td class="cen"><img src="/pokedex-bw/type/electric.gif" alt="Thunder - Electric-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Thunder: Special Move"></td>
					<td class="cen">110</td>
					<td class="cen">70</td>
					<td class="cen">10</td>
					<td class="cen">30</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr17.shtml">TR17</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/amnesia.shtml">Amnesia</a></td>
					<td class="cen"><img src="/pokedex-bw/type/psychic.gif" alt="Amnesia - Psychic-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Amnesia: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user temporarily empties its mind to forget its concerns. This sharply raises the user's Sp. Def stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr20.shtml">TR20</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/substitute.shtml">Substitute</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Substitute - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Substitute: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user creates a substitute for itself using some of its HP. The substitute serves as the user's decoy.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr26.shtml">TR26</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/endure.shtml">Endure</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Endure - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Endure: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user endures any attack with at least 1 HP. Its chance of failing rises if it is used in succession.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr27.shtml">TR27</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/sleeptalk.shtml">Sleep Talk</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Sleep Talk - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Sleep Talk: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">While it is asleep, the user randomly uses one of the moves it knows.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr31.shtml">TR31</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/irontail.shtml">Iron Tail</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Iron Tail - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Iron Tail: Physical Move"></td>
					<td class="cen">100</td>
					<td class="cen">75</td>
					<td class="cen">15</td>
					<td class="cen">30</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The target is slammed with a steel-hard tail. This may also lower the target's Defense stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr32.shtml">TR32</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/crunch.shtml">Crunch</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Crunch - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Crunch: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">20</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr33.shtml">TR33</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/shadowball.shtml">Shadow Ball</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ghost.gif" alt="Shadow Ball - Ghost-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Shadow Ball: Special Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">20</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user hurls a shadowy blob at the target. This may also lower the target's Sp. Def stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr35.shtml">TR35</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/uproar.shtml">Uproar</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Uproar - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Uproar: Special Move"></td>
					<td class="cen">90</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks in an uproar for three turns. During that time, no Pok&eacute;mon can fall asleep.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr37.shtml">TR37</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/taunt.shtml">Taunt</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Taunt - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Taunt: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">100</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The target is taunted into a rage that allows it to use only attack moves for three turns.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr42.shtml">TR42</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/hypervoice.shtml">Hyper Voice</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Hyper Voice - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Hyper Voice: Special Move"></td>
					<td class="cen">90</td>
					<td class="cen">100</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user lets loose a horribly echoing shout with the power to inflict damage.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr46.shtml">TR46</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/irondefense.shtml">Iron Defense</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Iron Defense - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Iron Defense: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">15</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user hardens its body's surface like iron, sharply raising its Defense stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr52.shtml">TR52</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/gyroball.shtml">Gyro Ball</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Gyro Ball - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Gyro Ball: Physical Move"></td>
					<td class="cen">??</td>
					<td class="cen">100</td>
					<td class="cen">5</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user tackles the target with a high-speed spin. The slower the user compared to the target, the greater the move's power.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr58.shtml">TR58</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/darkpulse.shtml">Dark Pulse</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Dark Pulse - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Dark Pulse: Special Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">20</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user releases a horrible aura imbued with dark thoughts. This may also make the target flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr59.shtml">TR59</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/seedbomb.shtml">Seed Bomb</a></td>
					<td class="cen"><img src="/pokedex-bw/type/grass.gif" alt="Seed Bomb - Grass-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Seed Bomb: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user slams a barrage of hard-shelled seeds down on the target from above.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr68.shtml">TR68</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/nastyplot.shtml">Nasty Plot</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Nasty Plot - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Nasty Plot: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">20</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user stimulates its brain by thinking bad thoughts. This sharply raises the user's Sp. Atk stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr73.shtml">TR73</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/gunkshot.shtml">Gunk Shot</a></td>
					<td class="cen"><img src="/pokedex-bw/type/poison.gif" alt="Gunk Shot - Poison-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Gunk Shot: Physical Move"></td>
					<td class="cen">120</td>
					<td class="cen">80</td>
					<td class="cen">5</td>
					<td class="cen">30</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user shoots filthy garbage at the target to attack. This may also poison the target.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr74.shtml">TR74</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/ironhead.shtml">Iron Head</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Iron Head - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Iron Head: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">30</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user slams the target with its steel-hard head. This may also make the target flinch.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr81.shtml">TR81</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/foulplay.shtml">Foul Play</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Foul Play - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Foul Play: Physical Move"></td>
					<td class="cen">95</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user turns the target's power against it. The higher the target's Attack stat, the greater the damage it deals.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr85.shtml">TR85</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/workup.shtml">Work Up</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Work Up - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Work Up: Other Move"></td>
					<td class="cen">--</td>
					<td class="cen">101</td>
					<td class="cen">30</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user is roused, and its Attack and Sp. Atk stats increase.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr90.shtml">TR90</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/playrough.shtml">Play Rough</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fairy.gif" alt="Play Rough - Fairy-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Play Rough: Physical Move"></td>
					<td class="cen">90</td>
					<td class="cen">90</td>
					<td class="cen">10</td>
					<td class="cen">10</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user plays rough with the target and attacks it. This may also lower the target's Attack stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/itemdex/tr95.shtml">TR95</a></td>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/throatchop.shtml">Throat Chop</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Throat Chop - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Throat Chop: Physical Move"></td>
					<td class="cen">80</td>
					<td class="cen">100</td>
					<td class="cen">15</td>
					<td class="cen">100</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alolan Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">The user attacks the target's throat, and the resultant suffering prevents the target from using moves that emit sound for two turns.</td></tr></table><table class="dextable"><tr ><td colspan="9" class="fooevo"><a name="eggmoves"></a><h3>Egg Moves</h3> <a href="egg.shtml"><font size="1"><i>(Details)</i></a></td></tr><tr><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th> <th class="attheader">&nbsp;</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/spite.shtml">Spite</a></td>
				<td class="cen"><img src="/pokedex-bw/type/ghost.gif" alt="Spite - Ghost-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Spite: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">10</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /><br /><a href="egg.shtml#spite"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user unleashes its grudge on the move last used by the target by cutting 4 PP from it.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/hypnosis.shtml">Hypnosis</a></td>
				<td class="cen"><img src="/pokedex-bw/type/psychic.gif" alt="Hypnosis - Psychic-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Hypnosis: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">60</td>
				<td class="cen">20</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /><br /><a href="egg.shtml#hypnosis"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user employs hypnotic suggestion to make the target fall into a deep sleep.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/lastresort.shtml">Last Resort</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Last Resort - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Last Resort: Physical Move"></td>
				<td class="cen">140</td>
				<td class="cen">100</td>
				<td class="cen">5</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /><br /><a href="egg.shtml#lastresort"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">This move can be used only after the user has used all the other moves it knows in the battle.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/flail.shtml">Flail</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Flail - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Flail: Physical Move"></td>
				<td class="cen">??</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /><br /><a href="egg.shtml#flail"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user flails about aimlessly to attack. The less HP the user has, the greater the move's power.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/tailwhip.shtml">Tail Whip</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Tail Whip - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Tail Whip: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">30</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /><br /><a href="egg.shtml#tailwhip"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user wags its tail cutely, making opposing Pok&eacute;mon less wary and lowering their Defense stats.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/covet.shtml">Covet</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Covet - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Covet: Physical Move"></td>
				<td class="cen">60</td>
				<td class="cen">100</td>
				<td class="cen">25</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /><br /><a href="egg.shtml#covet"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user endearingly approaches the target, then steals the target's held item.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/partingshot.shtml">Parting Shot</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Parting Shot - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Parting Shot: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">20</td>
				<td class="cen">100</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /><br /><a href="egg.shtml#partingshot"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches with a party Pok&eacute;mon.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/flatter.shtml">Flatter</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Flatter - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Flatter: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /><br /><a href="egg.shtml#flatter"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">Flattery is used to confuse the target. However, this also raises the target's Sp. Atk stat.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/double-edge.shtml">Double-Edge</a></td>
				<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Double-Edge - Normal-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Double-Edge: Physical Move"></td>
				<td class="cen">120</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /><br /><a href="egg.shtml#double-edge"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">A reckless, life-risking tackle in which the user rushes the target. This also damages the user quite a lot.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/curse.shtml">Curse</a></td>
				<td class="cen"><img src="/pokedex-bw/type/ghost.gif" alt="Curse - Ghost-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/other.png" alt="Curse: Other Move"></td>
				<td class="cen">--</td>
				<td class="cen">101</td>
				<td class="cen">10</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /><br /><a href="egg.shtml#curse"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">A move that works differently for the Ghost type than for all other types.</td></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/nightslash.shtml">Night Slash</a></td>
				<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Night Slash - Dark-type"></td>
				<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Night Slash: Physical Move"></td>
				<td class="cen">70</td>
				<td class="cen">100</td>
				<td class="cen">15</td>
				<td class="cen">--</td>
								<td class="cen" rowspan="2"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /><br /><a href="egg.shtml#nightslash"><u>Details</u></a></td></tr>

				<tr><td class="fooinfo" colspan="6">The user slashes the target the instant an opportunity arises. Critical hits land more easily.</td></tr></tbody></table><p><table  class="dextable"><thead><tr ><td colspan="9" class="fooevo">Move Tutor Attacks</th></tr><tr><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th><th class="attheader">Form</th></tr><tr><td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/steelbeam.shtml">Steel Beam</a></td><td align="center" class="fooinfo"><img src="/pokedex-bw/type/steel.gif"></td><td align="center" class="fooinfo"><img src="/pokedex-bw/type/special.png"></td><td align="center" class="fooinfo">140</td><td align="center" class="fooinfo">95</td><td align="center" class="fooinfo">5</td><td align="center" class="fooinfo">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td>
					</tr><tr><td colspan="6" class="fooinfo">The user fires a beam of steel that it collected from its entire body. This also damages the user.</td></tr></table><p><table class="dextable"><tr ><td colspan="10" class="fooevo"><h3>Usable Max Moves</h3></th></tr><tr><th class="attheader">Attack Name</th><th class="attheader">Type</th><th class="attheader">Cat.</th><th class="attheader">Max Att.</th><th class="attheader">Acc.</th><th class="attheader">PP</th><th class="attheader">Effect %</th><th class="attheader" width="10%">Form</th></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxflutterby.shtml">Max Flutterby</a></td>
					<td class="cen"><img src="/pokedex-bw/type/bug.gif" alt="Max Flutterby - Bug-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">120<br />120<br />120</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Bug-type attack Dynamax Pok&eacute;mon use. This lowers the target's Sp. Atk stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxlightning.shtml">Max Lightning</a></td>
					<td class="cen"><img src="/pokedex-bw/type/electric.gif" alt="Max Lightning - Electric-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">140<br />140<br />140</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is an Electric-type attack Dynamax Pok&eacute;mon use. The user turns the ground into Electric Terrain for five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxstrike.shtml">Max Strike</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Max Strike - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">140(Phy)/130(Spe)<br />130(Phy)/130(Spe)<br />140(Phy)/130(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Normal-type attack Dynamax Pok&eacute;mon use. This lowers the target's Speed stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxphantasm.shtml">Max Phantasm</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ghost.gif" alt="Max Phantasm - Ghost-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">120(Phy)/130(Spe)<br />120(Phy)/130(Spe)<br />120(Phy)/130(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Ghost-type attack Dynamax Pok&eacute;mon use. This lowers the target's Defense stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxhailstorm.shtml">Max Hailstorm</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ice.gif" alt="Max Hailstorm - Ice-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">110<br />110</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is an Ice-type attack Dynamax Pok&eacute;mon use. The user summons a hailstorm lasting five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxooze.shtml">Max Ooze</a></td>
					<td class="cen"><img src="/pokedex-bw/type/poison.gif" alt="Max Ooze - Poison-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">95<br />95<br />95</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Poison-type attack Dynamax Pok&eacute;mon use. This raises ally Pok&eacute;mon's Sp. Atk stats.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxstarfall.shtml">Max Starfall</a></td>
					<td class="cen"><img src="/pokedex-bw/type/fairy.gif" alt="Max Starfall - Fairy-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">130<br />130<br />130</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Fairy-type attack Dynamax Pok&eacute;mon use. The user turns the ground into Misty Terrain for five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxquake.shtml">Max Quake</a></td>
					<td class="cen"><img src="/pokedex-bw/type/ground.gif" alt="Max Quake - Ground-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">130<br />130<br />130</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Ground-type attack Dynamax Pok&eacute;mon use. This raises ally Pok&eacute;mon's Sp. Def stats.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxdarkness.shtml">Max Darkness</a></td>
					<td class="cen"><img src="/pokedex-bw/type/dark.gif" alt="Max Darkness - Dark-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">130(Phy)/130(Spe)<br />130(Phy)/130(Spe)<br />130(Phy)/130(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Dark-type attack Dynamax Pok&eacute;mon use. This lowers the target's Sp. Def stat.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxovergrowth.shtml">Max Overgrowth</a></td>
					<td class="cen"><img src="/pokedex-bw/type/grass.gif" alt="Max Overgrowth - Grass-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"></td>
					<td class="cen">130<br />130<br />130</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Grass-type attack Dynamax Pok&eacute;mon use. The user turns the ground into Grassy Terrain for five turns.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxsteelspike.shtml">Max Steelspike</a></td>
					<td class="cen"><img src="/pokedex-bw/type/steel.gif" alt="Max Steelspike - Steel-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><br /><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">130<br />130<br />130(Phy)/140(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This is a Steel-type attack Dynamax Pok&eacute;mon use. This raises ally Pok&eacute;mon's Defense stats.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/maxguard.shtml">Max Guard</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="Max Guard - Normal-type"></td>
					<td class="cen"><br /><br /></td>
					<td class="cen"><br /><br /></td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052.png" alt="Normal" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-a.png" alt="Alola Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-g.png" alt="Galarian Form" /></td><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.</td></tr><tr>
					<td rowspan="2" class="fooinfo"><a href="/attackdex-swsh/g-maxgoldrush.shtml">G-Max Gold Rush</a></td>
					<td class="cen"><img src="/pokedex-bw/type/normal.gif" alt="G-Max Gold Rush - Normal-type"></td>
					<td class="cen"><img src="/pokedex-bw/type/physical.png" alt="Physical Move"><img src="/pokedex-bw/type/special.png" alt="Special Move"></td>
					<td class="cen">140(Phy)/130(Spe)</td>
					<td class="cen">101</td>
					<td class="cen">10</td>
					<td class="cen">--</td>
					<td rowspan="2" class="cen"><table><tr><td class="pkmn"><img src="/pokedex-swsh/icon/052-gi.png" alt="Gigantamax Meowth" /></td></tr></table></td></tr>
					<tr><td class="fooinfo" colspan="6">A Normal-type attack that Gigantamax Meowth use. This move confuses opponents and also earns extra money.</td></tr></table><br /><br /><a name="stats"></a><table class="dextable"><tr>
<td colspan="8" class="fooevo"><h2>Stats</h2></td></tr><tr>
<td colspan="2" width="14%">&nbsp;</td>
<td align="center" class="fooevo">HP</td>
<td align="center" class="fooevo">Attack</td>
<td align="center" class="fooevo">Defense</td>
<td align="center" class="fooevo">Sp. Attack</td>
<td align="center" class="fooevo">Sp. Defense</td>
<td align="center" class="fooevo">Speed</td></tr>
<tr><td colspan="2" width="14%" class="fooinfo">Base Stats - Total: 290</td>
<td align="center" class="fooinfo">40</td>
<td align="center" class="fooinfo">45</td>
<td align="center" class="fooinfo">35</td>
<td align="center" class="fooinfo">40</td>
<td align="center" class="fooinfo">40</td>
<td align="center" class="fooinfo">90</td></tr>
<tr><td rowspan="2" width="14%" class="foohin">Max Stats<br /><i>Hindering Nature</i></td>
<td class="foohin">Lv. 50</td>
<td align="center" class="foohin">100 - 147</td>
<td align="center" class="foohin">45 - 87</td>
<td align="center" class="foohin">36 - 78</td>
<td align="center" class="foohin">40 - 82</td>
<td align="center" class="foohin">40 - 82</td>
<td align="center" class="foohin">85 - 127</td></tr>
<tr><td class="foohin">Lv. 100</td>
<td align="center" class="foohin">190 - 284</td>
<td align="center" class="foohin">85 - 170</td>
<td align="center" class="foohin">67 - 152</td>
<td align="center" class="foohin">76 - 161</td>
<td align="center" class="foohin">76 - 161</td>
<td align="center" class="foohin">166 - 251</td></tr>

<tr><td rowspan="2" width="14%" class="fooinfo">Max Stats<br /><i>Neutral Nature</i></td>
<td class="fooinfo">Lv. 50</td>
<td align="center" class="fooinfo">100 - 147</td>
<td align="center" class="fooinfo">50 - 97</td>
<td align="center" class="fooinfo">40 - 87</td>
<td align="center" class="fooinfo">45 - 92</td>
<td align="center" class="fooinfo">45 - 92</td>
<td align="center" class="fooinfo">95 - 142</td></tr>
<tr><td class="fooinfo">Lv. 100</td>
<td align="center" class="fooinfo">190 - 284</td>
<td align="center" class="fooinfo">95 - 189</td>
<td align="center" class="fooinfo">75 - 169</td>
<td align="center" class="fooinfo">85 - 179</td>
<td align="center" class="fooinfo">85 - 179</td>
<td align="center" class="fooinfo">185 - 279</td></tr>


<tr><td rowspan="2" width="14%" class="fooben">Max Stats<br /><i>Beneficial Nature</i></td>
<td class="fooben">Lv. 50</td>
<td align="center" class="fooben">100 - 147</td>
<td align="center" class="fooben">55 - 106</td>
<td align="center" class="fooben">44 - 95</td>
<td align="center" class="fooben">49 - 101</td>
<td align="center" class="fooben">49 - 101</td>
<td align="center" class="fooben">104 - 156</td></tr>
<tr><td class="fooben">Lv. 100</td>
<td align="center" class="fooben">190 - 284</td>
<td align="center" class="fooben">104 - 207</td>
<td align="center" class="fooben">82 - 185</td>
<td align="center" class="fooben">93 - 196</td>
<td align="center" class="fooben">93 - 196</td>
<td align="center" class="fooben">203 - 306</td></tr>


</table><table class="dextable"><tr>
<td colspan="8" class="fooevo"><h2>Stats - Alolan Meowth</h2></td></tr><tr>
<td colspan="2" width="14%">&nbsp;</td>
<td align="center" class="fooevo">HP</td>
<td align="center" class="fooevo">Attack</td>
<td align="center" class="fooevo">Defense</td>
<td align="center" class="fooevo">Sp. Attack</td>
<td align="center" class="fooevo">Sp. Defense</td>
<td align="center" class="fooevo">Speed</td></tr>
<tr><td colspan="2" width="14%" class="fooinfo">Base Stats - Total: 290</td>
<td align="center" class="fooinfo">40</td>
<td align="center" class="fooinfo">35</td>
<td align="center" class="fooinfo">35</td>
<td align="center" class="fooinfo">50</td>
<td align="center" class="fooinfo">40</td>
<td align="center" class="fooinfo">90</td></tr>
<tr><td rowspan="2" width="14%" class="foohin">Max Stats<br /><i>Hindering Nature</i></td>
<td class="foohin">Lv. 50</td>
<td align="center" class="foohin">100 - 147</td>
<td align="center" class="foohin">36 - 78</td>
<td align="center" class="foohin">36 - 78</td>
<td align="center" class="foohin">49 - 91</td>
<td align="center" class="foohin">40 - 82</td>
<td align="center" class="foohin">85 - 127</td></tr>
<tr><td class="foohin">Lv. 100</td>
<td align="center" class="foohin">190 - 284</td>
<td align="center" class="foohin">67 - 152</td>
<td align="center" class="foohin">67 - 152</td>
<td align="center" class="foohin">94 - 179</td>
<td align="center" class="foohin">76 - 161</td>
<td align="center" class="foohin">166 - 251</td></tr>

<tr><td rowspan="2" width="14%" class="fooinfo">Max Stats<br /><i>Neutral Nature</i></td>
<td class="fooinfo">Lv. 50</td>
<td align="center" class="fooinfo">100 - 147</td>
<td align="center" class="fooinfo">40 - 87</td>
<td align="center" class="fooinfo">40 - 87</td>
<td align="center" class="fooinfo">55 - 102</td>
<td align="center" class="fooinfo">45 - 92</td>
<td align="center" class="fooinfo">95 - 142</td></tr>
<tr><td class="fooinfo">Lv. 100</td>
<td align="center" class="fooinfo">190 - 284</td>
<td align="center" class="fooinfo">75 - 169</td>
<td align="center" class="fooinfo">75 - 169</td>
<td align="center" class="fooinfo">105 - 199</td>
<td align="center" class="fooinfo">85 - 179</td>
<td align="center" class="fooinfo">185 - 279</td></tr>


<tr><td rowspan="2" width="14%" class="fooben">Max Stats<br /><i>Beneficial Nature</i></td>
<td class="fooben">Lv. 50</td>
<td align="center" class="fooben">100 - 147</td>
<td align="center" class="fooben">44 - 95</td>
<td align="center" class="fooben">44 - 95</td>
<td align="center" class="fooben">60 - 112</td>
<td align="center" class="fooben">49 - 101</td>
<td align="center" class="fooben">104 - 156</td></tr>
<tr><td class="fooben">Lv. 100</td>
<td align="center" class="fooben">190 - 284</td>
<td align="center" class="fooben">82 - 185</td>
<td align="center" class="fooben">82 - 185</td>
<td align="center" class="fooben">115 - 218</td>
<td align="center" class="fooben">93 - 196</td>
<td align="center" class="fooben">203 - 306</td></tr>


</table><table class="dextable"><tr>
<td colspan="8" class="fooevo"><h2>Stats - Galarian Meowth</h2></td></tr><tr>
<td colspan="2" width="14%">&nbsp;</td>
<td align="center" class="fooevo">HP</td>
<td align="center" class="fooevo">Attack</td>
<td align="center" class="fooevo">Defense</td>
<td align="center" class="fooevo">Sp. Attack</td>
<td align="center" class="fooevo">Sp. Defense</td>
<td align="center" class="fooevo">Speed</td></tr>
<tr><td colspan="2" width="14%" class="fooinfo">Base Stats - Total: 290</td>
<td align="center" class="fooinfo">50</td>
<td align="center" class="fooinfo">65</td>
<td align="center" class="fooinfo">55</td>
<td align="center" class="fooinfo">40</td>
<td align="center" class="fooinfo">40</td>
<td align="center" class="fooinfo">40</td></tr>
<tr><td rowspan="2" width="14%" class="foohin">Max Stats<br /><i>Hindering Nature</i></td>
<td class="foohin">Lv. 50</td>
<td align="center" class="foohin">110 - 157</td>
<td align="center" class="foohin">63 - 105</td>
<td align="center" class="foohin">54 - 96</td>
<td align="center" class="foohin">40 - 82</td>
<td align="center" class="foohin">40 - 82</td>
<td align="center" class="foohin">40 - 82</td></tr>
<tr><td class="foohin">Lv. 100</td>
<td align="center" class="foohin">210 - 304</td>
<td align="center" class="foohin">121 - 206</td>
<td align="center" class="foohin">103 - 188</td>
<td align="center" class="foohin">76 - 161</td>
<td align="center" class="foohin">76 - 161</td>
<td align="center" class="foohin">76 - 161</td></tr>

<tr><td rowspan="2" width="14%" class="fooinfo">Max Stats<br /><i>Neutral Nature</i></td>
<td class="fooinfo">Lv. 50</td>
<td align="center" class="fooinfo">110 - 157</td>
<td align="center" class="fooinfo">70 - 117</td>
<td align="center" class="fooinfo">60 - 107</td>
<td align="center" class="fooinfo">45 - 92</td>
<td align="center" class="fooinfo">45 - 92</td>
<td align="center" class="fooinfo">45 - 92</td></tr>
<tr><td class="fooinfo">Lv. 100</td>
<td align="center" class="fooinfo">210 - 304</td>
<td align="center" class="fooinfo">135 - 229</td>
<td align="center" class="fooinfo">115 - 209</td>
<td align="center" class="fooinfo">85 - 179</td>
<td align="center" class="fooinfo">85 - 179</td>
<td align="center" class="fooinfo">85 - 179</td></tr>


<tr><td rowspan="2" width="14%" class="fooben">Max Stats<br /><i>Beneficial Nature</i></td>
<td class="fooben">Lv. 50</td>
<td align="center" class="fooben">110 - 157</td>
<td align="center" class="fooben">77 - 128</td>
<td align="center" class="fooben">66 - 117</td>
<td align="center" class="fooben">49 - 101</td>
<td align="center" class="fooben">49 - 101</td>
<td align="center" class="fooben">49 - 101</td></tr>
<tr><td class="fooben">Lv. 100</td>
<td align="center" class="fooben">210 - 304</td>
<td align="center" class="fooben">148 - 251</td>
<td align="center" class="fooben">126 - 229</td>
<td align="center" class="fooben">93 - 196</td>
<td align="center" class="fooben">93 - 196</td>
<td align="center" class="fooben">93 - 196</td></tr>


</table><a name="general"></a><table class="dextable" align="center">
	<tr>
			<td class="fooevo" colspan="4"><h2>Gigantamax Meowth</h2></td>
		</tr><tr>
					<td class="fooevo" width="120" colspan="4">Picture</td></tr>
					<td class="fooinfo" align="center" colspan="4"><img src="/swordshield/pokemon/052-gi.png" alt="Gigantamax Meowth Image" /> <img src="/Shiny/SWSH/052-gi.png" alt="Shiny Gigantamax Meowth Image" /></td>
		</tr><tr>
			<td class="fooevo">Type</td>
			<td class="fooevo">Height</td>
			<td class="fooevo">Weight</td>
			</tr>
		<tr>
			
			<td class="cen"><a href="/pokedex-swsh/normal.shtml"><img src="/pokedex-bw/type/normal.gif" border="0"  alt="Normal-type" class="typeimg" /></a></td>
			<td class="fooinfo">108'03"<br />
			33m</td>
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
		<a href="/pokedex-swsh/dugtrio/"><img src="/pokedex-swsh/icon/051.png" alt="Dugtrio"  border="0"></a>
		</td>
		<td align="center">
		<a href="/pokedex-swsh/dugtrio/">#051<br />Dugtrio
		</td>
	</tr>
</table>

		</td>
		<td width="50%" align="right">
		<table border="0">
	<tr>
		<td align="center">
		<a href="/pokedex-swsh/persian/">#053<br />Persian
		</td>
		<td>
		<a href="/pokedex-swsh/persian/"><img src="/pokedex-swsh/icon/053.png" alt="Persian" border="0"></a>
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
<div class="navheader">Picture</div><br /><table width="140" cellspacing="0" cellpadding="0"><tr><td align="center"><b>Standard Form</b><br /><a href="/pokemon/meowth/"><img src="/art/th/52.png" class="art" alt="Meowth Art" /></a><br /><b>Alolan Form</b><br /><img src="/art/th/52-a.png"  class="art" alt="Alolan Form Art" width="140" /><br /><b>Galarian Form</b><br /><img src="/pokemon/art/52-g.png"  class="art" alt="Galarian Form Art" width="140" /></td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Name</td><td class="tooltabhead">Jp. Name</td></tr><tr><td class="tooltabcon">Meowth</td><td class="tooltabcon">Nyarth<br />&#12491;&#12515;&#12540;&#12473;</td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Gender</td><td class="tooltabhead" width="50%">Type</td></tr><tr><td class="tooltabcon"><table width="60" cellspacing="0" cellpadding="0"><tr> <td>&nbsp;<font color="#499FFF" size="1">&#9794;</font>:</td><td>50.2%</td></tr><tr><td>&nbsp;<font color="#F6961A" size="1">&#9961;</font>:</td><td>49.8%</td></tr></table></td><td class="tooltabcon"><a href="/pokedex-sm/normal.shtml"><img src="/pokedex-bw/type/normal.gif" border="0" alt="Normal-type" /></a></td></tr>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Alolan Type</td><td class="tooltabhead" width="50%">Galarian Type</td></tr><tr><td class="tooltabcon"><a href="/pokedex-sm/dark.shtml"><img src="/pokedex-bw/type/dark.gif" border="0" alt="Dark-type" /></a></td><td class="tooltabcon"><a href="/pokedex-sm/steel.shtml"><img src="/pokedex-bw/type/steel.gif" border="0" alt="Steel-type" /></a></td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Classification</td></tr><tr><td class="tooltabcon">Scratch Cat Pokémon</td></tr></table>
<table width="140" class="tooltab"><tr><td class="tooltabhead" width="50%">Height</td><td class="tooltabhead">Weight</td></tr><tr><td class="tooltabcon">1’04”<br />
			0.4m</td><td class="tooltabcon">9.3lbs<br />
			4.2kg</td></tr><tr><td class="tooltabhead" width="50%">Alolan Form Height</td><td class="tooltabhead">Alolan Form  Weight</td></tr><tr><td class="tooltabcon">1’04”<br />
			0.4m</td><td class="tooltabcon">9.3lbs<br />
			4.2kg</td></tr><tr><td class="tooltabhead" width="50%">Galarian Form Height</td><td class="tooltabhead">Galarian Form  Weight</td></tr><tr><td class="tooltabcon">1’04”<br />
			0.4m</td><td class="tooltabcon">16.5lbs<br />
			7.5kg</td></tr></table>

			
			<br />
<div class="alterdex"><br /><a href="/pokedex-swsh/meowth/"><b>Pokédex</b></a><br /></div><div class="alterdex"><br /><a href="/events/dex/052.shtml"><b>Events</b></a><br /></div>
<div class="alterdex"><br /><a href="/anime/dex/052.shtml"><b>Anime Appearances</b></a><br /></div>
<div class="alterdex"><br /><a href="/card/dex/052.shtml"><b>Cards</b></a><br /></div>
<div class="alterdex"><br /><a href="/movies/dex/052.shtml"><b>Cinematic Pok&eacute;dex</b></a><br /></div>
<div class="alterdex"><br /><a href="/manga/dex/052.shtml"><b>Manga Appearances</b></a><br /></div>
<div class="alterdex"><br /><a href="/pokemongo/pokemon/052.shtml"><b>Pokémon GO</b></a><br /></div>
<table width="140" class="tooltab">
<tr><td class="tooltabhead" width="34">Prev.</td><td  width="99%">&nbsp;</td><td class="tooltabhead" width="32">Next</td></tr>
<tr><td class="tooltabcon" width="34"><a href="/pokedex-swsh/dugtrio"><img src="/pokedex-swsh/icon/051.png" border="0" /></a></td><td  width="99%">&nbsp;</td><td class="tooltabcon" width="32"><a href="/pokedex-swsh/persian"><img src="/pokedex-swsh/icon/053.png" border="0" /></a></td></tr></table>

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
