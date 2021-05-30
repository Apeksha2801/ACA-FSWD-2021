let getToken = document.getElementById("get_token")
getToken.onclick = async function()
{
    let response = await fetch('http://localhost:12345/get_token');
    let output1 = await response.text();
    document.getElementById("d1").innerHTML = output1;
}

let register = document.getElementById("Register")
register.onclick = async function() {
    var formData = {
        "username" : document.getElementById("Username").value,
        "data" : document.getElementById("Data").value,
        "token" : document.getElementById("Token").value,
    }
    let response1 = await fetch('http://localhost:12345/register', {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
    });

    console.log(response1);

    if (response1.ok) {
        alert("Registration successful!");
    }
    else alert("Enter all fields correctly!");
}

let disData = document.getElementById("DisplayData");
disData.onclick = async function() {
    var token = {
        "token" : document.getElementById("Token2").value,
    }
    let response2 = await fetch('http://localhost:12345/get_data', {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(token)
    })
    let output2 = await response2.text();
    if(response2.ok) {
        document.getElementById("d2").innerHTML = output2;
        }
    else alert("Enter token correctly!");
    }