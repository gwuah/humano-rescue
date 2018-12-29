(function(){

  // feather.replace();
  
  const navItems = Array.from(document.querySelectorAll(".nav-item"));

  navItems.forEach(element => {

    element.addEventListener("mouseover", (e) => {
      const link = element.querySelector(".nav-link");
      link.classList.toggle('white__text')
    });

    element.addEventListener("mouseout", (e) => {
      const link = element.querySelector(".nav-link");
      link.classList.toggle('white__text')
    });

  });
})()