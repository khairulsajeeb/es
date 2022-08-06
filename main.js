window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})



const faqs= document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
  }) 
})




const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.nav-button-open');
const menuClose = document.querySelector('.nav-button-close');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  menuBtn.style.display = 'none';
  menuClose.style.display = 'inline-block';
})
menuClose.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  menuClose.style.display = 'none';
})
