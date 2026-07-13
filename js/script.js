// ===== MOBILE MENU TOGGLE =====
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

const foodDetails = {
    'product-1': {
        image: 'public/product-1.jpg',
        title: 'Garden Harvest Bowl',
        tags: ['Veggie-Forward', 'Dairy-Free', 'Gluten-Free Friendly', 'Ready in 10 min'],
        calories: '480 cal',
        heatTime: '4 min',
        description: 'A fresh bowl packed with crisp vegetables, herbs, and a bright dressing for a wholesome lunch.',
        ingredients: ['Roasted vegetables', 'Baby greens', 'Herbed quinoa', 'Citrus dressing', 'Avocado', 'Pumpkin seeds'],
        nutrition: [
            { label: 'Protein', value: '18g' },
            { label: 'Fiber', value: '10g' },
            { label: 'Carbs', value: '28g' },
            { label: 'Fat', value: '14g' }
        ]
    },
    'product-2': {
        image: 'public/product-2.jpg',
        title: 'Mediterranean Herb Plate',
        tags: ['High Protein', 'Paleo', 'Soy-Free', 'Ready in 6 min'],
        calories: '560 cal',
        heatTime: '5 min',
        description: 'A savory plate with herbs, roasted vegetables, and a satisfying Mediterranean finish.',
        ingredients: ['Herb chicken', 'Roasted cauliflower', 'Cucumber', 'Olive relish', 'Tahini drizzle', 'Lemon'],
        nutrition: [
            { label: 'Protein', value: '31g' },
            { label: 'Fiber', value: '8g' },
            { label: 'Carbs', value: '22g' },
            { label: 'Fat', value: '18g' }
        ]
    },
    'product-3': {
        image: 'public/product-3.jpg',
        title: 'Citrus Chicken Bento',
        tags: ['Fresh & Vibrant', 'Gluten-Free Friendly', 'Dairy-Free', 'Ready in 5 min'],
        calories: '520 cal',
        heatTime: '4 min',
        description: 'A bright, balanced bento with citrus chicken and crisp vegetables for a light meal.',
        ingredients: ['Citrus chicken', 'Cucumber ribbons', 'Roasted carrots', 'Baby greens', 'Avocado', 'Lemon dressing'],
        nutrition: [
            { label: 'Protein', value: '29g' },
            { label: 'Fiber', value: '7g' },
            { label: 'Carbs', value: '20g' },
            { label: 'Fat', value: '16g' }
        ]
    },
    'product-4': {
        image: 'public/product-4.jpg',
        title: 'Roasted Veggie Box',
        tags: ['Plant-Based', 'Fiber-Rich', 'Ready in 8 min'],
        calories: '460 cal',
        heatTime: '6 min',
        description: 'A cozy veggie box featuring roasted vegetables with a rich and satisfying sauce.',
        ingredients: ['Roasted squash', 'Carrots', 'Broccolini', 'Chickpeas', 'Herb sauce', 'Olive oil'],
        nutrition: [
            { label: 'Protein', value: '16g' },
            { label: 'Fiber', value: '12g' },
            { label: 'Carbs', value: '30g' },
            { label: 'Fat', value: '13g' }
        ]
    },
    'product-5': {
        image: 'public/product-5.jpg',
        title: 'Protein Power Bowl',
        tags: ['High Protein', 'Carb-Conscious', 'Soy-Free', 'Ready in 7 min'],
        calories: '590 cal',
        heatTime: '5 min',
        description: 'A filling bowl with protein-rich components and a clean, bright finish.',
        ingredients: ['Grilled chicken', 'Quinoa', 'Steamed greens', 'Roasted peppers', 'Tahini', 'Cucumber'],
        nutrition: [
            { label: 'Protein', value: '35g' },
            { label: 'Fiber', value: '9g' },
            { label: 'Carbs', value: '24g' },
            { label: 'Fat', value: '19g' }
        ]
    },
    'product-6': {
        image: 'public/product-6.jpg',
        title: 'Fresh Greens Wrap',
        tags: ['Light', 'Gluten-Free Friendly', 'Dairy-Free', 'Ready in 5 min'],
        calories: '440 cal',
        heatTime: '3 min',
        description: 'A crisp wrap filled with fresh greens and a light herb dressing for easy meals.',
        ingredients: ['Leafy greens', 'Herbed chicken', 'Cucumber', 'Radish', 'Dijon dressing', 'Wrap'],
        nutrition: [
            { label: 'Protein', value: '24g' },
            { label: 'Fiber', value: '6g' },
            { label: 'Carbs', value: '18g' },
            { label: 'Fat', value: '12g' }
        ]
    },
    'product-7': {
        image: 'public/product-7.jpg',
        title: 'Smoky Tomato Pasta',
        tags: ['Comfort Food', 'Family Friendly', 'Ready in 12 min'],
        calories: '610 cal',
        heatTime: '8 min',
        description: 'A comforting pasta with roasted tomato flavor and a satisfying savory finish.',
        ingredients: ['Pasta', 'Smoky tomato sauce', 'Spinach', 'Parmesan', 'Basil', 'Olive oil'],
        nutrition: [
            { label: 'Protein', value: '22g' },
            { label: 'Fiber', value: '7g' },
            { label: 'Carbs', value: '35g' },
            { label: 'Fat', value: '15g' }
        ]
    },
    'product-8': {
        image: 'public/product-8.jpg',
        title: 'Creamy Mushroom Rice',
        tags: ['Comforting', 'Vegetarian', 'Hearty', 'Ready in 9 min'],
        calories: '550 cal',
        heatTime: '7 min',
        description: 'A velvety rice bowl with mushrooms and herbs for a cozy, satisfying meal.',
        ingredients: ['Mushrooms', 'Rice', 'Creamy sauce', 'Peas', 'Parsley', 'Shallots'],
        nutrition: [
            { label: 'Protein', value: '17g' },
            { label: 'Fiber', value: '6g' },
            { label: 'Carbs', value: '32g' },
            { label: 'Fat', value: '18g' }
        ]
    },
    'product-9': {
        image: 'public/product-9.jpg',
        title: 'Crispy Chicken Salad',
        tags: ['Crisp', 'Protein-Rich', 'Gluten-Free Friendly', 'Ready in 5 min'],
        calories: '500 cal',
        heatTime: '4 min',
        description: 'A crisp salad with crunchy chicken and a bright dressing for a refreshing meal.',
        ingredients: ['Crispy chicken', 'Mixed greens', 'Cucumber', 'Radish', 'Herb dressing', 'Seeds'],
        nutrition: [
            { label: 'Protein', value: '28g' },
            { label: 'Fiber', value: '5g' },
            { label: 'Carbs', value: '16g' },
            { label: 'Fat', value: '15g' }
        ]
    },
    'product-10': {
        image: 'public/product-10.jpg',
        title: 'Sunshine Quinoa Bowl',
        tags: ['Nutrient-Rich', 'Plant-Based', 'Dairy-Free', 'Ready in 6 min'],
        calories: '470 cal',
        heatTime: '4 min',
        description: 'A sunny bowl of quinoa, roasted vegetables, and fresh herbs with bright flavor.',
        ingredients: ['Quinoa', 'Roasted peppers', 'Cucumber', 'Herbs', 'Tahini', 'Lemon'],
        nutrition: [
            { label: 'Protein', value: '15g' },
            { label: 'Fiber', value: '8g' },
            { label: 'Carbs', value: '29g' },
            { label: 'Fat', value: '13g' }
        ]
    },
    'product-11': {
        image: 'public/product-11.jpg',
        title: 'Balanced Bento Box',
        tags: ['Balanced', 'Portable', 'Ready to Eat', 'Ready in 3 min'],
        calories: '510 cal',
        heatTime: '3 min',
        description: 'A practical bento featuring a balanced mix of proteins, grains, and fresh produce.',
        ingredients: ['Chicken', 'Rice', 'Cucumber', 'Carrots', 'Hummus', 'Herbed greens'],
        nutrition: [
            { label: 'Protein', value: '27g' },
            { label: 'Fiber', value: '7g' },
            { label: 'Carbs', value: '25g' },
            { label: 'Fat', value: '14g' }
        ]
    }
};

