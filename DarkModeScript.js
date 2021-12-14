/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const iconTheme = "uil-sun";

/* // Previously selected topic (if user selected) */
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

/* // We obtain the current theme that the interface has by validating the dark-theme class */
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

$(".change-theme").on("click", function () {
  if ($("body").hasClass("dark-theme")) {
    $("body").removeClass("dark-theme");
    $("li").removeClass("dark-theme");
    $(
      ".card, .accordion-item, .accordion-item-title, .accordion-item-desc"
    ).removeClass("dark-theme-card");
    $("h5, h6 ,p, .btn, .dropdown>li>a, .dropdown").removeClass("dark-theme");
  } else {
    $("body").addClass("dark-theme");
    $("li").addClass("dark-theme");
    $(
      ".card , .accordion-item, .accordion-item-title, .accordion-item-desc"
    ).addClass("dark-theme-card ");

    $("h5, h6,p, .btn, .dropdown>li>a, .dropdown ").addClass("dark-theme");
  }
});

/*  Activate / deactivate the theme manually with the button */
themeButton.addEventListener("click", () => {
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-icon", getCurrentIcon());
});
