// create an array to hold the individual characters that form the hexadecimal color values
const hexColorComponents=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
// get the background color button ID
const changeBackground=document.getElementById('changeBackground');

changeBackground.addEventListener('click',()=>{
    //initialize the hexadecimal color value with the prefix #
    let hexColorValue='#';
    for(let counter=0;counter<6;counter++){
        let randomHexCharacter=generateRandomCharacter();
        hexColorValue+=hexColorComponents[randomHexCharacter];  
        }
    document.body.style.backgroundColor=hexColorValue;
})

function generateRandomCharacter(){
    return Math.floor(Math.random()*hexColorComponents.length);
}


