import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorFunc } from "../functions.js/ComponentFunctions.js";
import { useContext } from "react";
import UserContext from "../functions.js/userContext.js";
// import { addItem } from "../functions.js/cartSlice.js";
// import { useDispatch } from 'react-redux';

// import $ from 'jquery';

const RestaurantItem = ({itemInfo})=>{

    const {setCartItemslen, cartitemslen,
        cartitems, setCartItems
    } = useContext(UserContext);

    // const dispatch = useDispatch();

    // Function for Dispatching an Action
    // const handleAddItem = (item)=>{
    //     dispatch(addItem(item));
    //     // dispatching the addItem function for the item value
    // }

    function addItem(iteminfo){
        console.log('Item Added!!');
        // console.log(iteminfo);

        fetch('http://localhost:5000/api/cart/updateItem',{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            mode:'cors',
            body: JSON.stringify({
                _id : sessionStorage.getItem('UserID'),
                cartitem : iteminfo
            })
        })
        .then((response)=>{
            
            if(!response.ok){
                // a function will be implemented here
                throw new Error(`Response status : ${response.status}`)
            }

            console.log(sessionStorage.getItem('UserID'));

            return response.json();
        })
        .then((data)=>{
            // console.log(`data : ${data}`)
            console.log(typeof(data));
            return data;
        })


        // .catch((err)=>{
        //     throw new Error (`Error Occurred \n : ${err}`)
        // })
    }

    function storeAddItem(iteminfo){

        // if(cartitems.length === 0){
        //     setCartItems(()=>{
        //         cartitems.push(iteminfo)
    
        //         return cartitems;
        //     })
        // }

        setCartItems(()=>{
            cartitems.push(iteminfo)

            return cartitems
        })
            console.log('cartitems');
            console.log(cartitems);

        setCartItemslen(cartitemslen + 1);

        console.log(iteminfo)
        console.log(`Item Added to store!!`);
        
    }

    function addItemstoCart(itemInfo){
        console.log(cartitems);
        addItem(itemInfo)
    }

    function handleAddItem(itemInfo){

        // addItem(itemInfo);
        
        sessionStorage.getItem('UserID') === null? 
        storeAddItem(itemInfo)
        :
        addItemstoCart(itemInfo);
        

        // setCartItems(Array(cartitems.length()));
    }

    return(
    <div style={{margin:"0px 0px", padding:'0px'}}>
        <section className="itemSection" key={itemInfo.id}>
            <span>
                <h3 className="itemHead">{itemInfo.name}</h3>
                <p className='itemPrice'>₹{itemInfo.price/100}</p>
                    {
                    itemInfo.ratingCount > 0 ?
                        <p style={{color: colorFunc(itemInfo.rating)}} className='itemRating'>
                            <FontAwesomeIcon icon={faStar} style={{lineHeight:'2px'}}/> 
                            &nbsp;{itemInfo.rating}({itemInfo.ratingCount})</p>
                            :<p style={{color: colorFunc(itemInfo.rating)}} className='itemRating'>
                            <FontAwesomeIcon icon={faStar} />
                            &nbsp;{itemInfo.rating}</p>
                    }
                <p className='itemDesc'>{itemInfo.description}</p>
            </span>
            <span className='itemImgSpan'>
                <img alt={`img${itemInfo.imageId}`} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo.imageId}`}
                className = "itemImg"/>
                <button className="itemImgbtn" 
                onClick={()=>{
                    handleAddItem(itemInfo);
                    // console.log(cartitems.length + 1);
                }}>Add+</button>
            </span>
        </section>
    </div>
    )
};

export default RestaurantItem;