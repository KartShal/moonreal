import './App.css';
import CardsPage from './pages/CardsPage/CardsPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Footer from './widgets/footer/Footer';
import Header from './widgets/header/header.jsx';
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import { Provider } from "react-redux";
import store from './store/redux-store.jsx';

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
      <BrowserRouter>
      <Header />  
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/cards' element={<CardsPage />}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;