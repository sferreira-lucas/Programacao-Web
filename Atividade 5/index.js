class Estudante{
    constructor(nome, email, ra, idade, curso, disciplinas)
    {
        this.nome = nome
        this.email = email
        this.idade = idade
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }

}
const estudante1 = new Estudante("Lucas","Lucas@email.com",25,"1234567890","Analise e Desenvolvimento de sistemas",["Gestão de TI", "POO", "Engenharia de Software 2"])

const estudante2 = new Estudante("Andre","Andre@email.com",20,"9876543210","Analise e Desenvolvimento de sistemas",["Programação Web", "Estrutura de Dados", "Engenharia de Software 3"])
    
    console.log(estudante1)
    console.log(estudante2)
    
