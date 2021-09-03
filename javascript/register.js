// register user

function user_reg() {
    let first_name = document.querySelector("#first").value;
    let last_name = document.querySelector("#last").value;
    let username = document.querySelector("#uname").value;
    let password = document.querySelector("#pword").value;
    console.log(first_name, last_name, username, password)

    fetch("https://final-eomp.herokuapp.com/user-section", {
        method: "POST",
        body: JSON.stringify({
            first_name,
            last_name,
            username,
            password,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF=8",
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res.status_code == 201);
        {
            document.querySelector("#saved").innerHTML = 
            "Your details have been saved, login to continue";
            setTimeout(function() {
                window.location = "./index.html";
            }, 3000);
        }
    });
}
