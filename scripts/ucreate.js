const axios = require('axios');
const ethers = require('ethers');
async function getTransactionDetails(txhash, apikey) {
  const url = `https://api-goerli.etherscan.io/api?module=proxy&action=eth_getTransactionReceipt&txhash=${txhash}&apikey=${apikey}`;
  
  try {
    const response = await axios.get(url);
    const data =await response.data;

    if (data.result.status === "0x1") {
      const result = data.result;
    //   console.log(result);
      const contractAddress = result.logs[0].address;
      const sender = result.from;
      const receiver =data.result.logs[0].topics[2];
      const r =  ethers.utils.getAddress(receiver);
      let amount = data.result.logs[0].data
       amount = parseInt(amount, 16) / 10**18; // Convert from wei to ether
      console.log(contractAddress,r,amount);
      return { contractAddress, sender, amount };
    
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to retrieve transaction details:", error);
    return null;
  }
}

 getTransactionDetails("0xf98c6364141ff159dfbf780675f513862ad3d8b2c5306c7ee43dca3e86359ba6","6STW5UEGDF936CQ5V7YE2ENQGKQRV31G4T")
