

var textInputElement = document.getElementById('textArea');
let frase = document.querySelector(".parrafo");
var test = document.querySelector(".test").innerText;
let body = document.querySelector("body");
var btnReset = document.getElementById("reiniciar");


    btnReset.addEventListener("click", reiniciar);

    function reiniciar(){
        textInputElement.value="";
        textInputElement.disabled = false;
        
        frase.classList.remove("error");
        body.classList.remove("error");
        frase.innerHTML="";
       
    };

    

    



      textInputElement.addEventListener('input', function(){
        var text = textInputElement.value;
        var i = text.length;
        let testSlice = test.slice(0,i);
        console.log(testSlice);
        console.log(text);

        frase.innerHTML = text;
       

    function tiempoFinal(){
        var palabras = test.split(" ");
        var palabrasNum = palabras.length;
        console.log(palabrasNum);
        var palabrasXMin = (palabrasNum/j)*60;
        console.log(palabrasXMin);
        document.querySelector(".pxmin"),innerHTML = ("Tus palabras por minuto son: " + palabrasXMin)
    }
        
        if(text===test){

           
            console.log("completo");
            textInputElement.disabled = true;
           


        }else{

            if(text === testSlice){
                console.log("Correcto");
                frase.classList.remove("error");
                body.classList.remove("error");
                
            
                
    
            }else {
                console.log("Error");
                frase.classList.add("error");
                body.classList.add("error");
                
            }

        }


    
        
        
        });



