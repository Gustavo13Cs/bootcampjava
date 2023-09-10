class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        

    }

    build() {   
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card_left")

        const cardright = document.createElement("div");
        cardright.setAttribute("class","card_right")

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor")) || "AnonyMous";

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("Contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo");
        newsImage.alt = "Foto da noticia"
        cardright.append(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardright);

        return componentRoot;
    }

    styles() {

        const style = document.createElement("style");

        style.textContent = `

        .card{
            width: 100%;
            display:flex;
            flex-direction:row;
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card_left > span {
            font-weight: 400;
        }
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
        }
        .card_left > p {
            color: rgb(70, 70, 70);
        }

        `;

        return style
    }



}

customElements.define("card-news", Cardnews);

