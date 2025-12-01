'use strict';
{
  const slides = document.querySelector('.slides');
  let slide = document.querySelectorAll('.slide');

  const firstClone = slide[0].cloneNode(true);
  const lastClone = slide[slide.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  slides.appendChild(firstClone);
  slides.insertBefore(lastClone, slides.firstChild);

  slide = document.querySelectorAll('.slide');

  let index = 1;
  const slideWidth = slide[0].clientWidth;

  slides.style.transform = `translateX(${-1 * slideWidth * index}px)`;

  function showNextSlide() {
    index++;
    slides.style.transform = `translateX(${-1 * slideWidth * index}px)`;
    slides.style.transition = '0.6s';
  };


  slides.addEventListener('transitionend', () => {
    const currentSlide = slide[index];

    if (currentSlide.id === 'first-clone') {
      slides.style.transition = 'none';
      index = 1;
      slides.style.transform = `translateX(${-1 * slideWidth * index}px)`;
    }
    if (currentSlide.id === 'last-clone') {
      slides.style.transition = 'none';
      index = slide.length - 2;
    }

  })
  setInterval(showNextSlide, 3000);

  const cards = document.querySelectorAll('.card');
  const thumbs = document.querySelectorAll('.list-img');

  thumbs.forEach(thumb =>{
    thumb.addEventListener('click', ()=>{
      const id = thumb.dataset.id;
      cards.forEach(card =>{
        card.classList.remove('current');
      });
      const targetCard = document.querySelector(`[data-id="${id}"]`);
      targetCard.classList.add('current');
    });
  });

  const links = document.querySelectorAll('.card-text a');
  links.forEach(link =>{
    link.addEventListener('click',(e)=>{
      e.stopPropagation();
    });
  });

  const fade = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      };
    });
  }, {
    threshold: 0.3
  });


  fade.forEach(el => {
    observer.observe(el);
  })

  const dts = document.querySelectorAll('dt');

  dts.forEach(dt =>{
    dt.addEventListener('click',()=>{
      
      dt.parentNode.classList.toggle('active');
    })
  })
}