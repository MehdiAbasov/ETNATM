const barIcon = document.getElementById('burger')
const overlay = document.getElementById('nav-overlay')
const xmark = document.getElementById('xmark')

barIcon.addEventListener("click", openPopUp);
xmark.addEventListener("click", closePopUp);

overlay.addEventListener("click", function () {
    overlay.style.width = '0%'
})

function openPopUp() {
    overlay.style.width = '100%'
};
function closePopUp() {
    overlay.style.width = '0%'
};

