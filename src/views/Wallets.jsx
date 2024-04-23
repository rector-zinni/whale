import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/wallets.scss'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { faSearch, faWallet } from '@fortawesome/free-solid-svg-icons';
const Wallets = () => {
    const navigate= useNavigate();
        const[wallet_state,setWallet]=useState(wallet)
        const[textHelper,setTextHelper]=useState('')
        function searchHelper(){

            setWallet(wallet.filter((e)=>{
                return e.name.toLowerCase().includes(textHelper.toLocaleLowerCase(),-1)
            }))
            console.log(wallet_state.length)
        }
        useEffect(() => {
            if(textHelper!=''){
                searchHelper()
            }else{
                setWallet(wallet)
            }
            return () => {
               console.log(wallet_state.length)
            };
        }, [textHelper]);
    return (
        <div className="wallets">
            <div className="wallet-header">
                <div className="header-logo">
                    <img src="https://app.whales.market/logo-full.svg" alt="Available"  />
                    <h1> Wallets </h1>
                </div>
            </div>
            <div className="search-wallet">
               tr <div>
                    <span><FontAwesomeIcon icon={faWallet} /></span>
                    <input type="text" name="" id="" onChange={(e)=>{setTextHelper(e.target.value);}} />
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className='wallet-display'>
                <div className="wallet-grid">
                    {
                        wallet_state.map((e) => (
                            <div  onClick={()=>{
                               navigate(`/connect/${e.name}`)
                            }} className="wallet-item" key={e.name}>
                                <img src={e.image} alt="" />
                                <span>{e.name}</span>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Wallets;

const wallet = [

    { name: "Blockchain", image: require("../assets/blockchain-com.png") },
    { name: "Coinbase Wallet", image: require("../assets/coinbase-wallet.png") },

    { name: "Binace Wallet", image: require("../assets/binace.png") },
    { name: "Metamask", image: require("../assets/metamask.png") },
    { name: "MyEtherWallet", image: require("../assets/myetherwallet.jpg") },
    { name: "Trust Wallet", image: require("../assets/trust-wallet.jpg") },
    { name: "ZenGo", image: require("../assets/zengo.png") },
    { name: "Wallet Connect", image: require("../assets/wc.jpeg") },
    { name: "EasyPocket", image: require("../assets/easypocket.jpg") },
    { name: "Infinity Wallet", image: require("../assets/infinity-wallet.png") },
    { name: "Torus", image: require("../assets/torus.jpg") },
    { name: "Xdefi", image: require("../assets/xdefi.png") },
    { name: "Exodus Wallet", image: require("../assets/exodus.png") },
    { name: "Ownbit", image: require("../assets/ownbit.png") },
    { name: "Swyt Wallet", image: require("../assets/swft.png") },
    { name: "Coin98", image: require("../assets/coin98.png") },
    { name: "TrustVault", image: require("../assets/trustvault.png") },
    { name: "Loopring Wallet", image: require("../assets/loop.jpg") },
    { name: "MYKEY", image: require("../assets/mykey.png") },
    { name: "StakedWallet.io", image: require("../assets/stakedwallet-io.jpg") },
    { name: "Theta", image: require("../assets/theta.png") },
    { name: "Exodus", image: require("../assets/exodus-exodus.jpg") },
    { name: "Electrum Wallet", image: require("../assets/electrum-wallet.jpg") },
    { name: "Jaxx", image: require("../assets/jaxx.png") },
    { name: "Trezor Wallet", image: require("../assets/trezor-wallet.jpg") },
    { name: "Opensea Wallet", image: require("../assets/opensea.avif") },
    { name: "Uniswap Wallet", image: require("../assets/uniswap.avif") },
    { name: "Coinomi", image: require("../assets/coinomi.png") },
    { name: "Bitcoin Core Client", image: require("../assets/Bitcoin-Core-Client.png") },
    { name: "Luno", image: require("../assets/luno.jpg") },
    { name: "BitGo Cryptocurrency Wallet", image: require("../assets/bitgo-cryptocurrency-wallet.png") },
    { name: "Coin Payments Wallet", image: require("../assets/coinpayments-wallet.png") },
    { name: "Xapo", image: require("../assets/xapo-wallet.png") },
    { name: "Atomic Wallet", image: require("../assets/atomic-wallet.png") },
    { name: "Bread Wallet", image: require("../assets/bread-wallet.png") },
    { name: "Cardano", image: require("../assets/cardano.png") },
    { name: "Mycelium", image: require("../assets/mycelium-wallet.png") },
    { name: "Bitso", image: require("../assets/bitso.png") },
    { name: "Coinjar", image: require("../assets/coinjar-wallet.png") },
    { name: "CounterWallet", image: require("../assets/counterwallet.png") },
    { name: "Cryptyx Wallet", image: require("../assets/cryptx-wallet.png") },
    { name: "Omni Wallet", image: require("../assets/omniwallet.png") },
    { name: "Airbitz Bitcoin Wallet", image: require("../assets/airbitz-bitcoin-wallet.png") },
    { name: "Copay", image: require("../assets/copay.jpg") },
    { name: "Daedalus", image: require("../assets/daedalus.png") },
    { name: "Pillar", image: require("../assets/pillar.png") },
    { name: "Argent", image: require("../assets/argent.png") },
    { name: "CYBAVO", image: require("../assets/cybavo.png") },
    { name: "Nash", image: require("../assets/nash.jpg") },
    { name: "Zelcore", image: require("../assets/zelcore.png") },
    { name: "Tokenary", image: require("../assets/tokenary.png") },
    { name: "Gnosis Safe Multisig", image: require("../assets/Gnosis.jpg") },
    { name: "D'CENT'", image: require("../assets/dcent.png") },
    { name: "Alice", image: require("../assets/alice.png") },
    { name: "Dok Wallet", image: require("../assets/dok.png") },
    { name: "Infinito Wallet", image: require("../assets/infinito-wallet.png") },
    { name: "Equal", image: require("../assets/equal.jpg") },
    { name: "Eidoo", image: require("../assets/eidoo.png") },
    { name: "GridPlus", image: require("../assets/grid.png") },
    { name: "Spatium", image: require("../assets/spatium.jpg") },
    { name: "Auro Wallet", image: require("../assets/auro.jpg") },
    { name: "Unstoppable Wallet", image: require("../assets/unstoppable.png") },
    { name: "XDC Wallet", image: require("../assets/xdc.png") },
    { name: "PEAKDEFI Wallet", image: require("../assets/peakdefi.png") },
    { name: "SWFT Wallet", image: require("../assets/swft.png") },
    { name: "Kardiachain", image: require("../assets/kdc.jpg") },
    { name: "Bitkeep", image: require("../assets/bitkeep.png") },
    { name: "ViaWallet", image: require("../assets/via.png") },
    { name: "SWFT wallet", image: require("../assets/swft.png") },
    { name: "SparkPoint wallet", image: require("../assets/sparkpoint.png") },
    { name: "Bridge Wallet", image: require("../assets/bridge.png") },
    { name: "Polymesh", image: require("../assets/polymesh.jpeg") },
    { name: "Swft Wallet", image: require("../assets/swft.png") },
    { name: "Kepir Wallet", image: require("../assets/kepir.png") },
    { name: "Debank", image: require("../assets/debank.png") },
    { name: "Fearless Wallet", image: require("../assets/fealess.png") },
    { name: "Terra Station", image: require("../assets/Terra.jpg") },
    { name: "KEYRING PRO Wallet", image: require("../assets/keyring.png") },
    { name: "Ferrum Unifyre", image: require("../assets/Ferrum.jpg") },
    { name: "Sollet", image: require("../assets/Sollet.jpg") },
    { name: "Ellipal", image: require("../assets/ellipal.png") },
    { name: "Midas Wallet", image: require("../assets/midas.png") },
    { name: "O3 Wallet", image: require("../assets/O3.jpg") },
    { name: "Guarda Wallet", image: require("../assets/guarda.jpg") },
    { name: "Huobi Wallet", image: require("../assets/huobi.jpg") },
    { name: "Authereum Wallet", image: require("../assets/authereum.png") },
    { name: "Walleth", image: require("../assets/walleth.png") },
    { name: "Phantom Wallet", image: require("../assets/phantom.png") },
    { name: "Ledger Live", image: require("../assets/ledgerlive.png") },
    { name: "BitPay", image: require("../assets/bitpay.jpg") },
    { name: "MathWallet", image: require("../assets/math.png") },
    { name: "TokenPockect", image: require("../assets/tokenpocket.png") },
    { name: "ONTO", image: require("../assets/onto.png") },
    { name: "imToken", image: require("../assets/imToken.png") },
    { name: "Solfare Wallet", image: require("../assets/solfare.png") },
    { name: "AlphaWallet", image: require("../assets/alpha.jpg") },
    { name: "Tomo Wallet", image: require("../assets/tomo.jpg") },
    { name: "UberPay", image: require("../assets/uberpay-wallet.png") },
    { name: "Klever", image: require("../assets/kw.jpg") },
    { name: "Defi Wallet", image: require("../assets/crypto.png") },
    { name: "Fantom Phantom", image: require("../assets/fantom.jpg") },
    { name: "Enjin Wallet", image: require("../assets/enjin.jpg") },
    { name: "SafePal", image: require("../assets/sfp.png") },




]