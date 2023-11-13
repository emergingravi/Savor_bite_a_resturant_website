document.addEventListener("DOMContentLoaded", function () {
    const interval = 3000; // Change slide every 3 seconds (adjust as needed)
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slider img");

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100;
        document.querySelector(".slider").style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, interval);
});
