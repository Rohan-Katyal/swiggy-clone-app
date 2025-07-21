// import { useState} from "react";
// useEffect 
// import { useParams } from "react-router-dom";
import { data } from "../functions.js/exampleData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import RestaurantItem from "./RestaurantItem.jsx";

import $ from 'jquery';

export const RestaurantMenu = ()=>{

    // const [itemData, setItemData] = useState({})
    // const [itemTitle, setitemTitle] = useState('');
    const itemdata = data();
    // const params = useParams();
    // console.log(params);

    
    // console.log(itemdata);

    // console.log(itemData);

    // Toggle Function for Restaurant Item 
    function toggleitemTitle(currentitemTitle){
        
       $(`#${currentitemTitle}`)
       .toggle()
       .css('transition-duration', '2s')
       ;
       $(`.${currentitemTitle}rotate`)
       .toggleClass('rotateONClass')
       .css('transition-duration', '0.3s')

       $(`.${currentitemTitle}btmSpan`)
       .toggle();



        // setitemTitle(currentitemTitle)


        // setitemTitle((previtemTitle)=>
        // // if current item Title is equal to the previous item Title
        // // then we will not do anything,
        // // but if current item Title is not equal to it we will change the itemTitle value to the currentitemTitle
        //     (currentitemTitle === previtemTitle ? 
        //     '':
        //     currentitemTitle
        //     )
        //     );
    }

    
    // let itemslist_1 = itemData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1];
    // // let items = itemslist_1.card.card.itemCards;
    // // let itemsTitle = itemslist_1.card.card.title;

    // console.log(itemslist_1)

    // console.log(itemsTitle);
    // console.log(items);

    
    
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    
                <h2>Hello!!</h2>
                
                    {
                        itemdata.map((item)=>{
                            // console.log(item)
                            let items = item.itemsInfo;
                            return(
                            <>
                            <div className='itemSectionDiv'>
    
                                            {/* Item menu Title Span Start here */}
                                            {/* onClick={btnFunc} */}
                                            <button name={item.Title}

                                            className={`titleSpan_restaurantItemBtn ${item.Title}`}
                                            // itemTitle is toggeling here
                                            // we are using an arrow function as if we call a function directly
                                            // then it will cause a infinite number of loops in react.
                                            // throwing an error
                                            onClick={()=>{
                                                toggleitemTitle(item.Title)
                                            }}
                                            >
                                            {/* <span className='titleSpan' onClick={btnFunc}> */}
                                            <h1>{item.Title}({item.itemsInfo.length})</h1>
                                            {/* <button className="titleBtn" style={{transform: rotate}}> */}
                                                <FontAwesomeIcon 
                                                className={`titleBtn ${item.Title}rotate`}
                                                icon={faCaretDown}/>
                                            {/* </button> */}
                                            </button>
                                            {/* </span> */}
    
                                            {/* End here */}
    
                                            {/* Item Menu starts here */}
                                            {/* style={{display: displayVal}} */}

                                            {/* Comparing itemTitle here to change the div state according to the title */}
                                            <div id={item.Title} 
                                            className='itemsDiv'>
                                                {/* <h5>hollo</h5> */}
                                            {items.map((itemInfoVal)=>{
                                                // console.log(itemInfoVal);
                                                return(
                                                    <>
                                                    {/* <h5>hello!!</h5> */}
                                                    <RestaurantItem itemInfo={itemInfoVal}/>
                                                    </>

                                                )
                                            })}
                                            </div>
                            </div>
                            <section className={`${item.Title}btmSpan btmSpan`}></section>
                            </>    
                            )
                        
                        })
                    }
        </div>
    )

}