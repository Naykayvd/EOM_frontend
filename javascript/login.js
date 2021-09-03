// user login

function user_login() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#userpass").value;
    console.log(username, password);

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
        if (!res.data) {
            document.querySelector("#wrong").innerHTML =
            "unregistered user details entered";
            return;
        } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location = "./records.html";
        }
    });
}