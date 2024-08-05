function applyFitText(selectors, kompressor = 1.0) {
    selectors.forEach(selector => {
      jQuery(selector).fitText(kompressor);
    });
  }
  
  function updateNavbarLogo() {
    const smallLogoUrl = 'https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489761620/logo_mini_pou3vz.png';
    const largeLogoUrl = 'https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489836162/smaller_size_logo_wigzr1.png';
    const logoImg = document.documentElement.clientWidth <= 430 ? smallLogoUrl : largeLogoUrl;
    $(".navbar-brand").html(`<img src='${logoImg}'>`);
  }
  
  function initialize() {
    applyFitText(["#content1-headline1", "#content1-headline2", "#content1-headline3"], 1.0);
    applyFitText(["#content2-1", "#content2-2"], 2.0);
    applyFitText(["#footer1", "#footer2", "#footer3"], 1.2);
  
    updateNavbarLogo();
    window.addEventListener("resize", updateNavbarLogo);
  
    // Example of adding more interactivity
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', event => {
        console.log(`Navigating to ${event.target.textContent}`);
        // Additional navigation handling code can go here
      });
    });
  
    // Handle dynamically loaded content
    const
  