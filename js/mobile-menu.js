(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuLinksRef = document.querySelectorAll('.mob-menu__link');
  const mobileMenuContainerRef = document.querySelectorAll('.mob-menu__container');

  // Attach event listeners to each link in the mobile menu
  mobileMenuLinksRef.forEach(linkEl => {
    linkEl.addEventListener('click', () => {
      toggleMenu(); // Reuse function to toggle menu
    });
  });

  // Event listener for the menu button
  menuBtnRef.addEventListener('click', () => {
    toggleMenu(); // Reuse function to toggle menu
  });

  // Event listener for clicks outside the menu container
  document.addEventListener('click', function(event) {
    let isClickInsideMenuContainer = Array.from(mobileMenuContainerRef).some(container => container.contains(event.target));

    // Close the menu if the click is outside and not on the menu button
    if (!isClickInsideMenuContainer && !menuBtnRef.contains(event.target)) {
      closeMenu(); // Function to close the menu
    }
  });

  // Function to toggle the menu's open/close state
  function toggleMenu() {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  }

  // Function to close the menu
  function closeMenu() {
    if (menuBtnRef.getAttribute('aria-expanded') === 'true') {
      menuBtnRef.classList.remove('is-open');
      menuBtnRef.setAttribute('aria-expanded', false);
      mobileMenuRef.classList.remove('is-open');
    }
  }
})();

