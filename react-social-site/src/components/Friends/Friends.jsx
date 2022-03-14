import './Friends.scss';
import React from 'react';
import axios from 'axios';
import profilePhoto from '../../assets/icons/profile.png';

export class Friends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${this.props.currentPage}&count${this.props.pageCount}`).then(res => {
            console.log(res)
            this.props.setUsers(res.data.items)
            this.props.setUsersTotalCount(res.data.items.length)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${page}&count${this.props.pageCount}`).then(res => {
            console.log(res)
            this.props.setUsers(res.data.items)
        })
    }
    
    render(){
        //debugger
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageCount);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div>
                <div className='pagination'>
                    { pages.map(page => {return <span 
                                                className={ this.props.currentPage === page && 'select__pagination' } 
                                                onClick={ () => { this.onPageChanged(page) }} >{page}</span>}) }
                </div>
                { 
                    this.props.users.map( user => 
                            <div>
                                <span>
                                    <div>
                                        <img className="user__photo" src={user.photos.small !== null 
                                            ? user.photos.small : 
                                            profilePhoto } alt="avatar" />
                                    </div>
                                    <div>
                                        { user.followed ? 
                                        <button onClick={ () => { this.props.unfollow(user.id) }} >Unfollow</button> 
                                        : <button onClick={ () => { this.props.follow(user.id) }} >Follow</button> }
                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>{user.name}</div>
                                        <div>{user.status}</div>
                                    </span>
                                    <span>
                                        <div>city</div>
                                        <div>country</div>
                                    </span>
                                </span>
                            </div>
                        )
                }
            </div>
        )
    }
}