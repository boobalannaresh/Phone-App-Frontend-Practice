import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

// // 7
// // import MUI Installation & Import <TextField/>
// // css give in App.css
// Next go to Home.js

// export function LoginForm() {

//   return (
//     <form className="login-form">
//       <h2>Login</h2>
//       <TextField id="outlined-basic" label="Username" variant="outlined" />
//       <TextField id="outlined-basic" label="Password" variant="outlined" />
//       <Button variant="contained">Submit</Button>
//     </form>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 8
// Import UseFormik
// What did you type in inputFields, If you will Click Submit button that values will Show in => Inspect Console

// export function LoginForm() {

//     const { handleChange, values, handleSubmit} = useFormik({
//         initialValues: { username : "Naresh", password:"password"},
//         onSubmit : (values)=> {
//            console.log(values)
//         }
//     })
//   return (
//     <form  onSubmit={handleSubmit} className="login-form">
//       <h2>Login</h2>
//       <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleChange} value={values.username} name="username" />
//       <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handleChange} value={values.password} name="password"/>
//       <Button variant="contained" type="submit" >Submit</Button>
//     </form>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 9
// If you will give correct username, password => Token will generate and show in console => Inspect and Console
// If you will not give correct username, password => Token will not show in Console, So  Instead of show in " Invalid credientials "

// export function LoginForm() {

//     const { handleChange, values, handleSubmit} = useFormik({
//         initialValues: { username : "Naresh", password:"password"},
//         onSubmit : (values)=> {
//            console.log(values);

//            fetch("http://localhost:4000/users/login",{
//             method:"POST",
//             body: JSON.stringify(values),
//             headers:{"Content-type": "application/json"}
//            })
//            .then((data)=> data.json())
//            .then((result)=> console.log(result))
//         }
//     })
//   return (
//     <form  onSubmit={handleSubmit} className="login-form">
//       <h2>Login</h2>
//       <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleChange} value={values.username} name="username" />
//       <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handleChange} value={values.password} name="password"/>
//       <Button variant="contained" type="submit" >Submit</Button>
//     </form>
//   );
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 10
// If you will give correct username & password " ✅ Success" Message will Show console => Inspect & Console
// If you will not give correct username & password  " ❌ Error " Message will show console => Inspect & Console
// Conditional rendering also adding, this rendering works based on Button color change

// export function LoginForm() {

//   const navigate = useNavigate()
//   const [formState, setFormState] = useState("success");

//   const { handleChange, values, handleSubmit } = useFormik({
//     initialValues: { username: "Naresh", password: "password" },
//     onSubmit: async (values) => {
//       console.log(values);

//       const data = await fetch("http://localhost:4000/users/login", {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: { "Content-type": "application/json" },
//       });
//       if (data.status === 401) {
//         console.log(" ❌ Error ");
//         setFormState("error");
//       } else {
//         const result = await data.json();
//         console.log(" ✅ Success", result);
//         
//       }
//     },
//   });
//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <h2>Login</h2>
//       <TextField
//         id="outlined-basic"
//         label="Username"
//         variant="outlined"
//         onChange={handleChange}
//         value={values.username}
//         name="username"
//       />
//       <TextField
//         id="outlined-basic"
//         label="Password"
//         variant="outlined"
//         onChange={handleChange}
//         value={values.password}
//         name="password"
//       />
//       <Button color={ formState === "error" ? "error" : "success" } variant="contained" type="submit">
//         { formState === "error" ? "Retry" : "Submit" }
//       </Button>
//     </form>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 11
// Navigate passed here for If you will correct Username & Password Route to " /mobiles " page, 
// But Not Routes Happens because Token will not store in Local Storage Apllication
// You have to check Happen or Not

// export function LoginForm() {

//   const navigate = useNavigate()
//   const [formState, setFormState] = useState("success");

//   const { handleChange, values, handleSubmit } = useFormik({
//     initialValues: { username: "Naresh", password: "password" },
//     onSubmit: async (values) => {
//       console.log(values);

//       const data = await fetch("http://localhost:4000/users/login", {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: { "Content-type": "application/json" },
//       });
//       if (data.status === 401) {
//         console.log(" ❌ Error ");
//         setFormState("error");
//       } else {
//         const result = await data.json();
//         console.log(" ✅ Success", result);
//         navigate("/mobiles");
//       }
//     },
//   });
//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <h2>Login</h2>
//       <TextField
//         id="outlined-basic"
//         label="Username"
//         variant="outlined"
//         onChange={handleChange}
//         value={values.username}
//         name="username"
//       />
//       <TextField
//         id="outlined-basic"
//         label="Password"
//         variant="outlined"
//         onChange={handleChange}
//         value={values.password}
//         name="password"
//       />
//       <Button color={ formState === "error" ? "error" : "success" } variant="contained" type="submit">
//         { formState === "error" ? "Retry" : "Submit" }
//       </Button>
//     </form>
//   );
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 12
// If you will give Correct Username & Password After Route change to " /mobiles "
// Next go to PhoneList.js

// export function LoginForm() {

//   const navigate = useNavigate();

//   const [formState, setFormState] = useState("success");

//   const { handleChange, values, handleSubmit } = useFormik({
//     initialValues: { username: "Naresh", password: "password" },
//     onSubmit: async (values) => {
//       console.log(values);

//       const data = await fetch("http://localhost:4000/users/login", {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: { "Content-type": "application/json" },
//       });
//       if (data.status === 401) {
//         console.log(" ❌ Error ");
//         setFormState("error");
//       } else {
//         const result = await data.json();
//         console.log(" ✅ Success", result);
//         localStorage.setItem("token", result.token);
//         navigate("/mobiles");
//       }

//     },
//   });

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <h2>Login</h2>
//       <TextField
//         id="outlined-basic"
//         label="Username"
//         variant="outlined"
//         onChange={handleChange}
//         value={values.username}
//         name="username"
//       />
//       <TextField
//         id="outlined-basic"
//         label="Password"
//         variant="outlined"
//         onChange={handleChange}
//         value={values.password}
//         name="password"
//       />
//       <Button color={ formState === "error" ? "error" : "success" } variant="contained" type="submit">
//         { formState === "error" ? "Retry" : "Submit" }
//       </Button>
//     </form>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 17
// you have to give & SET localStroge.setItem roleId also, then you can check in Application option including roleId also set there
// Next go to Phone.js

export function LoginForm() {

  const navigate = useNavigate();

  const [formState, setFormState] = useState("success");

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { username: "Naresh", password: "password" },
    onSubmit: async (values) => {
      console.log(values);

      const data = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      });
      if (data.status === 401) {
        console.log(" ❌ Error ");
        setFormState("error");
      } else {
        const result = await data.json();
        console.log(" ✅ Success", result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("roleId", result.roleId);
        navigate("/mobiles");
      }

    },
  });

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        onChange={handleChange}
        value={values.username}
        name="username"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={handleChange}
        value={values.password}
        name="password"
      />
      <Button color={ formState === "error" ? "error" : "success" } variant="contained" type="submit">
        { formState === "error" ? "Retry" : "Submit" }
      </Button>
    </form>
  );
}
