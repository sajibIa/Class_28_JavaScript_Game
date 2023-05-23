let headingPlayerOne=document.querySelector(".headingPlayerOne")
let playerOneInput=document.querySelector(".playerOneInput")
let playerOneButton=document.querySelector(".playerOneButton")
let error=document.querySelector(".error")
let playerTwoInput=document.querySelector(".playerTwoInput")
let playerTwoButton=document.querySelector(".playerTwoButton")
let chance=document.querySelector(".chance")
let count=5

playerOneButton.addEventListener("click",function(){
    
    if(!playerOneInput.value){
        error.innerHTML="Please Enter Something";
    }else{
        if(!(playerOneInput.value-12)){
            error.innerHTML="Please Enter Number";
        }else{
            if(playerOneInput.value<=10&& playerOneInput.value>0){
                playerTwoInput.style.display="inline-block"
                playerTwoButton.style.display="inline-block"
                playerOneInput.style.display="none"
                playerOneButton.style.display="none"
                headingPlayerOne.innerHTML="Player Two"
                chance.innerHTML=`Chance ${count}`
                

            }else{
                error.innerHTML="Please Enter a number 0 to 10";
            }
        }
    }
})
playerTwoButton.addEventListener("click",function(){

    if(!playerTwoInput.value){
        error.innerHTML="Enter Something";
    }else{
        if(!(playerTwoInput.value-12)){
            error.innerHTML="Guess a number"
        }else{
            if(playerTwoInput.value<=10&&playerTwoInput.value>0){
               
                if(count>1){
                count--
                chance.innerHTML=`Chance ${count}`
                
                if(playerOneInput.value==playerTwoInput.value){
                    headingPlayerOne.innerHTML="Player Two Winner";
                    playerTwoButton.style.display="none"
                }

                }else{
                    playerTwoButton.style.display="none"
                    headingPlayerOne.innerHTML="Player One Winner"
                }
            }else{
                error.innerHTML="Please Enter a number 0 to 10";
            }
        }

    }
    
    
})