function app() {
    removeRow();
}

app();




function removeRow() {
    const btn = document.querySelectorAll('.trash');
    console.log(btn)
    btn.forEach(element => {
        console.log(element);
        element.addEventListener('click', (event) => {
            //Añadimos una clase para que se elimine
            const contenedor = document.querySelector('.contenedor__lista');
            console.log(contenedor);
            const p = document.createElement('p');
                
            event.target.parentNode.parentNode.classList.add('animation');
            setTimeout(() => {
                event.target.parentNode.parentNode.remove();
                p.classList.add('alerta-eliminado');
                p.textContent = "Objeto Eliminado Correctamente";
                contenedor.insertBefore(p, contenedor.firstChild);
            }, 2000);
            

            

            setTimeout(() => {
                p.remove();
            }, 6000);
        })
    });

}