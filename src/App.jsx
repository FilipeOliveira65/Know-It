import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Logo from './components/logo'
import StartButton from './components/startButton';
import LoginPage from './LoginPage';
import StartPage from './StartPage';

function HomePage() {
  return (
    <div className='container'>
      <Logo/>
      <StartButton to='/login'/>
      
      {/* <StartPage/> */}
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
          <Route path='/teste' element={<StartPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
