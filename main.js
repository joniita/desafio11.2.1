const URL_ = "https://jsonplaceholder.typicode.com/users";

let sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    let user = {}
    //console.log("boton presionado");
    let userName = document.getElementById("name").value;
    let userSurname = document.getElementById("surname").value;
    let userBornDate = document.getElementById("bornDate").value;
    //console.log(userBornDate);

    user.name = userName;
    user.surname = userSurname;
    user.bornDate = userBornDate;

    //console.log(user);

    fetch(URL_, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));


})