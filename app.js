function alertButton() {
    alert("Hello world!");
}

function buttonTest() {
    document.getElementById("testButton").innerHTML = "Clicked!";
    setTimeout(() => {
        document.getElementById("testButton").innerHTML = "Not clicked!";
    }, 10000);
}

