
const ulTag = document.querySelector(".ulTag");
const ulTagnewTag = document.querySelector(".ulTagnew");
const ulinmenuTag = document.querySelector(".ulinmenu");
const sliderTag = document.querySelector(".slider");
const linecontainerTag = document.querySelector(".linecontainer");
const line1Tag =document.querySelector(".line1");
const line2Tag =document.querySelector(".line2");
const line3Tag =document.querySelector(".line3");
const overlayTag = document.querySelector(".overlay");
const toastcontainerTag = document.querySelector(".toastcontainer");
const allcontainerTag = document.querySelector(".allcontainer");
const footercontainerTag = document.querySelector(".footercontainer");
const aboutcontainerTag = document.querySelector(".aboutcontainer");
const pricingcotainerTag = document.querySelector(".pricingcotainer");
const BlogcontainerTag = document.querySelector(".Blogcontainer");

const Litext = ["home" , "pricing" , "about us" , "blog"];

const clickcontainerTag = document.getElementsByClassName("clickcontainer")[0];
const inboxTag = document.getElementsByClassName("inbox")[0];
const bodyTag = document.getElementsByTagName("body")[0];

const moveItems = () => {
    if(clickcontainerTag.classList.contains("boxmove")){
        bodyTag.style.backgroundColor ="white";
        inboxTag.classList.remove("moveRight")
        clickcontainerTag.classList.remove("boxmove")
        sliderTag.style.backgroundColor ="white";
  
    }else{
        bodyTag.style.backgroundColor ="black";
        inboxTag.classList.add("moveRight")
        clickcontainerTag.classList.add("boxmove")
        sliderTag.style.backgroundColor ="darkcyan";
    }
 
}
inboxTag.addEventListener("click" , moveItems)

const clickfuction = (event) => {
  const clickLiTag = event.target.id;
  console.log(clickLiTag)
  const clickTakeIdtag = document.getElementById(clickLiTag);
  const clickliTagWidth = clickTakeIdtag.offsetWidth;
  const clickliTagLeft = clickTakeIdtag.offsetLeft;
  sliderTag.style.width = clickliTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickliTagLeft}px)`

 switch(clickLiTag){
        case "0":
            allcontainerTag.style.display = "inline";
            footercontainerTag.style.display = "inline";
            aboutcontainerTag.style.display = "none";  
            pricingcotainerTag.style.display = "none";  
            BlogcontainerTag.style.display = "none";
            changefunction();
            break;
        case "1":  
            footercontainerTag.style.display = "none";
            pricingcotainerTag.style.display = "inline";  
            allcontainerTag.style.display = "none"; 
            aboutcontainerTag.style.display = "none";
            BlogcontainerTag.style.display = "none";
            changefunction();
            break;
        case "2":          
            allcontainerTag.style.display = "none";
            pricingcotainerTag.style.display = "none";
            aboutcontainerTag.style.display = "inline";
            footercontainerTag.style.display = "none"; 
            BlogcontainerTag.style.display = "none";
            changefunction();
            break;
        case "3":
            allcontainerTag.style.display = "none";   
            aboutcontainerTag.style.display = "none";  
            pricingcotainerTag.style.display = "none";  
            BlogcontainerTag.style.display = "inline";
            footercontainerTag.style.display = "none";
            changefunction();
            break;
 }
}

        for(let i = 0;i < Litext.length; i++){
                        
            const liTag = document.createElement("li");
            liTag.append(Litext[i].toUpperCase());
            liTag.classList.add("linew");
            liTag.id = i;
            liTag.addEventListener("click" , clickfuction)
            ulTag.append(liTag);

            const liTagnew = document.createElement("li");
            liTagnew.append(Litext[i].toUpperCase());
            liTagnew.id = i;
            liTagnew.classList.add("ultaginli");
            liTagnew.addEventListener("click" , clickfuction)
            ulTagnewTag.append(liTagnew);

            if(i === 0 ){
                sliderTag.style.width = liTag.offsetWidth +"px";
            }
        }
   linecontainerTag.addEventListener("click" , () => {
   
    changefunction();

    })

  const toastFunction = () => {
    const appearItemsContainer = document.createElement("div");
    appearItemsContainer.classList.add("appeartoast")
    const toastText = document.createElement("div");
    toastText.classList.add("toastText");
    toastText.append(`We used cookies for our service for analysis and marketing to find our more about our usec of cookies
    please see out By containuing to browser and our website you agree to our used cookies`);
    const buttonDiv = document.createElement("button");
    buttonDiv.append("I Understand");
    buttonDiv.classList.add("buttontoast");
    appearItemsContainer.append(toastText , buttonDiv);
    toastcontainerTag.append(appearItemsContainer);

   
    setTimeout( () => {
        appearItemsContainer.style.top = `0px`
    }, 100)

    setTimeout( () => {
        appearItemsContainer.style.top = `-${appearItemsContainer.offsetHeight}px`
    }, 5000)

    buttonDiv.addEventListener("click" , () => {
        localStorage.setItem("uptext" , "1");
        appearItemsContainer.style.top = `-${appearItemsContainer.offsetHeight}px`
    })
  }


  window.addEventListener("load" , () => {

    const appeared = localStorage.getItem("uptext");

    if(appeared !== "1"){
        toastFunction();
    }

      
})

    const changefunction = () => {

        if(linecontainerTag.classList.contains("linecontainernew")){
            line2Tag.classList.remove("line2mew");
            line1Tag.classList.remove("line1mew");
            line3Tag.classList.remove("line3mew");
            overlayTag.classList.remove("overlaynew");
            ulTagnewTag.classList.remove("ulTagnew");
            linecontainerTag.classList.remove("linecontainernew");
    }
    else{
            line2Tag.classList.add("line2mew");
            line1Tag.classList.add("line1mew");
            line3Tag.classList.add("line3mew");
            overlayTag.classList.add("overlaynew");
            ulTagnewTag.classList.add("ulTagnew");
            linecontainerTag.classList.add("linecontainernew");
    }
    }


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);