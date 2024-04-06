import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product';
import CartItems from '../Components/CartItems/CartItem';

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}
const ShopContextProvider = (props) =>{

    const [cardItems,setCardItems] = useState(getDefaultCart());

    

    const addToCart = (itemId)=>{
        setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cardItems);
    }
    const removeFromCart = (itemId)=>{
        setCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in CartItems)
        {
            if(CartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cardItems[item];

            }
            
        }
        return totalAmount;
}

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in CartItems)
        {
            if(cardItems[item]>0)
            {
                totalItem+= cardItems[item];
            }

        }
        return totalItem;
    }
    
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cardItems,addToCart,removeFromCart};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;