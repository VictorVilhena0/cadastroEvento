// As três variáveis logo abaixo simulam uma data qualquer. Exemplo de data do evento: 04/11/2021

let dia = 1
let mes = 11
let ano = 2021

if (dia < 4 && mes <= 11 && ano <= 2021)
{
    console.log("Você ainda pode se cadastrar!")
    
    for (listaTotalPessoas = 0; listaTotalPessoas < 15; listaTotalPessoas++)
 {
    console.log("Participante número " + listaTotalPessoas)

    if (listaTotalPessoas >= 14)
    {
        console.log("Lista ainda possui espaço!")
        
            //Aqui suponhamos que o usuário digitou X idade e o valor foi enviado para a variável "idadeUser" 

            console.log("Informe a sua idade:")
            
            let idadeUser = 20

            if (idadeUser > 18)
            {
                console.log("Cadastro criado com sucesso! Você tem " + idadeUser + " anos!")
            }
            else
            {
                console.log("Cadastro negado: idade " + (idadeUser) + " é menor (ou igual) a 18.")
            }
    }
    else if (listaTotalPessoas >= 99)
    {
        console.log("Acesso negado: limite da lista alcançada.")
    }
 }
}
else
{
    console.log("Acesso negado: data expirada.")
}