const form = document.querySelector('#myForm');
const usernameInput = document.querySelector('#username');


//Form validation
function validateForm() {
    let correct_way = /^[A-Z a-z]+$/;

    //Username validation
    if (usernameInput.value == '') {
        setError(usernameInput, 'Name cannot be blank ');
    }
    else if (usernameInput.value.length < 3) {
        setError(usernameInput, 'Name must be of aleast 3 alphabets');
    }
    else if (!usernameInput.value.match(correct_way)) {
        setError(usernameInput, 'Name cannot contain special characters or numbers and should only be alphabets');
    } else {
        setSuccess(usernameInput);
    }
}

// Setting the error function
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('span');
    paragraph.textContent = errorMessage;
}

// Setting the success function
function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}