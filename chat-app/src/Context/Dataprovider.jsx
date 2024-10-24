import { createContext, useState ,useEffect} from "react";


 export const DataContext = createContext(null);
 


const DataProvider = ({children}) => {

    const [account, setAccount] = useState(() => {
        // Load initial account from localStorage if available
        const savedAccount = localStorage.getItem('account');
        return savedAccount ? JSON.parse(savedAccount) : null; // Use null if not found
      });
    
      // Effect to store account in localStorage whenever it changes
      useEffect(() => {
        if (account) {
          const storeData =localStorage.setItem('account', JSON.stringify(account));
          console.log("store data here",storeData);
        }
      }, [account]);
    
    return(
        <DataContext.Provider value={{
            account, setAccount
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;