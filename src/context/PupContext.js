// ./src/context/PupContext.js
import { createContext, useState, useContext } from "react";
import speedy from "../pups/speedy-pup.jpg";

const PupContext = createContext();

export function usePuppyType() {
  return useContext(PupContext);
}

export function PupProvider(props) {
  const [puppyType, setPuppyType] = useState(speedy);
  // console.log(PupContext)

  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  );
}
