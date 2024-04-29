document.getElementById('enviarLista').addEventListener('click', () => {
  const mensagem = document.getElementById('convidados').value;
  const numeroWhatsApp = '556182103445'; // Substitua pelo seu número de telefone
  const aviso = 'Olá, Eu preenchi a lista de convidados com os nomes:';
  const mensagemFormatada = encodeURIComponent(mensagem);
  const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${aviso}%0A${mensagemFormatada}`;
  
  window.open(whatsappLink, '_blank');
});
