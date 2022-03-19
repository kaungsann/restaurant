const inputTag = document.getElementsByClassName("input")[0];
const boxcontainerTag = document.getElementsByClassName("boxcontainer")[0];
const input1Tag = document.getElementsByClassName("input1")[0];
const input2Tag = document.getElementsByClassName("input2")[0];
const orderTag = document.getElementsByClassName("order")[0];

let inputid = 1;

const takeinputValue =  (event) => {
 const inputValue = event.target.value;
 const productId = inputid.toString()+". " +inputValue;
 const productItems = document.createElement("div");
 const crossIcon  = document.createElement("i");
 crossIcon.classList.add("fas" , "fa-times");
 productItems.classList.add("items")
 orderTag.classList.add("ordernew");
//<i class="fas fa-times"></i>
productItems.append(productId);
crossIcon.addEventListener("click" , (event) => {
    boxcontainerTag.remove();
    
})

 boxcontainerTag.classList.add("box");

 boxcontainerTag.append(productItems, crossIcon);

 inputid += 1;
 inputTag.value ="" ;
 input1Tag.value ="" ;
 input2Tag.value ="" ;
}

inputTag.addEventListener("change" , takeinputValue)

input1Tag.addEventListener("change" , takeinputValue)
input2Tag.addEventListener("change" , takeinputValue)