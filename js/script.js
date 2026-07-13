// ===== MOBILE MENU TOGGLE =====
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

const foodDetails = {
    'product-1': {
        image: 'public/product-1.png',
        title: 'Chicken Sopas',
        tags: ['Comforting', 'Creamy', 'Family-Friendly', 'Ready in 5 min'],
        calories: '420 cal',
        heatTime: '4 min',
        netWeight: '350g',
        description: 'Comforting creamy chicken soup with macaroni, cabbage, and carrots for a familiar, cozy meal.',
        ingredients: ['Chicken', 'Macaroni', 'Cabbage', 'Carrot', 'Onion', 'Garlic', 'Evaporated Milk', 'Fish Sauce', 'Salt', 'Pepper', 'Water'],
        nutrition: [
            { label: 'Protein', value: '22g' },
            { label: 'Fiber', value: '4g' },
            { label: 'Carbs', value: '36g' },
            { label: 'Fat', value: '12g' }
        ]
    },
    'product-2': {
        image: 'public/product-2.png',
        title: 'Champorado',
        tags: ['Breakfast', 'Creamy', 'Chocolatey', 'Ready in 4 min'],
        calories: '360 cal',
        heatTime: '3 min',
        netWeight: '300g',
        description: 'Creamy chocolate rice porridge made with glutinous rice, cocoa, and a hint of salt.',
        ingredients: ['Glutinous Rice', 'Cocoa Powder', 'Brown Sugar', 'Coconut Milk Powder', 'Milk Powder', 'Salt', 'Water', 'Vanilla'],
        nutrition: [
            { label: 'Protein', value: '8g' },
            { label: 'Fiber', value: '3g' },
            { label: 'Carbs', value: '48g' },
            { label: 'Fat', value: '9g' }
        ]
    },
    'product-3': {
        image: 'public/product-3.png',
        title: 'Chicken Lugaw',
        tags: ['Soothing', 'Savory', 'Slow-Cooked', 'Ready in 5 min'],
        calories: '390 cal',
        heatTime: '4 min',
        netWeight: '350g',
        description: 'Comforting chicken rice porridge slow-cooked with ginger and garlic for a wholesome breakfast.',
        ingredients: ['Chicken', 'Rice', 'Ginger', 'Garlic', 'Onion', 'Spring Onion', 'Fish Sauce', 'Salt', 'Pepper', 'Water'],
        nutrition: [
            { label: 'Protein', value: '20g' },
            { label: 'Fiber', value: '2g' },
            { label: 'Carbs', value: '44g' },
            { label: 'Fat', value: '10g' }
        ]
    },
    'product-4': {
        image: 'public/product-4.png',
        title: 'Chicken Curry with Rice',
        tags: ['Warming', 'Hearty', 'Savory', 'Ready in 5 min'],
        calories: '510 cal',
        heatTime: '5 min',
        netWeight: '350g',
        description: 'Tender chicken simmered in a flavorful curry with potatoes and carrots, served with rice.',
        ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk', 'Potato', 'Carrot', 'Onion', 'Garlic', 'Fish Sauce', 'Salt', 'Pepper', 'Water'],
        nutrition: [
            { label: 'Protein', value: '24g' },
            { label: 'Fiber', value: '5g' },
            { label: 'Carbs', value: '45g' },
            { label: 'Fat', value: '16g' }
        ]
    },
    'product-5': {
        image: 'public/product-5.png',
        title: 'Beef Tapa with Garlic Rice',
        tags: ['Protein-Rich', 'Savory', 'Filling', 'Ready in 6 min'],
        calories: '560 cal',
        heatTime: '5 min',
        netWeight: '380g',
        description: 'Marinated beef tapa served with flavorful garlic rice and crispy garlic bits.',
        ingredients: ['Beef', 'Rice', 'Soy Sauce', 'Calamansi', 'Garlic', 'Brown Sugar', 'Black Pepper', 'Cooking Oil', 'Salt', 'Fried Garlic'],
        nutrition: [
            { label: 'Protein', value: '29g' },
            { label: 'Fiber', value: '3g' },
            { label: 'Carbs', value: '48g' },
            { label: 'Fat', value: '18g' }
        ]
    },
    'product-6': {
        image: 'public/product-6.png',
        title: 'Chicken Afritada with Rice',
        tags: ['Tomato-Rich', 'Comforting', 'Family-Style', 'Ready in 5 min'],
        calories: '500 cal',
        heatTime: '5 min',
        netWeight: '380g',
        description: 'Tender chicken simmered in a rich tomato sauce with potatoes, carrots, and bell peppers.',
        ingredients: ['Chicken', 'Rice', 'Tomato Sauce', 'Potato', 'Carrot', 'Bell Pepper', 'Onion', 'Soy Sauce', 'Garlic', 'Bay Leaf', 'Sugar', 'Cooking Oil', 'Salt', 'Black Pepper'],
        nutrition: [
            { label: 'Protein', value: '25g' },
            { label: 'Fiber', value: '6g' },
            { label: 'Carbs', value: '44g' },
            { label: 'Fat', value: '14g' }
        ]
    },
    'product-7': {
        image: 'public/product-7.png',
        title: 'Beef Mami Noodle Soup',
        tags: ['Warming', 'Savory', 'Hearty', 'Ready in 5 min'],
        calories: '480 cal',
        heatTime: '4 min',
        netWeight: '300g',
        description: 'Tender beef slices in a savory noodle soup with greens, garlic, and onions.',
        ingredients: ['Beef', 'Noodles', 'Water', 'Salt', 'Beef Broth', 'Soy Sauce', 'Garlic', 'Onion', 'Ginger', 'Sugar', 'Black Pepper', 'Cooking Oil', 'Bok Choy', 'Spring Onion'],
        nutrition: [
            { label: 'Protein', value: '23g' },
            { label: 'Fiber', value: '4g' },
            { label: 'Carbs', value: '42g' },
            { label: 'Fat', value: '13g' }
        ]
    },
    'product-8': {
        image: 'public/product-8.png',
        title: 'Pork Menudo with Rice',
        tags: ['Rich', 'Savory', 'Hearty', 'Ready in 5 min'],
        calories: '530 cal',
        heatTime: '5 min',
        netWeight: '350g',
        description: 'Savory pork simmered in a rich tomato sauce with potatoes and carrots.',
        ingredients: ['Pork', 'Tomato Sauce', 'Potato', 'Carrot', 'Onion', 'Garlic', 'Soy Sauce', 'Bay Leaf', 'Sugar', 'Salt', 'Pepper', 'Cooking Oil', 'Water'],
        nutrition: [
            { label: 'Protein', value: '26g' },
            { label: 'Fiber', value: '5g' },
            { label: 'Carbs', value: '43g' },
            { label: 'Fat', value: '16g' }
        ]
    },
    'product-9': {
        image: 'public/product-9.png',
        title: 'Pork Adobo',
        tags: ['Classic', 'Savory', 'Garlicky', 'Ready in 5 min'],
        calories: '510 cal',
        heatTime: '4 min',
        netWeight: '350g',
        description: 'Tender pork simmered in a savory soy-vinegar garlic sauce.',
        ingredients: ['Pork', 'Soy Sauce', 'Vinegar', 'Garlic', 'Bay Leaf', 'Black Pepper', 'Water', 'Sugar', 'Cooking Oil', 'Salt'],
        nutrition: [
            { label: 'Protein', value: '24g' },
            { label: 'Fiber', value: '2g' },
            { label: 'Carbs', value: '8g' },
            { label: 'Fat', value: '20g' }
        ]
    },
    'product-10': {
        image: 'public/product-10.png',
        title: 'Adobo with Rice',
        tags: ['Comforting', 'Savory', 'Filling', 'Ready in 5 min'],
        calories: '490 cal',
        heatTime: '4 min',
        netWeight: '400g',
        description: 'Tender chicken simmered in a savory soy-vinegar garlic sauce, served with rice.',
        ingredients: ['Chicken', 'Soy Sauce', 'Vinegar', 'Garlic', 'Bay Leaf', 'Black Pepper', 'Water', 'Sugar', 'Cooking Oil', 'Salt'],
        nutrition: [
            { label: 'Protein', value: '26g' },
            { label: 'Fiber', value: '3g' },
            { label: 'Carbs', value: '41g' },
            { label: 'Fat', value: '15g' }
        ]
    }
};

const foodModal = document.getElementById('foodModal');
const foodModalImage = document.getElementById('foodModalImage');
const foodModalTitle = document.getElementById('foodModalTitle');
const foodModalTags = document.getElementById('foodModalTags');
const foodModalCalories = document.getElementById('foodModalCalories');
const foodModalHeatTime = document.getElementById('foodModalHeatTime');
const foodModalNetWeight = document.getElementById('foodModalNetWeight');
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
    foodModalNetWeight.textContent = detail.netWeight;
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
const totalSlides = 10;

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
