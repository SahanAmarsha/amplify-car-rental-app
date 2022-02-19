import { NavBar, NewCarsCollection, AddCar } from "./ui-components";
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator, Divider } from "@aws-amplify/ui-react";
import {useState} from "react";
import {RentalCar} from "./models";
import "./App.css";


function App({ user, signOut }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveRentalCar = async () => {
        try {
            await DataStore.save(
                new RentalCar({
                    name: name,
                    price: parseFloat(price),
                    description: description,
                    imageUrl: imageUrl
                })
            );
        } catch (err) {
            console.log(err);
        }
    }

    const addCarOverrides = {
        "Flex.Flex[0].Flex[1].TextField[0]": {
            onChange: (event) => {
                setName(event.target.value);
            }
        },
        "Flex.Flex[0].Flex[1].TextField[1]": {
            onChange: (event) => {
                setPrice(event.target.value);
            }
        },
        "Flex.Flex[0].Flex[1].TextField[2]": {
            onChange: (event) => {
                setDescription(event.target.value);
            }
        },
        "Flex.Flex[0].Flex[1].TextField[3]": {
            onChange: (event) => {
                setImageUrl(event.target.value);
            }
        },
        "Flex.Flex[0].Flex[2].Button[0]": {
            onClick: saveRentalCar
        }
    }

    const navbarOverrides = {
    "Flex.Flex[0].Image[0]": {
      src: "https://img.icons8.com/color/50/000000/car--v1.png",
    },
    "Flex.Flex[1].Image[0]": {
      src: user?.attributes?.profile,
    },
    "Flex.Flex[1].Button[0]": {
      onClick: signOut,
    },
  };

  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width="100%" />
      <header className="App-header">
        <AddCar overrides={addCarOverrides} style={{ textAlign: "left", margin: "1rem" }} />
        <Divider />
        <NewCarsCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
