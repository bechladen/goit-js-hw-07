const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };

  if (formData.email === '' || formData.password === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);

  form.reset();
}
