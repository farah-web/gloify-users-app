import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../redux/userActions'
import Loader from '../components/Loader';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(getUserProfile(id))
  }, [dispatch])

  const profile = useSelector(state => state.userProfile)
  const { first_name, last_name, avatar, email } = profile.users;
  const { loading, error } = profile;
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">User Profile #{id}</h1>
        <div className="row">
          <div className="col-10 mx-auto">

            {
              loading ? <Loader /> :
                error ? <h3>{error}</h3> :

                  (<div className="row my-5 d-flex justify-content-center align-items-center profile-block ">

                    <div className="col-md-6  text-center pt-5 pt-lg-0 order-2 order-lg-1 profile-block-txt">
                      <h1><strong className="brand-name display-3 mx-auto"> {first_name} {last_name}</strong></h1>
                      <h3 className="my-3">{email}</h3>

                    </div>

                    <div className="col-md-6 text-center mx-auto order-1 order-lg-2 profile-block-img">
                      <img src={avatar} className="img-profile imgBorder" alt="user profile pic" />
                    </div>
                  </div>)
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
