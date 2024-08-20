import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'

import './index.css'

const ProductCard = (props) => {
  const { productData } = props
  const { title, brand, imageUrl, rating, price, id } = productData

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <StarIcon sx={{ color: 'yellow' }} />
          </div>
        </div>
      </Link>
    </li>
  )
}

ProductCard.propTypes = {
  productData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
}

export default ProductCard
