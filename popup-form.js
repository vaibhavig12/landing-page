// popup form to appear
// Get the form and the close button
const formPopup = document.getElementById('enquiryFormPopup');
const closeButton = document.getElementById('closeBtn');

// Get all "Enquire Now" buttons
const enquireButtons = document.querySelectorAll('.btn-outline-secondary');

// Function to show the form
function showForm() {
  formPopup.style.display = 'block';
}

// Function to hide the form
function hideForm() {
  formPopup.style.display = 'none';
}

// Add event listeners to each "Enquire Now" button
enquireButtons.forEach(button => {
  button.addEventListener('click', showForm);
});

// Add event listener to the close button
closeButton.addEventListener('click', hideForm);
// popup form to appear

// on submit form data to sent back to google StyleSheetList

// Add event listener to the form submission
function submitForm() {
    var form = document.getElementById("popupEnquiryForm");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbwI-GCxtMSaB17-tbsLhPFLv1xRcDnF2aCkyQvlQe5r3FOxe9_DR4t0QvdfiwqK2Wzd/exec");
    xhr.send(formData);
    alert("Form submitted successfully!");}