import React from 'react';
import profilePhoto from '../../assets/icons/profile.png';
import { NavLink } from 'react-router-dom';

export const Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
    
    return (
        <div>
            <div className='pagination'>
                { pages.map(page => {return <span 
                                            className={ props.currentPage === page && 'select__pagination' } 
                                            onClick={ () => { props.onPageChanged(page) }} >{page}</span>}) }
            </div>
            { 
                props.users.map( user => 
                        <div>
                            <span>
                                <div>
                                    <NavLink to={ '/profile/' + user.id }>
                                        <img className="user__photo" src={user.photos.small !== null 
                                            ? user.photos.small : 
                                            profilePhoto } alt="avatar" />
                                    </NavLink>
                                </div>
                                <div>
                                    { user.followed ? 
                                    <button onClick={ () => { props.unfollow(user.id) }} >Unfollow</button> 
                                    : <button onClick={ () => { props.follow(user.id) }} >Follow</button> }
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
