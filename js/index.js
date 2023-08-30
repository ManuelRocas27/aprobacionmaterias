//Este es un uso de Sweet Alert que alerte que solo profesores pueden ingresar a la plataforma

Swal.fire(
    'Es usted profesor?',
    'De no ser así, por favor cierre la ventana',
    'warning'
)

//Este es el código de mi aplicación que trae los datos del archivo JSON con un FECTH. 

const generoRadio = document.getElementsByName('genero');
const resultadosRadio = document.getElementsByName('resultados');
const resultsContainer = document.getElementById('results');

let estudiantes = []; // un array que almacene todo el data

// Uso de fetch
fetch('http://127.0.0.1:5500/js/estudiantes.json')
.then(response => response.json())
.then(data => {
    estudiantes = data.estudiante; // Almacenamiento de la data utilizada por el fetch

    generoRadio.forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedGenero = radio.value;

            if (selectedGenero === 'all') {
                resultsContainer.textContent = '';
            } else {
                const filteredNames = estudiantes
                    .filter(estudiante => estudiante.genero === selectedGenero)
                    .map(estudiante => estudiante.nombre);

                resultsContainer.textContent = `Estudiantes de género ${selectedGenero}: ${filteredNames.join(', ')}`;
            }
        });
    });

    resultadosRadio.forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedResultados = radio.value;

            if (selectedResultados === 'all') {
                resultsContainer.textContent = '';
            } else {
                const filteredNames = estudiantes
                    .filter(estudiante => {
                        if (selectedResultados === 'aprueban la materia') {
                            return estudiante.nota >= 3;
                        } else {
                            return estudiante.nota < 3;
                        }
                    })
                    .map(estudiante => estudiante.nombre);

                resultsContainer.textContent = `Estudiantes que ${selectedResultados}: ${filteredNames.join(', ')}`;
            }
        });
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});

//Este código utiliza operadores avanzados y ternarios.
const savelocalstorage = () => {
    fetch('http://127.0.0.1:5500/js/estudiantes.json')
        .then(response => response.json())
        .then(data => {
            const estudiante = data.estudiante;
            localStorage.setItem('Estudiantes', JSON.stringify(estudiante));
            const savedResultados = JSON.parse(localStorage.getItem('Estudiantes'));
            console.log(savedResultados);
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
}

savelocalstorage();

//Este es el uso del local storage, no tiene mucha funcionalidad en este proyecto, pero lo implementé y está funcionando. Este código utiliza operadores avanzados y ternarios.
const inutilfunction = () => {
    localStorage.setItem('Estudiantes', JSON.stringify (estudiante));
    const savedResultados = JSON.parse(localStorage.getItem('Estudiantes'));
    console.log (savedResultados)
}
savelocalstorage ()