import React,{useState} from 'react'
import {Data} from './Data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus,FiMinus} from 'react-icons/fi'
import darrow from '../../../images/icons/arrow.svg'

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
    margin-top:70px;
    
`;


const Container=styled.div`
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    padding:4rem;
    border-radius:25px;
    width:1200px;

`;

const Wrap=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    text-align:left;
    cursor:pointer;
    padding-top:80px;
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

    
`;

function Faq() {
    const [clicked,setClicked]=useState(null);

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
        
        <FaqSection>
            <Container>
                {Data.map((item,index)=>{
                    return(
                        <div>
                            <Wrap onClick={()=>toggle(index)}
                            key={index}>
                            <p style={{fontSize:"20px",fontWeight:"600",lineHeight:"32.81px"}}>{item.question}</p>
                            <span>{clicked==index?<FiMinus style={{color:"#0E79BD"}}/>:<img src={darrow} style={{color:"#0E79BD"}}/>}</span>
                            </Wrap>
                            {
                                clicked===index?(
                                    <Dropdown>
                                        <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"30.47px",marginTop:"90px"}}>{item.answer}</p>
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

