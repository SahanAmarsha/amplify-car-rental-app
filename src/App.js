import {AddCar, NavBar, NewCars} from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import MyAddCar from "./ui-components/MyAddCar";

// retrieving signOut function, and user data
function App({ user, signOut }) {

  console.log("user", user);
  const navbarOverrides = {
    "Flex.Flex[0].Image[0]": {
      src: "https://img.icons8.com/color/50/000000/car--v1.png", // app logo
    },
    "Flex.Flex[2].Image[0]": {
      src: user?.attributes?.profile, // passing profile image from user object
    },
    "Flex.Flex[2].Button[0]": {
      onClick: signOut, //passing signOut function
    },
  };

  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width={"100%"} />
      <header className="App-header">
        <MyAddCar />
        <NewCars />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
