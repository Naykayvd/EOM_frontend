// displaying products
fetch("https://final-eomp.herokuapp.com/view-records/")
.then((request) => {
    request.json().then((obj) => {
        items = obj.data
        box = 1;
        item_no = 0;
        items.forEach(item => {
            console.log(item);
            // creating containers for each product
            let records_containers = document.querySelector(".records-container");
            records_containers.innerHTML += `<div class="item">
            <p>Record No. ${item[0]}</p>
            <h2>Artist: ${item[1]}</h2>
            <h2>Album: ${item[2]}</h2>
            <p>Price: R${item[3]}</p>
            <p>Genre: ${item[4]}</p>
            <p>Year: ${item[5]}</p>
            <p class="description">Description: ${item[6]}</p>
            <label for="Quantity">Quantity:</label>
            <input class="added-${item[0]}"
                name="Quantity"
                type="number"
                min="1"
                max="9"
                value="1"
            />
            <button id="submit" onclick="addedInCart(${item[0]})">Add to cart<i class="fas fa-cart-plus"></i></button>`
        });
    })
})

function createBox(index) {
    let records_containers = document.querySelector(".records-container");
    records_containers.innerHTML += `<div class="item-box${index}"></div>`
}
// creating user cart
function showCart() {
    let cart = document.querySelector(".user-cart");
    cart.classList.toggle("show");
}
// displaying total prices
let total = 0;
window.localStorage.setItem("Total", total);
// adding in cart
function addedInCart(id) {
    let quantity = document.querySelector(`.added-${id}`);
    console.log(quantity.value);
    let cart = document.querySelector(".user-cart");
    fetch("https://final-eomp.herokuapp.com/view-records/")
    .then((request) => {
        request.json().then((obj) => {
            items = obj.data;
            items.forEach((item) => {
                if (item[0] == id) {
                    console.log(item[0])
                    total = total + (parseInt(item[3]) * quantity.value)
                    cart.innerHTML += `
                    <div class="item">
                        <p>Record No. ${item[0]}</p>
                        <h2>Artist: ${item[1]}</h2>
                        <h2>Album: ${item[2]}</h2>
                        <p>Price: R${item[3]}</p>
                        <p>Quantity: ${quantity.value}</p>
                        <button id="clear">Remove<i class="fas fa-trash"></i></button>
                    </div>
                    `;
                    alert("Item added to cart")
                    console.log(total)
                }
            })
            // all total display
            total = total + parseInt(window.localStorage.getItem("Total"));
            window.localStorage.setItem("Total", total);

            let totalCost = document.querySelector(".total-cost")
            totalCost.innerHTML = `
            <h2>Total Cost: R ${window.localStorage.getItem("Total")}</h2>
            `
        })
    });
}
