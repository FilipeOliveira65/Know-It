import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Logo from './components/logo'
import StartButton from './components/startButton';
import LoginPage from './LoginPage';

function HomePage() {
  return (
    <div id='container'>
      <Logo/>
      <StartButton/>
    </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    
      
    </>
  )
}

export default App
