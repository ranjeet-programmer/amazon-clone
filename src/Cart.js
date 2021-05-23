import React from 'react'
import styled from "styled-components"
import CartItems from "./CartItems"
import CartTotal from "./CartTotal"

function Cart({cartItems}) {


    const getTotalPrice = () => {

            let total = 0;
            cartItems.forEach((item) => {

                total += (item.product.price* item.product.quantity);
            })

            return total;
    }

    const getCount = () => {

        let count = 0;
        // loop through all cartItems
  
        cartItems.forEach((item) => {
  
          // add the quantity of the cart item to count
          count += item.product.quantity;
        })
  
        return count;
  
      }


    return (
        <Container>
           <CartItems cartItems={cartItems}/> 
           <CartTotal getCount = {getCount()} getTotalPrice = {getTotalPrice}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display:flex;
    //TROUBLE
    padding : 14px 18px 0 18px;
    align-items : flex-start;
`
