new fullpage('#fullpage', {
	//options here
	sectionsColor : ['#ffba08', '#74c69d','#006d77'],
	autoScrolling:true,
	scrollHorizontally: true,
	navigation: true
});

  function init(){
	const hamburger = document.querySelector(".menu");
	const navOpen = document.querySelector(".nav-open");
	const social = document.querySelectorAll(".social");
	const logo = document.querySelector(".logo a");
	const hlines = document.querySelectorAll(".menu line");
	
	const tl = new TimelineMax( {paused: 'true', reversed: 'true' } );
	tl.to(navOpen, 0.5, {y:0})
	.fromTo(social, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0},'-=0.5')
	.fromTo(logo, 0.2, {color: '#303030'}, {color: '#6b705c'}, '-=1')
	.fromTo(hlines, 0.2, {stroke: '#303030'}, {stroke: '#6b705c'}, '-=1');
	
	
	hamburger.addEventListener("click", () => {
		tl.reversed() ? tl.play() : tl.reverse();
	})
	navOpen.addEventListener("click", () => {
		tl.reversed() ? tl.play() : tl.reverse();
	})

	}
init();