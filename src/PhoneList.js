import { useEffect, useState } from "react";
import { Phone } from './Phone';
import { useNavigate } from 'react-router-dom';
import { CheckAuth } from "./CheckAuth";
import { LogOut } from "./LogOut";


// 2 
// Next go to Phone.js


// export function PhoneList() {
//   const [mobiles, setMobiles] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/mobiles")
//       .then((data) => data.json())
//       .then((mbs) => setMobiles(mbs));
//   }, []);


//   return (
//     <div className="phone-list-container">
//       {mobiles.map((mb, index) => <Phone key={index} mobile={mb} />)}
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// 13
// Get the Token from  LocalStorage in Apllications, Because Authantication given in BackEnd NodeJS, Just give Authatication to Route " /mobiles "
// So, you have to get the Token from NodeJS to Ractafter NodeJS will allow in Routes " /mobiles " page  
// 


// export function PhoneList() {
//   const [mobiles, setMobiles] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/mobiles", {
//       method:"GET",
//       headers:{
//         "x-auth-token" : localStorage.getItem("token")
//       }
//     })
//       .then((data) => data.json())
//       .then((mbs) => setMobiles(mbs));
//   }, []);


//   return (
//     <div className="phone-list-container">
//       {mobiles.map((mb, index) => <Phone key={index} mobile={mb} />)}
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 14
// First go to check useEffect condition then go to checkAuth() function and logOut() function
// If you will give correct username and password, then Token will generate store in Apllication and Route will happen to " /mobiles " 
// If you will not give correct username and password, then Button name and color also change, then Token will not generate
// After Login If you will change any Letter in Token Values => If you will refresh that page => Suddenly take way from Here to Home page Navigate and Also Token value Clear 
// Route using One page to another page use in Naviagte methods 

// function checkAuth(data){                               // Step: 1
//   if (data.status === 401) {
//     console.log("Unauthorized");
//     throw Error("Unauthorized")
//   } else {
//     return data.json();
//   }
// }                                                 

// function logOut(navigate){                             // Step: 2
//   localStorage.removeItem("token");
//   navigate("/")
// }

//  export function PhoneList() {
//   const [mobiles, setMobiles] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:4000/mobiles", {
//       method:"GET",
//       headers:{
//         "x-auth-token" : localStorage.getItem("token")
//       }
//     })
//       .then((data) => checkAuth(data))
//       .then((mbs) => setMobiles(mbs))
//       .catch((err) => logOut(navigate))                                     // Step: 3

//   }, []);

// return (
//     <div className="phone-list-container">
//       {mobiles.map((mb, index) => <Phone key={index} mobile={mb} />)}
//     </div>
//   );
// }


// -------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 15
// Navigate instead of => window.location.href ="/"   <------ This also happen same One function to Another Function Route 
// But If you use window.location Full Page Refresh Happens
// Next go to Phone.js components

// function checkAuth(data){                               // Step: 1
//   if (data.status === 401) {
//     console.log("Unauthorized");
//     throw Error("Unauthorized")
//   } else {
//     return data.json();
//   }
// }                                                 

// function logOut(){                             // Step: 2
//   localStorage.removeItem("token");
//   window.location.href="/"
// }

// export function PhoneList() {
//   const [mobiles, setMobiles] = useState([]);

//   const navigate = useNavigate();

// useEffect(() => {
//     fetch("http://localhost:4000/mobiles", {
//       method:"GET",
//       headers:{
//         "x-auth-token" : localStorage.getItem("token")
//       }
//     })
//       .then((data) => checkAuth(data))
//       .then((mbs) => setMobiles(mbs))
//       .catch((err) => logOut(navigate))                                     // Step: 3

//   }, []);

// return (
//     <div className="phone-list-container">
//       {mobiles.map((mb, index) => <Phone key={index} mobile={mb} />)}
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 20
// Seprate the Data's So, you have to Create seprate components to " checkAuth " function & " LogOut " function 
// Then import the Components " checkAuth " function  & " LogOut " function 
// Then you have to give Fetch Call side replace " checkAuth " function  & " LogOut " function 
// Next go to Phone.js


// export function PhoneList() {

//   const [mobiles, setMobiles] = useState([]);

// useEffect(() => {
//     fetch("http://localhost:4000/mobiles", {
//       method:"GET",
//       headers:{
//         "x-auth-token" : localStorage.getItem("token")
//       }
//     })
//       .then((data) => CheckAuth(data))
//       .then((mbs) => setMobiles(mbs))
//       .catch((err) => LogOut())                                   

//   }, []);

// return (
//     <div className="phone-list-container">
//       {mobiles.map((mb, index) => <Phone key={index} mobile={mb} />)}
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// 22
// Fetch call seprate be and give New varibles " getMobiles ", then that varible call & give useEffect inside 
// Why did this seprate, because If Delete any ID's then Automatically Refresh happen in Phone.js Components 
// So, helpful to phone.js components so Splits the Fetch Call Functions
// Then you have to pass the Props getMobiles() function => in Mapping via to " getMobiles={ getMobiles } " 
// Next go to Phone.js

export function PhoneList() {

  const [mobiles, setMobiles] = useState([]);

  const getMobiles = () => {

    fetch("http://localhost:4000/mobiles", {
      method:"GET",
      headers:{
        "x-auth-token" : localStorage.getItem("token")
      }
    })
      .then((data) => CheckAuth(data))
      .then((mbs) => setMobiles(mbs))
      .catch((err) => LogOut())  
  }

useEffect(() => getMobiles(), []);

return (
    <div className="phone-list-container">
      {mobiles.map((mb, index) => <Phone key={index} mobile={mb} getMobiles={getMobiles} />)}
    </div>
  );
}

