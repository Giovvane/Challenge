document.addEventListener("DOMContentLoaded", () => {

  const perguntas = document.querySelectorAll(".faq-pergunta");

  perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
      const itemPai = pergunta.parentElement;
      itemPai.classList.toggle("ativo");
    });
  });
});
