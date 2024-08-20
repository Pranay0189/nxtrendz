import PropTypes from 'prop-types'
import { BsSearch } from 'react-icons/bs'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import './index.css'
import { Button } from '@mui/material'

const FiltersGroup = (props) => {
  const renderRatingsFiltersList = () => {
    const { ratingsList, changeRating, actiRatingId } = props

    return ratingsList.map((rating) => {
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        actiRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const { categoryOptions, changeCategory, actiCategoryId } = props

    return categoryOptions.map((eachItem) => {
      const onClickCategoryItem = () => changeCategory(eachItem.categoryId)
      const isActive = eachItem.categoryId === actiCategoryId

      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={eachItem.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{eachItem.name}</p>
        </li>
      )
    })
  }

  const renderProductsCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = (event) => {
    const { enterSearchInput } = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = (event) => {
    const { changeSearchInput } = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const { searchInput } = props

    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const { clearFilters } = props

  return (
    <div className="filter-group-container">
      {renderSearchInput()}
      {renderProductsCategories()}
      {renderRatingsFilters()}

      <Button
        variant="contained"
        type="button"
        color="primary"
        onClick={clearFilters}
      >
        <DeleteForeverIcon />
        Clear
      </Button>
    </div>
  )
}

FiltersGroup.propTypes = {
  ratingsList: PropTypes.arrayOf(
    PropTypes.shape({
      ratingId: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  changeRating: PropTypes.func.isRequired,
  actiRatingId: PropTypes.number.isRequired,
  categoryOptions: PropTypes.arrayOf(
    PropTypes.shape({
      categoryId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  changeCategory: PropTypes.func.isRequired,
  actiCategoryId: PropTypes.number.isRequired,
  enterSearchInput: PropTypes.func.isRequired,
  changeSearchInput: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  clearFilters: PropTypes.func.isRequired,
}

export default FiltersGroup
