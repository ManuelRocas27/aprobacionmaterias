const estudiante = [
    {nombre: 'Pedro', genero: 'masculino', nota: 2.5},
    {nombre: 'Camila', genero: 'femenino', nota: 3.5},
    {nombre: 'Roberto', genero: 'masculino', nota: 2},
    {nombre: 'Alejandro', genero: 'masculino', nota: 4.7},
    {nombre: 'Laura', genero: 'femenino', nota: 4},
];

const generoRadio = document.getElementsByName('genero');
const resultadosRadio = document.getElementsByName('resultados');
const resultsContainer = document.getElementById('results');

generoRadio.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedGenero = radio.value;

        if (selectedGenero === 'all') {
            resultsContainer.textContent = '';
        } else {
            const filteredNames = estudiante
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
            const filteredNames = estudiante
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

//Este es el uso del local storage, no tiene mucha funcionalidad en este ejemplo, pero lo implementé y está funcionando.
function savelocalstorage (){
    localStorage.setItem('Estudiantes', JSON.stringify (estudiante));
    const savedResultados = JSON.parse(localStorage.getItem('Estudiantes'));
    console.log (savedResultados)
}
savelocalstorage ()