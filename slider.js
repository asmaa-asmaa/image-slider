var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

//console.table(sliderImages);

var slidesCount=sliderImages.length;
//console.log(slidesCount);

var currentSlide=1;

var slideNumberElement=document.getElementById("slide-number");

var nextButton=document.getElementById("next");

var prevButton=document.getElementById("prev");


nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

var paginationElement=document.createElement("ul");
paginationElement.setAttribute("id","pagination-ul");

for(var i=1; i<= slidesCount; i++){
    var paginationItem=document.createElement("li");
    paginationItem.setAttribute("data-index",i);

    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

var paginationCreatedUl=document.getElementById("pagination-ul");

var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

for(var i=0; i<paginationsBullets.length;i++ ) {
    paginationsBullets[i].onclick= function(){
        currentSlide=parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}


theChecker();



function nextSlide(){
    if (nextButton.classList.contains("disabled")){
        return false;

    } else {
    currentSlide++;
    theChecker();
    }
}

function prevSlide(){
    if (prevButton.classList.contains("disabled")){
        return false;

    } else {
    currentSlide--;
    theChecker();
    }
}

function theChecker() {

    slideNumberElement.textContent="slide #" + (currentSlide) + "of" + (slidesCount);

    removeAllActives();

    sliderImages[currentSlide- 1].classList.add("active");

    paginationCreatedUl.children[currentSlide- 1].classList.add('active');

    if(currentSlide  == 1){
        prevButton.classList.add("disabled");
    }else {
        prevButton.classList.remove("disabled");
    }

    if(currentSlide  == slidesCount){
        nextButton.classList.add("disabled");
    }else {
        nextButton.classList.remove("disabled");
    }


}


function removeAllActives(){
    sliderImages.forEach(function(img) {
        img.classList.remove("active");
    })

    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove("active");
    
    });
}







