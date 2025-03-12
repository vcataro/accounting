import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';



// const Root = () => {

//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     // Simulate login logic
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <ThemeProvider theme={dashboardTheme}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={
//             isAuthenticated ?
//               (<App onLogout={handleLogout} />) :
//               (<Navigate to="/login" replace />)

//           }
//           />
//           <Route path="/login" element={
//             isAuthenticated ?
//               (<Navigate to="/" replace />) :
//               (<Login onLogin={handleLogin} />)
//           }
//           />
//           <Route path="authentication" element={<Authentication />} />
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Root />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
