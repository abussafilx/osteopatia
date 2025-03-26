import "./Header.css"
import { Image } from "@mantine/core";
import logo from "../assets/logo2.png"

function  Header() {
    
    return (
      <div className="header">
        <Image  src={logo}></Image>
      </div>
    );
  }

export default Header