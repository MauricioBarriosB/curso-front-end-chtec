window.addEventListener("load", (event) => {

  const button = document.querySelector(".topnav__mobile");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const topnav = document.querySelector(".topnav");
    
    if (topnav.className === "topnav") {
      topnav.className += " topnav__responsive";
    } else {
      topnav.className = "topnav";
    }
  });

});