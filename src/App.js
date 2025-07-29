import './App.css';
import CardsPage from './pages/CardsPage/CardsPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Footer from './widgets/footer/Footer';
import Header from './widgets/header/header.jsx';
import { BrowserRouter, Route, Routes, } from "react-router-dom"

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      <Header />  
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/cards' element={<CardsPage/>}/>
      </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;