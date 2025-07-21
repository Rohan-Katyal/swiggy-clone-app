import { useState } from "react";

// Component Starts
const Search = (props) => {

  // inner function starts
  function searched() {
    props.search(searchText);
  }
  // inner function ends


  const [searchText, setSearchText] = useState("");

  return (
    <div className='searchDiv'>
      {/* here we will apply onChange event Handler to the input feild to get the user input as soon as it has been entered. */}
      
      <input
        type="search"
        id="searchinp"
        value={searchText}
        onChange={(e)=>{
            console.log(e.target.value)
            setSearchText(e.target.value)}}
      />
      <button id="searchbtn" className="btn" type="button" onClick={searched}>
        Search
      </button>
    </div>
  );
};
// Component Ends

export default Search;
