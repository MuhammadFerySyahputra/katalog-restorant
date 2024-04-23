class jumbadad extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="hero" style="background-image: url('images/heros/hero-image_4.jpg');">
        <div class="heroinner">
            <h1 class="herotitle">Makan Duls</h1>
            <p class="herosubtitle">Discover top-notch eateries exclusively on premier platforms.</p>
        </div>
    </div>
    `;
  }
}
customElements.define("jumbo-tron", jumbadad);
