// Importando o arquivo CSS global
import '../public/style.css'; // Certifique-se de que o caminho está correto

// Função que inicializa a aplicação
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;