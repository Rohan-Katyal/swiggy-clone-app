// Context is present inside React
// and we are not required to install another library

import { createContext } from "react";

const UserContext = createContext({
    // useContext key Value pair
    user : "defaultUser"
});

export default UserContext;