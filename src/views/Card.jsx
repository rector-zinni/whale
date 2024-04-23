import '../stylesheet/card.scss'
import { useNavigate } from 'react-router-dom';
const Card = () => {
    const navigate= useNavigate();
    function goToWallet() {
        navigate('/wallets')
    }
    return ( 
        <div className="card">
            {
                [2,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,,5,5,5,7].map((data,index)=>(
                    <div className="card-items" key={index}>
                <div className="c1">
                    <div className="imgark">
                        <img src="https://pbs.twimg.com/profile_images/1733759232573587456/oPlP04UN_400x400.jpg" alt=""  />
                        <div className="ark">
                            <p>AARK</p>
                            <span>PARTIAL FILL</span>
                        </div>
                    </div>
                    <CircleLoader progress={Math.floor(Math.random() * 100)}/>


                </div>
                <div className="c2">
                    <span>Offer</span><span>For</span>
                </div>
                <div className="c3">
                    <div className="c31">
                <span>{Math.floor(Math.random() * 25)}k</span>
                        <img src="https://pbs.twimg.com/profile_images/1733759232573587456/oPlP04UN_400x400.jpg" alt=""  />
                    </div>
                    <div className="c32">
                        <span>$0.{Math.random(0.0465).toString().trim().match(/[0-9]{5}/)}</span>
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt=""  />
                    </div>
                </div>
                <div className="c2">
                    <span>$0.{Math.random(0.0465).toString().trim().match(/[0-9]{5}/)}/Token</span><span>${Math.random(50,2000).toString().trim().match(/[0-9]{4}/)}</span>
                </div>



                <div className="bottom-time">
                   <div>
                    <span>
                        {Math.floor(Math.random() * 25)} hours ago
                    </span>
                    <button 
                    onClick={()=>{
                        goToWallet()
                    }}
                    >Buy</button>
                    </div> 
                </div>
            </div>
                ))
            }
            
        </div>
     );
}
 
export default Card;


const CircleLoader = ({progress}) => {
    const p =`ui-widgets bg-${progress}`
    return ( 
        <div className={p}>
            <div className="ui-values ">{progress}</div>
           
        </div>
     );
}
