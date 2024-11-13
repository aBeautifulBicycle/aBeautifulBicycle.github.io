let timer;

function alertButton() {
    alert("Hello world!");
}

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


