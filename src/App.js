import logo from './logo.svg';
import Test from './pages/test';
import './styles/base.css';
import './App.css';
import Admin from './pages/Admin';
import { useState } from 'react';
import { AlertModal } from './components/AlertModal/AlertModal';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <AlertModal
        isOpen={isOpen}
        onRequestClose={() => {}}
        title='Test Title'
        message='Test Message'
      />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}>
        Open Modal
      </button>
    </div>
  );
}

export default App;
