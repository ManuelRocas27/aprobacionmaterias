const estudiantes = [
    {nombre: 'pedro', genero: 'masculino', nota: 4},
    {nombre: 'camila', genero: 'femenino', nota: 7},
    {nombre: 'roberto', genero: 'masculino', nota: 2},
    {nombre: 'alejandro', genero: 'masculino', nota: 8}
]

const pregunta = prompt('puedes filtrar estudiante por genero o resultados')

if(pregunta === 'genero') {
 // filro de estudiantes por genero
    const preguntaGenero = prompt('puedes filtrar genero masculino o femenenino')
    let filtroMujeres  = estudiantes
        .filter((estudiante) => estudiante.genero === 'femenino')
        .map(estudiante => estudiante.nombre)
    let filtroHombres = estudiantes
        .filter((estudiante) => estudiante.genero === 'masculino')
        .map(estudiante => estudiante.nombre)
    
    preguntaGenero === 'masculino' ? alert(filtroHombres) : alert(filtroMujeres)
} else if(pregunta === 'resultados') {
    const preguntaNota = prompt ('puedes filtrar si aprobó y reprobó la materia')
    let filtroAprobadas  = estudiantes
        .filter((estudiante) => estudiante.nota >= 3)
        .map(estudiante => estudiante.nombre)
    let filtroReprobadas = estudiantes
        .filter((estudiante) => estudiante.nota <= 3)
        .map(estudiante => estudiante.nombre)

    preguntaNota === 'aprobó' ? alert (filtroAprobadas) : alert (filtroReprobadas)
}