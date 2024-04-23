import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/main.scss'
import '../stylesheet/filter.scss'
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import { faBarsProgress, faFilter, faWallet } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
    const navigate = useNavigate();
    const goToWallet=()=>{
        navigate('/wallets')
    }
    return (
        <div className="main">
            <div className="header">
                <div className="title">
                    Pre-Market
                </div>

                <div className="header-nav"
                onClick={()=>{goToWallet()
                }}
                >
                    <div className="token-check"
                        
                    >
                        <img src="https://i.ibb.co/h1zJccY/mong.jpg" alt="ff" />
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



            <div className="content">
                <SwipeComponent />
                <Filter />
                <Card/>
            </div>
        </div>
    );
}
export default Main;


const SwipeComponent = () => {
    return (

        <div className="swipe">
            <div className="swipe-item">

            </div>
            <div className="swipe-item">

            </div>
            <div className="swipe-item">

            </div>
            <div className="swipe-item">

            </div>
            <div className="swipe-item">

            </div>
            <div className="swipe-item">

            </div>
        </div>

    );
}

    ;

const Filter = () => {
    const navigate =useNavigate()
    const goToWallet=()=>{
        navigate('/wallets')
    }
    return (

        <div className="filter">


            <div className="g1">



                <div className="g11">
                    <ul 
                    onClick={()=>{
                        goToWallet()  
                                    }}
                    >
                        <li>Buy</li>
                        <li>Sell</li>
                        <li>100% Fill</li>
                        <li>Closed</li>
                    </ul>
                </div>


                <div className="g12">
<ul>
    <li>
        <img src="
        https://pbs.twimg.com/profile_images/1482917095105085441/09AI9lLr_400x400.png
        " alt="" />
        <p>ZEND</p>
        <span>3</span>
    </li>
    <li>
        <img src="
        https://pbs.twimg.com/profile_images/1719781248925831169/kC0UzpkB_400x400.jpg
        " alt="" />
        <p>MASA</p>
        <span>10</span>
    </li>
    <li>
        <img src="https://pbs.twimg.com/profile_images/1733759232573587456/oPlP04UN_400x400.jpg" alt="" />
        <p>AARK</p>
        <span>8</span>
    </li>
    <li>
        <img src="https://pbs.twimg.com/media/GGmcfwdW0AAcoex?format=png&name=large" alt="" />
        <p>Ruenstones</p>
        <span>12</span>
    </li>
   
</ul>
                </div>

            </div>



            <div className="g2">

                <ul onClick={()=>{
            goToWallet()                   
 }}>
                    <li><FontAwesomeIcon icon={faFilter}/><span>Filter</span></li>
                    <li><FontAwesomeIcon icon={faBarsProgress}/><span>Price Ascending</span></li>
                    <li><FontAwesomeIcon icon={faBarsProgress}/></li>
                </ul>


            </div>
        </div>

    );
}

    ;