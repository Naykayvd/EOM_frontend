// user login
// checking and comparing data input to database
function user_login() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#userpass").value;
    console.log(username, password);
// using a fetch method
    fetch("https://final-eomp.herokuapp.com/user-section", {
        method: "PATCH",
        body: JSON.stringify({
            username,
            password,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        // letting user know they have entered incorrect details
        if (!res.data) {
            document.querySelector("#wrong").innerHTML =
            "unregistered user details entered";
            return;
            // checking local storage
        } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location = "./records.html";
        }
    });
}