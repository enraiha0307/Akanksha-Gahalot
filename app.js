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



// function init(){


//     const hamburger = document.querySelector(".menu");
//     const navOpen = document.querySelector(".nav-open");
//     // const contact = document.querySelectorAll(".contact h3,p ");
//     const social = document.querySelectorAll(".social");
//     const logo = document.querySelector(".logo");
//     const hlines = document.querySelectorAll(".menu line");
//     const navLinks = document.querySelectorAll(".nav-links  a ");
    
//     const tl = new TimelineMax( {paused: 'true', reversed: 'true' } );
//     tl.to(navOpen, 0.5, {y:0})
//     // .fromTo(contact, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
//     .fromTo(social, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0},'-=0.5')
//     .fromTo(logo, 0.2, {color: '#303030'}, {color: '#ffffff'}, '-=1')
//     .fromTo(hlines, 0.2, {stroke: '#303030', fill:"#303030"}, {stroke: 'white', fill:"white"}, '-=1');
    
    
//     hamburger.addEventListener("click", () => {
//         tl.reversed() ? tl.play() : tl.reverse();
//     });

//     navLinks.forEach((navLink)=>{

//     navLink.addEventListener("click", () => {
//         tl.reverse();
//     }
//     )});
    

//     }
//     init();

// var myTween;
// function onMouseMove(event) {
//   if(myTween)
//     myTween.kill();
  
//   mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
//   mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;
//   myTween = gsap.to(particles.rotation, {duration: 0.1, x: mouseY*-1, y: mouseX});
//   //particles.rotation.x = mouseY*-1;
//   //particles.rotation.y = mouseX;
// }
// animate();

// Scaling animation
// var animProps = {scale: 1, xRot: 0, yRot: 0};
// gsap.to(animProps, {duration: 10, scale: 1.2, repeat: -1, yoyo: true, ease: "sine", onUpdate: function() {
//   renderingParent.scale.set(animProps.scale,animProps.scale,animProps.scale);
// }});

// gsap.to(animProps, {duration: 120, xRot: Math.PI * 2, yRot: Math.PI * 4, repeat: -1, yoyo: true, ease: "none", onUpdate: function() {
//   renderingParent.rotation.set(animProps.xRot,animProps.yRot,0);
// }});


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
  