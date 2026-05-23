const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato pelo e-mail: ${email}.`);

    formulario.reset();
});