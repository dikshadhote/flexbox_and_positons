
let hideButton=document.querySelector('.hide-btn');
let hideBadge=document.getElementById('hide-badge');
console.log(hideButton)
console.log(hideBadge)

const onHideClickHandler =() =>{
console.log(hideBadge.style.display);
    if(hideBadge.style.display==="block")
    {
        console.log(hideBadge.style.display);
        hideBadge.style.display="none";
    }
     else{
        hideBadge.style.display="block";
    }
    
    }
    
hideButton.addEventListener("click",onHideClickHandler);

