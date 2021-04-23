import React from 'react'
import './Filters.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { orange, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        width: 200,
        color: 'secondary',
        marginLeft: 20,
    },
});
  
function valuetext(value) {
    return `${value}°C`;
}

export default function Filters(){

    const [showFormat, setShowFormat] = React.useState(true); 
    const [showPrice, setShowPrice] = React.useState(true);
    const [showOccassion, setShowOccassion] = React.useState(true); 
    
    const [value, setPriceValue] = React.useState([20, 37]);   
  
    const handleChange = (event, newValue) => {
      setPriceValue(newValue);
    };

    const classes = useStyles();
      

    return(
        <div className="filterBlock">
            
            <div className="filterHeader">
                <strong>FILTERS</strong>
                <small>Reset All</small>
            </div>
            <hr color='lightgray'/>
            <br/>
            
            <div className='formatField'>
                <div className='formatHeader'>
                    <strong>Format</strong>
                    {showFormat?(
                        <ExpandLessIcon className='expandLess' onClick={()=>setShowFormat(false)}/>
                    ):(
                        <ExpandMoreIcon className='expandLess' onClick={()=>setShowFormat(true)}/>
                    )}
                    
                </div>
                {showFormat?(
                    <>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label>Buffet</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label > Mini Buffet</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label>Lunch Box</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label> Snake Box</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label> Live Counter</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label> Food Conrner</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox" />
                            <label > Pop Up</label>
                        </div>
                    </>
                ):(null)}
                    
            </div>
            <br/>
            
            <div className='priceField'>
                <div className='formatHeader'>
                    <strong>Price Rs500-Rs2000</strong>
                    {showPrice?(
                        <ExpandLessIcon className='expandLess' onClick={()=>setShowPrice(false)}/>
                    ):(
                        <ExpandMoreIcon className='expandLess' onClick={()=>setShowPrice(true)}/>
                    )}
                </div>
                {showPrice?(
                    <div className={classes.root}>
                        <Slider
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                            color='#757ce8'
                        />
                    </div>
                ):(null)}
                
            </div>
            <br/>

            <div className='OccassionField'>
                <div className='formatHeader'>
                    <strong>Occassion</strong>
                    {showOccassion?(
                        <ExpandLessIcon className='expandLess' onClick={()=>setShowOccassion(false)}/>
                    ):(
                        <ExpandMoreIcon className='expandLess' onClick={()=>setShowOccassion(true)}/>
                    )}
                </div>

                {showOccassion?(
                    <>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label>Birthday Celebration</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox" />
                            <label > Baby Shower</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox" />
                            <label > House Warming</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label > House Party</label>
                        </div>
                        <div className="formatList">
                            <input type="checkbox"/>
                            <label> Society Event</label>
                        </div>
                    </>
                ):(null)}
                

            </div>
        </div>
    )
}