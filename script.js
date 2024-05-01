const carouselContainer = document.querySelector('.container');
const carouselProduct = document.querySelectorAll('.product');
const previousBtn = document.querySelector('.Manual-l');
const nextBtn = document.querySelector('.Manual-r');

let currentItem = 0;

function showItem(index) {
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    currentItem = index;
}

showItem(0);

previousBtn.addEventListener('click', () => {
    if (currentItem > 0) {
        showItem(currentItem - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentItem < carouselProduct.length - 1) {
        showItem(currentItem + 1);
    }
});
// Add function to automatically rotate featured products
function rotateProducts() {
    if (currentItem < carouselProduct.length - 1) {
        showItem(currentItem + 1);
    } else {
        showItem(0);
    }

    setTimeout(rotateProducts, 1000); // Set timeout for 5 seconds
}

rotateProducts();
