document.addEventListener('DOMContentLoaded', () => {
    const backColor = document.querySelector('#back-color')
    let mainHeight = innerHeight - 80;
    let totalScrollHeight = 3000;
    let colors = ['var(--yellow)', 'var(--magenta)', 'var(--blue)', 'var(--lime)']
    let backColorGradient = backColor.style.backgroundImage;
    function doSomething(scrollPos) {
        //main.scrollTo(mainHeight)
        let opacity = Math.abs((scrollPos % mainHeight) - (mainHeight / 2)) / (mainHeight / 2)
        backColor.style.opacity = `${opacity}`
        backColor.style.setProperty('--back-color', colors[parseInt((scrollPos + (mainHeight / 2)) / mainHeight)])
        backColor.style.setProperty('--back-angle', `${90 * (scrollPos + (totalScrollHeight / 2)) / totalScrollHeight}deg`)
        backColor.style.backgroundImage = backColorGradient
    }
    let [lastKnownScrollPosition, ticking] = [0, false]
    const main = document.querySelector('main')
    main.addEventListener('scroll', function(e) {
        if (lastKnownScrollPosition % mainHeight != 0 && main.scrollTop % mainHeight != 0) {
            if (parseInt(lastKnownScrollPosition / mainHeight) != parseInt(main.scrollTop / mainHeight)) {
                let scrollTo
                if (main.scrollTop > lastKnownScrollPosition) {
                    scrollTo = mainHeight * parseInt(main.scrollTop / mainHeight)
                } else {
                    scrollTo = mainHeight * parseInt(lastKnownScrollPosition / mainHeight)
                }
                main.scroll(0, scrollTo)
            }
        }
        lastKnownScrollPosition = main.scrollTop;
        if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(lastKnownScrollPosition);
            ticking = false;
          });
      
          ticking = true;
        }
      });
})