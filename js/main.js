console.log("-- DESAFÍO 6 - GRUPAL :CARLOS BARRIOS - ENZO FERRARINI --");
console.log('-------Desafio 6 - Parte 1--------');
let title= document.title;
console.log("Titulo: "+title);

console.log('-------Desafio 6 - Parte 2--------');
function obtenerFullName(HTMLList){
    //El contador de campo se utilzia para usar etiquetas tipo CLASS en el codigo
    //original del index.html y poder detectar si estoy bucleando en los campos
    //de apellido para poner en MAYUSCULAS los textos.
    let contadorCampo=1;
    let fullName="";
        
    for(let index=0; index<HTMLList.length;index++)
    {  
        if(HTMLList[index].tagName=="DD" && HTMLList[index].innerText)
        {  
            if(index==1)
            {
                fullName=fullName.concat(HTMLList[index].innerText);
            }
            else
            {
                fullName=fullName.concat(" ");
                if(contadorCampo<=4)                              
                    fullName=fullName.concat(HTMLList[index].innerText);                  
                else               
                    fullName=fullName.concat(HTMLList[index].innerText.toUpperCase());                    
            }       
        }    
        contadorCampo++;       
    }    
    return '"'+fullName+'"';
}

let hs=document.getElementsByTagName("h2");
let dls=document.getElementsByTagName("dl");
let textoFinal="----------------\n";

for(let index=0; index<hs.length;index++)
{  
    const fullName=obtenerFullName(dls[index].children);
    textoFinal=textoFinal.concat(hs[index].innerText + ": " + fullName+"\n");

}
textoFinal=textoFinal.concat("----------------");
console.log(textoFinal);

console.log('-------Desafio 6 - Parte 3--------');
function checkCoincidences(integrantNames, tipoComparacion) {
    var coincidencias = "";
    var colorInput="";
    for (var i = 0; i < integrantNames.length; i++){
        for (var j = i + 1; j < integrantNames.length; j++) {
            if (integrantNames[i].innerText === integrantNames[j].innerText && integrantNames[i].innerText) {
                // alert(integrantNames[i].innerText);
                coincidencias = coincidencias + "[" + integrantNames[i].innerText + "]";
                if(colorInput=="")
                    colorInput = prompt("Se encontraron coincidencias en los "+tipoComparacion+", por favor ingrese un color para resaltarlos:");
                integrantNames[i].setAttribute("style", "color: " + colorInput + ";")
                integrantNames[j].setAttribute("style", "color: " + colorInput + ";")
            }
        }
    }
    if (coincidencias === "") {
        console.log("No hubo coincidencias en los "+tipoComparacion);
    } else {
        console.log("Coincidencias en los "+tipoComparacion+": " + coincidencias);
    }
}

function checkSurnames (input) {
    var ask = confirm("¿Desea comparar los apellidos?");
    if (ask) {
        checkCoincidences(input, "Apellidos");
    }
}

checkCoincidences(document.getElementsByClassName("name"), "Nombres");
checkSurnames(document.getElementsByClassName("surname") , "Apellidos");