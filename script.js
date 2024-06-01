

/* NOTE:
    --almost all css properties can be used inside gspa function.
    --TO MEANS: yaha se waha, FROM MEANS; waha se yaha.
    */    



// 1************************
gsap.to(".div1", {              
    x:700,  //move from x axis to 700px
    rotation:360, //rotate 360 deg
    duration:2, //takes two seconds to end above effect
    // delay: 3, //waits for 3s then the animations run
    // repeat: 3, //repeat 3 times 
    yoyo:true, //shows reverse effect
    ease: "bounce.out",//"https://gsap.com/docs/v3/Eases/" end behavious of elemenent when animation ends
    // runBackwards:true, //starts from backward
    startAt:{
        x: -100     //starts from -100 from x side
    },
    //opacity:0, //makes element opacity 0 after animation ends
    scale:1.4, //makes element large at end
    backgroundColor:"red", 
})



// 2***********************
/*NOTE:
    --gsap returns a "tween" and any function can be called inside it.
    [--It means any elements style can be applied on "onUpdate", "onComplete", "onStart", "onRepeat": Suppose if you want to apply any css or run javascript when element's animation end, start, repeat you can do it.]
  */


 let btn1Start = document.querySelector(".btn1Start");
 let btn1Pause = document.querySelector(".btn1Pause");


 let div2 = gsap.to(".div2", {
    x:700,  
    rotation:360, 
    duration:20, 
 })    
btn1Start.addEventListener('click', ()=>{
    div2.play()
})
btn1Pause.addEventListener('click', ()=>{
    div2.pause()
})
//==> when click on "btn1Start" then animation starts, vice versa on btn1Pause
// ***************************************


// 3*******************************************
// suppose I have 3 box and i want to move all 3 box in x axis 700px, but one by one:
// it can be done by using timeLine.
let timeLine = gsap.timeline()
timeLine.to("#box1", {
    x:700,
    rotation:360
})
timeLine.to("#box2", {
    x:700,
    rotation:360
})
timeLine.to("#box3", {
    x:700,
    rotation:360
})
