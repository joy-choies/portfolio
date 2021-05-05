
function horScroll (){

  if ($(window).width() > 1239) {

    console.log(1024)
      
    // Stuff that needs to be done first
    const bootstrap = async () => {
      // Load CSSKeywordValue Polyfill
      if (typeof CSSKeywordValue == "undefined") {
        polyfill(window);
      }

      // Load ScrollTimeline
      if (typeof ScrollTimeline == "undefined") {
        const polyfill = () =>
          new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.async = true;
            script.src =
              "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });

        await polyfill().catch((e) => false);
      }

      // Make sure we have everything
      if (
        typeof Animation == "undefined" ||
        typeof CSSKeywordValue == "undefined" ||
        typeof KeyframeEffect == "undefined" ||
        typeof ScrollTimeline == "undefined"
      ) {
        return false;
      }

      return true;
    };

    // Our Actual Demo Code
    const hookAnimations = () => {
      const $project = document.querySelector("#project");
      const $slidingContent = document.querySelector(".project_item");

      const sectionHeightInVh = 500; //

      // Adjust wrapper
      // - Change height so that we have room to scroll in
      // - Add fix to make position: sticky work
      $project.style.height = `${sectionHeightInVh}vh`;
      $project.style.overflow = `visible`;

      // Adjust content
      // - Make it stick to the top
      $slidingContent.style.position = "sticky";
      $slidingContent.style.top = 0;

      new Animation(
        new KeyframeEffect(
          $slidingContent,
          {
            transform: ["translateX(0)", `translateX(calc(-100% + 100vw))`]
          },
          { duration: 1, fill: "both" }
        ),
        new ScrollTimeline({
          scrollSource: document.documentElement,
          timeRange: 1,
          fill: "both",
          scrollOffsets: [
            { target: $project, edge: "start", threshold: 1 },
            { target: $project, edge: "end", threshold: 1 }
          ]
        })
      ).play();
    };

    // Go!
    const go = async () => {
      const bootstrapped = await bootstrap();

      if (!bootstrapped) {
        document.querySelector(".warning").style.display = "block";
        return;
      }

      hookAnimations();
    };

    go();


  }else{
  console.log(940)
}

}

//반응형 실

horScroll();

