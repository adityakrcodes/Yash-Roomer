import React, { Component } from 'react'
import './Filter.css'
import mapIcon from '../../../assets/map-icon.png'
import listIcon from '../../../assets/list-icon.png'


export class Filter extends Component {
    render() {
        const { view, changeView, isLoggedIn, location, preference, price, changeHandler } = this.props
        // redirect user to login before making a post
        const makePostButtonUrl = isLoggedIn ? '/makepost' : 'login'
        return (
            <div>
                <div id='topHeading'>
                    <h2 className='roomHeading'>Find your next roommate</h2>
                    <a href={makePostButtonUrl}>
                        <button className='postButton'>Make a Post</button>
                    </a>
                </div>
                <table className='filter'>
                    <tbody>
                    <tr>
                        <td className='filterItem'>
                            <select name="location" value={location} id="location" className='select select1' onChange={ changeHandler }>
                                <option value="">Location</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Kota">Kota</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="preference" value={preference} id="preference" className='select select3' onChange={ changeHandler }>
                                <option value="">Preference</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Student">Student</option>
                                <option value="Professional">Professional</option>
                                <option value="Elderly">Elderly</option>
                                <option value="No Smoking">No Smoking</option>
                                <option value="No Drinking">No Drinking</option>
                                <option value="No Partying">No Partying</option>
                                <option value="No Pets">No Pets</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="price" value={price} id="price" className='select select4' onChange={ changeHandler }>
                                <option value="">Price</option>
                                <option value="&#8377;1000-&#8377;2500">&#8377;1000-&#8377;2500</option>
                                <option value="&#8377;3000-&#8377;4000">&#8377;3000-&#8377;4000</option>
                                <option value="&#8377;4000-&#8377;5000">&#8377;4000-&#8377;5000</option>
                                <option value="&#8377;5000-&#8377;6500">&#8377;5000-&#8377;6500</option>
                                <option value="&#8377;7000-&#8377;8000">&#8377;7000-&#8377;8000</option>
                                <option value="&#8377;8000-&#8377;9500">&#8377;8000-&#8377;9500</option>
                                <option value="&#8377;10000-&#8377;12000">&#8377;10000-&#8377;12000</option>
                                <option value="&#8377;13000+">&#8377;13000+</option>
                            </select>
                        </td>
                        <td className='filterItem viewIconContainer'>
                            {view==='list' ? 
                                <input type="image" src={mapIcon} onClick={()=>changeView()} id='viewIcon' alt='Map View' /> :
                                <input type="image" src={listIcon} onClick={()=>changeView()} id='viewIcon' alt='List View'/>
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Filter
