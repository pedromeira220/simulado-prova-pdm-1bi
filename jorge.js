// Lista de alunos

const listaAlunos = [
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nomeMateria: "TIA",
                totalHoras: 100,
                presenca: 75,
                nota: 10
            },
            {
                nomeMateria: "PDM",
                totalHoras: 100,
                presenca: 50,
                nota: 5
            },
        ]
    },
]

// Precisa ter 75% de presença ou mais
// Precisa ter nota acima de 6
function avaliaAluno(materia) {
    if (materia.nota >= 6 && materia.presenca >= 75) {
        // Aprovado
        // ...
        console.log("APROVADO")
        console.log("NOTA: " + materia.nota)
        console.log("PRESENCA: " + materia.presenca)
        return
    }

    console.log("REPROVADO: ")
    console.log("NOTA: " + materia.nota)
    console.log("PRESENCA: " + materia.presenca)
}

function validaTurma(listaDeAluno) {
    // FOR/FOREACH que veja cada aluno
        // FOR/FOREACH que veja cada materia desse aluno
    
}