document.addEventListener("DOMContentLoaded", () => {

    // FEATURE 1: Contact form validation + preview//
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const topicInput = document.getElementById("topic");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const previewBox = document.getElementById("formPreview");
    const previewName = document.getElementById("previewName");
    const previewEmail = document.getElementById("previewEmail");
    const previewTopic = document.getElementById("previewTopic");
    const previewMessage = document.getElementById("previewMessage");

    // Simple email pattern: something@something.something//
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearErrors() {
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
    }

    function validateForm() {
        clearErrors();
        let isValid = true;

        // Name: not empty, not whitespace-only//
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        // Email: not empty and matches pattern//
        const emailValue = emailInput.value.trim();
        if (emailValue === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message: not empty, not whitespace-only
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // keep submission local

        if (!validateForm()) {
            previewBox.hidden = true;
            return;
        }

        // Use textContent for safety (no HTML injection)//
        previewName.textContent = nameInput.value.trim();
        previewEmail.textContent = emailInput.value.trim();
        previewTopic.textContent = topicInput.value;
        previewMessage.textContent = messageInput.value.trim();

        previewBox.hidden = false;
        previewBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    //FEATURE 2: Expandable project details//
    const toggleButtons = document.querySelectorAll(".btn-toggle");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            const isOpen = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isOpen));
            button.textContent = isOpen ? "Show details" : "Hide details";
            details.hidden = isOpen;
        });
    });

    //FEATURE 3: Project filter / search//
    const projectSearch = document.getElementById("projectSearch");
    const resetFilter = document.getElementById("resetFilter");
    const filterMessage = document.getElementById("filterMessage");
    const projectCards = document.querySelectorAll(".project-card");

    function filterProjects() {
        const query = projectSearch.value.trim().toLowerCase();
        let visibleCount = 0;

        projectCards.forEach((card) => {
            const tags = card.getAttribute("data-tags").toLowerCase();
            const text = card.textContent.toLowerCase();
            const matches = query === "" || tags.includes(query) || text.includes(query);

            card.style.display = matches ? "" : "none";
            if (matches) visibleCount++;
        });

        if (visibleCount === 0) {
            filterMessage.textContent = "No projects match your search.";
        } else {
            filterMessage.textContent = `Showing ${visibleCount} project(s).`;
        }
    }

    projectSearch.addEventListener("input", filterProjects);

    resetFilter.addEventListener("click", () => {
        projectSearch.value = "";
        filterProjects();
        projectSearch.focus();
    });

    //FEATURE 4: Gallery viewer (previous / next)//
    const galleryPhotos = [{
            src: "images/photo1.jpg",
            alt: "My study desk with a laptop and notebook",
            caption: "My study desk where I practise web development."
        },
        {
            src: "images/photo2.jpg",
            alt: "A view of my campus or learning environment",
            caption: "The place where I often study and take notes."
        },
        {
            src: "images/photo3.jpg",
            alt: "A hobby or activity that I enjoy",
            caption: "One of my hobbies outside of class."
        }
    ];

    let currentPhoto = 0;

    const galleryImage = document.getElementById("galleryImage");
    const galleryCaption = document.getElementById("galleryCaption");
    const photoCounter = document.getElementById("photoCounter");
    const prevPhoto = document.getElementById("prevPhoto");
    const nextPhoto = document.getElementById("nextPhoto");

    function updateGallery() {
        const photo = galleryPhotos[currentPhoto];
        galleryImage.src = photo.src;
        galleryImage.alt = photo.alt;
        galleryCaption.textContent = photo.caption;
        photoCounter.textContent = `${currentPhoto + 1} / ${galleryPhotos.length}`;
    }

    prevPhoto.addEventListener("click", () => {
        currentPhoto = (currentPhoto - 1 + galleryPhotos.length) % galleryPhotos.length;
        updateGallery();
    });

    nextPhoto.addEventListener("click", () => {
        currentPhoto = (currentPhoto + 1) % galleryPhotos.length;
        updateGallery();
    });

    updateGallery(); //FEATURE 5: Mobile navigation toggle//
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!isOpen));
        navToggle.textContent = isOpen ? "☰ Menu" : "✕ Close";
        navMenu.classList.toggle("nav-open");
    });

    /* ------------------------------------------------------------
       FEATURE 6: Dark / light theme switch
       ------------------------------------------------------------ */
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀ Light";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    }

    themeToggle.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark");

        if (isDark) {
            themeToggle.textContent = "☀ Light";
            themeToggle.setAttribute("aria-label", "Switch to light theme");
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙 Dark";
            themeToggle.setAttribute("aria-label", "Switch to dark theme");
            localStorage.setItem("theme", "light");
        }
    });
});