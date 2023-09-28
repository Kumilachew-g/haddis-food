import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../redux/actions/orderActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

function Checkout({ subtotal }) {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  function handleToken(token) {
    console.log({ token });
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error='Some thing went wrong' />}
      {success && <Success success='Your order placed successfully' />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={handleToken}
        stripeKey='pk_test_51NneHgKlJn4JJiGpID4zcqvjQ8gkoDNybYJzUsTN3urnlwkTChPhIgpUlqNK6FvBQKpQx4FPbrGgQ0dKJuwVKp6S00bBL1JEtM'
        currency='USD'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
