// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute('href'));
    if (destino) destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Confirmação no console (aperte F12 para ver)
console.log('%c🎮 KERNEL-T.I carregado!', 'color: #00d4ff; font-weight: bold;');