import Button from "@mui/material/Button";
import { CheckAuth } from "./CheckAuth";
import { LogOut } from "./LogOut";
// 3
// Next go to App.js 

// export function Phone({ mobile }) {

//   return (
//     <div className="phone-container">
//       <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      
//       <h2 className="phone-name">{mobile.model}</h2>

//       <p className="phone-company">{mobile.company}</p>

//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 16
// Give Delete Button 
// Next go to LoginForm.js



// export function Phone({ mobile }) {


//   return (
//     <div className="phone-container">
//       <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      
//       <h2 className="phone-name">{mobile.model}</h2>

//       <p className="phone-company">{mobile.company}</p>

    
//       <Button sx={{width:"100%"}} color={"error"} variant="contained" >
//         Delete
//       </Button>

//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 18
// Get roleId from localStorage.getItem in Application
// Then Delete Button only visible in { roleId === "0" } or Does not Visible in Other roleId 


// export function Phone({ mobile }) {
  
// const roleId = localStorage.getItem("roleId")
//   return (
//     <div className="phone-container">
//       <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      
//       <h2 className="phone-name">{mobile.model}</h2>

//       <p className="phone-company">{mobile.company}</p>

//     {
//       roleId === "0" ? <Button sx={{width:"100%"}} color={"error"} variant="contained" >
//       Delete
//     </Button> : null
//     }
      
//     </div>
//   );
// }


// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 19
// Seprate be RoleID give 
// Next go to PhoneList.js


// const ROLE_ID = {
//   Admin:"0",
//   NORAML_USER: "1"
// }

// export function Phone({ mobile }) {
  
//   const roleId = localStorage.getItem("roleId")

//     return (
//       <div className="phone-container">
//         <img className="phone-picture" src={mobile.img} alt={mobile.model} />
        
//         <h2 className="phone-name">{mobile.model}</h2>
  
//         <p className="phone-company">{mobile.company}</p>
  
//       {
//         roleId === ROLE_ID.Admin ? <Button sx={{width:"100%"}} color={"error"} variant="contained" >
//         Delete
//       </Button> : null
//       }
        
//       </div>
//     );
//   }
  

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 21
// Import the Components " checkAuth " function  & " LogOut " function 
// If you will delete Particular ID's wise in roleId.Admin, If Delete then not Refresh Happens,
// Manually Refresh Happens After Previous delete ID's it will not Show
// You can Check Delete Options
// Next go to PhoneList.js 


// const ROLE_ID = {
//   Admin:"0",
//   NORAML_USER: "1"
// }

// export function Phone({ mobile }) {
  
//   const roleId = localStorage.getItem("roleId")

//   const deleteMobile = (mobileId) =>{
//     fetch(`http://localhost:4000/mobiles/${mobileId}`,{
//      method:"DELETE",
//      headers: { "x-auth-token" : localStorage.getItem("token"), roleId: roleId },
//     })
//     .then((data)=> CheckAuth(data))
//     .catch((err) => LogOut())
//   }

//     return (
//       <div className="phone-container">
//         <img className="phone-picture" src={mobile.img} alt={mobile.model} />
        
//         <h2 className="phone-name">{mobile.model}</h2>
  
//         <p className="phone-company">{mobile.company}</p>
  
//       {
//         roleId === ROLE_ID.Admin ? <Button onClick={()=> deleteMobile(mobile._id)} sx={{width:"100%"}} color={"error"} variant="contained" >
//         Delete
//       </Button> : null
//       }
        
//       </div>
//     );
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 23
// You have to GET the Props from Phonelist.js components to Here 
// Then that props call in fetch via .then, Next Happens If you delete any ID's Automatically Refresh Happens Smoothly 
//  


const ROLE_ID = {
  Admin:"0",
  NORAML_USER: "1"
}

export function Phone({ mobile, getMobiles }) {
  
  const roleId = localStorage.getItem("roleId")

  const deleteMobile = (mobileId) =>{
    fetch(`http://localhost:4000/mobiles/${mobileId}`,{
     method:"DELETE",
     headers: { "x-auth-token" : localStorage.getItem("token"), roleId: roleId },
    })
    .then((data)=> CheckAuth(data))
    .then(()=> getMobiles())
    .catch((err) => LogOut())
  }

    return (
      <div className="phone-container">
        <img className="phone-picture" src={mobile.img} alt={mobile.model} />
        
        <h2 className="phone-name">{mobile.model}</h2>
  
        <p className="phone-company">{mobile.company}</p>
  
      {
        roleId === ROLE_ID.Admin ? <Button onClick={()=> deleteMobile(mobile._id)} sx={{width:"100%"}} color={"error"} variant="contained" >
        Delete
      </Button> : null
      }
        
      </div>
    );
  }
  