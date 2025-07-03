function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('dark');

  // if(html.classList.contains('dark')) {
  //   html.classList.remove('dark');
  // } else {
  //   html.classList.add('dark');
  // }

  // Pegar a tag img.
  const img = document.querySelector('#profile img');
  // Substituir a imagem.
  if (html.classList.contains('dark')) {
  // Se tiver no dark mode, adicionar a imagem dark.
    img.setAttribute('src', './assets/gabi2.png');
  } else {
  // Se não tiver no dark mode, manter a imagem normal.
    img.setAttribute('src', './assets/gabi.png');
  }
}