  const form = document.getElementsByName('form');
  const name = document.getElementsByName('name');
  const number = document.getElementsByName('number');
  const pickup = document.getElementsByName('pickup');
  const dropoff = document.getElementsByName('dropoff');
  const passengers = document.getElementsByName('passengers');
  
  form.addEventListener('submit', e => {
      e.preventDefault();
  
      validateInputs();
  });
    
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }
    
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };
    
   
    const validateInputs = () => {
      const nameValue = name.value.trim();
      const numberValue = number.value.trim();
      const pickupValue = pickup.value.trim();
      const dropoffValue = dropoff.value.trim(); 
      const passengersValue = passengers.value.trim();


        if(nameValue === '') {
            setError(name, 'Your name is required');
        } else {
            setSuccess(name);
        }
    
        if(numberValue === '') {
            setError(number, 'Phone Number is required');
        }  else if (numberValue.length < 10 || numberValue.length > 11 ) {
          setError(number, 'Enter a 10 digit Phone Number.');
        } else {
            setSuccess(number);
        }
    
        if(pickupValue === '') {
            setError(pickup, 'Pick up Location is required');
        } else {
            setSuccess(pickup);
        }
    
        if(dropoffValue === '') {
            setError(dropoff, 'Drop off Location is required');
        } else {
            setSuccess(dropoff);
        }

        if(passengersValue === '') {
          setError(passengers, 'please state the number of passenger');
        } else {
            setSuccess(passengers);
        }
    
    };

    
