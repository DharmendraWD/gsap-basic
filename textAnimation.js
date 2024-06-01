gsap.registerPlugin(TextPlugin)

// text 1
gsap.to(".heading1", {
    duration:2, 
    color:"red", 
    dalay:2, 
})

// text 2
gsap.to(".heading2", {
    duration:4, 
    color:'green', 
    delay:3, 
    text:"Then I will show you"
})

// text 3
gsap.to("#span", {
    duration:4, 
    color:'green', 
    delay:1, 
    text:"And I am from Sarlahi", 
    repeat:true,
    yoyo:true,
    // ease: "bounce.out",
})
