const navbar = document.getElementById("navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("bg-light");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
    } else {
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("bg-light");
    }
    // setup back to top link
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

const scrollLinks = document.querySelectorAll(".nav-link");
let linksContainer = document.getElementById("navmenu");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(linksContainer.classList);
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.classList.remove("show");
  });
});