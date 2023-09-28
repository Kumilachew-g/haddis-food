import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/userActions';
import Loading from '../../components/Loading';
import Success from '../../components/Success';
import Error from '../../components/Error';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerState = useSelector((state) => state.registerUserReducer);
  const { loading, success, error } = registerState;

  const dispatch = useDispatch();
  function register() {
    if (password !== confirmPassword) {
      return alert('Password does not match');
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded'>
          {loading && <Loading />}
          {success && <Success success='User Registered Successfully ' />}
          {error && <Error error='Email Already Registered' />}

          <h2 className='text-center m-2' style={{ fontSize: '35px' }}>
            Register
          </h2>
          <div>
            <input
              required
              type='text'
              placeholder='name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type='text'
              placeholder='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type='text'
              placeholder='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              type='text'
              placeholder='confirm password'
              className='form-control'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={register} className='btn mt-3 mb-3'>
              REGISTER
            </button>
            <br />
            <a style={{ color: 'black' }} href='/login'>
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
