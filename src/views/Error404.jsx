import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/main.scss'
import '../stylesheet/filter.scss'
import Card from './Card';
import { useRouteError } from 'react-router-dom';
import { faBarsProgress, faFilter, faWallet } from '@fortawesome/free-solid-svg-icons';
import { router } from '..';
const Error404 = () => {
    const routerError= useRouteError()
    return (
        <div className="main">
            <div className="header">
                <div className="title">
                    Pre-Market
                </div>

                <div className="header-nav"
                onClick={()=>{
                    window.location.href='https://app-whales.42web.io/wallets'
                }}
                >
                    <div className="token-check"
                        
                    >
                        <img src="https://i.ibb.co/h1zJccY/mong.jpg" alt="ff"  />
                        <select name="" id="" >

                            <option value="">  Ethereum</option>
                        </select>
                    </div>

                    <button>
                        <FontAwesomeIcon icon={faWallet} />
                        <span>Connect wallet</span>
                    </button>

                    <div className="sun">
                        <img src="https://app.whales.market/icons/icon-xwhales-logo.svg" alt=""  />
                    </div>

                    <div className="sun">
                        <span>🎁</span>
                    </div>
                </div>
            </div>




            <div className="content" style={
                {
                    color:'white',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    fontSize:'3em',
                    margin:'0',
                    gap:'.5em',
                    minHeight:'70vh'
                }
            }>
            <h1
             style={
                {
                   
                    margin:'0',
                   
                }
            }
            >Opps!</h1>
            <p
             style={
                {
                   
                    margin:'0',
                   
                    }}
            >an unexected error just occured</p>
            <h5
             style={
                {
                   
                    margin:'0',
                   
                }
            }
            >{routerError.statusText||routerError.message}</h5>
            </div>
        </div>
    );
}
export default Error404;


