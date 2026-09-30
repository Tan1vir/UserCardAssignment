import React from 'react'

const UserCardComponent=(props)=>{
    return(
    
        <div className='UserCard'>

            <div className='UserImage'></div>

            <div className='UserInfo'>
                <h4>{props.user.name}</h4>
                <h4>{props.user.email}</h4>
            </div>

        </div>
    )
}
export default UserCardComponent