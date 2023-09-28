/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className='navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              className='logo'
              src='data:image/png;base64,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'
              alt=''
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              {currentUser ? (
                <div className='dropdown mt-2'>
                  <a
                    style={{ color: 'black' }}
                    className='dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {currentUser.name}
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                  >
                    <a className='dropdown-item' href='/orders'>
                      Orders
                    </a>
                    <a
                      className='dropdown-item'
                      href='#'
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      <li>Logout</li>
                    </a>
                  </div>
                </div>
              ) : (
                <li className='nav-item'>
                  <a className='nav-link' aria-current='page' href='/login'>
                    Login
                  </a>
                </li>
              )}
              <li className='nav-item'>
                <a className='nav-link' href='/cart'>
                  Cart {cartState.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
