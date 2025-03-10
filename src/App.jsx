// import LandingPage from "./pages/LandingPage";

// function App() {

//   return (
//     <>
//       <div className="" >
//         <LandingPage/>

//       </div>
//     </>
//   );
// }

// export default App;


  import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './Components/Global/Navbar.jsx';

function App() {

    const notify = () => toast("Wow so easy!");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")  .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      

      <h1>Frontend Connected to Backend</h1>
      <p>{message}</p>
       <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  );
}

export default App;
