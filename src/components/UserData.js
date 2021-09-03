import React from 'react'
import {useHistory } from 'react-router-dom'


const UserData = (props) => {
    const { id, first_name, last_name, avatar, email } = props.cardValue;
    const history = useHistory();

    const getUserProfileHandler = (id) => {
        history.push(`/profile/${id}`)
    }
    return (
        <>
            <div key={id} className="col-md-6 col-lg-4">
                <div className="card">
                    <img src={avatar} className="imgSize" alt="user pic" />
                    <div className="card-body">
                        <h5 className="id-align card-title titleSize">USER ID: {id}</h5>
                        <h5 className="card-title titleSize">{first_name} {last_name}</h5>
                        <p className="card-text textSize">{email}</p>
                    </div>
                    <div className="btnclass">
                        <button onClick={() => getUserProfileHandler(id)} className="btn-card"> Profile </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserData
