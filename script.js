













document.addEventListener('DOMContentLoaded', () => {
    const imageList = document.querySelector('.image-list');
    const images = document.querySelectorAll('.image-item');
    const totalImages = images.length;
    let currentIndex = 0;


    const slideRightBtn = document.getElementById('slide-btn-right');
    const slideLeftBtn = document.getElementById('slide-btn-left');


    slideRightBtn.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });


    slideLeftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1;
        }
        updateSlider();
    });


    function updateSlider() {
        imageList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
})


// this part is not complete//

////*sidebar nagivation */
const sidebarNavigationE1 = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationE1 = document.getElementById("open-nav-sidebar")




sidebarOpenNavigationE1.addEventListener("click", ()=>{
  sidebarNavigationE1.classList.toggle("sidebar-show")
})
// this part is not complete//