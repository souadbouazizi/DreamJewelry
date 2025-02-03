//navbar
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});



   // Slideshow

document.addEventListener("DOMContentLoaded", () => {
 
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    
    function showSlide(index) {
        // Réinitialise tous les slides et points
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));
    
        // Affiche le slide et active le point correspondant
        slides[index].style.display = "block";
        dots[index].classList.add("active");
    
        currentSlideIndex = index;
    }
    
    // Affiche le premier slide par défaut
    showSlide(currentSlideIndex);
    
    // Basculer automatiquement les slides toutes les 5 secondes
    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }, 5000);

    // Read More Button
    const readMoreBtn = document.getElementById("readMoreBtn");
    const hiddenContent = document.getElementById("hiddenContent");

    // Ajouter un gestionnaire d'événements pour le bouton
    readMoreBtn.addEventListener("click", () => {
        // Bascule la visibilité du contenu caché
        hiddenContent.classList.toggle("hidden");

        // Change le texte du bouton en fonction de l'état du contenu caché
        if (hiddenContent.classList.contains("hidden")) {
            readMoreBtn.textContent = "Read More";
        } else {
            readMoreBtn.textContent = "Read Less";
        }
    });


});


//services
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".services-wrapper");
    const boxes = document.querySelectorAll(".service-box");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const dotsContainer = document.querySelector(".dots-container");

    const visibleBoxes = 3; // Nombre de boîtes visibles par ligne
    const totalBoxes = boxes.length;
    const totalDots = Math.ceil(totalBoxes / visibleBoxes); // Nombre total de points nécessaires
    let currentIndex = 0;

    // Crée les points dynamiquement (un pour chaque groupe de 3 boîtes)
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            currentIndex = i * visibleBoxes;
            updateCarousel();
        });
    }

    const dots = document.querySelectorAll(".dot");

    // Met à jour l'affichage du carrousel
    function updateCarousel() {
        const offset = (currentIndex / visibleBoxes) * 100;
        wrapper.style.transform = `translateX(-${offset}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[Math.floor(currentIndex / visibleBoxes)].classList.add("active");
    }

    // Gestionnaires d'événements pour les flèches
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - visibleBoxes + totalBoxes) % totalBoxes;
        updateCarousel();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + visibleBoxes) % totalBoxes;
        updateCarousel();
    });

    // Fonctionnalité du bouton "Read More"
    document.querySelectorAll(".read-more-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const hiddenContent = boxes[index].querySelector(".hidden-content");
            hiddenContent.classList.toggle("hidden");

            btn.textContent = hiddenContent.classList.contains("hidden")
                ? "Read More"
                : "Read Less";
        });
    });

    // Initialiser le carrousel
    updateCarousel();
});
//gallery-photo
document.addEventListener("DOMContentLoaded", () => {
    const galleryPhotos = document.querySelectorAll(".gallery-photo");
    const popup = document.querySelector(".popup");
    const popupImg = document.querySelector(".popup-img");
    const popupTitle = document.querySelector(".popup-title");
    const closeBtn = document.querySelector(".close");
    const leftArrow = document.querySelector(".left-arrow2");
    const rightArrow = document.querySelector(".right-arrow2");

    let currentIndex = 0;

    // Open the popup with the clicked image
    function openPopup(index) {
        const photo = galleryPhotos[index];
        popupImg.src = photo.src;
        popupTitle.textContent = photo.getAttribute("data-title");
        popup.classList.remove("hidden");
        currentIndex = index;
    }

    // Close the popup
    function closePopup() {
        popup.classList.add("hidden");
    }

    // Show the previous image
    function showPrevious() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryPhotos.length - 1;
        openPopup(currentIndex);
    }

    // Show the next image
    function showNext() {
        currentIndex = (currentIndex < galleryPhotos.length - 1) ? currentIndex + 1 : 0;
        openPopup(currentIndex);
    }

    // Add click event listeners to each gallery photo
    galleryPhotos.forEach((photo, index) => {
        photo.addEventListener("click", () => {
            openPopup(index);
        });
    });

    // Add event listeners for the popup
    closeBtn.addEventListener("click", closePopup);
    leftArrow.addEventListener("click", showPrevious);
    rightArrow.addEventListener("click", showNext);

    // Close the popup when clicking outside the image
    popup.addEventListener("click", (e) => {
        if (!popupImg.contains(e.target) && e.target !== leftArrow && e.target !== rightArrow) {
            closePopup();
        }
    });
});




  AOS.init();
