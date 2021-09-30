const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});



function init(){

	const hamburger = document.querySelector(".menu");
	const navOpen = document.querySelector(".nav-open");
	const social = document.querySelectorAll(".social");
	const logo = document.querySelector(".logo");
	const hlines = document.querySelectorAll(".menu line");
	
	const tl = new TimelineMax( {paused: 'true', reversed: 'true' } );
	tl.to(navOpen, 0.5, {y:0})
	// .fromTo(contact, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
	.fromTo(social, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0},'-=0.5')
	.fromTo(logo, 0.2, {color: '#303030'}, {color: '#ffffff'}, '-=1')
	.fromTo(hlines, 0.2, {stroke: '#303030'}, {stroke: '#ffffff'}, '-=1');
	
	
	hamburger.addEventListener("click", () => {
		tl.reversed() ? tl.play() : tl.reverse();
	})
	navOpen.addEventListener("click", () => {
		tl.reversed() ? tl.play() : tl.reverse();
	})

	}
init();
	



function animateFrom(elem, direction) {
	direction = direction || 1;
	var x = 0,
		y = direction * 100;
	if(elem.classList.contains("gs_reveal_fromLeft")) {
	  x = -100;
	  y = 0;
	} else if (elem.classList.contains("gs_reveal_fromRight")) {
	  x = 100;
	  y = 0;
	}
	elem.style.transform = "translate(" + x + "px, " + y + "px)";
	elem.style.opacity = "0";
	gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
	  duration: 1.25, 
	  x: 0,
	  y: 0, 
	  autoAlpha: 1, 
	  ease: "expo", 
	  overwrite: "auto"
	});
  }
  
  function hide(elem) {
	gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
	gsap.registerPlugin(ScrollTrigger);
	
	gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
	  hide(elem); // assure that the element is hidden when scrolled into view
	  
	  ScrollTrigger.create({
		trigger: elem,
		onEnter: function() { animateFrom(elem) }, 
		onEnterBack: function() { animateFrom(elem, -1) },
		onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
	  });
	});
  });
  