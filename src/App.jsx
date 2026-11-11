import './App.css'
import MenuCategory from './MenuCategory'
import SearchBar from './SearchBar';
import CategoryButtons from './CategoryButtons';
import menuData from './menuData';
import DailySpecial from './DailySpecial';
import Cart from './Cart';
import cartReducer from './CartReducer';
import { useState } from 'react';
import { useReducer } from 'react';







function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, dispatch] = useReducer(cartReducer, []);

  const filteredMenu = menuData
    .map(category => {
        const filteredItems = category.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            ...category,
            items: filteredItems
        };
    })
    .filter(category =>
        category.items.length > 0 &&
        (selectedCategory === "All" ||
        category.category === selectedCategory)
    );


  function handleAddToCart(item) {
    dispatch({ type: 'ADD_ITEM', item })
  }

  function handleRemoveFromCart(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  function handleClearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  
  return (
    <>
    <div className="App">
      <header>
        <h1>Ember Kitchen</h1>
        <p>Fresh, delicious food made with love</p>
      </header>


      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryButtons
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />


      <main className="menu-container">

        {filteredMenu.length === 0 && (
            <p>No matching items found.</p>
        )}

        {filteredMenu.map(category => (
          <MenuCategory 
            key={category.category}
            category={category.category}
            items={category.items}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </main>

      <Cart
        cart={cart}
        handleClearCart={handleClearCart}
      />

    </div>
  
    <DailySpecial /> 
    </>
  )
}


export default App