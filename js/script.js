url = "http://nicko-skogen.no/square-eyes/wp-json/wc/store/products"
category = "products"

const container = document.querySelector(".frontpage-movies")

async function getFilms() {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function printNewest3() {
    const array = getFilms()
    for (let i = array.length - 1; i > array.length - 3; i--) {
        console.log(array[i])
    }
}

console.log(getFilms())

/* printNewest3() */