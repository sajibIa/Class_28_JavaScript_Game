let playerOneInput=document.querySelector(".playerOneInput")
let playerOneButton=document.querySelector(".playerOneButton")
let error=document.querySelector(".error")
let playerTwoInput=document.querySelector(".playerTwoInput")
let playerTwoButton=document.querySelector(".playerTwoButton")
let headingPlayerOne=document.querySelector(".headingPlayerOne")
let chance=document.querySelector(".chance")
let count=5

playerOneButton.addEventListener("click",function(){
    
    if(!playerOneInput.value){
        error.innerHTML="Please enter Something"
    }else{
        if(!(playerOneInput.value-12)){
            error.innerHTML="Please enter number"
        }else{
            if(playerOneInput.value<=10 && playerOneInput.value>0){
                playerTwoInput.style.display="inline-block"
                playerTwoButton.style.display="inline-block"
                playerOneInput.style.display="none"
                playerOneButton.style.display="none"
                error.style.display="none"
                headingPlayerOne.innerHTML="Player Two"
                chance.innerHTML=`Chance ${count}`

            }else{
                error.innerHTML= "Please enter a number 0 to 10"
            }
        }
    }

})

playerTwoButton.addEventListener("click",function(){
    
    if(count>1){
        count--
       chance.innerHTML=`Chance ${count}`
       if(playerOneInput.value==playerTwoInput.value){
        playerTwoButton.style.display="none"
        headingPlayerOne.innerHTML="Player two winner"

       }

    }else{
        count=0
        // chance.innerHTML=`Chance ${count}`
        
        playerTwoButton.style.display="none"
        headingPlayerOne.innerHTML="Player One winner"


   
       

    }
    
})

