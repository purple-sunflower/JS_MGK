function Timer() {
    setTimeout(Call, 2000);
}

function Call() {
    var name = document.getElementsByTagName("h1");
    name[0].innerHTML = "보라해바라기";
    var number = document.getElementsByTagName("p");
    number[0].innerHTML = "010-xxxx-xxxx";
    document.getElementById("number").style.backgroundColor="darkolivegreen";
    document.getElementById("calling").style.display = "none";
    Timer();
}

document.getElementById("calling").addEventListener("click",Call);


