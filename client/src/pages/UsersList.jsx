import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deleteUser, getAllUsers } from '../redux/actions/userActions';

function UsersList() {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = usersState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div className='table-responsive-sm'>
      <h2>Users List</h2>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}
      <table className='table table-striped table-bordered table-responsive-sm'>
        <thead className='table-dark'>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.emil}</td>
                  <td>
                    <i
                      className='fa fa-trash'
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
