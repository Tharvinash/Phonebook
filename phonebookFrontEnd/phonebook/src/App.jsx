import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/layout/Home';
import AddContact from './components/layout/AddContact';

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add-contact' element={<AddContact />} />
      </Routes>
    </Router>
  )
}

export default App
