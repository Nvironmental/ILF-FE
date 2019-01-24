var relicSlider = document.querySelector('.relic-slider');
var relicSliderImage = document.querySelectorAll('.relic-slider-image');
var sliderNavItem = document.querySelectorAll('.slider-nav-item');
var sliderImageInfoContainer = document.querySelector('.slider-image-info-container');
var commentBtn = document.querySelector(".comment");
var infoContainer = document.querySelector(".slider-image-info-container");
var commentContainer = document.querySelector(".comment-modal-container");
var nextBtn = document.querySelector('.experts-nav-next');
var previousBtn = document.querySelector('.experts-nav-previous');
var expertsContainer = document.querySelector('.experts-container');
var expertsItems = document.querySelectorAll('.experts-item');
var commentImage = document.querySelector('.comment-image');
var commentBubbleImage = "/assets/imgs/comment.png"
var commentCancleImage = "/assets/imgs/multiply.png"
var search = document.querySelector("#q");

relicSlider.addEventListener('scroll',function(){ //adding 'active-slider-image' class to image in view
    for (var i = 0;i<relicSliderImage.length;i++){
        relicSliderImage[i].classList.remove('active-slider-image');
        var isInView = relicSliderImage[i].getBoundingClientRect().left == 0;
        if(isInView){
            relicSliderImage[i].classList.add('active-slider-image');
        }
    }
    });

    relicSlider.addEventListener('scroll',function(){ //adding 'active-slide' to slide navs
        var activeSliderImage = document.querySelector('.active-slider-image');
        sliderImageInfoContainer.classList.remove('fadeInSlideUp');
        for (var i = 0;i<relicSliderImage.length;i++){
            sliderNavItem[i].classList.remove('active-slide');
           if(relicSliderImage[i].classList.contains('active-slider-image')){
            sliderNavItem[activeSliderImage.dataset.slide].classList.add('active-slide');
            let relicSliderName = document.querySelector('.slider-image-info-name');
            let relicSliderLocation = document.querySelector('.slider-image-info-location');
                relicSliderName.innerText = activeSliderImage.dataset.name ;
                relicSliderLocation.innerText = activeSliderImage.dataset.location ;
                sliderImageInfoContainer.classList.add('fadeInSlideUp');
           }
           
        }
    });

    // commentBtn.addEventListener('click',function(){
    //     infoContainer.style.top = 14+'px';
    //     infoContainer.style.transition = 'top 1s'});
    
    commentBtn.addEventListener('click',function(){
        if(!infoContainer.classList.contains('modal-open-slide-up')){
            infoContainer.classList.add('modal-open-slide-up');
            infoContainer.classList.remove('modal-close-slide-up');
            commentContainer.classList.add('open');
            commentContainer.classList.remove('close');
            commentBtn.style.backgroundColor = "#373449";
            commentImage.src = "/assets/imgs/multiply.png"
            
        }
        else {
            infoContainer.classList.remove('modal-open-slide-up');
            infoContainer.classList.add('modal-close-slide-up');
            commentContainer.classList.add('close');
            commentContainer.classList.remove('open');
            commentBtn.style.backgroundColor = "#3acce1";
            commentImage.src = "/assets/imgs/comment.png"
        }
    });

    nextBtn.addEventListener('click',function(){
        expertsContainer.scrollBy({
            top: 0,
            left: 100,
            behavior: 'smooth'});
            
    });


    previousBtn.addEventListener('click',function(){
        expertsContainer.scrollBy({
            top: 0,
            left: -100,
            behavior: 'smooth'});
    });

    expertsContainer.addEventListener('scroll',function(){
        if(expertsItems[0].getBoundingClientRect().x < 0){
            previousBtn.classList.add('blue');}});

     expertsContainer.addEventListener('scroll',function(){
        if(expertsItems[0].getBoundingClientRect().x > 0){
            previousBtn.classList.remove('blue');}});

     expertsContainer.addEventListener('scroll',function(){
        if(expertsItems[9].getBoundingClientRect().x < 575){
            nextBtn.classList.remove('blue');}});

     expertsContainer.addEventListener('scroll',function(){
        if(expertsItems[9].getBoundingClientRect().x > 575){
            nextBtn.classList.add('blue');}});

   
    window.addEventListener('click',function(){
        if(search != document.activeElement){
            document.querySelector(".search-label").classList.remove('up');
            document.querySelector("#q").value = "";
            document.querySelector(".go-search").style.display = "none";
            document.querySelector(".close-search").style.display = "block"
            }
        else {
            document.querySelector(".search-label").classList.add('up');
            document.querySelector(".close-search").style.display = "none"
            document.querySelector(".go-search").style.display = "block";
        }

        });

    document.querySelector(".search-label").addEventListener('click',function(){
        document.querySelector("#q").focus();
        document.querySelector(".search-label").classList.add('up');
    });
    
    document.querySelector('.search-anchor').addEventListener('click',function(){
        document.querySelector('.search-display').style.top = 0;});

        document.querySelector('.close-search').addEventListener('click',function(){
            document.querySelector('.search-display').style.top = 100+"%" ;});

            document.querySelector('#q').addEventListener('keyup',_.debounce( function(){
                if(document.querySelector('#q').value !== ""){
                document.querySelector('.search-result-container').style.opacity = 1;}
            else {
                document.querySelector('.search-result-container').style.opacity = 0;}}, 500));