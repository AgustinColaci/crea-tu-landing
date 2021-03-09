import ItemListContainer from './components/ItemListContainer';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer title= "Mis productos" />
    </>
  );
}

export default App;
