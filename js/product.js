// /////////////////   B U R G E R ////////////////

// const btnBurger = document.querySelector(".header__bottom__btn__burger");
// const items = document.querySelector(".header__bottom__items__links");

// btnBurger.addEventListener("click", () => {
//   items.classList.toggle("show");
// });

////////////////// ========= ///// ======///////

const API_URL = "https://fakestoreapi.com/products";
const notFound = document.querySelector(".not__found");
const loadingProducts = document.querySelector(".product__loading");

async function fetchData(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => createSingleProduct(res))
    .catch((err) => {
      notFound.style.display = "block";
      console.log(err);
    })
    .finally(() => {
      loadingProducts.style.display = "none";
    });
}
fetchData(API_URL);

const singleProduct = document.querySelector(".product__content");

function createSingleProduct(data) {
  singleProduct.innerHTML = `
    <div class="product__left-images">
                        <div>
                            <img src="${data.image}" alt="">

                        </div>
                        <div>
                            <img src="${data.image}" alt="">

                        </div>
                        <div>
                            <img src="${data.image}" alt="">

                        </div>
                        <div>
                            <img src="${data.image}" alt="">

                        </div>
                    </div>
                    <div class="product__hero-img">
                        <div class="product__hero-news">
                            Новинка
                        </div>
                        <div class="product__hero-btns">
                            <img src="../images/heart.svg" alt="">
                            <img src="../images/compare_gray.svg" alt="">
                        </div>
                        <img class="product__hero__img" src="${
                          data.image
                        }" alt="">
                    </div>
                    <div class="product__title">
                        <h3>${data.title}</h3>
                        <div class="product__title__rating">
                            ⭐⭐⭐⭐⭐ <p>(4.9)</p>
                        </div>
                        <h4 class="product__price">${data.price} $</h4>
                        <h5 class="product__credit__month">${(
                          data.price / 12
                        ).toFixed(2)} $  x 12 мес</h5>
                        <div class="product__title__brends">
                            <p class="product__title__brand">Бренд: <a href="#">Apple</a></p>
                        <p class="product__title__model">Модель:_______ Apple Magic </p>
                        </div>
                        <p class="product__title__sale">Наличии:_______ <b>● В наличии</b></p>
                        <div class="product__title__btn-group">
                            <button class="green__btn">
                                <img src="../images/cart-white.svg" alt="cart--btn">
                                <p>Добавить в корзину</p>
                            </button>
                            <button class="blue__btn">Купить сейчас</button>
                        </div>
                        <p class="product__heading__title">Проголосуйте:</p>
                        <div class="product__like__title">
                            <span>
                                <svg width="32px" hegiht="32px" id="recommended" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.39844 12.5984C2.39844 12.3621 2.445 12.128 2.53545 11.9096C2.62591 11.6912 2.7585 11.4928 2.92565 11.3256C3.09279 11.1585 3.29122 11.0259 3.50961 10.9355C3.72799 10.845 3.96206 10.7984 4.19844 10.7984C4.43482 10.7984 4.66888 10.845 4.88727 10.9355C5.10565 11.0259 5.30408 11.1585 5.47123 11.3256C5.63838 11.4928 5.77096 11.6912 5.86142 11.9096C5.95188 12.128 5.99844 12.3621 5.99844 12.5984V19.7984C5.99844 20.2758 5.8088 20.7337 5.47123 21.0712C5.13366 21.4088 4.67583 21.5984 4.19844 21.5984C3.72105 21.5984 3.26321 21.4088 2.92565 21.0712C2.58808 20.7337 2.39844 20.2758 2.39844 19.7984V12.5984ZM7.19844 12.398V18.914C7.19823 19.36 7.3223 19.7973 7.55673 20.1767C7.79116 20.5561 8.12668 20.8627 8.52564 21.062L8.58564 21.092C9.2515 21.4248 9.98564 21.5982 10.73 21.5984H17.2292C17.7843 21.5987 18.3222 21.4065 18.7515 21.0547C19.1808 20.7028 19.4748 20.2131 19.5836 19.6688L21.0236 12.4688C21.0932 12.1207 21.0847 11.7614 20.9987 11.417C20.9127 11.0725 20.7513 10.7514 20.5262 10.4768C20.3011 10.2023 20.0179 9.98108 19.697 9.82918C19.3761 9.67728 19.0255 9.59847 18.6704 9.59844H14.3984V4.79844C14.3984 4.16192 14.1456 3.55147 13.6955 3.10138C13.2454 2.65129 12.635 2.39844 11.9984 2.39844C11.6802 2.39844 11.375 2.52487 11.1499 2.74991C10.9249 2.97495 10.7984 3.28018 10.7984 3.59844V4.39884C10.7984 5.43741 10.4616 6.44798 9.83844 7.27884L8.15844 9.51804C7.53529 10.3489 7.19844 11.3595 7.19844 12.398Z" fill="currentColor"></path>
                                </svg>
                                Я рекомендую
                            </span>
                            <p>0</p>
                        </div>
                    </div>
                    <div class="product__credit__cart">
                        <h2>Рассрочка платежа</h2>
                        <div class="product__credit__month">
                            <button>3 мес.</button>
                            <button>6 мес.</button>
                            <button>12 мес.</button>
                        </div>
                        <div class="product__credit__zakaz">
                            <p>Рассрочка от партнера UzumNasiya <img src="../images/info_installment.svg" alt=""></p>
                            <div>
                                <img src="../images/uzumnasiya.svg" alt="">
                                <h5> ${(data.price / 12).toFixed(2)} $ </h5>
                            </div>
                            <button>Заказать в рассрочку</button>
                        </div>
                        <div class="product__credit__asaxiy">
                            <p>Рассрочка от Asaxiy <img src="../images/info_installment.svg" alt=""></p>
                            <div>
                                <img src="../images/asaxiy.svg" alt="asaxiy">
                                <h5> ${(data.price / 12).toFixed(2)} $ </h5>
                            </div>
                        </div>
                    </div>
    `;
}
