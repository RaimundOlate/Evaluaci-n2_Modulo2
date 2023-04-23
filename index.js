const contenido = document.querySelector('#tabla');

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => tabla(datos));

function tabla(datos) {
    contenido.innerHTML = '';
    for (let temp of datos) {
        contenido.innerHTML += `
    <tr>
        <td>${temp.name}</td>
        <td>
            <div>
                <button class="btn btn-outline-dark btn-sm" data-imagen="${temp.img}">Ver diseño</button>
                <img class="imagen-oculta" src="${temp.img}" style="display: none;">
            </div>
        </td>
        <td>${temp.level}</td>
    </tr>
    `;
    }

    // Agregar evento "click" a los botones
    const botonesImagen = document.querySelectorAll('button[data-imagen]');
    botonesImagen.forEach(boton => {
        boton.addEventListener('click', () => {
            const fila = boton.parentElement.parentElement.parentElement; // Obtener la fila que contiene el botón
            const imagen = fila.querySelector('.imagen-oculta'); // Obtener la imagen oculta correspondiente a la fila
            if (imagen.style.display === 'none') {
                imagen.style.display = 'block'; // Mostrar la imagen
            } else {
                imagen.style.display = 'none'; // Ocultar la imagen
            }
        });
    });
}