const foodModal = document.getElementById('foodModal');
const foodModalImage = document.getElementById('foodModalImage');
const foodModalTitle = document.getElementById('foodModalTitle');
const foodModalTags = document.getElementById('foodModalTags');
const foodModalCalories = document.getElementById('foodModalCalories');
const foodModalHeatTime = document.getElementById('foodModalHeatTime');
const foodModalDescription = document.getElementById('foodModalDescription');
const foodModalIngredients = document.getElementById('foodModalIngredients');
const foodModalNutrition = document.getElementById('foodModalNutrition');
const foodModalClose = document.getElementById('foodModalClose');

function openFoodModal(itemKey, imageSrc = '') {
    const detail = foodDetails[itemKey];

    if (!detail || !foodModal) {
        return;
    }

    const modalImageSrc = imageSrc || detail.image || '/warmbite_product.jpg';
    foodModalImage.src = modalImageSrc;
    foodModalImage.alt = detail.title;
    foodModalTitle.textContent = detail.title;
    foodModalTags.innerHTML = detail.tags.map(tag => `<span>${tag}</span>`).join('');
    foodModalCalories.textContent = detail.calories;
    foodModalHeatTime.textContent = detail.heatTime;
    foodModalDescription.textContent = detail.description;
    foodModalIngredients.innerHTML = detail.ingredients.map(item => `<li>${item}</li>`).join('');
    foodModalNutrition.innerHTML = detail.nutrition.map(item => `
        <div class="nutrition-row">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
        </div>
    `).join('');

    foodModal.classList.add('is-open');
    foodModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('food-modal-open');
}

