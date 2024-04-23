import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/nav.scss'
import { useNavigate } from 'react-router-dom';
import { faChartGantt, faCirclePlay, faHandHoldingDollar, faHeartCircleXmark, faPiggyBank, faRegistered, faWallet } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const navigate= useNavigate();
    function goToWallet() {
        navigate('/wallets')
    }
    return ( 
        <nav className="nav">
            <div className="nav-header"
            onClick={()=>{
                goToWallet()
            }}
            >

            
            <div className="nav-brand">
                <img src="https://app.whales.market/logo-full.svg" alt="" />
            </div>

            <div className="wallet-icon">
            <FontAwesomeIcon icon={faWallet} />
            </div>
            </div>

            <div className="nav-list">
                <ul onClick={()=>{
                goToWallet()
                    }}>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" className="swap-icon "><g fill="#737883" clipPath="url(#swap-arrows-duotone_svg__a)"><path d="M4.706 1.96a1.002 1.002 0 0 0-1.415 0l-3 3a1.002 1.002 0 0 0 1.415 1.416L3 5.082v7.584a4 4 0 1 0 8 0v-3H9v3c0 1.103-.897 2-2 2s-2-.897-2-2V5.082l1.294 1.294A1.002 1.002 0 0 0 7.709 4.96l-3-3h-.003Z"></path><path d="M16.706 17.373c-.39.39-1.025.39-1.415 0l-3-3a1.002 1.002 0 0 1 1.415-1.415L15 14.25V6.667c0-1.103-.897-2-2-2s-2 .897-2 2v3H9v-3a4 4 0 1 1 8 0v7.584l1.294-1.293a1.002 1.002 0 0 1 1.415 1.415l-3 3h-.003" opacity="0.4"></path></g><defs><clipPath id="swap-arrows-duotone_svg__a"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                   <span>Pre-Market</span>
                    </li>
                    <li><FontAwesomeIcon icon={faHandHoldingDollar}/><span>Otc Market</span></li>
                    <li><FontAwesomeIcon icon={faCirclePlay}/><span>Point Market</span></li>
                    <li className="rumes"><FontAwesomeIcon icon={faRegistered}/><span>Runes</span></li>
                    <li><FontAwesomeIcon icon={faHeartCircleXmark}/><span>WLs Market</span></li>
                    <li><FontAwesomeIcon icon={faPiggyBank}/><span>Staking</span></li>
                    <li><FontAwesomeIcon icon={faChartGantt}/><span>Dashboard</span></li>

                  
                </ul>
            </div>

            <div className="nav-cta">
                <button
                onClick={()=>{
                    goToWallet()
                }}
                >Create Offer</button>
            </div>
<div className="ban">
<div className="nav-banner">
                <img src="https://app.whales.market/images/pair-whales-unibot.png" alt=""  />
                <span>
                Trade <span className="color-green">WHALES</span> with <span className="color-green"> 0 fee </span> on Unibot On Solana

                </span>
            </div>


            <div className="nav-banner">
                <p>Audited by</p>
                <img className='sheid' src="https://app.whales.market/images/peck-shield.png" alt=""  />
              <span>
              © 2023 Whale.Market.All Rights Reserved. Powered bylogo

              </span>
            </div>
</div>
            
        </nav>
     );
}
 
export default Nav;