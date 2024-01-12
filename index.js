function updateContent() {
    let newName = document.getElementById('nama-baru').value;
    let newRole = document.getElementById('role-baru').value;
    let newAvailability = document.getElementById('availability-baru').value;
    let newUsia = document.getElementById('usia-baru').value;
    let newLokasi = document.getElementById('lokasi-baru').value;
    let newYearExperience = document.getElementById('year-experience-baru').value;
    let newEmail = document.getElementById('email-baru').value;

    document.getElementById('nama').innerHTML = newName;
    document.getElementById('role').innerHTML = newRole;
    document.getElementById('availability').innerHTML = newAvailability;
    document.getElementById('umur').innerHTML = newUsia;
    document.getElementById('lokasi').innerHTML = newLokasi;
    document.getElementById('year-experience').innerHTML = newYearExperience;
    document.getElementById('email').innerHTML = newEmail;
}

function submitForm() {
    updateContent();
    document.getElementById('myForm').reset();
    console.log('Form submitted!');
    hideFormContainer();
}

function hideFormContainer() {
    let formContainer = document.querySelector('.containerForm');
    formContainer.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-btn').addEventListener('click', submitForm);
});