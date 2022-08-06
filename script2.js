const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')
//ESCUCHAR EL EVENTO DESDE JAVASCRIPT SIN HACE USO DEL ONCLICK EN HTML
//DENTRO DEL ADDEVENTLISTENER, NO ES NECESARIOS COLOCAR LOS PARÈNTESIS EN LAS FUNCIONES

btn.addEventListener('click',btnOnClick);

//form.addEventListener('submit',sumarInputValues)
function btnOnClick(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado " + sumaInputs
}
function sumarInputValues(event){
    console.log({event});
    //HACES QUE NO REALICE EL EVENTO POR DEFECTO
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado " + sumaInputs
}


