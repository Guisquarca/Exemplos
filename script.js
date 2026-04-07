(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    initServiceCards();
    initTestimonialsCarousel();
  });

  function initServiceCards() {
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('service-modal-title');
    const modalDescription = document.getElementById('service-modal-description');
    const modalWhatsapp = document.getElementById('service-modal-whatsapp');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    if (!modal || !modalTitle || !modalDescription || !modalWhatsapp) return;

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(function(card) {
      const openBtn = card.querySelector('[data-open-detail]');
      if (!openBtn) return;

      openBtn.addEventListener('click', function() {
        const title = card.getAttribute('data-title') || '';
        const detail = card.getAttribute('data-detail') || '';
        const whatsapp = card.getAttribute('data-whatsapp') || '#';
        modalTitle.textContent = title;
        modalDescription.textContent = detail;
        modalWhatsapp.href = whatsapp;
        modal.hidden = false;
      });
    });

    closeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        modal.hidden = true;
      });
    });
  }

  function initTestimonialsCarousel() {
    const carousel = document.getElementById('testimonials-carousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('[data-testimonial-item]');
    const prevBtn = carousel.querySelector('[data-testimonial-prev]');
    const nextBtn = carousel.querySelector('[data-testimonial-next]');
    if (!items.length || !prevBtn || !nextBtn) return;

    let index = 0;

    function render() {
      items.forEach(function(item, itemIndex) {
        item.hidden = itemIndex !== index;
      });
    }

    prevBtn.addEventListener('click', function() {
      index = (index - 1 + items.length) % items.length;
      render();
    });

    nextBtn.addEventListener('click', function() {
      index = (index + 1) % items.length;
      render();
    });

    render();
  }
})();


