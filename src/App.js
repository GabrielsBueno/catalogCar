
import './App.scss';

import TopBar from './componentes/topBar/topBar';
import Catalog from './componentes/catalogCars/catalogCars'
import Banner from './componentes/banner/banner'


function App() {
  return (
    <div className='pageLayout'>
      <TopBar></TopBar>
      <Banner></Banner>
      <Catalog></Catalog>
    </div>
  );
}

export default App;
