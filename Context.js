
import React, { useContext, useState  } from "react";

const context = React.createContext();

export function EmployeeContextProvider({children}){

    let [Employee, setEmployee] = useState(null);

    return( 
        <context.Provider value={[Employee, setEmployee]} >
            {children}
        </context.Provider>
     )
}

export function EmployeeContextConsumer(){

    return useContext(context);
}