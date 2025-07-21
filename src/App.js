import './App.css';
// import Body from './utils/Body';
// import { Offers } from './utils/Offers';
// import { SignIn } from './utils/SignIn';
// import { Help } from './utils/Help';
// import { Cart } from './utils/Cart';

import Header from './utils/Header.jsx'
import { Outlet } from 'react-router-dom';
import Footer from './utils/Footer.jsx';
// import Collapsible from './utils/Collapsible';

// Provider provided by react-redux,
// Provider helps us to provide Redux appStore to our entire application 
import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
import appStore from './functions.js/appStoreRedux.js';

import UserContext from './functions.js/userContext.js';
import { useState } from 'react';

function App() {

  const [userNameDisplay, setUserNameDisplay] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [cartItemslen, setCartItemslen] = useState(cartItems.length);
  const [cartItemslen, setCartItemslen] = useState(0);
  const [useremail, setEmail] = useState('');
  const [userpassword, setPassword] = useState('');
  // const [itemobj, setItemobj] = useState({});
  const [Itemcount, setItemCount] = useState([]);
  // const [ItemId, setItemId] = useState('');


  return (
    <Provider store={appStore}>
    <UserContext.Provider 
    value={{username : userNameDisplay, setUserNameDisplay,
    visible: isVisible, setIsVisible,
    cartitems : cartItems, setCartItems,
    cartitemslen : cartItemslen, setCartItemslen,
    email : useremail, setEmail,
    password : userpassword, setPassword,
    itemcount : Itemcount, setItemCount,
    // items : ItemId, setItemId,
    // itemObj : itemobj, setItemobj
    }}>
    <Header/>
    <Outlet/>
    {/* <Collapsible /> */}
    <Footer/>
    </UserContext.Provider>
    </Provider>
);
    // Here we are providing appStore to the whole document.
    

  // {/* providing the userContext created,currentUser and setUserName inside the Provider value can be used by the whole document*/}
    
  
}

export default App;
