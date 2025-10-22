const tl = gsap.timeline();
tl.from(".hero img",{
    y:100
})
tl.from("#hero-section-1 nav h3",{
    duration:1,
    y:100
})
tl.from(".hero h1",{
    scale:0
})
tl.from(".hero-left-part h4",{
    scale:0
})
tl.from(".hero-left-part p",{
    y:100
})

gsap.from("#hero-section-2 span",{
    scale:0,
    scrollTrigger:{
        trigger:"#hero-section-2 span",
        scroller:"body",
        start:"top 60%"
    }
})
gsap.from("#hero-section-2 h2",{
    x:-500,
    duration:1,
    scrollTrigger:"hero-section-2 span"
})
