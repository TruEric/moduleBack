
// Practica:
// Objetivo: Plasmar en funciones y callbacks el oroces de aplicación de kodemia
// 1.- Entrevista
// 2.- Oferta
// 3.- Inscripción
// 4.- Asistir a clase
//
// Materia prima: El Koder
// - entrevistado
// - Ofertado
// - inscrito
// - enClase

const koder = {
    entrevistado: false,
    ofertado: false,
    inscrito: false,
    enClase: false
}

function entrevistar(koderAEntrevistar) {
    koderAEntrevistar.entrevistado = true
    return koderAEntrevistar
}

function ofertar(koderAOfertar) {
    koderAOfertar.ofertado = true
    return koderAOfertar
}

function inscribir(koderAInscribir) {
    koderAInscribir.inscrito = true
    return koderAInscribir
}

function matriculado(koderAMatricular) {
    koderAMatricular.enClase = true
    return koderAMatricular
}

const koderEntrevistado = entrevistar(koder)
const koderOfertado = ofertar(koderEntrevistado)
const koderInscrito = inscribir(koderOfertado)
const koderMatriculado = matriculado(koderInscrito)

console.log('Estatus del koder: ', koderInscrito)