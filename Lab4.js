function alertNoti() {
    const name = document.getElementById('name').value;
    alert(`Hi ${name}!`);
}

function changeColor() {
    let isBlue = document.body.style.backgroundColor === 'blue';
    document.body.style.backgroundColor = isBlue ? 'green' : 'blue';
}

function textTester() {
    const text = document.getElementById('textToValidate').value;
    const validationRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validationRegex.test(text)) {
        alert("Text contains special characters!");
        return false;
    }
    
    alert("Text is valid!");
    return true;
}

function textAdd() {
    document.getElementById('main-heading').textContent += ' Add Text';
}
