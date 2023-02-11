//Selecciono al elemento el cual le dare clic
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
productDetailCloseIcon = document.querySelector(".product-detail-close");

//Utilizo su metodo addEventListener para ejecutar una funcion cuando se de clic al elemento
menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  // console.log("Click");
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) {
    //Si esta abierto agregar la clase inactive al aside
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  //Ejecuta la funcion classList.toggle que quita o pone la clase 'inactive' dependiendo si la tiene o no
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  //Esta abierto el menu mobile? / ! -> niego, la clase sera active o menu abierto
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    //Si esta abierto agregar la clase inactive al mobile-menu para cerrarlo
    mobileMenu.classList.add("inactive");
  }

  //Preguntare a productDetailCont si tiene la clase inactive.(si la tiene es porque esta cerrado)
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    //Si no esta cerrado! entonces vamos a cerrarlo agregando inactive
    productDetailContainer.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

//Remuevo la clase inactive de mi productdetailAside para que se agrande el producto al dar clic
function openProductDetailAside() {
  //Siempre que queramos abrir(zoom) un nuevo productdetailContainer le ponga la clase inactive al shoppingcart
  shoppingCartContainer.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}
//Agrego la clase inactive para cerrar el zoom del productdetailAside
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

//Este array vacio se le agregara un objeto(productos) con .push
const productList = [];
productList.push(
  {
    name: "Bike Trek",
    price: 120,
    image:
      "https://www.sanferbike.com/videostv/wp-content/uploads/TREK-Session-1-600X400.jpg",
  },
  {
    name: "PS5",
    price: 700,
    image:
      "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/01/buscas-ps5-buen-precio-oportunidad-stock-dos-juegos-exclusivos-sobreprecio-2926200.jpg?tf=3840x",
  },
  {
    name: "Tv Samsung 50",
    price: 500,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/co/lh50beahlgkxzl/gallery/co-smart-signage-bea-h-b2c-lh50beahlgkxzl-532731069?$650_519_PNG$",
  },
  {
    name: "Bike",
    price: 100,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "PS5",
    price: 700,
    image:
      "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/01/buscas-ps5-buen-precio-oportunidad-stock-dos-juegos-exclusivos-sobreprecio-2926200.jpg?tf=3840x",
  },
  {
    name: "Bike",
    price: 100,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Tv Samsung 50",
    price: 500,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/co/lh50beahlgkxzl/gallery/co-smart-signage-bea-h-b2c-lh50beahlgkxzl-532731069?$650_519_PNG$",
  }
);

//De esta forma creamos la maquetacion(html) desde javascript, de cada uno de los productos del array(productList)
function renderProducts(array) {
  for (product of productList) {
    // console.log(product.name);
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    //product = {name, price, image} -> product.image
    productImg.setAttribute("src", product.image);
    //con esta propiedad addEvLs escucho el evento click y ejecuto esta funcion cuando suceda
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImageCart = document.createElement("img");
    productImageCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImageCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
