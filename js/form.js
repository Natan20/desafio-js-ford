
//class contato

class contato {

    // Representa os dados do formulário
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato){

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
    
}

// FUNÇÃO POST
// Captura os dados do formulário e cria o objeto contato
function Post(form) {

    // impede reload corretamente
    event.preventDefault();

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

    // chama a função Enviar 
    Enviar(form);

    console.log(data);

    return false;

}

function Enviar(form) {

    

    // pega o input correto (PELO NAME)
    var nome = form.elements.namedItem("nome");

    // validação correta
    if (nome.value.trim() !== "") {

        alert(
            "Obrigado Sr(a) " +
            nome.value +
            ", os seus dados foram encaminhados com sucesso"
        );

        return false;
    }

    // só aparece se estiver vazio
    alert("Preencha o nome antes de enviar");

    return false;
}