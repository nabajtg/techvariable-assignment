import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import {Items} from './ItemsData'
import './SearchItems.css'
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(()=>({
    itemsBlock:{
        marginTop: '30px'
    },
    item: {
        margin: '10px',
        backgroundColor: '#f3f3e6',
        paddingButton: '10px',
    },
    starIcon: {
        fontSize: '15px',
        color: 'white',
    }
  }));
  

export default function SearchItems(){
    const classes = useStyles()
    return (
        <div className='searchItemsBlock'>
            <div className='itemsTitle'>
                <strong>RESULTS({Items.length})</strong>
            </div>
            <br/>

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

            <Grid container className={classes.itemsBlock}>
                {Items.map((item, index)=>{
                    return(
                        <Grid item xs={3} className={classes.item} key={index}>
                            <img src={item.image} className='image'/>
                            <div>
                                <div className='title-price'>
                                    <strong className='title'>{item.title}</strong>
                                    <div className='priceBlock'>
                                        <div>
                                            <label className='price'><b>Rs {item.price}/- </b></label>
                                            <label className='texts'>per head</label>
                                        </div>
                                        <label className='texts'>10 dishes</label>
                                    </div>
                                </div>
                               
                            </div>
                            <div className='ratingBlock'>
                                <div>
                                    {item.rating < 3?(
                                        <div className='ratingLess3'>
                                            <StarIcon className={classes.starIcon}/>
                                            <label className='rating'>{item.rating}</label>

                                        </div>
                                    ):(null)}
                                    {item.rating >= 3 && item.rating < 4?(
                                        <div className='ratingLess4'>
                                            <StarIcon className={classes.starIcon}/>
                                            <label className='rating'>{item.rating}</label>

                                        </div>
                                    ):(null)}
                                    {item.rating >=4 && item.rating <=5?(
                                        <div className='rating5'>
                                            <StarIcon className={classes.starIcon}/>
                                            <label className='rating'>{item.rating}</label>

                                        </div>
                                    ):(null)}
                                </div>
                                <div className='noOfRatings'>
                                        <label>{item.no_of_rating} ratings</label>
                                </div>
                                
                            
                            </div>
                            
                            
                        </Grid>
                    )
                    
                })}
            </Grid>
        </div>
    )
}