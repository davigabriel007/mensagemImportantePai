export default function Home() {
    // Lista de emojis de corações
    const heartEmojis = ['❤️', '💗', '💜', '💙', '💚', '💖', '💫'];
  
    // Função que cria os "corações" e mantém o "Eu te amo mãe" centralizado
    const heartCreate = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      
      // Pega o próximo emoji da lista de corações, sequencialmente
      const randomIndex = Math.floor(Math.random() * heartEmojis.length);
      heart.innerText = heartEmojis[randomIndex];  // Usando o emoji de coração escolhido
  
      // Definindo a posição aleatória para a esquerda (horizontal)
      const leftPosition = Math.random() * 100;  // 0 a 100% da largura da tela
      heart.style.left = `${leftPosition}%`;  // Definindo a posição horizontal
  
      // Adicionando o coração ao body
      document.body.appendChild(heart);
  
      // Remover o coração depois que ele terminar a animação (evita acúmulo de elementos)
      setTimeout(() => {
        heart.remove();
      }, 3000);  // A animação de queda leva 3s, então removemos o coração após isso
    };
  
    // Executa heartCreate a cada 300ms para gerar corações continuamente
    setInterval(heartCreate, 300);
  
    return (
      <div>
        {/* Texto "Eu te amo mãe" centralizado no meio */}
        <div className="heart-text">Eu te amo mãe</div>
      </div>
    );
  }