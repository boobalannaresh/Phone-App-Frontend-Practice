import React from 'react'
import { Navigate } from 'react-router-dom';


// 5
// If you will give some token Value in Inspect => Application ( you have to give there in Key And Value ), that token will show in Console 
// Result will show based on if you have token value, but you don't have token values result will not show, Unauthorized H1 Tags will come

// export function ProtectedRoute({children}) {

//     const isAuth = localStorage.getItem("token");
//     console.log(isAuth)
//   return (
//     <div>
//         { isAuth ? children : <h1>Unauthorized</h1> } 
//     </div>
//   )
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 6
// If you don't have token values  I like to conditional rendering happens to Navigate to Home pages 
// Now you can check the results, If you don't have token Results will not come and also check you have to change Address bar URL 
// So, withOut token, Does not Entry in " /mobiles " routes
// Next go to LoginForm.js

export function ProtectedRoute({children}) {

    const isAuth = localStorage.getItem("token");
    console.log(isAuth)
  return (
    <div>
        { isAuth ? children : <Navigate replace to ="/" />} 
    </div>
  )
}
