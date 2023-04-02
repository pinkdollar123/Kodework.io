//store the data into an array
let modalInfo =[];

// call the actual ID from the HTML element
const modalCard = document.getElementById(`modalCard`);
const modalExpiration = document.getElementById(`modalExpiration`);
const modalCVC = document.getElementById(`modalCVC`);

const modalEmail = document.getElementById(`modalEmail`);
const modalText = document.getElementById(`modalText`);
const modalFullName = document.getElementById(`modalFullName`);
const modalLocation = document.getElementById(`modalLocation`);

function captureModal(){

  // stored Object in array form includes object titles and object values
  let contactInfo = {
    RequestID: Math.floor(Math.random() * 1000000),
    ClienCardNumber :  modalCard.value,
    ClienCardCVC :  modalCVC.value,
    ClienCardExpiration :  modalExpiration.value,

    ClientFullName: modalFullName.value,
    ClientEmail :  modalEmail.value,
    ClientLocation :  modalLocation.value,
    ClientMessage :  modalText.value,
  };

  // created variable for calling out the RequestForm inside the local storage 
  let storedContacts = localStorage.getItem('RequestForm');

  /* created variable for ternary condition parsing a JSON object to text format to Javascript object from the LocalStorage
  pushing another object using the variable of contactinfo*/
  let contactForms = storedContacts ? JSON.parse(storedContacts) : []; 
  contactForms.push(contactInfo);

    // Store data for setting the item into a RequestForm  category
    localStorage.setItem(`RequestForm`, JSON.stringify(contactForms));
}

window.onload = function (){
  let contactForm = document.getElementById(`contactForm`);
  contactForm.onsubmit = captureModal;
};

//End of Line for Storing data


//AutoFill for Data-base-what-ever
//input default for data-bs-whatever value
const serviceModal = document.getElementById('serviceRequest');


serviceModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an Ajax request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = serviceModal.querySelector('.modal-title')
  const modalBodyInput = serviceModal.querySelector('.modal-body input')

  modalTitle.textContent = `Payment Method ${recipient}`
  modalBodyInput.value = recipient
})

