document.addEventListener('DOMContentLoaded', () => {
    const backColor = document.querySelector('#back-color')
    let mainHeight = innerHeight - 80;
    let totalScrollHeight = mainHeight * 5;
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

    let adjusted = false;
    main.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = main.scrollTop;
        if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(lastKnownScrollPosition);
            ticking = false;
          });
      
          ticking = true;
        }
        console.log(adjusted)
        let adjustedSensitivity = 80
        if (!adjusted) {
            if (lastKnownScrollPosition % mainHeight < adjustedSensitivity) {
                main.scroll(0, lastKnownScrollPosition - (lastKnownScrollPosition % mainHeight))
                adjusted = true
            } else if (lastKnownScrollPosition % mainHeight > mainHeight - adjustedSensitivity) {
                console.log('am close')
                main.scroll(0, lastKnownScrollPosition + mainHeight - (lastKnownScrollPosition % mainHeight))
                adjusted = true
            }
        } else {
            if (lastKnownScrollPosition % mainHeight < adjustedSensitivity) {
            } else if (lastKnownScrollPosition % mainHeight > mainHeight - adjustedSensitivity) {
            } else {
                adjusted = false
            }
        }
      });
})