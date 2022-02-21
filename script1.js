const wrapper = document.querySelector(".wholebox");
inputPart = document.querySelector(".inputbox");
loadinginformation = document.querySelector(".loadinginformation");
inputField = document.querySelector(".searchbar");
locationBtn = document.querySelector(".getlocation"); 
weatherPart = document.querySelector(".weatherpart");
wIcon = document.querySelector("img");
arrowBack = document.querySelector("header button");


//functional Enter key
inputField.addEventListener("keyup", e => {
    if(e.key == "Enter" && inputField.value != ""){
        console.log("hel")
    }
})
