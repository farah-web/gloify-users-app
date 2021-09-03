import React, { useState, useEffect } from 'react'
import UserData from '../components/UserData'
import Loader from '../components/Loader'
import { fetchUsers } from '../redux/userActions'
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const { users, loading, error } = user;
  const [val, setVal] = useState(1)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Our Services</h1>
        <div className="row">
          <div className="col-10 mx-auto">
            {
              loading ? <Loader />
                : (<div className="row justify-content-end">
                  <div className="col-2">
                    <label for="inputState" className="form-label">Sort</label>
                    <select id="inputState" className="form-select" onChange={e => setVal(e.target.value)}>
                      <option value="1" selected>None</option>
                      <option value="2">First Name</option>
                      <option value="3">Last Name</option>
                    </select>
                  </div>
                </div>)
            }
            {error ? <p>{error}</p> : null}
            <div className="row gy-4 my-3">
              {
                (parseInt(val) === 1) ?
                  users.sort((a, b) => a.id < b.id ? -1 : 1).map((cardValue) => {
                    return (<UserData cardValue={cardValue} />)
                  }) :

                  (parseInt(val) === 2) ?
                    users.sort((a, b) => a.first_name < b.first_name ? -1 : 1).map((cardValue) => {
                      return (<UserData cardValue={cardValue} />)
                    }) :

                    (parseInt(val) === 3) ?
                      users.sort((a, b) => a.last_name < b.last_name ? -1 : 1).map((cardValue) => {
                        return (<UserData cardValue={cardValue} />)
                      }) : null
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
