"use strict";

//---------------Burger menu activation-------------------
const navMenu = document.querySelector("nav");
const navList = document.querySelector(".nav--list");
const body = document.querySelector("body");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navList.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav--link")) {
    navMenu.classList.toggle("active");
  }
});

body.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav--list") ||
    e.target.classList.contains("burger") ||
    e.target.classList.contains("burger--span")
  )
    return;
  else {
    navMenu.classList.remove("active");
  }
});

//-----------------Not active buttons-----------------------------------
document.querySelectorAll(".button--not--active").forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    alert("This button is currently not active");
  })
);

//-----------------Modal activation------------------------------
const modalWindow = document.querySelector(".modal");
const sendButton = document.querySelector("#sendButton");
const closeModalBtn = document.querySelector(".close--modal");
const overlay = document.querySelector(".overlay");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const errorText = document.querySelector(".error--text");
const customerName = document.querySelector("#customerName");

const closeModalWindow = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};
const showModalWindow = function (e) {
  e.preventDefault();
  console.log(inputName.value);
  if (
    inputName.value === "" ||
    inputEmail.value === "" ||
    !inputEmail.value.includes("@")
  ) {
    errorText.classList.remove("faded");
  } else {
    customerName.textContent = inputName.value;
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
    inputName.value = "";
    inputEmail.value = "";
    errorText.classList.add("faded");
  }
};

sendButton.addEventListener("click", showModalWindow);
closeModalBtn.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);

//---------------------Slider-----------------------
const slides = document.querySelectorAll(".slide");
const rightBtn = document.querySelector("#btnRight");
const leftBtn = document.querySelector("#btnLeft");
const slidesCount = document.querySelector("#slidesCount");

let curSlide = 0;
const maxSlide = slides.length - 1;

slidesCount.textContent = `${curSlide + 1} / ${maxSlide + 1}`;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${140 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide < maxSlide) {
    curSlide++;
    goToSlide(curSlide);
  } else {
    curSlide = 0;
    goToSlide(curSlide);
  }
  slidesCount.textContent = `${curSlide + 1} / ${maxSlide + 1}`;
};

const prevSlide = function () {
  if (curSlide > 0) {
    curSlide--;
    goToSlide(curSlide);
  } else {
    curSlide = maxSlide;
    goToSlide(curSlide);
  }
  slidesCount.textContent = `${curSlide + 1} / ${maxSlide + 1}`;
};

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

goToSlide(0);
