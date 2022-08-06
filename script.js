//SE SELECCIONA POR ETIQUETA, CLASE O ID
const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const parrafito = document.querySelector('.parrafito')
const pip = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})
//innerHTML --> COMBIERTE TODO A HTML
h1.innerHTML = 'Patito <br> Feo'
//innerText --> SOLO ES TEXTO
h1.innerText = 'Patito <br> Feo'
h1.getAttribute('pantalla')
console.log(h1.getAttribute('pantalla'))
h1.setAttribute('pantalla','verde')
//AGREGAS CLASES
h1.classList.add('rojo')
//
h1.classList.remove('rojo')
//h1.classList.toggle('verde')
//h1.classList.contains('verde')

input.value = "546"
//CREAE ELEMENTOS DESDE CERO"
const img = document.createElement('img');
//FORMA 1
img.src = '---'
//FORMA 2
img.setAttribute('src','logo.png')

confirm.log(img)
//SE ESTÀ AGREGANDO LA IMAGEN AL CONTENEDOR CON EL ID PIP, PARA INSERTARLO EN EL HTML, DESPUES DEL CONTENIDO
pip.append(img)

//ELIMINAR CONTENIDO
pip.innerHTML = "";
pip.append(img)