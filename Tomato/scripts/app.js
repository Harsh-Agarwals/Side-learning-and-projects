let navbar = document.getElementById("navbar");
let menus = document.querySelectorAll(".menu-list");
let hamburger = document.querySelector(".hamburger");
let mainMenu = document.querySelector(".main-menu");
let subMenu = document.querySelectorAll(".main-menu .submenu");

function removeVerticalMenu() {
    if (window.innerWidth >= 950) {
        mainMenu.classList.remove("vertical-menu");
    } else {
        menus.forEach(function (item) {
            item.removeEventListener("click", toggleMenu);
            item.addEventListener("click", toggleMenu);
        });
    }
}

function toggleMenu() {
    const submenu = this.querySelector(".submenu");
    if (submenu) {
        submenu.style.display =
            submenu.style.display === "block" ? "none" : "block";
    }
    subMenu.forEach(function (othersubmenus) {
        if (othersubmenus !== submenu) {
            othersubmenus.style.display = "none";
        }
    });
}

removeVerticalMenu();

window.addEventListener("resize", removeVerticalMenu);

hamburger.addEventListener("click", () => {
    mainMenu.classList.toggle("vertical-menu");
});

document.body.addEventListener("click", (event) => {
    if (!mainMenu.contains(event.target) && !hamburger.contains(event.target)) {
        mainMenu.classList.remove("vertical-menu");
    }
});

// CODE FOR CHANGING COLOR OF NAVBAR ON SCROLL (Not using because of design issues)

// document.addEventListener("scroll", () => {
//     navbar.classList.add("scrolled");

//     if (window.scrollY === 0 && navbar.classList.contains("scrolled")) {
//         let nav = document.getElementsByClassName("nav");
//         navbar.classList.remove("scrolled");
//     }
// });

// CAROUSEL CONTROLS
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousell");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// CAROUSEL CONTROLS
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2((slideIndex2 += n));
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("carousell2");
    if (n > slides2.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides2.length;
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2 - 1].style.display = "block";
}

// Menu List control
let menuList = document.querySelectorAll(".menu-menu");

menuList.forEach((table) => {
    table.addEventListener("click", () => {
        let menuClasses = document.querySelectorAll(".menu-table");
        let menuMenu = document.querySelectorAll(".menu-menu");
        for (let i = 0; i < menuClasses.length; i++) {
            if (!menuClasses[i].classList.contains("hidden")) {
                menuClasses[i].classList.add("hidden");
            }
            if (menuClasses[i].classList.contains("visible")) {
                menuClasses[i].classList.remove("visible");
            }
            if (menuMenu[i].classList.contains("menu-bg")) {
                menuMenu[i].classList.remove("menu-bg");
            }
        }
        let menu = table.textContent.trim().toLowerCase();
        let mMenu = document.querySelector(".m-" + String(menu));
        mMenu.classList.add("menu-bg");
        let menuId = document.getElementById("menu-" + String(menu));
        menuId.classList.remove("hidden");
        menuId.classList.add("visible");
    });
});

// Function to handle the intersection changes
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // The observed element is currently in the viewport
            const visibleCarouselClassList = entry.target.classList;
            let carouselNum =
                visibleCarouselClassList[1][
                    visibleCarouselClassList[1].length - 1
                ];
            let dots = document.querySelectorAll(".dot");
            for (let k = 0; k < dots.length; k++) {
                if (dots[k].classList.contains("checked")) {
                    dots[k].classList.remove("checked");
                }
            }
            let newDot = document.querySelector(".dot-" + String(carouselNum));
            if (!newDot.classList.contains("checked")) {
                newDot.classList.add("checked");
            }
        }
    });
}

// Options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the observed element is visible
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Get all carousel items
const carouselItems = document.querySelectorAll(".review");

// Observe each carousel item
carouselItems.forEach((item) => {
    observer.observe(item);
});

// Handling the cart calculations and updates
let plus = document.querySelectorAll(".fa-plus");
let minus = document.querySelectorAll(".fa-minus");
let xmark = document.querySelectorAll(".fa-xmark");
let totalCartItem = Number(document.querySelectorAll(".cart-item").length) - 1;
let cartShow = document.querySelector(".cart-num");
let totalAmount = document.querySelector(".amount");

function updateTotalCartItem(totalCartItem) {
    cartShow.textContent = totalCartItem;
}
updateTotalCartItem(totalCartItem);

function updatePrice() {
    let amount = 0;
    let cartItems = document.querySelectorAll(".cartitem");
    for (let i = 0; i < cartItems.length; i++) {
        let baseAmt = Number(
            cartItems[i].querySelector(".itemprice").textContent
        );
        let dishCount = Number(
            cartItems[i].querySelector(".quantityfood").textContent
        );
        let dishAmount = baseAmt * dishCount;
        amount += dishAmount;
    }
    totalAmount.textContent = amount;
}

updatePrice();

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        let qty = Number(
            plus[i].parentElement.querySelector(".quantityfood").textContent
        );
        qty += 1;
        plus[i].parentElement.querySelector(".quantityfood").textContent = qty;
        updatePrice();
    });
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        let qty = Number(
            minus[i].parentElement.querySelector(".quantityfood").textContent
        );
        qty -= 1;
        if (qty >= 1) {
            minus[i].parentElement.querySelector(".quantityfood").textContent =
                qty;
            updatePrice();
        } else {
            minus[i].parentElement.querySelector(
                ".quantityfood"
            ).textContent = 0;
            updatePrice();
        }
    });
}

for (let i = 0; i < xmark.length; i++) {
    xmark[i].addEventListener("click", () => {
        let parentContainer =
            xmark[i].parentElement.parentElement.parentElement.parentElement;
        parentContainer.remove();
        totalCartItem -= 1;
        updateTotalCartItem(totalCartItem);
        updatePrice();
    });
}
