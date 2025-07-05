const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;

    document.getElementById('next').addEventListener('click', () => {
      index = (index + 1) % slideCount;
      updateSlide();
    });

    document.getElementById('prev').addEventListener('click', () => {
      index = (index - 1 + slideCount) % slideCount;
      updateSlide();
    });

    function updateSlide() {
      slides.style.transform = 'translateX(' + (-index * 100) + '%)';
    }