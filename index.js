//crear variable que contega los datos
var contenido = document.querySelector('#tabla')


//Llamada a la API con fetch. Extraer datos de una url con una api
fetch('https://digimon-api.vercel.app/api/digimon')
    //convierte
    .then(response => response.json())
    //asigna datos a la funcion
    .then(datos => { tabla(datos) })



function tabla(datos) {
    contenido.innerHTML = ''
    for (let temp of datos) {
        contenido.innerHTML += `
            <tr> 
                <th scope='row'>${temp.name}</th>
                <td>${temp.img}</td>
                <td>${temp.level}</td>
            </tr>
            `
    }
}