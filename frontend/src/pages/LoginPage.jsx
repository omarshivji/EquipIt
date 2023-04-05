// LoginPage.js
import React, { useState } from 'react';
//import { login as apiLogin } from '../api/login_api'; // Import the login function from your API helper file


import './LoginPage.css';


const LoginPage = () => {

  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();

  const login = () => {
    axios.get("http://localhost:8000/customers", {
      email: getEmail,
      password: getPassword
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <label>Email</label>
      <input type="text" onChange={(event) => {
        setEmail(event.target.value);
      }
      } />
      <label>Password</label>
      <input type="text" onChange={(event) => {
        setPassword(event.target.value);
      }
      } />
      <button onClick={login}>Login</button>
    </div>
  );
};

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const token = await apiLogin({ email, password });
//       console.log('Login successful:', token);
//     } catch (err) {
//       setError(err.message || 'An error occurred while logging in.');
//     }
//   };

//   return (
//     <div className="login-page">
//       <h1>Login</h1>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//         </div>
//         <div className="card-footer">
//         <button type="submit" className="btn btn-primary">Login</button>
//     </div>
//     </form>
//     </div>
//   );
// };

export default LoginPage;
