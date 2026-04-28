document.addEventListener("DOMContentLoaded", () => {
    init();
})

const init = () => {
    showData();
}

// funcion para podr comunicarme con la API
const consultingData = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const data = await respuesta.json();
    const responseData = data.results;
    console.log(responseData);
    return responseData;
}

const showData = async () => {
    const loader = document.querySelector("#loader");
    loader.classList.remove("hidden");
    const data = await consultingData();

    setTimeout(() => {
        data.forEach(element => {
            viewHTML(element.image, element.name, element.status, element.genero);
        });

        loader.classList.add("hidden");
    },2000)
}

const viewHTML = (srcImage, name, status, genero) => {
    const div = document.querySelector("#div");
    const divCart = document.createElement("DIV");
    const img = document.createElement("IMG");
    const h1 = document.createElement("H1");
    const p = document.createElement("P");
    const pGender = document.createElement("P");

    divCart.classList.add("cart");

    img.setAttribute("src", srcImage);
    h1.innerText = name;
    p.innerText = "Status: " + status;

    validateAlive(p, status)

    pGender.innerText = "Genero" + genero;

    divCart.appendChild(img);
    divCart.appendChild(h1);
    divCart.appendChild(p);
    divCart.appendChild(pGender);

    div.appendChild(divCart);
}

const validateAlive = (p, status) => {
    const allowed = ["Alive", "Dead", "unknown"];
    allowed.includes(status) ? p.classList.add(status) : p.classList.add()
}
// "https://rickandmortyapi.com/api/character"