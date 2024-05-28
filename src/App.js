import { ToastContainer, toast ,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// write to terminal first "npm i react-toastify"
//write to terminal second "npm install --save react-toastify"
  function notify () {
    toast.error('Password error!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  function App() {
    
    return (
      <div className="App">
        <button onClick={notify}>Click!</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    );
  }


export default App;
