function app() {
    removeRow();
}

app();




function removeRow() {
    document.querySelector('.contenedor__lista').addEventListener('click', (event) => {
        if (event.target.classList.contains('trash')) {
            const contenedor = document.querySelector('.contenedor__lista');
            const p = document.createElement('p');
            
            setTimeout(() => {
                event.target.parentNode.parentNode.remove();
                p.classList.add('alerta-eliminado');
                p.textContent = "Objeto Eliminado Correctamente";
                contenedor.insertBefore(p, contenedor.firstChild);
            }, 1000);
    
            setTimeout(() => {
                p.remove();
            }, 3000);
        }
    });
}
