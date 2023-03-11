const disciplina = ["Linux", "Logica", "Excel","GGTI"]
["Prog web","Estrutura de dados","PTG", "metodologia"]

class Estudante{
    constructor(nome, email, ra, disciplina){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.disciplina = disciplina
    }
}

const estudante1 = new Estudante ("Bruna", "bruna@gmail.com", "1050482123007",disciplina[0])
console.log(estudante1)

const estudante2 = new Estudante ("Lai", "Lai@gmail.com", "1050482123005", disciplina2[1])
console.log(estudante2)