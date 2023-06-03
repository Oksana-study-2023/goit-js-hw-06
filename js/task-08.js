const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(name);
    //     console.log(value);
    // })

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail, password,
    };
    if (mail !== "" & password !== "") {
        console.log(formData);
      formEl.reset();  
    } else {
        alert(`all fields must be filled`);
    }

}

