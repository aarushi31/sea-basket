import React, { useEffect,useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import axios from 'axios'
import { useHistory } from 'react-router';

function Order() {
    const history=useHistory()
    const username=localStorage.getItem('customer_id');
    const password=localStorage.getItem('password')
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    const [products,setProducts]=useState([]);


    
    

    



    const addOrder=()=>{
        

        
          history.push('/make-payment')
    
       
    }



    return (
        <Container style={{marginTop:'100px'}}>
            
            <Button onClick={addOrder}>Proceed</Button>

        </Container>
    )
}

export default Order
