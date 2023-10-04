const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Cheese",
        precio: 2400,
        img: "https://www.ocregister.com/wp-content/uploads/2023/09/OCR-L-CHEESEBURGER-0915-01-e1694733266322.jpg?w=580",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "CheeseBacon",
        precio: 2500,
        img: "https://images-gmi-pmc.edge-generalmills.com/6467a87b-0186-410b-bf19-96ed4dc32936.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Cuarto de Libra",
        precio: 2500,
        img: "https://app.pedidosbcn.com/img/productos/00012077.jpg?Monday",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Oklahoma",
        precio: 2500,
        img: "https://www.derrickriches.com/wp-content/uploads/2021/06/Oklahoma-Onion-Smashburger-scaled-e1634331688715.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Onion",
        precio: 2500,
        img: "https://www.infobae.com/new-resizer/IGVNt_OwhVuJnBWHh2OknRaxNIY=/1200x900/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4E7AO7Q6I5BULNYYH3SSO4WP2Y.jpeg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "American",
        precio: 2500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TyQRlcKlASfEc7lbXTHV9FgwV4z0p2c1KQ&usqp=CAU",
        cantidad: 1,
    },
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Pedir";
    comprar.className = "comprar";
     
    content.append(comprar);

    comprar.addEventListener("click", () => {
        
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            })
        }else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
            saveLocal();
        }
    });
});


//set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
//get item
JSON.parse(localStorage.getItem("carrito"));


