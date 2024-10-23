import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image, rating }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Function to render stars based on the rating value
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5; // Whether to show a half star
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
      <>
        {/* Full stars */}
        {[...Array(filledStars)].map((_, index) => (
          <span key={`filled-${index}`} className="star full-star">★</span>
        ))}
        {/* Half star */}
        {halfStar && <span className="star half-star">★</span>}
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="star empty-star">★</span>
        ))}
      </>
    );
  };


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="food-item-rating">
            {renderStars(rating)} {/* Display dynamic stars */}
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
