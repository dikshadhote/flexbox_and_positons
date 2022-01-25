// Badge
let hideButton=document.querySelector('.hide-btn');
let hideBadge=document.getElementById('hide-badge');

// Snackabar
let baselineButton=document.getElementById('baseline-btn');
let baselineSnackbar=document.querySelector('#snackbar-baseline');

console.log(baselineButton)
console.log(baselineSnackbar)


    
const onHideClickHandler = () =>{
    if(hideBadge.style.display==="block")
    {
        console.log(hideBadge.style.display);
        hideBadge.style.display="none";   
    }
     else{
        hideBadge.style.display="block";  
    }

}

const onBaselineClickHandler =() =>{
        if(baselineSnackbar.style.display==="flex")
          {
            console.log(hideBadge.style.display);
             baselineSnackbar.style.display="none";   
            }
         else{
          baselineSnackbar.style.display="flex";  
             }
       
        }

hideButton.addEventListener("click",onHideClickHandler);
baselineButton.addEventListener("click",onBaselineClickHandler);
