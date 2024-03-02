const email = document.querySelector('.email');
const copyIcon = document.querySelector('.copy-icon');

copyIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(email.textContent);
  console.log('Email address copied');
});
