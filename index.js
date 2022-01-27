// Badge
let hideButton=document.querySelector('.hide-btn');
let hideBadge=document.getElementById('hide-badge');

// Snackabar
let baselineButton=document.getElementById('baseline-btn');
let leadingButton=document.getElementById('leading-btn');
let stackedButton=document.getElementById('stacked-btn');
let baselineSnackbar=document.querySelector('#snackbar-baseline');
let leadingSnackbar=document.querySelector('#snackbar-leading');
let stackedSnackbar=document.querySelector('#snackbar-stacked');



    
const onHideClickHandler = () =>{
    if(hideBadge.style.display==="block")
    {
        hideBadge.style.display="none";   
    }
     else{
        hideBadge.style.display="block";  
    }

}

const onBaselineClickHandler =() =>{
        if(baselineSnackbar.style.display==="flex")
          {
             baselineSnackbar.style.display="none";   
            }
         else{
          baselineSnackbar.style.display="flex";  
             }
       
        }
        const onLeadingClickHandler =() =>{
            if(leadingSnackbar.style.display==="flex")
              {
                leadingSnackbar.style.display="none";   
                }
             else{
                leadingSnackbar.style.display="flex";  
                 }
           
            }
            const onStackedClickHandler =() =>{
                if(stackedSnackbar.style.display==="flex")
                  {
                    stackedSnackbar.style.display="none";   
                    }
                 else{
                    stackedSnackbar.style.display="flex";  
                     }
               
                }

hideButton.addEventListener("click",onHideClickHandler);
baselineButton.addEventListener("click",onBaselineClickHandler);
leadingButton.addEventListener("click",onLeadingClickHandler);
stackedButton.addEventListener("click",onStackedClickHandler);