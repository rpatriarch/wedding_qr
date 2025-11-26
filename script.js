function takePhoto() {
    document.getElementById("photoInput").click();
}

function takeVideo() {
    document.getElementById("videoInput").click();
}

// Когато е избран файл – просто ще покажем потвърждение
document.getElementById("photoInput").addEventListener("change", function() {
    alert("Снимката е заснета! (следваща стъпка: качване)");
});

document.getElementById("videoInput").addEventListener("change", function() {
    alert("Видеото е записано! (следваща стъпка: качване)");
});
