
const TopRated = (props)=>{

    function filterFunc(){
        // console.log("Filter Func !!");
        props.resFilter();
    }

    return(
        <button id="toprated" className="btn" onClick={filterFunc}>4.0 Up</button>
    )

}


export default TopRated;