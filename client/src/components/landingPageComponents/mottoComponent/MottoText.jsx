import React, { Component } from 'react';
import './Motto.css'

class MottoText extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p className='textHeader'> Our Motto </p>
                <p className='textContent'>Roomer is inspired by a real life issue that the founders faced when they first moved to Chennai from different parts of the country. At Roomer, we want to make sure that moving to a new place is as seamless and easy as possible. Roomer is the one stop solution to accelerate your ideal roommate search.</p>
            </div>
         );
    }
}
 
export default MottoText;