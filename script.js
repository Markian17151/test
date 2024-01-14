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





    const timezone = "Europe/Kiev";
    const now = new Date().toLocaleString("en-US", { timeZone: timezone });

    const currentDay = new Date(now).getDay();
    const currentHour = new Date(now).getHours();

    const storeStatus = document.getElementById("store-status");
    if (currentDay >= 0 && currentDay <= 6 && currentHour >= 10 && currentHour < 22) {
        storeStatus.innerText = "Відчинено";
        storeStatus.classList.add("open");
    } else {
        storeStatus.innerText = "Зачинено";
        storeStatus.classList.add("closed");
    }

    

      

    



    document.addEventListener("DOMContentLoaded", function () {
        // Перевірка, чи користувач вже підтверджував свій вік
        if (!localStorage.getItem("ageConfirmation")) {
            // Якщо ні, відображення вікна підтвердження
            showConfirmationOverlay();
        } else {
            // Якщо так, перевірка часу
            const lastConfirmationTime = parseInt(localStorage.getItem("ageConfirmation"));
            const currentTime = new Date().getTime();
            const timeDifference = (currentTime - lastConfirmationTime) / (1000 * 60); // Різниця в хвилинах
    
            if (timeDifference >= 360) {
                showConfirmationOverlay();
            }
        }
    });
    
    function showConfirmationOverlay() {
        document.getElementById("overlay").style.display = "flex";
        document.body.style.overflow = "hidden"; // Заборона гортання сторінки
    
        // Додавання обробників подій
        document.addEventListener("wheel", preventScroll);
        window.addEventListener("popstate", preventBack);
    }
    
    function allowAccess() {
        // При натисканні "Так"
        localStorage.setItem("ageConfirmation", new Date().getTime().toString());
        document.getElementById("overlay").style.display = "none";
    
        // Видалення обробників подій
        document.removeEventListener("wheel", preventScroll);
        window.removeEventListener("popstate", preventBack);
    
        // Дозвіл прокрутки сторінки
        document.body.style.overflow = "auto";
    }
    
    function denyAccess() {
        // При натисканні "Ні"
        alert("Ви повинні бути старше 18 років для перегляду цього сайту.");
        window.close(); // Закриття вкладки або вікна
    }
    
    function preventScroll(event) {
        // Заборона прокрутки сторінки колесом миші
        event.preventDefault();
    }
    
    function preventBack(event) {
        // Запобігання кліку на кнопку "Back"
        window.history.pushState(null, null, window.location.href);
    }
    