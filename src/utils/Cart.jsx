// useSelector Hook for selector 
// import { useSelector } from "react-redux";

import { useContext} from "react";
// import RestaurantItem from "./RestaurantItem";
import UserContext from "../functions.js/userContext";
import CartItem from "./CartItem";

// useDispatch Hook for dispatch
// import { useDispatch } from "react-redux";
// import { clearCart } from "../functions.js/cartSlice";


export const Cart = () =>{



    const {cartitems, setCartItems, setCartItemslen
    } = useContext(UserContext);
    
    let cartitems_Count = [];

    console.log('Cart Page!!');
    console.log('cartitems!!');
    console.log(cartitems);

    cartitems.forEach((item)=>{
        const existingItem = cartitems_Count.find((itemid)=>itemid.id===item.id);

        if(existingItem){
            existingItem.amount += 1
        }
        else{
            cartitems_Count.push({item: item, id:item.id, amount : item.amount})
        }

    })


    // console.log(cartitems_Count);

    // const itemobj = useRef([cartitems]);

    // console.log(items());

    // const cartitemidlist = cartitems.map((cartitem)=>{
    //     return cartitem.id;
    // })

    // function itemObjcount(){

    //     console.log(cartitems);
        
    //     for(let i=0;i<cartitems.length;i++){
    //         if(itemobj.current[i].content!==cartitems[i]){
    //             itemobj.current.push({content : cartitems[i], count : 1})
    //             // itemobj.current[i]['content'] = cartitems[i];
    //             // itemobj.current[i]['count'] = 1
    //         }
    //         else{
    //             itemobj.current[i]['content'] = cartitems[i];
    //             itemobj.current[i]['count'] += 1
    //         }
    //     }

    // }

    // useEffect(()=>{
    //     itemObjcount();
    //     // console.log(itemobj.current);
    // });

    // let items = itemObjcount();

    // console.log(items);
    // cartitems.map((cartitem)=>{
    //     cartitemidlist.push(cartitem.id)
    // });

    // console.log(cartitemidlist);

    // const cartItemsIdCount = cartitemidlist.reduce((acc, component)=>{
    //     acc[component] = (acc[component] || 0) + 1;
    //     console.log(acc);
    //     return acc
    // }, {})

    // console.log(Object.entries(cartItemCount));

    // const [curItem, setcurItem] = useState(0);

    // console.log(`cartitems : ${cartitems}`);
    // console.log(typeof(cartitems));

    function clearCart(){
        fetch('http://localhost:5000/api/cart/deleteItems',{
            method : 'POST',
            mode : "cors",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                _id : sessionStorage.getItem('UserID')
            })
        })
        // .then((response)=>{
        //     return response.json();
        // })
        // .then((data)=>{
        //     return data;
        // })
        // .catch((err)=>{
        //     return err;
        // })

        console.log('Cart cleared!!');
    }

    function handleClearCart(){
        clearCart();
        setCartItems([]);
        setCartItemslen(0);
    }

    // function clearCartfunc(){

    // }


    return(
        <>
        <button type='button' 
            className='btn clearcart'
            onClick={handleClearCart}
        >Clear Cart</button>
        <div className="cartItemDiv">

        {
            cartitems_Count.map((itemInfo)=>{
                return(
                    <CartItem itemInfo={itemInfo.item} count={itemInfo.amount}/>
                )
            })
        }

        {/* {
            items.map((item)=>{
                return( 
                <CartItem itemInfo={item} count={items.count}/>
                )
            })
        } */}

        {/* {cartitems.map((item)=>{
            if(item===itemobj.item){
                setitemobj({item : item, count : itemobj.count++});
            }
            else{
                setitemobj({item: item, count : 1});
            }
            
        })} */}

        </div>
        </>
    )
}