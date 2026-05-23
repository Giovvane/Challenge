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
});
