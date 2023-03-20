url = "https://nicko-skogen.no/square-eyes/wp-json/wc/store/products"

const container = document.querySelector(".textbody")

async function getDetails() {
    const response = await fetch(url);
    const data = await response.json();
    const link = new URLSearchParams(window.location.search)
    console.log("Data is now ready");
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === Number(link.get("id"))) {
            console.log(data[i])
            printDetail(data[i])
        }
    }
}
console.log("Before log");
getDetails()
console.log("after log");

function printDetail(data) {
    const title = document.createElement("h1")
    const entryContainer = document.createElement("div")
    const imageContainer = document.createElement("div")
    const image = document.createElement("img")
    const tagContainer = document.createElement("div")
    const textContainer = document.createElement("div")
    const purchaseContainer = document.createElement("div")
    const price = document.createElement("h2")
    const purchaseLink = document.createElement("a")
    const purchaseButton = document.createElement("div")
    const buttonText = document.createElement("h3")

    title.innerText = data.name
    title.classList.add("text-on-dark")

    imageContainer.classList.add("film-entry", "specific-entry")
    image.src = data.images[0].src
    image.alt = data.images[0].alt
    image.classList.add("film-poster")
    imageContainer.append(image)

    tagContainer.classList.add("film-list-tags")

    textContainer.classList.add("text-on-dark")
    textContainer.innerHTML = "<b>" + data.short_description + "</b>" + "<br>" + data.description

    purchaseContainer.classList.add("purchase-container")
    price.classList.add("text-on-dark")
    price.innerText = data.prices.price.slice(0, -2) + "." + data.prices.price.slice(-2) + data.prices.currency_symbol
    purchaseLink.href = "purchase.html"
    purchaseButton.classList.add("buy-buttons", "action-button", "flex")
    buttonText.innerText = "Purchase"
    purchaseButton.append(buttonText)
    purchaseLink.append(purchaseButton)
    purchaseContainer.append(price, purchaseLink)

    entryContainer.append(title, imageContainer, tagContainer, textContainer, purchaseContainer)

    container.append(entryContainer)

    /* const link = document.createElement("a")
    const box = document.createElement("div")
    const img = document.createElement("img")
    link.href = "details.html"
    box.classList.add("film-entry", "button")
    img.src = data.images[0].src
    img.alt = data.images[0].alt
    img.classList.add("film-poster")
    box.append(img)
    link.append(box)
    container.append(link) */
}