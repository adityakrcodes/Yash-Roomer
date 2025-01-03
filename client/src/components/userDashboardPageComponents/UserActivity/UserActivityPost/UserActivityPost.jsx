import React, { Component } from 'react';
import './UserActivityPost.css';
import deleteImg from './../../../../assets/delete-icon.svg';
import editImg from './../../../../assets/edit-icon.svg';
import {deletePost} from './../../../../actions/post';

export class UserActivityPost extends Component {

    updateInfo() {
        const {_id} = this.props.userInfo
        const updatePosts = this.props.parentState;
        deletePost(_id, updatePosts)
    }

    render() {
        const { image_url, price, title, _id} = this.props.userInfo;
        const post_url = '/post/' + _id 
        const editpost_url = '/editpost/' + _id 
        return (
            <div className='post'>
                <a href={post_url}>
                    <img className='postPhoto' src={image_url} alt='user' />
                    <div className='postDesc'>
                        <h3 className='title'>{title}</h3>
                        <small className='price'>{price}</small>
                    </div>
                </a>
                <div id="userPostModify">
                    <ul>
                        <li>
                            <a href={editpost_url}> 
                                <img className="img-decoration" src={ editImg } alt=""/>
                            </a>
                        </li>
                        <li onClick={() => {this.updateInfo()}}>
                            <img className="img-decoration" src={ deleteImg } alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserActivityPost;
