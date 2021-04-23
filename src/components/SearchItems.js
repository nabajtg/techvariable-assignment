import React from 'react'
import {Items} from './ItemsData'
import './SearchItems.css'

export default function SearchItems(){
    return (
        <div className='searchItemsBlock'>
            <div className='itemsTitle'>
                <h4>RESULTS({Items.length})</h4>
            </div>
            <hr color='gray'/>

            <div className='activeFilters'>
                <div className='activeButtons'>
                    <button className='activeFilterButtons'>5+ Ratings   X</button>
                    <button className='activeFilterButtons'>Rs 0 - Rs 700   X</button> 
                    <button className='activeFilterButtons'>Non Vegeterian   X</button>
                    <button className='activeFilterButtons'>0 - 5 kms  X</button>

                </div>
                
                <div className='sortBy'>
                    Sort By : 
                    <select className='sortSelect'>
                        <option>Most pupular</option>
                        <option>Lowest Price</option>
                        <option>Highest Price</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>

            <div className='itemDisplayBlock'>
                
            </div>
        </div>
    )
}