import Navbar from './Navbar/Navbar'
import Presentacion from './Presentacion/Presentacion';

function App() {
  const menuItems = ['Inicio', 'Marketplace', 'About', 'Login']
  const persona = {
    nombre: 'Gaston',
    edad: 32,
    numeroFavorito: 7
  }

  const incrementar = (valorActual) => {
    console.log(valorActual)
  }

  return (
    <div>
      <Navbar menuActual='Home' menuItems={menuItems} />
      <Presentacion persona={persona} incrementar={incrementar} />
    </div>
  );
}

export default App;
