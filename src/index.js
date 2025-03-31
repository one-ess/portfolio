import "./js/utils/dynamicAdapt";

const burger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const accordionsWrapper = document.querySelectorAll(".projects__info");
const accordions = document.querySelectorAll(".projects__accordion");
const tabsWrapper = document.querySelector(".projects__tabs-wrapper");

const mediaQuery = window.matchMedia("(max-width: 992px)");

const initAccordion = (e) => {
  if (e.matches) {
    accordionsWrapper.forEach((accordionWrapper) => {
      accordionWrapper.classList.add("projects__info_accordion");
    });
    accordions.forEach((accordion) => {
      accordion.classList.add("projects__accordion_hidden");
    });
  } else {
    accordionsWrapper.forEach((accordionWrapper) => {
      accordionWrapper.classList.remove("projects__info_accordion");
      accordionWrapper.querySelector(".projects__info-title").classList.remove("projects__info-title_active");
    });
    accordions.forEach((accordion) => {
      accordion.classList.remove("projects__accordion_hidden", "projects__accordion_show");
      accordion.style.maxHeight = null;
    });
  }
};

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("header__burger_active");
  headerMenu.classList.toggle("header__menu_active");
});

tabsWrapper.addEventListener("click", (e) => {
  const currentTab = e.target;
  const tabs = tabsWrapper.querySelectorAll(".projects__tab");
  const tabsContent = tabsWrapper.querySelectorAll(".projects__tab-content");

  if (currentTab.classList.contains("projects__tab")) {
    tabs.forEach((tab) => {
      if (tab === currentTab) {
        tab.classList.add("projects__tab_active");
      } else {
        tab.classList.remove("projects__tab_active");
      }
    });
    tabsContent.forEach((tabContent) => {
      if (tabContent.dataset.tabContent === currentTab.dataset.tabContent) {
        tabContent.classList.add("projects__tab-content_active");
      } else {
        tabContent.classList.remove("projects__tab-content_active");
      }
    });
  }
});

accordionsWrapper.forEach((accordionWrapper) => {
  accordionWrapper.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("projects__info_accordion")) {
      e.currentTarget.querySelector(".projects__accordion").classList.toggle("projects__accordion_show");
      e.currentTarget.querySelector(".projects__info-title").classList.toggle("projects__info-title_active");
      if (e.currentTarget.querySelector(".projects__accordion").classList.contains("projects__accordion_show")) {
        e.currentTarget.querySelector(".projects__accordion").style.maxHeight = e.currentTarget.querySelector(".projects__accordion").scrollHeight + `px`;
      } else {
        e.currentTarget.querySelector(".projects__accordion").style.maxHeight = null;
      }
    }
  });
});

window.addEventListener("load", initAccordion);
mediaQuery.addEventListener("change", initAccordion);
