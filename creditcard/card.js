function isCardNumberValid(number) {
    // Accept only one card number for now
    return number === '1234123412341234';
  }
  
  function isDateInFuture(exp) {
    const [month, year] = exp.split('/').map(Number);
    const now = new Date();
    const inputDate = new Date(2000 + year, month - 1); // year like 24 → 2024
  
    return inputDate > now;
  }
  
  function displayError(msg) {
    document.querySelector('.errorMsg').innerText = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault();
  
    const form = event.target;
    const cardNumber = form.cardNumber.value.replace(/\s/g, ''); // remove spaces
    const expDate = form.expDate.value;
    let errorMsg = '';
  
    displayError(''); // Clear existing errors
  
    if (isNaN(cardNumber)) {
      errorMsg += 'Card number is not a valid number\n';
    } else if (!isCardNumberValid(cardNumber)) {
      errorMsg += 'Card number is not valid\n';
    }
  
    if (!/^\d{2}\/\d{2}$/.test(expDate)) {
      errorMsg += 'Expiration date must be in MM/YY format\n';
    } else if (!isDateInFuture(expDate)) {
      errorMsg += 'Expiration date must be in the future\n';
    }
  
    if (errorMsg !== '') {
      displayError(errorMsg);
      return false;
    }
  
    alert("Payment submitted successfully!");
    return true;
  }
  
  document.querySelector('#credit-card').addEventListener('submit', submitHandler);
  