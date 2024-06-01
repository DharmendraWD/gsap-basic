gsap.to("#box3", {
    scrollTrigger: {
        trigger: "#box3", 
        toggleActions:"play pause resume reset", //onEnter, onLeave, onEnterBack, onLeaveBack
        scrub:3,
    }, //when box 3 comes in viewport then only apply animation.
    x:700,
    rotation:350,
    duration:3,

})