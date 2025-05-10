<script>
  const slides = document.querySelectorAll('.slide');
  const slider = document.getElementById('slider');
  const dotsContainer = document.getElementById('dots');
  let currentIndex = 2;

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.remove('center');
      if (index === currentIndex) {
        slide.classList.add('center');
      }
    });

    const offset = (currentIndex - 2) * 220;
    slider.style.transform = `translateX(${-offset}px)`;

    updateDots();
  }

  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('active');
    }
  }

  function createDots() {
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function autoSlide() {
    setInterval(() => {
      nextSlide();
    }, 4000);
  }

  createDots();
  updateSlider();
  autoSlide();
</script>
