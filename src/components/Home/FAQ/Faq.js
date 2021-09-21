import React,{useState} from 'react'
import {Data} from './Data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus,FiMinus} from 'react-icons/fi'


const FaqSection=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    height:60vh;
    background:#fff;
    width:100vw;
    padding:7rem;
    
    
`;


const Container=styled.div`
    box-shadow:2px 10px 35px 1px rgba(153,153,153,0.3);
    padding:4rem;
    border-radius:25px;
    width:85vw;
`;

const Wrap=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    text-align:left;
    cursor:pointer;

    h1{
        padding:2rem;
        font-size:2rem;
        margin-top:4rem;
    }

    span{
        color:#0E79BD;
        margin-right:1.5rem;
    }
`;

const Dropdown=styled.div`
    width:100%;
    height:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    p{
        font-size:1.5rem;
    }
`;

function Faq() {
    const [clicked,setClicked]=useState(false);

    const toggle=index=>{
        if(clicked===index){
            return setClicked(null);
        }

        setClicked(index);
    }


    return (
        <IconContext.Provider value={{
            color:'#000',size:"25px"
        }}>
        <center><h2 style={{fontSize:"2.5rem"}}>FAQs</h2></center>
        <FaqSection>
            <Container>
                {Data.map((item,index)=>{
                    return(
                        <div style={{marginTop:"3rem"}}>
                            <Wrap onClick={()=>toggle(index)}
                            key={index}>
                            <h2>{item.question}</h2>
                            <span>{clicked==index?<FiMinus style={{color:"#0E79BD"}}/>:<FiPlus style={{color:"#0E79BD"}}/>}</span>
                            </Wrap>
                            {
                                clicked===index?(
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ):null

                            }
                            
                        </div>
                    )
                })}
            </Container>
        </FaqSection>
        </IconContext.Provider>
    )
}

export default Faq

