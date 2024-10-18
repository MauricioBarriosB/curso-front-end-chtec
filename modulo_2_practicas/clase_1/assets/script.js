window.addEventListener("load", (event) => {

  const button = document.querySelector(".btn-mobile");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const topnav = document.querySelector(".topnav");
    
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "topnav";
    }
  });

});