let timer;



function buttonTest() {
    var button = document.getElementById("testButton");
    if (button.innerHTML === "Not clicked!") {
        button.innerHTML = "Clicked!";
    } else if (button.innerHTML.substring(0,8) === "Clicked!") {
        button.innerHTML = "Clicked x2!";
    } else {
        var numClicks = parseInt(button.innerHTML.substring(9, button.innerHTML.length - 1));
        button.innerHTML = "Clicked x" + (numClicks + 1) + "!";
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
        document.getElementById("testButton").innerHTML = "Not clicked!";
    }, 10000);
}

function submitData() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const quantity = document.getElementById("quantity").value;
    const vehicle1 = document.getElementById("vehicle1").checked ? "yes" : "no";
    const vehicle2 = document.getElementById("vehicle2").checked ? "yes" : "no";
    const vehicle3 = document.getElementById("vehicle3").checked ? "yes" : "no";
    let gender;
    const genderOptions = document.getElementsByName("gender");
    for (const option of genderOptions) {
        if (option.checked) {
            gender = option.value;
            break;
        }
    }
    const dropdowns = document.getElementById("dropdowns").value;
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("phone", phone);
    localStorage.setItem("dob", dob);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("vehicle1", vehicle1);
    localStorage.setItem("vehicle2", vehicle2);
    localStorage.setItem("vehicle3", vehicle3);
    localStorage.setItem("gender", gender);
    localStorage.setItem("dropdowns", dropdowns);
    window.location.href = '/submit';
}
