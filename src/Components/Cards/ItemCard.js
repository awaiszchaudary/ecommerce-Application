import { BsCheck2Square } from "react-icons/bs";
import './ItemCard.css';

const ItemCard = (props) => {

    const selectChangeHandler = () => {
        let localItems = localStorage.getItem("cart");
        if(!localItems) {
            let newArr = [{name: props.name, image: props.image, price: props.price}];
            localStorage.setItem("cart", JSON.stringify(newArr));
        }
        else {
            let parsedArray = JSON.parse(localItems);
            parsedArray.push({name: props.name, image: props.image, price: props.price});
            localStorage.setItem("cart", JSON.stringify(parsedArray));
        }
    };

    return (
        <div className="card card_shadow" style={{width: '25rem'}}>
            <div className='box'>
                <img className="card-img-top" src={props.image} alt="Card image cap" style={{height: '200px'}} />
                <div className='box-content'>
                    <div className='content'>
                        <ul className='social'>
                            <li><BsCheck2Square className="icon" onClick={selectChangeHandler} /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="card-body">
                <p className="card-text card_name"><b>{props.name}</b></p>
                <p className="card-text card_price"><b>{props.price}</b></p>
            </div>
        </div>
    );


};

export default ItemCard;