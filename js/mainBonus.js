console.log("-- DESAFÍO 6 - BONUS - GRUPAL :CARLOS BARRIOS - ENZO FERRARINI --");

let title= document.title;
console.log("Titulo: "+title);


window.onload = init;

function init() {
    const addIntegrant = document.getElementById("addIntegrant");   
    const chkNames = document.getElementById("chkNames");   
    const chkSurnames = document.getElementById("chkSurnames");   
    const limpiar = document.getElementById("limpiar");   
    addIntegrant.onclick = agregarIntegrante;
    chkNames.onclick = checkNames;    
    chkSurnames.onclick = checkSurnames;    
    limpiar.onclick = cleanAll;    
}

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

function mostrarIntergantes()
{
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
}


function agregarIntegrante() {

    const primerNombre=document.getElementById('primerNombre');
    const primerApellido=document.getElementById('primerApellido');
    const segundoNombre=document.getElementById('segundoNombre');
    const segundoApellido=document.getElementById('segundoApellido');

    if(primerNombre.value.trim()=="" || primerApellido.value.trim()=="")
    {
        alert("El Primer Nombre y el Primer Apellido son campos obligatorios, ingrese los mismos para continuar...");
        return;
    }
    
    let cantidadLabel=document.getElementById("nroIntegrantes");
    let formularioResultados=document.getElementById("formularioResultados");
    const newValue=parseInt(cantidadLabel.innerHTML)+1;
    cantidadLabel.innerText=newValue;

    let div= crearTarjetaIntegrante(primerNombre.value,segundoNombre.value,primerApellido.value,segundoApellido.value,newValue);
    formularioResultados.appendChild(div);

    primerNombre.value="";
    segundoNombre.value="";
    primerApellido.value="";
    segundoApellido.value="";

    mostrarIntergantes();   
}

function crearTarjetaIntegrante(primerNombre,segundoNombre,primerApellido,segundoApellido,newValue)
{
    const div = document.createElement("div");
    div.className="cardIntegrante";
    const h = document.createElement("h2");
    h.innerText="Integrante Nro.:" +newValue;
    const dl = document.createElement("dl");
    let dt = document.createElement("dt");
    dt.innerText="Primer nombre";    
    let dd = document.createElement("dd");
    dd.innerText=primerNombre;
    dd.className="name";
    dl.appendChild(dt);
    dl.appendChild(dd);
   
    dt = document.createElement("dt");
    dt.innerText="Segundo nombre";
    dd = document.createElement("dd");
    dd.innerText=segundoNombre;
    dd.className="name";
    dl.appendChild(dt);
    dl.appendChild(dd);

    dt = document.createElement("dt");
    dt.innerText="Primer apellido";    
    dd = document.createElement("dd");
    dd.innerText=primerApellido;
    dd.className="surname";
    dl.appendChild(dt);
    dl.appendChild(dd);

    dt = document.createElement("dt");
    dt.innerText="Segundo apellido";
    dd = document.createElement("dd");
    dd.innerText=segundoApellido;
    dd.className="surname";
    dl.appendChild(dt);
    dl.appendChild(dd);

    div.appendChild(h);
    div.appendChild(dl);

    return div;
}

function checkNames() {
    const integrantNames = document.getElementsByClassName("name");   
    let coincidencias = "";
    let colorInput;
    let primerCoincidencia=true;
    for (let i = 0; i < integrantNames.length; i++){
        for (let j = i + 1; j < integrantNames.length; j++) {
            if (integrantNames[i].innerText === integrantNames[j].innerText && integrantNames[i].innerText !== "") {
                if(primerCoincidencia)
                {
                    colorInput = prompt("Se encontraron coincidencias en los Nombres, por favor ingrese un color para resaltarlos:");
                    primerCoincidencia=false;
                }
                coincidencias = coincidencias + "[" + integrantNames[i].innerText + "]";
                integrantNames[i].setAttribute("style", "color: " + colorInput + ";")
                integrantNames[j].setAttribute("style", "color: " + colorInput + ";")
            }
        }
    }
    if (coincidencias === "") {
        console.log("No hubo coincidencias en Nombres");
    } else {
        console.log("Coincidencias en Nombres: " + coincidencias);
    }

    if(primerCoincidencia)
    {
        alert("No se encontraron coincidencias en los Nombres...");
    }
}

function checkSurnames() {
    const integrantNames = document.getElementsByClassName("surname"); 
    let coincidencias = "";
    let colorInput;
    let primerCoincidencia=true;
    for (let i = 0; i < integrantNames.length; i++){
        for (let j = i + 1; j < integrantNames.length; j++) {
            if (integrantNames[i].innerText === integrantNames[j].innerText && integrantNames[i].innerText !== "") {
                if(primerCoincidencia)
                {
                    colorInput = prompt("Se encontraron coincidencias en los Apellidos, por favor ingrese un color para resaltarlos:");
                    primerCoincidencia=false;
                }
                coincidencias = coincidencias + "[" + integrantNames[i].innerText + "]";
                integrantNames[i].setAttribute("style", "color: " + colorInput + ";")
                integrantNames[j].setAttribute("style", "color: " + colorInput + ";")
            }
        }
    }
    if (coincidencias === "") {
        console.log("No hubo coincidencias en Apellidos");
    } else {
        console.log("Coincidencias en Apellidos: " + coincidencias);
    }

    if(primerCoincidencia)
    {
        alert("No se encontraron coincidencias en los Apellidos...");
    }
}

function cleanAll() {
    if(confirm("Esta seguro que desea Eliminar todos los Integrantes?"))
    {
        const formularioResultados=document.getElementById("formularioResultados");
        const nroIntegrantes=document.getElementById("nroIntegrantes");
        nroIntegrantes.innerText="0";

        while (formularioResultados.firstChild) {
            //alert();
            formularioResultados.removeChild(formularioResultados.firstChild);
        }
    }
}