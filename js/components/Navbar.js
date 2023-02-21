export function Navbar() {

    const $navbar =  document.createElement("nav");

    $navbar.classList.add("navbar");


    $navbar.innerHTML = `
    <div class="navbar-brand">
        <a href="/" class="navbar-logo">Nasa API</a>
    </div>
    <div class="navbar-links">
        <a href="#/categories/APOD" class="navbar-link">APOD</a>
        <a href="#/categories/Photos" class="navbar-link">Photos</a>
        <a href="#/categories/EONET" class="navbar-link">EONET</a>
    </div>
    <button class="navbar-toggle" aria-label="Menu">
        <span class="navbar-toggle-icon"></span>
    </button>
    `


    console.log($navbar);

    return $navbar;

}