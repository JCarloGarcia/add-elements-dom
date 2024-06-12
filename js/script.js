 // Aquí tu código

 const lista = document.getElementById('lista');
 const  agregar = document.getElementById('agregar');

 agregar.addEventListener('click', function (){
    let elementoNuevo = prompt('Ingrese aquí su elemento');
    if (elementoNuevo){
        let li = document.createElement('li');
        li.textContent = elementoNuevo;
        lista.appendChild(li);
    };
   
 });

