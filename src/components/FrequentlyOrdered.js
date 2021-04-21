import React from 'react'
import './FrequentlyOrdered.css'
import {Items} from './ItemsData'

export default function FrequentlyOrdered(){
   
    return(
        <div className='frequentlyBlock'>
            <div className='blockTitle'>
                <h4>MOST FREQUENTLY ORDERED </h4>
            </div>
            <div className='itemsBlock'>
                
                        {Items.map((item)=>{
                            return(
                                <div className='item'>
                                    <img src={item.image} className='image'/>
                                    <div className='item-details'>
                                        <div className='titles'>
                                            <strong className='title'>{item.title}</strong>
                                            <strong className='sub-title'>{item.sub_title}</strong>
                                        </div>
                                        <button className='order-button'><b>RE-ORDER</b></button>
                                    </div>
                                    
                                    
                                </div>
                            )
                            
                        })}
                
            </div>
        </div>
    )
}