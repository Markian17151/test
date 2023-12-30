document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById('menuButton');
  var x = document.getElementById('myTopnav');

  // Відкривання/закривання меню при кліку на кнопку
  menuButton.onclick = function () {
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  };

  // Закриття меню при кліку поза ним
  document.addEventListener('click', function (event) {
      var isClickInsideMenu = x.contains(event.target);
      var isClickOnMenuButton = menuButton.contains(event.target);

      if (!isClickInsideMenu && !isClickOnMenuButton) {
          x.className = "topnav";
      }
  });
});




const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let currentSlide = 0;

function showPrevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function showAutoSlide() {
  showNextSlide();
}

// Додати автоматичну зміну слайдів кожні 5 секунд
const intervalId = setInterval(showAutoSlide, 5000);

// Додати обробник для зупинки автоматичної зміни слайдів при кліці на кнопки prev і next
prevBtn.addEventListener('click', function() {
  clearInterval(intervalId);
  showPrevSlide();
});

nextBtn.addEventListener('click', function() {
  clearInterval(intervalId);
  showNextSlide();
});

// Встановити клас 'active' для першого слайду
slides[currentSlide].classList.add('active');





// Встановлюємо часовий пояс
        const timezone = "Europe/Kiev";
        const now = new Date().toLocaleString("en-US", { timeZone: timezone });

        // Отримуємо поточний день тижня та годину
        const currentDay = new Date(now).getDay();
        const currentHour = new Date(now).getHours();

        // Встановлюємо текст та колір статусу магазину
        const storeStatus = document.getElementById("store-status");
        if (currentDay >= 1 && currentDay <= 5 && currentHour >= 10 && currentHour < 22) {
            storeStatus.innerText = "Відчинено";
            storeStatus.classList.add("open");
        } else if (currentDay === 6 && currentHour >= 11 && currentHour < 20) {
            storeStatus.innerText = "Відчинено";
            storeStatus.classList.add("open");
        } else {
            storeStatus.innerText = "Зачинено";
            storeStatus.classList.add("closed");
        }





