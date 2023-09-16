document.addEventListener('DOMContentLoaded', function() {
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const popup = document.getElementById('popup');

    openPopupButton.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});