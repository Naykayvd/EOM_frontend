fetch("https://final-eomp.herokuapp.com/view-records/")
.then((request) => {
    request.json().then((obj) => {
        items = obj.data
        box = 1;
        item_no = 0;
        items.forEach(item => {
            console.log(item);
            let records_containers = document.querySelector(".records-container");
            records_containers.innerHTML += `<div class="item">
            <p>Record No. ${item[0]}</p>
            <h2>Artist: ${item[1]}</h2>
            <h2>Album: ${item[2]}</h2>
            <p>Price: R${item[3]}</p>
            <p>Genre: ${item[4]}</p>
            <p>Year: ${item[5]}</p>
            <p>Description: ${item[6]}</p>
            <button>Add to cart<i class="fas fa-cart-plus"></i></button>`
        });
    })
})

function createBox(index) {
    let records_containers = document.querySelector(".records-container");
    records_containers.innerHTML += `<div class="item-box${index}"></div>`
}