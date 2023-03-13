import logo from './logo.svg';
import './App.css';
import { PhoneList } from './PhoneList';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { ProtectedRoute } from './ProtectedRoute';



// 1
// Next go to PhoneList.js


// function App() {
//   return (
//     <div className="App">

//        <Routes>
//         <Route path="/" element={<Home />} />
                                                          
//         <Route path="/mobiles" element={ <PhoneList /> } />  

//       </Routes>

//     </div>
//   );
// }
// export default App;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 4
// {/* Now PhoneList will become a convert to Props children Name   */}
// Next go to ProtectedRoute.js


function App() {
  return (
    <div className="App">

       <Routes>
        <Route path="/" element={<Home />} />
                                                          
        <Route path="/mobiles" element={ <ProtectedRoute> <PhoneList /> </ProtectedRoute> } />   

      </Routes>

    </div>
  );
}
export default App;