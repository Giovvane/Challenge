document.addEventListener("DOMContentLoaded", () => {

  const perguntas = document.querySelectorAll(".faq-pergunta");

  perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
      const itemPai = pergunta.parentElement;
      itemPai.classList.toggle("ativo");
    });
  });
    
  const formularioFaq = document.getElementById("faq-form");
  const alertaSucesso = document.getElementById("mensagem-sucesso");

  if (formularioFaq) {
    formularioFaq.addEventListener("submit", (evento) => {
      evento.preventDefault(); 
      alertaSucesso.style.display = "block";
      formularioFaq.reset();

      setTimeout(() => {
        alertaSucesso.style.display = "none";
      }, 5000);
    });
  }

  const botaoEnviarCaixa = document.getElementById("btn-enviar-caixa");
  const campoTextoCaixa = document.getElementById("texto-usuario");
  
  
  const msgSucesso = document.getElementById("caixa-sucesso");
  const msgErro = document.getElementById("caixa-erro");

  if (botaoEnviarCaixa && campoTextoCaixa) {
    botaoEnviarCaixa.addEventListener("click", () => {
      const mensagem = campoTextoCaixa.value.trim();

      
      if (msgSucesso) msgSucesso.style.display = "none";
      if (msgErro) msgErro.style.display = "none";

      if (mensagem !== "") {
        
        if (msgSucesso) {
          msgSucesso.style.display = "block";
          setTimeout(() => {
            msgSucesso.style.display = "none";
          }, 4000);
        } else {
          
          alert("Obrigado pelo seu comentário na caixa flutuante!");
        }
        campoTextoCaixa.value = ""; 

      } else {
        
        if (msgErro) {
          msgErro.style.display = "block";
          setTimeout(() => {
            msgErro.style.display = "none";
          }, 4000);
        } else {
          
          alert("Por favor, digite uma mensagem antes de clicar em enviar.");
        }
      }
    });
  }
});

