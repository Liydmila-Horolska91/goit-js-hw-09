
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('imput', () => {
  formData.email = input.value.trim();
  formData.message = text.value.trim();
  localStorage.setItem('feedback-form-atate', JSON.stringify(formData));
})

form.addEventListener('input', updateData);



form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Please, fill all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };

  document.querySelector('[name="email"]').value = '';
  document.querySelector('[name="message"]').value = '';
});