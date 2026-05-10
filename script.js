// Rolagem suave para todos os links com #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mensagem no console (aperte F12 para ver)
console.log('%c🎮 KERNEL-T.I | GTF - Games The Fato', 'color: #00d4ff; font-weight: bold; font-size: 14px;');
console.log('%c📄 Site carregado com sucesso. Pronto para atualizações!', 'color: #888;');