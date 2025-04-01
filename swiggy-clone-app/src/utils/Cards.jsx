import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';


const Rescard = (props)=>{

    const {name, avgRating} = props.resDetails;

    return(
        <div className="Rescard">
            <img alt="IMG" className="card_img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.imgSrc}/>            
            <label className="res_name">{name}</label>
            <label className="res_rating"><FontAwesomeIcon className="res_ratingicon" icon={faStar}/>{avgRating}&nbsp;&nbsp;</label>
            {/* {props.time}mins */}
            {/* <label className="res_address">{props.address}</label> */}
        </div>
    )
}


export default Rescard;