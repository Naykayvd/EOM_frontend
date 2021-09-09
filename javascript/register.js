// register user
// taking user inputs
function user_reg() {
    let first_name = document.querySelector("#first").value;
    let last_name = document.querySelector("#last").value;
    let username = document.querySelector("#uname").value;
    let password = document.querySelector("#pword").value;
    console.log(first_name, last_name, username, password)
// adding user details using a post method
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
    // making the data json
    .then((res) => res.json())
    .then((res) => {
        console.log(res.status_code == 201);
        {
            // letting the user know their details are saved and taking them to the login page
            document.querySelector("#saved").innerHTML = 
            "Your details have been saved, login to continue";
            setTimeout(function() {
                window.location = "./index.html";
            }, 3000);
        }
    });
}
