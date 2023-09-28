import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFood } from '../redux/actions/foodActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

function AddFood() {
  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState('');
  const [mediumPrice, setMediumPrice] = useState('');
  const [largePrice, setLargePrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addFoodState = useSelector((state) => state.addFoodReducer);
  const { loading, error, success } = addFoodState;

  function formHandler(e) {
    e.preventDefault();

    const food = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };

    console.log(food);
    dispatch(addFood(food));
  }
  return (
    <div>
      <div className='text-start shadow-lg p-3 mb-5 bg-body rounded'>
        <h1>Add food</h1>
        {loading && <Loading />}
        {error && <Error error='Something went wrong' />}
        {success && <Success success='Food added successfully' />}
        <form onSubmit={formHandler}>
          <input
            className='form-control'
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='small varient price'
            value={smallPrice}
            onChange={(e) => {
              setSmallPrice(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='medium varient price'
            value={mediumPrice}
            onChange={(e) => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='large varient price'
            value={largePrice}
            onChange={(e) => {
              setLargePrice(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='category'
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='image url'
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className='btn mt-3' type='submit'>
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFood;
