const listaAlunos = [
    {
        nome: "Pedro",
        idade: 17,
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
                presenca: 75,
                nota: 5
            }
        ]
    }
]

listaAlunos.forEach(aluno => {
    avaliaAluno(aluno)
})

function passouNaMateria(materia) {
    if (materia.nota >= 6 && materia.presenca >= 75) {
        return true
    }
    return false
}

// Pro aluno passar de ano ele precisa ter passado em todas as materias
function avaliaAluno(aluno) {
    console.log("Aluno: ", aluno.nome);

    let alunoPassouDeAno = true

    aluno.materias.forEach(materia => {
        const alunoPassouNaMateria = passouNaMateria(materia)
        console.log("Materia: ", materia.nomeMateria);
        console.log("Passou na materia: ", alunoPassouNaMateria);

        if (!alunoPassouNaMateria) {
            alunoPassouDeAno = false
            return
        }
    })

    if (alunoPassouDeAno) {
        console.log("Aluno passou de ano");
    } else {
        console.log("Aluno não passou de ano");
    }
}