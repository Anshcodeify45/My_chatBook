import { createContext, useState } from "react";


 export const DataContext = createContext(null);
 export const Data_id = createContext(null);


const DataProvider = ({children}) => {

    const  [account ,setAccount] = useState('');
    const [id ,setId]= useState(null);
    return(
        <DataContext.Provider value={{
                account ,setAccount,
                id ,setId
        }}>
         


            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
