import { useState, useContext} from "react";
import UserContext from "../functions.js/userContext";
import { colorFunc } from "../functions.js/ComponentFunctions";

const CartItem = ({itemInfo, count})=>{

  const [itemNum, setitemNum]= useState(count);
  // const {cartitems} = useContext(UserContext);
  // sessionStorage.setItem('itemNum', itemNum);

  // const [color, setColor] = useState('Green');

  function incItem(){
    setitemNum(itemNum+1)
  }

  function decItem(){
    setitemNum(()=>{
      return itemNum > 0 ? itemNum-1 : 0
    })
  }

  // cartitems.map((item)=>{
  //   console.log(item);
  //   return item;
  // })

  return (
    <div className='cartItemSection'>
    <span className='itemSectionInfoSpan'>
    {/* <h1>Cart Item!!</h1> */}
    <img alt={`img${itemInfo.imageId}`} 
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo.imageId}`}
    className={`itemSectionInfoImg`}
    />
    <h4 className='itemhead'>{itemInfo.name}</h4>
    <p className="itemhead_para" style={{color : colorFunc(itemInfo.rating)}}>{itemInfo.rating}</p>
    </span>
    <span className='itemPriceSpan'>
        {/* Input Feild!! */}
        <span className='itemPriceCountSpan'>
            <button type='button' className='decbtn' onClick={decItem}>&#8722;</button>
            {/* <p className='iteminp'>{itemNum}</p> */}
            <input type='text' className='iteminp' value={itemNum} readOnly={true}></input>
            <button type='button'className='incbtn' onClick={incItem}>&#43;</button>
        </span>

        {/* Item Price!! */}
        {/* <span className='itemPriceShowSpan'> */}
        <p className='itemPriceShowSpan-para'>&#8377;{(itemInfo.price/100)*itemNum}</p>
        {/* </span> */}
    </span>
    </div>
  )  
};

export default CartItem;