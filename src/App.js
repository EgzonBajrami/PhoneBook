
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import HomePage from './Pages/HomePage/HomePage';
import CreateContact from './Pages/CreateContact/CreateContact';
import EditPage from './Pages/EditPage/EditPage';

function App() {
  return<>
  <BrowserRouter>
  
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/createContact" element={<CreateContact />} />
    <Route path="/edit/:id" element={<EditPage />} />

  </Routes>
  </BrowserRouter>
  </>
}

export default App;
