import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteCartItem } from '../redux/actions/cartActions';
import Checkout from '../components/Checkout';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CartPage() {
  // Initialize AOS
  AOS.init();

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className='row justify-content-center p-2' data-aos='fade-down'>
        <div className='col-md-6'>
          <h2 style={{ fontSize: '30px' }}>My Cart</h2>

          {cartItems.map((item, i) => {
            return (
              <div className='flex-container' key={i}>
                <div className='text-start m-1 w-100'>
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price:{item.price}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h1>
                  <h1 style={{ display: 'inline' }}>Quantity: </h1>
                  <i
                    className='fa-solid fa-plus'
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className='fa-solid fa-minus'
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>
                <div className='m-1 w-100'>
                  <img
                    src={item.image}
                    style={{ height: '80px', width: '80px' }}
                    alt=''
                  />
                </div>
                <div className='m-1 w-100'>
                  <i
                    className='mt-5 fa-solid fa-trash'
                    onClick={() => {
                      dispatch(deleteCartItem(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className='col-md-4 text-end'>
          <h2 style={{ fontSize: '40px' }}>Subtotal: {subtotal} /Birr-</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
