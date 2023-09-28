/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Food({ food }) {
  //  Initialize AOS
  AOS.init();

  const [variant, setVariant] = useState('small');
  const [quantity, setQuantity] = useState(1);

  // Modal state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addToCart(food, quantity, variant));
  };

  return (
    <div data-aos='zoom-in' className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        {' '}
        <h1>{food.name}</h1>
        <img
          src={food.image}
          className='img-fluid img'
          style={{ height: '200px', width: '200px' }}
        />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select
            className='form-control'
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {food.varients.map((variant) => {
              return (
                <option value={variant} key={variant}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select
            className='form-control'
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-1'>
            Price: {food.prices[0][variant] * quantity} Birr/-
          </h1>
        </div>
        <div className='m-1 w-100'>
          <button className='btn' onClick={addtocart}>
            Add To Cart
          </button>
        </div>
      </div>

      {/*  modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={food.image}
            style={{ height: '400px', marginBottom: '10px' }}
            className='img-fluid'
          />
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Food;
