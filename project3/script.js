let playerOneInput=document.querySelector(".playerOneInput")
let playerOneButton=document.querySelector(".playerOneButton")
let error=document.querySelector(".error")
let playerHeading=document.querySelector(".playerHeading")
let playerTwoInput=document.querySelector(".playerTwoInput")
let playerTwoButton=document.querySelector(".playerTwoButton")
let give=document.querySelector(".give")
let chance=document.querySelector(".chance")
let errorTwo=document.querySelector(".errorTwo")
let count=5

playerOneButton.addEventListener("click",function(){
    
    if(!playerOneInput.value){
        error.innerHTML="Please Enter Something"
    }else{
        if(!(playerOneInput.value-12)){
            error.innerHTML="Please Enter A Number"
        }else{
            if(playerOneInput.value<=10&& playerOneInput.value>0){
                playerHeading.innerHTML="Player Two"
                chance.style.display="block"
                playerTwoInput.style.display="inline-block"
                playerTwoButton.style.display="inline-block"
                playerOneInput.style.display="none"
                playerOneButton.style.display="none"
                give.style.display="none"
                error.style.display="none"
                chance.innerHTML=`Chance ${count}`

                //Extra css for design
                //chance
                chance.style.color= "white";
                chance.style.marginTop="80px";
                chance.style.fontSize="40px";
                chance.style.textAlign="center";
                chance.style.marginBottom="30px";
                //error
                errorTwo.style.color="white"
                errorTwo.style.textAlign="center"
                // input
                playerTwoInput.style.fontSize="30px"
                playerTwoInput.style.textAlign= "center"
                playerTwoInput.style.margin="auto"
                playerTwoInput.style.display="flex"
                playerTwoInput.style.width= "300px"
                playerTwoInput.style.height= "50px"
                playerTwoInput.style.border="0"
                playerTwoInput.style.marginBottom="40px";
                playerTwoInput.style.marginTop="10px"
                playerTwoInput.style.outline= "0";
                // button
                playerTwoButton.style.display="block";
                playerTwoButton.style.margin="auto";
                playerTwoButton.style.paddingTop="10px"
                playerTwoButton.style.paddingBottom="10px"
                playerTwoButton.style.paddingRight="60px"
                playerTwoButton.style.paddingLeft="60px"
                playerTwoButton.style.background="#7373FF";
                playerTwoButton.style.color="white";
                playerTwoButton.style.fontFamily="'Poppins', sans-serif";
                playerTwoButton.style.fontSize="18px";
                playerTwoButton.style.fontWeight="700";
                playerTwoButton.style.textTransform="uppercase";
                playerTwoButton.style.borderRadius="5px";
                playerTwoButton.style.border= "none";
                playerTwoButton.style.marginBottom= "30px";
                

                
            }else{
                error.innerHTML="Please Enter A Number 1 To 10";
            }
        }
    }
})
playerTwoButton.addEventListener("click",function(){
    console.log(playerTwoInput.value);
    if(!playerTwoInput.value){
        errorTwo.innerHTML="Please Enter Something"
    }else{
        if(!(playerTwoInput.value-12)){
            errorTwo.innerHTML="Please Enter A Number"
        }else{
            if(playerTwoInput.value<=10&&playerTwoInput.value>0){
                
                if(count>1){
                    count--
                chance.innerHTML=`Chance ${count}`
                if(playerOneInput.value==playerTwoInput.value){
                    playerTwoButton.style.display="none"
                    playerHeading.innerHTML="Player Two Winner"
                    error.style.display="none"
                }
                
                }else{
                    count=0
                    chance.innerHTML=`Chance ${count}`
                    playerTwoButton.style.display="none" 
                    playerHeading.innerHTML="Player One Winner"
                    error.style.display="none"

                }
                
                
            }else{
                errorTwo.innerHTML="Please Enter A Number 1 To 10";
            }
        }
    }
})

