 import UserContext from "./context1/UserContext";
// // import Header from "./context1/Header";
// // import Profile from "./context1/Profile";
// // import Theme from "./context2/Theme";
// import Navbar from "./gsm/Navbar";
// import Profile from "./gsm/Profile";
// import UserProvider from "./gsm/UserContext";
// // import UserProvider from "./consumerprovider/UserContext";
// // import Welcome from "./consumerprovider/Welcome";


// function App() {
//   // const username = "Chandra Mouli";
//   // const currentTheme = "Dark";

//   return (
//     // <UserContext.Provider value={username}>
//     //   {/* <Header />
//     //   <Profile />
//     // </UserContext.Provider> */}
//     //  <ThemeContext.Provider value={currentTheme}>
//     // //   <div>
//     // //     <h1>useContext Example</h1>
//     // //     <Theme />
//     // //   </div>
//     // // </ThemeContext.Provider> */ */
//     <UserProvider>
//       <Navbar />
//       <Profile />
//     </UserProvider>
    


//   );
// }


// export default App;

import { AuthProvider } from "./authentication/AuthContext";
import Dashboard from "./authentication/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

export default App;