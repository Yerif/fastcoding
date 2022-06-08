

var textInputElement = document.getElementById('textArea');
let frase = document.querySelector(".parrafo");
var test = document.querySelector(".test").innerText;
let body = document.querySelector("body");
var btnReset = document.getElementById("reiniciar");
var secs=0;
var j=0;

function tick (){
    setTimeout(add,1000);
};

function add() {
    secs++;
    console.log(secs);
    tick();
};

tick();








    btnReset.addEventListener("click", reiniciar);

    function reiniciar(){
        textInputElement.value="";
        textInputElement.disabled = false;
        
        frase.classList.remove("error");
        body.classList.remove("error");
        frase.innerHTML="";
        j=0;
        

       
    };

    

    
    function tiempoFinal(){
        var palabras = test.split(" ");
        var palabrasNum = palabras.length;
        console.log(palabrasNum);
        console.log(secs);
        var palabrasXMin = Math.floor((palabrasNum/secs)*60 );
        console.log(palabrasXMin);
        document.querySelector(".pxmin").innerHTML = ("Tus palabras por minuto son: " + palabrasXMin);
        j=0;
        
    }



      textInputElement.addEventListener('input', function(){
        var text = textInputElement.value;
        var i = text.length;
        let testSlice = test.slice(0,i);
        console.log(testSlice);
        console.log(text);

        frase.innerHTML = text;

       

        
        if(text===test){

           
            console.log("completo");
            textInputElement.disabled = true;
            tiempoFinal();
            clearTimeout(secs);

           


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


    j++;
        
        
        });



