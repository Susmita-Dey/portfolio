import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    // Ensure they are visible before animating (in case they were hidden by a previous run)
    [bannerOne, bannerTwo, bannerThree, bannerFour].forEach(b => {
      if (b) b.style.display = 'block';
    });

    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        // Ensure they don't block clicks if they get stuck
        [bannerOne, bannerTwo, bannerThree, bannerFour].forEach(b => {
          if (b) b.style.display = 'none';
        });
      }
    });
    
    return tl;
  }
  return null;
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    // Re-show them before animating
    [bannerOne, bannerTwo, bannerThree, bannerFour].forEach(b => {
      if (b) b.style.display = 'block';
    });

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
