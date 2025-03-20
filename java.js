class ThemeSwitcher {
  constructor() {
    this.triggerButton = document.querySelector(".theme-switcher-button");
    this.themeLocalStorageID = "theme";
    this.darkThemeClass = "dark-theme";
    this.activeTheme = localStorage.getItem(this.themeLocalStorageID) || "light";
    this.applyTheme();
    if (this.triggerButton) {
      this.triggerButton.addEventListener("click", () => this.toggleTheme());
    }
  }

  applyTheme() {
    if (this.activeTheme === "dark") {
      document.body.classList.add(this.darkThemeClass);
      if (this.triggerButton) this.triggerButton.textContent = "Тёмная тема";
    } else {
      document.body.classList.remove(this.darkThemeClass);
      if (this.triggerButton) this.triggerButton.textContent = "Светлая тема";
    }
  }

  toggleTheme() {
    this.activeTheme = this.activeTheme === "light" ? "dark" : "light";
    localStorage.setItem(this.themeLocalStorageID, this.activeTheme);
    this.applyTheme();
  }
}

new ThemeSwitcher();
