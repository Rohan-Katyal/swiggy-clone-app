import { useState, useCallback, useRef } from "react";

import findPrime from '../functions.js/primeNumber.js';

const Memo = ()=>{

    const [num,setNum] = useState(Number(0));
    const prime = useRef(Number(0));


    const findPrimeFunc = useCallback((numVal)=>{
        console.log('Hello!!')
        setNum(numVal)
        prime.current = findPrime(numVal);
    }, []);

    // const prime = useMemo(()=> {
    //     console.log(num);
    //     return(findPrime(num))
    // }, [num]);
        // dependency array indicating that this memo will only change,
        // when the element inside the array, i.e. num here, changes
        
    const [isDarkTheme, setisDarkTheme] = useState(false);
    const [color, setColor] = useState('bisque');
    
    // const prime = findPrime(num);

    

    return(
        <div className="MemoBox"
        style={{margin: '200px 150px',
        padding: '30px',
        border:'solid 5px tomato',
        width:'10cm', 
        height: '10cm',
        backgroundColor: isDarkTheme ? 'bisque' : 'white'
        }}>
            <button
            style={{
                width: '60px',
                padding: '10px',
                marginRight: '30px'
            }}
            onClick={()=>{
                setisDarkTheme(!isDarkTheme)
                setColor(isDarkTheme ? 'bisque' : 'white') 
            }}>
            {color}
            </button>
            <label style={{marginRight:'10px'}}>Memo</label>
            <input type='number' value={num}
            onChange={(e) => findPrimeFunc(e.target.value)}
            />
            <div>
                <h1>nth Prime : {prime.current}</h1>
            </div>
        </div>
    )
}

export default Memo;