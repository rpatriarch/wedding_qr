function takePhoto() {
    document.getElementById("photoInput").click();
}

function takeVideo() {
    document.getElementById("videoInput").click();
}

document.getElementById("photoInput").addEventListener("change", function() {
    alert("Снимката е направена! (файлът е в браузъра и може да се качи)");
});

document.getElementById("videoInput").addEventListener("change", function() {
    alert("Видеото е записано! (файлът е в браузъра и може да се качи)");
});
