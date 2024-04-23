class Conlist extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section id="content" class="content">
            <div class="content-page">
                <h1>Explore Restaurant</h1>
                <div id="list-data"></div>
            </div>
        </section>
    `;
  }
}

customElements.define("conlist-view", Conlist);
