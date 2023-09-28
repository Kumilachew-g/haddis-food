import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deleteFood, getAllFood } from '../redux/actions/foodActions';
import { Link } from 'react-router-dom';

function FoodList() {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.getAllFoodsReducer);
  const { loading, error, foods } = foodState;

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <div className='table-responsive-sm'>
      <h2>Food List</h2>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}

      <table className='table table-striped table-bordered table-responsive-sm'>
        <thead className='table-dark'>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foods &&
            foods.map((food, i) => {
              return (
                <tr key={i}>
                  <td>{food.name}</td>
                  <td>
                    Small: {food.prices[0]['small']} <br />
                    Medium: {food.prices[0]['medium']} <br />
                    Large: {food.prices[0]['large']}
                  </td>
                  <td>{food.category}</td>
                  <td>
                    <i
                      className='fa fa-trash m-1'
                      onClick={() => {
                        dispatch(deleteFood(food._id));
                      }}
                    ></i>
                    <Link to={`/admin/editfood/${food._id}`}>
                      <i className='fa fa-edit m-1'></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default FoodList;
