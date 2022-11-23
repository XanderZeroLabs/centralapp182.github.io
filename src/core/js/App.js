import logo from '../../components/img/logo.svg';
import Preloader from '../../containers/partials/preloader';
import Header from '../../containers/partials/header';

import Inicio from '../../containers/sections/inicio';
import Clients from '../../containers/sections/clients';

import Pasos from '../../containers/sections/pasos';
import Planes from '../../containers/sections/planes';
import Informacion from '../../containers/sections/informacion';

import Top from '../../containers/partials/top';
import Footer from '../../containers/partials/footer';
//import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />

      <Inicio />
      <Pasos />
      <Planes />
      <Informacion />

      <Top />
      <Footer />
    </div>

  );
}

export default App;