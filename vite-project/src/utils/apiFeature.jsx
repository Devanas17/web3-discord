export const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please Install Metamask!");
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const firstAccount = accounts[0];
      return firstAccount;
    } catch (error) {
      console.log("Check If Wallet Connected:", error);
    }
  };
  
  export const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please Install Metamask!");
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const firstAccount = accounts[0];
      return firstAccount;
    } catch (error) {
      console.log("Connect Wallet", error);
    }
  };