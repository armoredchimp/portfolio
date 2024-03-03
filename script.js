const email = document.querySelector('.email');
const copyIcon = document.querySelector('.copy-icon');
const projLink = document.querySelector('.top-proj');
const projStart = document.querySelector('.ac1');

const certLink = document.querySelector('.top-certs');
const certStart = document.querySelector('.ac3');

const contactLink = document.querySelector('.top-contact');
const contactStart = document.querySelector('.contact-header');

copyIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(email.textContent);
  console.log('Email address copied');
});

projLink.addEventListener('click', () => scrollProj());
certLink.addEventListener('click', () => scrollCerts());
contactLink.addEventListener('click', () => scrollContact());

function scrollProj() {
  projStart.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}
function scrollCerts() {
  certStart.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}
function scrollContact() {
  contactStart.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}
