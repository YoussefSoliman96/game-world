import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.png";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <HStack padding="10px">
      <Link to={"/"} onClick={() => setSearchText("")}>
        <Image src={logo2} boxSize="60px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
