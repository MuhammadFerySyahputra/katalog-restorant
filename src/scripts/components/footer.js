class footernih extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <style>
    footer {
      background-color: black;
      color: white;
      font-size: 1rem;
      padding: 2em;
      width: 100%;
      text-align: center;
    }
    </style>
    <footer>
        <p>Copyright © 2024 - Makan Duls</p>
    </footer>
    `;
  }
}

customElements.define("footer-nih", footernih);
