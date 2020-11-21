

gsap.from('.menu-item', { duration: 1, opacity: 0, delay:1  })
gsap.from('.menu-item-2', { duration: 1, opacity: 0, delay:1.2  })
gsap.from('.menu-item-3', { duration: 1, opacity: 0, delay:1.4  })
gsap.from('.text-slide', { duration: 2, opacity: 0, ease: "slow(0.5, 0.8, true)"})
gsap.from('.image-slider', { duration: 2.1, opacity: 0, x: '-100%',  ease: "power4.inOut", scale: 0.9})


/* ------Burrowing Owl Sequence------  */
gsap.from('.rudder', { duration: 1, opacity: 0, delay:1.4  })

gsap.set(".menu", { yPercent: 200});

gsap.to(".menu", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".site-content",
    // markers:true,
      scrub: 1
    }, 
  });

gsap.set(".text-slide", { yPercent: 30});

gsap.to(".text-slide", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".site-content",
    // markers:true,
      scrub: 1
    }, 
  });

  gsap.set(".divider-color", { yPercent: 30});

  gsap.to(".divider-color", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".content-images",
      // markers:true,
        scrub: 1
      }, 
    });

 
gsap.set(".getintouch-title", { xPercent: 100, });
gsap.to(".getintouch-title", {
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".experience",
      scrub: 1,
    }, 
  });

gsap.set(".rudder", { yPercent: 25, rotation:-90, });
gsap.set(".image-slider", { yPercent: -20});
gsap.set(".content-images", { yPercent: 5});

gsap.to(".rudder", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
    scrub: 1,
  }, 
});

gsap.to(".image-slider", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
    scrub: 1
  }, 
});


gsap.to(".content-images", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".content-images",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});



ScrollTrigger.addEventListener("refresh", setupSplits);
//ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
setupSplits();