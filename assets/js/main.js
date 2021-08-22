/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.add('active');
        } else {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.remove('active');
        }
    });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.home__scroll', { delay: 100 });
sr.reveal('.home__img', { origin: 'right', delay: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 200 });
sr.reveal('.about__subtitle', { delay: 100 });
sr.reveal('.about__profession', { delay: 200 });
sr.reveal('.about__text', { delay: 200 });
sr.reveal('.about__social-icon', { delay: 300, interval: 200 });

/*SCROLL OELE*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 });
sr.reveal('.skills__img', { delay: 200 });

/*SCROLL DIY*/
sr.reveal('.diy__subtitle', {});
sr.reveal('.diy__text', { interval: 200 });
sr.reveal('.img-body', { interval: 200 });
sr.reveal('.img-body2', { interval: 200 });

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {});
sr.reveal('.contact__text', { interval: 200 });
sr.reveal('.contact__input', { delay: 200 });
sr.reveal('.contact__button', { delay: 300 });

/*SCROLL CART*/
sr.reveal('.cart-section', {});

/*===== SLIDES =====*/
var slider_img = document.querySelector('.slider-img');
var images = [
    '../img/shower 1.png',
    '../img/shower 2.png',
    '../img/shower 3.png',
    '../img/shower 4.png',
    '../img/shower 5.png',
    '../img/face1.png',
    '../img/body1.png',
    '../img/body2.png',
    '../img/body3.png'
];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}
function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}
function setImg() {
    return slider_img.setAttribute('src', 'images/' + images[i]);
}

/*===== SLIDES 2 =====*/
var slider_pics = document.querySelector('.slider-pics');
var pics = [
    '../img/1.png',
    '../img/2.png',
    '../img/3.png',
    '../img/4.png',
    '../img/5.png',
    '../img/6.png',
    '../img/7.png',
    '../img/8.png',
    '../img/9.png',
    '../img/10.png',
    '../img/11.png',
    '../img/12.png',
    '../img/13.png',
    '../img/14.png',
    '../img/15.png',
    '../img/16.png'
];
var i = 0;

function prevPics() {
    if (i <= 0) i = pics.length;
    i--;
    return setPic();
}
function nextPics() {
    if (i >= pics.length - 1) i = -1;
    i++;
    return setPic();
}
function setPic() {
    return slider_pics.setAttribute('src', 'pics/' + pics[i]);
}

/*===== SLIDES 3 =====*/
var slider_recs = document.querySelector('.slider-recs');
var recs = [
    '../img/schoko 1.png',
    '../img/schoko 2.png',
    '../img/gummi1.png',
    '../img/gummi2.png'
];
var i = 0;

function prevRecs() {
    if (i <= 0) i = recs.length;
    i--;
    return setRec();
}
function nextRecs() {
    if (i >= recs.length - 1) i = -1;
    i++;
    return setRec();
}
function setRec() {
    return slider_recs.setAttribute('src', 'recs/' + recs[i]);
}

/*===== SLIDES 4 =====*/
var slider_fires = document.querySelector('.slider-fires');
var fires = ['../img/feuer 1.png', '../img/feuer 2.png', '../img/feuer 3.png'];
var i = 0;

function prevFires() {
    if (i <= 0) i = fires.length;
    i--;
    return setFire();
}
function nextFires() {
    if (i >= fires.length - 1) i = -1;
    i++;
    return setFire();
}
function setFire() {
    return slider_fires.setAttribute('src', 'fires/' + fires[i]);
}

/*===== SLIDES 5 =====*/
var slider_rlxs = document.querySelector('.slider-rlxs');
var rlxs = [
    '../img/draw.png',
    '../img/draw1.png',
    '../img/draw2.png',
    '../img/draw3.png',
    '../img/draw4.png',
    '../img/draw5.png',
    '../img/draw6.png'
];
var i = 0;

function prevRlxs() {
    if (i <= 0) i = rlxs.length;
    i--;
    return setRlx();
}
function nextRlxs() {
    if (i >= rlxs.length - 1) i = -1;
    i++;
    return setRlx();
}
function setRlx() {
    return slider_rlxs.setAttribute('src', 'rlxs/' + rlxs[i]);
}

/*===== CART =====*/
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Kapselhalter 1',
        tag: 'kapselhalter1',
        price: 19.9,
        inCart: 0
    },
    {
        name: 'Kapselhalter 2',
        tag: 'kapselhalter2',
        price: 19.9,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (action) {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log('action running');
    } else if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    // let productNumbers = localStorage.getItem('cartNumbers');
    // productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        let currentProduct = product.tag;

        if (cartItems[currentProduct] == undefined) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            };
        }
        cartItems[currentProduct].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
    let cart = localStorage.getItem('totalCost');

    if (action) {
        cart = parseInt(cart);

        localStorage.setItem('totalCost', cart - product.price);
    } else if (cart != null) {
        cart = parseInt(cart);
        localStorage.setItem('totalCost', cart + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem('totalCost');
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map((item, index) => {
            productContainer.innerHTML += `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./img/${
                item.tag
            }.jpg" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">${item.price}€</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">${item.inCart * item.price}€</div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Total</h4>
                <h4 class="basketTotal">${cart}€</h4>
            </div>`;

        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity =
                decreaseButtons[i].parentElement.querySelector(
                    'span'
                ).textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[
                i
            ].parentElement.previousElementSibling.previousElementSibling
                .querySelector('span')
                .textContent.toLocaleLowerCase()
                .replace(/ /g, '')
                .trim();
            console.log(currentProduct);

            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], 'decrease');
                totalCost(cartItems[currentProduct], 'decrease');
                localStorage.setItem(
                    'productsInCart',
                    JSON.stringify(cartItems)
                );
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity =
                increaseButtons[i].parentElement.querySelector(
                    'span'
                ).textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[
                i
            ].parentElement.previousElementSibling.previousElementSibling
                .querySelector('span')
                .textContent.toLocaleLowerCase()
                .replace(/ /g, '')
                .trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem('totalCost');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent
                .toLocaleLowerCase()
                .replace(/ /g, '')
                .trim();

            localStorage.setItem(
                'cartNumbers',
                productNumbers - cartItems[productName].inCart
            );
            localStorage.setItem(
                'totalCost',
                cartCost -
                    cartItems[productName].price * cartItems[productName].inCart
            );

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        });
    }
}

onLoadCartNumbers();
displayCart();
