class MyCustomComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "custom-component");

    const style = document.createElement("style");
    style.textContent = `
      .custom-component {
        display: inline-block;
        padding: 10px;
        background-color: #4caf50;
        color: white;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
      }

      .custom-component:hover {
        background-color: #45a049;
      }
    `;

    const content = document.createElement("span");
    content.textContent =
      this.getAttribute("text") || "Componente Personalizado";

    wrapper.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

// Registrar el WebComponent
customElements.define("my-custom-component", MyCustomComponent);
