import { BsCheck2Square } from "react-icons/bs";
import './ItemCard.css';

const ItemCard = (props) => {


    return (
        <div className="card card_shadow" style={{width: '25rem'}}>
            <img className="card-img-top" src={props.image} alt="Card image cap" style={{height: '200px'}} />    
            <hr></hr>
            <div className="card-body">
                <p className="card-text card_name"><b>{props.name}</b></p>
                <p className="card-text card_price"><b>{props.price}</b></p>
            </div>
        </div>
    );


};

export default ItemCard;