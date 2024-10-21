//wait until DOM is fully loaded before attaching event listerners
document.addEventListener('DOMContentLoaded',function() {
    //get refences ti the arrow and service list elements
    const arrow = document.getElementById('arrow');
    const servicesList =
    document.getElementById('servicesList');
    //toggle serviceslist visibilty and arrow rotation when clicked
    arrow.addEventListener('click',function() {
        servicesList.classList.toggle('active');
        arrow.classList.toggle('active');
        //toggle display of the services list
        if (servicesList.classList.contains('active')) {
            servicesList.style.display = 'block';
        }else {
            servicesList.style.display = 'none';
        }
    });
});
 //new review slider
 let scrollAmount = 0;

 function slideLeft() {
    const container =
    document.querySelector('.review-container');
    scrollAmount -= container.offsetWidth /3; //adjust to show 3 slides
    if (scrollAmount < 0)scrollAmount = 0;
    container.scrollTo({
        left: scrollAmount,
        behaviour:'smooth'
    });
}
    function slideRight() {
        const container =
        document.querySelector('.review-container');
        scrollAmount += container.offsetWidth /3; //adjust to show 3 slides
        const maxScroll = container.scrollWidth - container.offsetWidth;
        if (scrollAmount > maxScroll)scrollAmount = maxScroll;
        container.scrollTo({
            left: scrollAmount,
            behaviour:'smooth'
        });
 }