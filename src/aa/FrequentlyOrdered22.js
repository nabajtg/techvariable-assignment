import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Items} from './ItemsData'
import './FrequentlyOrdered.css'

export default function FrequentlyOrdered22(){
    const Menu = (Items) => Items.map(item => {
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
    });
    
    
    
    const Arrow = ({ text, className }) => {
        return (
            <div
                className={className}
            >{text}</div>
        );
    };
    
    
    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    
    const [selected, setSelected] = React.useState(0);
    
    const onSelect = key => {
        setSelected(key);
    }
    
    const menu = Menu(Items, selected);
    
    
    
    return(
        <div className='frequentlyBlock'>
            <div className='blockTitle'>
                <h4>MOST FREQUENTLY ORDERED </h4>
            </div>
            <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                
            />
        </div>
    )
    
}
