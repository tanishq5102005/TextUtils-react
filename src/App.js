import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03132c';
      showAlert("Dark mode applied successfully", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode applied successfully", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      {/* Navbar stays on all pages */}
      <Navbar
        title="Textutils"
        aboutText="About Textutils"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* Alert stays on all pages */}
      <Alert alert={alert} />

      {/* Pages change here */}
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route
            path="/"
            element={<TextForm heading="Enter your text to analyze" mode={mode} />}
          />

          <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}

          <TextForm heading="Enter your text to analyze" mode={mode} />

      </div>
    </>
  );
}

export default App;