function closeFoodModal() {
    if (!foodModal) {
        return;
    }

    foodModal.classList.remove('is-open');
    foodModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('food-modal-open');
}

if (foodModal) {
    document.querySelectorAll('.market-item, .carousel-slide').forEach(item => {
        item.addEventListener('click', () => {
            const itemKey = item.dataset.item;
            if (!itemKey) {
                return;
            }

            const cardImage = item.querySelector('img')?.currentSrc || item.querySelector('img')?.src || '';
            openFoodModal(itemKey, cardImage);
        });
    });

    foodModalClose?.addEventListener('click', closeFoodModal);
    foodModal.addEventListener('click', (event) => {
        if (event.target.matches('.food-modal-backdrop')) {
            closeFoodModal();
        }
    });
}

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== STICKY HEADER ON SCROLL =====
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== CAROUSEL FUNCTIONALITY =====
let currentSlide = 1;
const totalSlides = 11;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Show slide function
function showSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.carousel-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const slide = document.getElementById('slide' + slideNumber);
    if (slide) {
        slide.classList.add('active');
    }
    
    // Update indicators
    updateIndicators(slideNumber);
}

// Update indicators
function updateIndicators(slideNumber) {
    document.querySelectorAll('.carousel-indicators .indicator').forEach((indicator, index) => {
        if (index + 1 === slideNumber) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Previous button
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 1) {
            currentSlide = totalSlides;
        }
        showSlide(currentSlide);
    });
}

// Next button
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide > totalSlides) {
            currentSlide = 1;
        }
        showSlide(currentSlide);
    });
}

// Indicator dots
document.querySelectorAll('.indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentSlide = parseInt(indicator.dataset.slide);
        showSlide(currentSlide);
    });
});

// Initialize carousel
showSlide(currentSlide);

// ===== SMOOTH SCROLL BEHAVIOR =====
// Already handled by CSS: html { scroll-behavior: smooth; }

// ===== CTA BUTTON INTERACTIONS =====
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.value-prop-card, .meal-type-card, .testimonial, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== SCROLL-TO-TOP BUTTON (Optional Enhancement) =====
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #2ecc71;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        align-items: center;
        justify-content: center;
        padding: 0;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1)';
    });
}

createScrollToTopButton();

// ===== FORM SUBMISSION HANDLERS (If forms were added) =====
// Placeholder for any future form handling

// ===== KEYBOARD NAVIGATION FOR CAROUSEL =====
document.addEventListener('keydown', (e) => {
    if (foodModal?.classList.contains('is-open')) {
        if (e.key === 'Escape') {
            closeFoodModal();
        }
        return;
    }

    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// ===== LAZY LOAD IMAGES (Optional Performance Enhancement) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== AUTO-ADVANCE CAROUSEL (Optional - Uncomment to enable) =====
/*
setInterval(() => {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds
*/

// ===== ACCESSIBILITY: FOCUS VISIBLE ON BUTTONS =====
document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('focus', function() {
        this.style.outline = '2px solid #2ecc71';
        this.style.outlineOffset = '2px';
    });
    
    el.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ===== RESPONSIVE RESIZE HANDLER =====
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Adjust layout if needed on resize
        console.log('Window resized');
    }, 250);
});

// ===== PAGE LOAD ANIMATIONS =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.animation = `fadeIn 0.8s ease ${index * 0.1}s both`;
    });
});

console.log('Sunbasket website loaded successfully!');
