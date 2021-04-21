import React from 'react'
import './Filters.css'

export default function Filters(){
    return(
        <div className="filterBlock">
            <div className="filterHeader">
                <strong>Filters</strong>
                <small>Clear All</small>
            </div>
            <div className='formatField'>
                <div className='filterHeader'>
                    <strong>Format</strong>
                    <small>Clear All</small>
                </div>
                <div className="catList">
                        <input type="checkbox"/>
                        <label for="Engineering"> Engineering</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="business"/>
                        <label for="Business"> Business</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="management"/>
                        <label for="Management"> Management</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="business"/>
                        <label for="Business"> Business</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="management"/>
                        <label for="Management"> Management</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="business"/>
                        <label for="Business"> Business</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="management"/>
                        <label for="Management"> Management</label>
                    </div>
            </div>
            <div className='priceField'>
                <div className='filterHeader'>
                    <strong>Price Rs500-Rs2000</strong>
                    <small>Clear All</small>
                </div>
                <div>PricessSelector</div>
            </div>
            <div className='OccassionField'>
                <div className='filterHeader'>
                    <strong>Occassion</strong>
                    <small>Clear All</small>
                </div>
                <div className="catList">
                    <input type="checkbox" id="management"/>
                    <label for="Management"> Management</label>
                </div>
                <div className="catList">
                    <input type="checkbox" id="business"/>
                    <label for="Business"> Business</label>
                </div>
                <div className="catList">
                    <input type="checkbox" id="management"/>
                    <label for="Management"> Management</label>
                </div>
                <div className="catList">
                    <input type="checkbox" id="business"/>
                    <label for="Business"> Business</label>
                </div>
                <div className="catList">
                    <input type="checkbox" id="management"/>
                    <label for="Management"> Management</label>
                </div>

            </div>
        </div>
    )
}