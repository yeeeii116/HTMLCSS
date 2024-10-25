$(function(){
    const showNav = gsap.from('header', { 
        yPercent: -100,
        paused: true,
        duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
        start: "top top",
        end: "max",
        // markers: false,
        onUpdate: (self) => {
            self.direction === -1 ? showNav.play() : showNav.reverse()
        }
    });
    const showBg = gsap.from('.h_wp', { 
        yPercent: -100,
        paused: true,
        duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
        start: "top top",
        end: "max",
        // markers: true,
        onUpdate: (self) => {
            self.direction === -1 ? showBg.play() : showBg.reverse()
        }
    });

   
});