function MenuItem({ item, name, price, description, handleAddToCart }) {
  return (
    <div className="menu-item">

      <div className="item-header">
        <h3>{name}</h3>
        <span className="price">${price.toFixed(2)}</span>
      </div>

      <p className="description">{description}</p>

      <button onClick={() => handleAddToCart(item)}>
          Add to Cart
      </button>

    </div>
  )
}

export default MenuItem;