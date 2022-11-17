import logo from '../../components/img/logo.svg';
import Preloader from '../../containers/partials/preloader';
import Header from '../../containers/partials/header';

import Home from '../../containers/sections/home';
import Clients from '../../containers/sections/clients';
import Work from '../../containers/sections/work';
import About from '../../containers/sections/about';
import Feature from '../../containers/sections/feature';
import Transaction from '../../containers/sections/transaction';
import Testimonial from '../../containers/sections/testimonial';

import Top from '../../containers/partials/top';
import Footer from '../../containers/partials/footer';
//import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />

      <Home />

      <Work />
      <About />
      <Feature />
      <Transaction />

      <Top />
      <Footer />
    </div>

  );
}

export default App;