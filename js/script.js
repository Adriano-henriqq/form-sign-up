const botao = document.getElementById('botao');

botao.addEventListener("click", (e) =>{
    e.preventDefault();
    validaInput();
    validaEmail()
})

function validaInput(){
  const input = document.querySelectorAll("[data-input]");
  input.forEach(caixa => {
    var valorInput = caixa.value;
      if(valorInput == ''){
        caixa.placeholder = "";
        caixa.classList.add('mensagem--erro');
        exibeMensagem();
      }else{
        caixa.classList.remove('mensagem--erro');
        removeMensagem();
      } 
  })
  
}

function validaEmail(){
  const erroEmail = document.querySelector("[data-erro]");
  var valorEmail = document.getElementById('email');
  var re = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if(re.test(valorEmail.value) === false) {
    document.getElementById('email').placeholder = "email@example/com";
    erroEmail.classList.add('mensagem-erro');
    erroEmail.classList.add('texto-erro--ativo');
    console.log('email invalido');
  }else{
    console.log('email valido');
    erroEmail.classList.remove('mensagem-erro');
    erroEmail.classList.remove('texto-erro--ativo');
    
  }

}

function exibeMensagem(){
    var mensagemErro = document.querySelectorAll(".texto-erro");
    mensagemErro.forEach(erro => {
    erro.classList.add('texto-erro--ativo');
})
}

function removeMensagem(){
    var mensagemErro = document.querySelectorAll(".texto-erro");
    mensagemErro.forEach(erro => {
    erro.classList.remove('texto-erro--ativo');
})
}