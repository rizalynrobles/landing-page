function showDescription(descriptionId) {
    var description = document.getElementById(descriptionId).textContent;
    document.getElementById('popup-content').innerHTML = description;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function goToHomePage() {
    window.location.href = "index.html"; // Replace 'index.html' with your homepage URL
}
