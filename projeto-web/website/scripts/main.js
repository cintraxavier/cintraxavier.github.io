let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/ciber.jpg') {
      minhaImagem.setAttribute ('src','imagens/ciber2.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/ciber.jpg');
    }
}

