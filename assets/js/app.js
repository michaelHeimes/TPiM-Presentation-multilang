 //@prepros-prepend vendor/modernizr-3.12.0.min.js
 //@prepros-prepend vendor/gsap.min.js
  
 document.addEventListener('DOMContentLoaded', function () {
	
	
	
	const appContainer = document.getElementById('app-container');
	
	const screensaver = document.getElementById('screensaver');
	const backPageConstant = document.getElementById('back-page-constant');
	const backPage = document.querySelectorAll('section:not(.home):not(#screensaver)');
	const backHome = document.querySelectorAll('section:not(.home) button');
	 
	const page1 = document.getElementById('page-1');
	const page2 = document.getElementById('page-2');
	const page3 = document.getElementById('page-3');
	const page4 = document.getElementById('page-4');
	const page5 = document.getElementById('page-5');
	const page6 = document.getElementById('page-6');
 
	 // Home Page
	const bgCogs = document.querySelectorAll('.Circle_Segments');
	// const homeCenterCircle = document.getElementById('Circle_Segments-2');
	const homeDividers = document.querySelectorAll('.Dividers-2 image');
	const homeHeaders = document.querySelectorAll('.home-header');

	const homePowerMeters = document.querySelectorAll('.home_powermeter');	
	const homePowerMeterBars = document.querySelectorAll('.home_powermeter rect');
	
	const homeTapTexts = document.querySelectorAll('.home-tap-text');
	// const outerCircle = document.getElementById('Center_Circle-2');
	// const outerCircleShadow = document.getElementById('cc-Shadow-2');
	const cogs = document.querySelectorAll('.Circle_Segments-4');
	const colorCog = document.querySelectorAll('.color-cog');
	const cogShadows = document.querySelectorAll('.cc-Shadow-3');
	const centerCircles = document.querySelectorAll('.Center_Circle-4');
	const centerCircleShadow = document.getElementById('cc-Shadow-4');
	const centerCircleText = document.getElementById('center-circle-text');
	const circleScale = .7;
	const homeLogo = document.getElementById('home-logo');
	const sidebarNav = document.querySelectorAll('.sidebar-nav');	
	
	const navtext = document.querySelectorAll('.nav-text');
		
	const pageLinks = document.querySelectorAll('.click-groups.page-links > g');
	
	const appAnalysis = document.getElementById('app-analysis');	
	const batteryTechnologies = document.getElementById('batteryTechnologies');
	const serviceSupport = document.getElementById('service-support');
	const equipmentAccessories = document.getElementById('equipment-accessories');
	const batteryMonitoring = document.getElementById('battery-monitoring');
	const chargingSolutions = document.getElementById('charging-solutions');
	
	// Back Page Constant
	const sbLinkHome = document.querySelectorAll('.home-trigger');
	const langDrawerTriggers = document.querySelectorAll('.lang-drawer-trigger');
	const langShift = document.querySelectorAll('.lang-shift');

	const screensaverTrigger = document.querySelectorAll('.screensaver-trigger');
	const sidebarBp = document.querySelectorAll('.sidebar-bp');

	
	// Animation Starting Points
	gsap.set([backPage, homeLogo, centerCircleText, homeDividers, homePowerMeterBars], {autoAlpha: 0});

	bgCogs.forEach(function (bgCog, index) {
		gsap.set(bgCog, {transformOrigin:"53.5% 46.5%", rotation:"+=90"});
	});
	
	cogs.forEach(function (cog, index) {
		gsap.set(cog, {transformOrigin:"50% 50%", autoAlpha: .1, rotation:"-=135"});
	});
	
	cogShadows.forEach(function (cogShadow, index) {
		gsap.set(cogShadow, {transformOrigin:"53.3% 46.7%", autoAlpha: .1, rotation:"-=135"});
	});

	homeHeaders.forEach(function (homeHeader, index) {
		gsap.set(homeHeader, {autoAlpha: 0, y: '-5vw'});
	});
	homeTapTexts.forEach(function (homeTapText, index) {
		gsap.set(homeTapText, {autoAlpha: 0, y: '-5vw'});
	});
	gsap.set(centerCircleShadow, {transformOrigin:"50% 50%", autoAlpha: 0, xPercent:2, yPercent:-2, scaleY: .5, scaleX: .5});
	
	centerCircles.forEach(function (centerCircle, index) {
		gsap.set(centerCircle, {transformOrigin:"50% 50%", autoAlpha: .1, scaleY: circleScale, scaleX: circleScale});	
	});

	gsap.set(centerCircleText, {transformOrigin:"50% 50%", scaleY: circleScale, scaleX: circleScale});
	gsap.set(sidebarNav, {autoAlpha: 0, x: '3vw'});
	gsap.set(sidebarBp, {autoAlpha: 0, x: '3vw'});

	
	//gsap.set(navtext, {autoAlpha: 0});
	
	gsap.set([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], { autoAlpha: 0});
	gsap.set(appAnalysis, {transformOrigin:"50% 50%", xPercent:0, yPercent:150});
	gsap.set(batteryTechnologies, {transformOrigin:"50% 50%", xPercent:-110, yPercent:100});
	gsap.set(serviceSupport, {transformOrigin:"50% 50%", xPercent:110, yPercent:100});		
	gsap.set(equipmentAccessories, {transformOrigin:"50% 50%", xPercent:115, yPercent:-55});	
	gsap.set(batteryMonitoring, {transformOrigin:"50% 50%", xPercent:0, yPercent:-130});
	gsap.set(chargingSolutions, {transformOrigin:"50% 50%", xPercent:-100, yPercent:-100});

	// Initial Opening Animation
	const openingAnimation = gsap.timeline();
	const animDuration = .7;
	bgCogs.forEach(function (bgCog, index) {
		openingAnimation.to(bgCog, {rotation: 0, duration: 1.5});
	});
	cogs.forEach(function (cog, index) {
		openingAnimation.to(cog, {rotation: 0, duration: 1.75}, "<");
		openingAnimation.to(cog, {autoAlpha: 1, rotation: 0, duration: 1.75}, "<");
	});
	cogShadows.forEach(function (cogShadow, index) {
		openingAnimation.to(cogShadow, {rotation: 0, duration: 1.75}, "<");
		openingAnimation.to(cogShadow, {autoAlpha: 1, rotation: 0, duration: 1.75}, "<");
	});
	// openingAnimation.to([cog, cogShadow], {rotation: 0, duration: 1.75}, "<");
	// openingAnimation.to([cog, cogShadow], {autoAlpha: 1, rotation: 0, duration: 1.75}, "<");
	openingAnimation.to([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], 1.5, {transformOrigin:"50% 50%", xPercent:0, yPercent:0, autoAlpha: 1, ease: "expo.out"}, "-=.15");
	openingAnimation.to(centerCircleText, {autoAlpha: 1, scaleY: 1, scaleX: 1, duration: animDuration, ease: "expo.out"}, "<");
	
	centerCircles.forEach(function (centerCircle, index) {
		openingAnimation.to(centerCircle, {autoAlpha: 1, scaleY: 1, scaleX: 1, duration: animDuration, ease: "expo.out"}, "<");
	});
	
	openingAnimation.to(centerCircleShadow, {xPercent: 0, yPercent: 0, scaleY: 1, scaleX: 1, autoAlpha: 1, duration: animDuration}, "<");
	openingAnimation.to(homeDividers, {autoAlpha: 1, duration: animDuration}, ">+=.2");
	
	homeHeaders.forEach(function (homeHeader, index) {
		openingAnimation.to(homeHeader, {autoAlpha: 1, y: 0, duration: animDuration}, ">-.8");
	});
	openingAnimation.to(homeLogo, {autoAlpha: 1, duration: animDuration}, "<");
	openingAnimation.to(sidebarNav, {autoAlpha: 1, x: '0', duration: animDuration}, "<");
	homeTapTexts.forEach(function (homeTapText, index) {
		openingAnimation.to(homeTapText, {autoAlpha: 1, y: 0, duration: animDuration}, ">-.2");
	});
	
	openingAnimation.pause();
	
	let powerMeterAnimation = '';

		
		const homePowerMeter1 = document.querySelectorAll('.home_powermeterRectangle_8');
		const homePowerMeter2 = document.querySelectorAll('.home_powermeterRectangle_9');
		const homePowerMeter3 = document.querySelectorAll('.home_powermeterRectangle_10');
		const homePowerMeter4 = document.querySelectorAll('.home_powermeterRectangle_11');
		const homePowerMeter5 = document.querySelectorAll('.home_powermeterRectangle_12');	
	
		powerMeterAnimation = gsap.timeline({repeat: -1, repeatDelay: 1.25});
		powerMeterAnimation.to(homePowerMeter1, {autoAlpha: .2, duration: .2});
		powerMeterAnimation.to(homePowerMeter2, {autoAlpha: .4, duration: .2}, "-=.1");
		powerMeterAnimation.to(homePowerMeter3, {autoAlpha: .6, duration: .2}, "-=.1");
		powerMeterAnimation.to(homePowerMeter4, {autoAlpha: .8, duration: .2}, "-=.1");
		powerMeterAnimation.to(homePowerMeter5, {autoAlpha: 1, duration: .2}, "-=.1");
	
		powerMeterAnimation.pause();
	
	
	
	// Abbreviated reverse animation
	const closeOpening = gsap.timeline();
	const closeSpeed = 1;
	cogs.forEach(function (cog, index) {
		closeOpening.to(cog, {transformOrigin:"50% 50%", autoAlpha: .1, rotation:"-=135", duration: closeSpeed});
	});
	cogShadows.forEach(function (cogShadow, index) {
		closeOpening.to(cogShadow, {transformOrigin:"53.3% 46.7%", autoAlpha: .1, rotation:"-=135", duration: closeSpeed}, "<");
	});
	
	closeOpening.to(centerCircleText, {autoAlpha: 0, duration: closeSpeed}, "<-=.2");
	closeOpening.to([homeDividers, homePowerMeterBars], {autoAlpha: 0, duration: closeSpeed}, "<");
	homeHeaders.forEach(function (homeHeader, index) {
		closeOpening.to(homeHeader, {autoAlpha: 0, y: '-5vw', duration: closeSpeed}, "<");
	});
	homeTapTexts.forEach(function (homeTapText, index) {
		closeOpening.to(homeTapText, {autoAlpha: 0, y: '-5vw', duration: closeSpeed}, "<");
	});
	closeOpening.to(centerCircleShadow, {transformOrigin:"50% 50%", autoAlpha: 0, xPercent:2, yPercent:-2, scaleY: .5, scaleX: .5, duration: .1}, "<");
	
	centerCircles.forEach(function (centerCircle, index) {
		closeOpening.to(centerCircle, {transformOrigin:"50% 50%", autoAlpha: .1, scaleY: circleScale, scaleX: circleScale, duration: closeSpeed}, "<");
	});
	
	closeOpening.to(centerCircleText, {transformOrigin:"50% 50%", autoAlpha: 0, scaleY: circleScale, scaleX: circleScale, duration: closeSpeed}, "<");
	closeOpening.to(homeLogo, {autoAlpha: 0, duration: closeSpeed}, "<");
	closeOpening.to(sidebarNav, {autoAlpha: 0, x: '3vw', duration: closeSpeed}, "<");
	
	closeOpening.to(appAnalysis, {transformOrigin:"50% 50%", xPercent:0, yPercent:150, duration: closeSpeed}, "<");
	closeOpening.to(batteryTechnologies, {transformOrigin:"50% 50%", xPercent:-110, yPercent:100, duration: closeSpeed}, "<");
	closeOpening.to(serviceSupport, {transformOrigin:"50% 50%", xPercent:110, yPercent:100, duration: closeSpeed}, "<");		
	closeOpening.to(equipmentAccessories, {transformOrigin:"50% 50%", xPercent:115, yPercent:-55, duration: closeSpeed}, "<");	
	closeOpening.to(batteryMonitoring, {transformOrigin:"50% 50%", xPercent:0, yPercent:-130, duration: closeSpeed}, "<");
	closeOpening.to(chargingSolutions, {transformOrigin:"50% 50%", xPercent:-100, yPercent:-100, duration: closeSpeed}, "<");
	closeOpening.to([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], { autoAlpha: 0}, "<-=.1");

	closeOpening.pause();
	
	
	// Hide the Screensaver and Play Initial Opening Animation 
	screensaver.addEventListener("click", (event) => {
		gsap.to(screensaver, {autoAlpha: 0, duration: .5});
		
		setTimeout(function() {
			openingAnimation.timeScale(1).play();
		}, 400);	
		setTimeout(function() {
			powerMeterAnimation.timeScale(1).play();
		}, 4000);
	});	 
	
	
	// Button plus pulses
	const linkCircles = document.querySelectorAll('svg.plus');
	
	linkCircles.forEach(function (linkCircle, index) {
		gsap.set(linkCircle, {transformOrigin:"50% 50%", scaleX: 1, scaleY: 1});
		let linkAnimation = gsap.timeline({repeat: -1, repeatDelay: 1});
		linkAnimation.to(linkCircle, {transformOrigin:"50% 50%", scaleX: .65, scaleY: .65, duration: .7, ease: "expo.in"});
		linkAnimation.to(linkCircle, {transformOrigin:"50% 50%", scaleX: 1, scaleY: 1, duration: .7, ease: "expo.out"});
	});
	
	
	// Show the screensaver after inactivity and prepare the full Intitial Opening Animation
	const showScreensaver = function() {
		
		closerDrawer();
		
		closeModal();
		
		if (appContainer.classList.contains('lang-open') ) {
			closeTriggerLangDrawer();
		}
		
		powerMeterAnimation.pause();
		powerMeterAnimation.restart();
		
		if( appContainer.classList.contains('home') ) {
			// do nothing
		} else {
			returnHome();
		}
		
		closeOpening.play();
			setTimeout(function() {
				gsap.to(screensaver, {autoAlpha: 1, duration: .5});	
			}, 1000);
			setTimeout(function() {
				openingAnimation.pause();
				openingAnimation.timeScale(10).reverse();
				powerMeterAnimation.pause();
				homePowerMeters.forEach(function (homePowerMeter, index) {
					const homePowerMeter1 = homePowerMeter.querySelector('.home_powermeterRectangle_8');
					const homePowerMeter2 = homePowerMeter.querySelector('.home_powermeterRectangle_9');
					const homePowerMeter3 = homePowerMeter.querySelector('.home_powermeterRectangle_10');
					const homePowerMeter4 = homePowerMeter.querySelector('.home_powermeterRectangle_11');
					const homePowerMeter5 = homePowerMeter.querySelector('.home_powermeterRectangle_12');
					gsap.to([homePowerMeter1, homePowerMeter2, homePowerMeter3, homePowerMeter4, homePowerMeter5], {autoAlpha: 0});
				});
				powerMeterAnimation.timeScale(10).reverse();
			}, 1500);
			
		removeCogActiveStates();
			
	}
	
	let initial=setTimeout(showScreensaver,600000);
	
	document.addEventListener("click", (event) => {
		clearTimeout( initial );
		initial=setTimeout(showScreensaver,600000); 
	});
	
	// Click Activate Screensaver
	screensaverTrigger.forEach(function (screensaverTriggerLink, index) {
		screensaverTriggerLink.addEventListener("click", (event) => {
			showScreensaver();
			gsap.to(backPage, {autoAlpha: 0, duration: .5, delay: .75});
		});	
	});


	// Navigation to Back Pages
	pageLinks.forEach(function (pageLink, index) {
		pageLink.addEventListener("click", (event) => {
						
			let activeCog = document.querySelector("[data-cog='" +  pageLink.dataset.page + "']");
			let activeConstantCog = document.querySelector("[data-constant-cog='" +  pageLink.dataset.page + "']");
			
			if (appContainer.classList.contains('lang-open') ) {
				closeTriggerLangDrawer()
			}
			
			appContainer.classList.remove('home');
			
			activeCog.classList.add('clicked');
			activeConstantCog.classList.add('clicked');
			
			gsap.to(homePowerMeterBars, {autoAlpha: 0, duration: .2});

			setTimeout(function() {
				powerMeterAnimation.pause();
				closeOpening.play();

				gsap.to(backPageConstant, {autoAlpha: 1, delay: .75, duration: .5});
				gsap.to('#' + pageLink.dataset.page, {autoAlpha: 1, delay: 1.1, duration: .75});
				gsap.to(sidebarBp, {autoAlpha: 1, x: 0, duration: 1, delay: 1.2});
				
			}, 700);
	
			setTimeout(function() {
				powerMeterAnimation.pause();
				setTimeout(function() {
					//powerMeterAnimation.reset();
				}, 500);
			}, 1500);
			
		});
	});
	
	// Remove Cog Active States
	const removeCogActiveStates = function() {
		const colorCogs = document.querySelectorAll('.color-cog');
		colorCogs.forEach(function (colorCog, index) {
			colorCog.classList.remove('clicked');
		});	
	}
	
	// Language Trigger
	const openTriggerLangDrawer = function() {
		gsap.to(langShift, {x: '-=60%', ease: "circ.out", duration: .8});
	}
	const closeTriggerLangDrawer = function() {
		gsap.to(langShift, {x: 0, ease: "circ.out", duration: .8});
		langDrawerTriggers.forEach(function (langDrawerTrigger, index) {
			appContainer.classList.remove('lang-open');
			langDrawerTrigger.classList.add('is-animating');
			setTimeout(function() {
				langDrawerTrigger.classList.remove('is-animating');
			}, 850);
		});
	}
	
	langDrawerTriggers.forEach(function (langDrawerTrigger, index) {
		langDrawerTrigger.addEventListener("click", (event) => {
			if (appContainer.classList.contains('is-animating') ) {
				
			} else {
				if (appContainer.classList.contains('lang-open') ) {
					appContainer.classList.remove('lang-open');
					appContainer.classList.add('is-animating');
					closeTriggerLangDrawer();
					setTimeout(function() {
						appContainer.classList.remove('is-animating');
					}, 850);
				} else {
					appContainer.classList.add('lang-open');
					appContainer.classList.add('is-animating');
					openTriggerLangDrawer();
					setTimeout(function() {
						appContainer.classList.remove('is-animating');
					}, 850);
				}
			}
		});
	});
	
	const showLangUKs = document.querySelectorAll('.show-lang-uk');
	const showLangDEs = document.querySelectorAll('.show-lang-de');
	const langUKs = document.querySelectorAll('.lang-uk');
	const langDEs = document.querySelectorAll('.lang-de');
	
	appContainer.setAttribute('data-lang', 'uk');
	
	gsap.to(langDEs, {autoAlpha: 0, duration: 0});
	
	showLangUKs.forEach(function (showLangUK, index) {
		if (appContainer.classList.contains('is-animating') ) {
			
		} else {
			
			showLangUK.addEventListener("click", (event) => {
				event.preventDefault();
				appContainer.classList.add('is-animating');
				appContainer.setAttribute('data-lang', 'uk');
				backPageConstant.classList.remove('de-bg');
				gsap.to(langDEs, {autoAlpha: 0, duration: .3});
				gsap.to(langUKs, {autoAlpha: 1, duration: .3, delay: .1});
				closeTriggerLangDrawer();
				setTimeout(function() {
					appContainer.classList.remove('is-animating');
				}, 850);
			});
		
		}
		
	});
	
	showLangDEs.forEach(function (showLangDE, index) {
		
		if (appContainer.classList.contains('is-animating') ) {
			
		} else {
		
			showLangDE.addEventListener("click", (event) => {
				event.preventDefault();
				appContainer.classList.add('is-animating');
				appContainer.setAttribute('data-lang', 'de');
				backPageConstant.classList.add('de-bg');
				gsap.to(langUKs, {autoAlpha: 0, duration: .3});
				gsap.to(langDEs, {autoAlpha: 1, duration: .3, delay: .1});
				closeTriggerLangDrawer();
				setTimeout(function() {
					appContainer.classList.remove('is-animating');
				}, 850);
			});
		
		}
		
	});
	
	// Return to Home Page
	const returnHome = function() {
		
		appContainer.classList.add('home');
		
		removeCogActiveStates();

		closerDrawer();
		
		closeTriggerLangDrawer();
		
		gsap.to(sidebarBp, {autoAlpha: 0, x: '3vw', duration: 1});
		gsap.to(backPage, {autoAlpha: 0, duration: .5, delay: .7});
		
		setTimeout(function() {
			closeOpening.reverse();
		}, 400);
		
		gsap.to(homePowerMeterBars, {autoAlpha: 0, duration: 0});
		
		setTimeout(function() {
			powerMeterAnimation.timeScale(1).play();
		}, 1500);
	}
	
	sbLinkHome.forEach(function (backHomeLink, index) {
		backHomeLink.addEventListener("click", (event) => {
			returnHome();
		});
	});
	
	// Page Drawer Triggers
	const drawerLinks = document.querySelectorAll('.drawer-links > div');
	const closeDrawer = document.getElementById('close-drawer');
	const drawerWrap = document.getElementById('drawer-wrap');
	const drawerInners = document.querySelectorAll('.drawer-wrap .inner');
	
	const closerDrawer = function() {
		gsap.to(drawerWrap, {x: '-100%', ease: "power1.in", duration: 1});
		gsap.set(drawerInners, {autoAlpha: 0, duration: 0, delay: 1.1});	
		
		setTimeout(function() {
			appContainer.classList.remove('animating');
		}, 1100);
	}

	gsap.set(drawerWrap, {x: "-100%"});
	gsap.set(drawerInners, {autoAlpha: 0});

	drawerLinks.forEach(function (drawerLink, index) {
		drawerLink.addEventListener("click", (event) => {
			
			if( appContainer.classList.contains('animating') ) {
				// do nothing
			} else {
			
				appContainer.classList.add('animating');
				
				gsap.to(drawerWrap, {x: 0, ease: "circ.out", duration: 1});
				
				let targetDrawer = drawerLink.dataset.trigger;
				let openDrawer = document.getElementById(targetDrawer);
				
				gsap.to(openDrawer, {autoAlpha: 1, duration: 0});
				
			}
			
		});
	});
	
	closeDrawer.addEventListener("click", (event) => {
		closerDrawer();
	});
	

	// Modals
	const modalMask = document.getElementById('modal-mask');
	const modalInner = document.querySelectorAll('#modal-mask .inner');
	const modalTriggers = document.querySelectorAll('.modal-trigger');
	const closemodals = document.querySelectorAll('.close-modal');
	
	const closeModal = function() {
		gsap.to(modalInner, {autoAlpha: 0, y: '10vw', duration: .5});
		gsap.to(modalInner, {display: 'none'});
		gsap.to(modalMask, {autoAlpha: 0, duration: .4, delay: .2});
		
		const modalVideos = document.querySelectorAll('.modal-video');
		
		modalVideos.forEach(function (modalVideo, index) {
			setTimeout(function() {
				modalVideo.pause();
				modalVideo.currentTime = 0;
			}, 1000);
		});

	}
	
	gsap.set(modalMask, {autoAlpha: 0});
	gsap.set(modalInner, {display: 'none', autoAlpha: 0, y: '10vw'});
	
	modalTriggers.forEach(function (modalTrigger, index) {
		
		modalTrigger.addEventListener("click", (event) => {
			gsap.to(modalMask, {autoAlpha: 1, duration: .5});
			
			let targetModal = modalTrigger.dataset.modal;
			let openModal = document.getElementById(targetModal);
			let playModalVideos = document.getElementById(targetModal).querySelector('.modal-video');
			
			gsap.to(openModal, {display: 'block'});
			gsap.to(openModal, {autoAlpha: 1, y: 0, duration: .5});
			
			if( playModalVideos != null) {
				setTimeout(function() {
					playModalVideos.play();
				}, 700);
			}
			
		});
	});

	closemodals.forEach(function (closemodal, index) {
		closemodal.addEventListener("click", (event) => {
			closeModal();
		});
	});

 
 }, false);