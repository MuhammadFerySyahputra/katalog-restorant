class NavDesk extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <nav class="desk-nav">
        <a class="logo-desk-nav" href="index.html">Makan Duls</a>
        <ul class="list-desk-nav">
            <li class="items-desk-nav"><a href="index.html">Home</a></li>
            <li class="items-desk-nav"><a href="#">Favorite</a></li>
            <li class="items-desk-nav"><a target="_blank" href="https://www.linkedin.com/in/muhammadferysyahputra/">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}

class NavMob extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <a href="#content" class="skip-link">Skip to content ?</a>
    <div class="mob-view">
        <div class="iconmenu" id="menu"><a href="#">&#9776;</a></div>
        <div>Makan Duls</div>
        <div>&nbsp;</div>
    </div>
    <nav id="drawer" class="mob-nav">
        <ul class="list-mob-view">
            <li class="item-mob-nav"><a href="">Home</a></li>
            <li class="item-mob-nav"><a href="#">Favorite</a></li>
            <li class="item-mob-nav"><a target="_blank" href="https://www.linkedin.com/in/muhammadferysyahputra/">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define("nav-mob", NavMob);
customElements.define("nav-desk", NavDesk);
