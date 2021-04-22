import React, {useRef} from 'react'
import './FrequentlyOrdered.css'
import {Items} from './ItemsData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default function FrequentlyOrdered(){

    const [currentPosition, setCurrentPosition] = React.useState(0);

    return(
        <div className='frequentlyBlock'>
            <div className='blockTitle'>
                <h4>MOST FREQUENTLY ORDERED </h4>
            </div>
            <div className='arrowAndItems'>
                {currentPosition > 0?(
                    <ArrowBackIosIcon className='arrow-back' onClick={()=>{
                        if(currentPosition >0){
                            setCurrentPosition(currentPosition-1)
                        }                
                    }}
                />
                ):(
                    <ArrowBackIosIcon className='arrow-back-disabled'/>
                )}
                
                <div  className='itemsBlock'>
                    {currentPosition + 4 <= Items.length ? (
                        <>
                            <div className='item'>
                                <img src={Items[currentPosition].image} className='image'/>
                                <div className='item-details'>
                                    <div className='titles'>
                                        <strong className='title'>{Items[currentPosition].title}</strong>
                                        <strong className='sub-title'>{Items[currentPosition].sub_title}</strong>
                                    </div>
                                    <button className='order-button'><b>RE-ORDER</b></button>
                                </div>
                                
                                
                            </div>

                            <div className='item'>
                                <img src={Items[currentPosition+1].image} className='image'/>
                                <div className='item-details'>
                                    <div className='titles'>
                                        <strong className='title'>{Items[currentPosition+1].title}</strong>
                                        <strong className='sub-title'>{Items[currentPosition+1].sub_title}</strong>
                                    </div>
                                    <button className='order-button'><b>RE-ORDER</b></button>
                                </div>
                                
                                
                            </div>

                            <div className='item'>
                                <img src={Items[currentPosition+2].image} className='image'/>
                                <div className='item-details'>
                                    <div className='titles'>
                                        <strong className='title'>{Items[currentPosition+2].title}</strong>
                                        <strong className='sub-title'>{Items[currentPosition+2].sub_title}</strong>
                                    </div>
                                    <button className='order-button'><b>RE-ORDER</b></button>
                                </div>
                                
                                
                            </div>

                            <div className='item'>
                                <img src={Items[currentPosition+3].image} className='image'/>
                                <div className='item-details'>
                                    <div className='titles'>
                                        <strong className='title'>{Items[currentPosition+3].title}</strong>
                                        <strong className='sub-title'>{Items[currentPosition+3].sub_title}</strong>
                                    </div>
                                    <button className='order-button'><b>RE-ORDER</b></button>
                                </div>
                                
                                
                            </div>
                        </>
                    ):(null)}                
                    
                </div>

                {currentPosition+4 < Items.length?(
                    <ArrowForwardIosIcon className='arrow-forward' onClick={()=>{
                        if(currentPosition+4 < Items.length){
                            setCurrentPosition(currentPosition+1)
                        }
                    }} />
                ):(
                    <ArrowForwardIosIcon className='arrow-forward-disabled'/>
                )}
                
            </div>
            
        </div>
    )
}