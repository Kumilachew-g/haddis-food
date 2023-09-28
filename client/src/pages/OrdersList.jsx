import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deliverOrder, getAllOrders } from '../redux/actions/orderActions';

function OrdersList() {
  const dispatch = useDispatch();
  const getOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getOrdersState;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div className='table-responsive-lg'>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}
      <table className='table table-striped table-bordered table-responsive-sm'>
        <thead className='table-dark'>
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userId}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <h1>Delivered</h1>
                    ) : (
                      <button
                        className='btn btn-primary'
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
