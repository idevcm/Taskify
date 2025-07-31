import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import TasksPage from './pages/TasksPage'; 
import './App.css'
import HomePage from './pages/HomePage';

function App() {
  return ( 
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
  
  )
}

export default App
