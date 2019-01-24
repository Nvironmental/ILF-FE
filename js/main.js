var relicsDiv = document.querySelector(".relics-container")	
var relicsImgs = document.querySelectorAll('.relics');
var doesCurrentExist = document.querySelectorAll('img');
var relicInfoContainer= document.querySelector('.relic-info-container');
var menuOpenBtn= document.querySelector('.menu-open-btn');
var menuCloseBtn= document.querySelector('.menu-close-btn');
var menuContainer= document.querySelector('.menu-container');

function isElementVisible (el){ //fucntion to check whether element is visible
	var elementTop = el.getBoundingClientRect().top;
	var elementHeight = el.getBoundingClientRect().height;
	var elTotalHeight = Math.abs(elementTop) + elementHeight
	return elTotalHeight < window.outerHeight;
}

relicsDiv.addEventListener('scroll',function(){ //scroll event to add 'current' class to the relic images
	for(var i=0;i<relicsImgs.length;i++){
    	if(isElementVisible(relicsImgs[i])) {
            relicsImgs[i].classList.add('current');  
        }
         else { 
            relicsImgs[i].classList.remove('current');
            relicsImgs[i].classList.remove('previous');
            relicsImgs[i].classList.remove('next');
        }; 
        
}
});

relicsDiv.addEventListener('scroll',function(){ //scroll event to add 'next','previous' class to the relic images
	for(var i=0;i<relicsImgs.length;i++){
if(relicsImgs[i].classList.contains('current')){
    var current = document.querySelector('.current');
    if(current.nextElementSibling !== null){
        current.nextElementSibling.classList.add('next');
    }    
    if(current.previousElementSibling !== null){
             current.previousElementSibling.classList.add('previous');
         }
         
    }}});

    relicsDiv.addEventListener('scroll',function(){ //scroll event to change relic info on the left
        relicInfoContainer.classList.remove('fadeIn');
                for(var i=0;i<doesCurrentExist.length;i++){
                    if(doesCurrentExist[i].classList.contains('current')){
                    let relicName = document.querySelector('.relic-name');
                    let relicLocation = document.querySelector('.relic-location');
                    let relicEra = document.querySelector('.relic-era');
                    let current = document.querySelector('.current');
                    relicName.innerText = current.dataset.name;
                    relicLocation.innerText = current.dataset.location;
                    relicEra.innerText = current.dataset.era;   
                    relicInfoContainer.classList.add('fadeIn');
                }
                
            }
        });

        menuOpenBtn.addEventListener('click',function(e){
            e.preventDefault();
            menuContainer.classList.add('show-menu');
        });

        menuCloseBtn.addEventListener('click',function(e){
            e.preventDefault();
            menuContainer.classList.remove('show-menu');
        });


  

