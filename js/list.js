url = "https://nicko-skogen.no/square-eyes/wp-json/wc/store/products"

const container = document.querySelector(".film-scroll")

async function getFilms() {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data is now ready");
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        printFilm(data[i])
    }
}
console.log("Before log");
getFilms()
console.log("after log");

function printFilm(data) {
    const link = document.createElement("a")
    const box = document.createElement("div")
    const img = document.createElement("img")
    link.href = "details.html" + "?id=" + data.id
    box.classList.add("film-entry", "button")
    img.src = data.images[0].src
    img.alt = data.images[0].alt
    img.classList.add("film-poster")
    box.append(img)
    link.append(box)
    container.append(link)
}