import PropTypes from 'prop-types'
import './index.css'

const SimilarProductItem = (props) => {
  const { productDetails } = props
  const { title, brand, imageUrl, rating, price } = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        className="similar-product-image"
        alt={`similar product ${title}`}
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-products-brand">by {brand}</p>
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </li>
  )
}

SimilarProductItem.propTypes = {
  productDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default SimilarProductItem
