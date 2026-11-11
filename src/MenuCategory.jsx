import MenuItem from './MenuItem';

function MenuCategory({ category, items, handleAddToCart }) {
  return (
    <div className="menu-category">
      <h2>{category}</h2>
      <div className="items-container">
        {items.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            name={item.name}
            price={item.price}
            description={item.description}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuCategory;
