import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <Header></Header>



      <main className="main-info">
        <Navbar></Navbar>
        <Profile></Profile>
      </main>
    </div>

  );
}

export default App;
