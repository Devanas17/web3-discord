import { useState, useEffect, createContext } from "react";
import {ethers} from "ethers";
import { checkIfWalletConnected, connectWallet } from "../utils/apiFeature";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");


  const name = "Aman";
  return <AppContext.Provider value={{ name, connectWallet }}>{children}</AppContext.Provider>;
};
