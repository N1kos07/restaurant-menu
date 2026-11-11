function CategoryButtons({ selectedCategory, setSelectedCategory }) {

    const categories = ["All", "Appetizers", "Main Courses", "Desserts"];

    return (
        <div className="category-buttons">
            {categories.map(category => (
                <button
                    key={category}
                    aria-pressed={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryButtons;