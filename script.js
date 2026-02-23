// 50 Indian Vegetarian Recipes
const recipes = [
    // BREAKFAST RECIPES (12)
    {
        id: 1,
        title: "Masala Dosa",
        category: "breakfast",
        description: "Crispy rice crepe filled with spiced potato filling, served with chutney and sambar.",
        ingredients: ["rice", "urad dal", "potatoes", "onions", "curry leaves", "mustard seeds"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Poha",
        category: "breakfast",
        description: "Light and fluffy flattened rice with peanuts, curry leaves, and turmeric.",
        ingredients: ["poha", "peanuts", "curry leaves", "turmeric", "mustard seeds", "green chilies"],
        time: "15 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Idli Sambar",
        category: "breakfast",
        description: "Soft steamed rice cakes served with lentil-based vegetable stew.",
        ingredients: ["rice", "urad dal", "toor dal", "vegetables", "sambar powder", "tamarind"],
        time: "40 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Aloo Paratha",
        category: "breakfast",
        description: "Whole wheat flatbread stuffed with spiced mashed potatoes.",
        ingredients: ["wheat flour", "potatoes", "green chilies", "coriander", "cumin", "ghee"],
        time: "35 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop"
    },
    {
        id: 5,
        title: "Upma",
        category: "breakfast",
        description: "Savory semolina porridge with vegetables and South Indian spices.",
        ingredients: ["semolina", "onions", "curry leaves", "mustard seeds", "vegetables", "cashews"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Medu Vada",
        category: "breakfast",
        description: "Crispy fried lentil donuts served with coconut chutney.",
        ingredients: ["urad dal", "curry leaves", "ginger", "green chilies", "black pepper"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1626776876729-bab4ddaf2e46?w=600&h=400&fit=crop"
    },
    {
        id: 7,
        title: "Sabudana Khichdi",
        category: "breakfast",
        description: "Pearl tapioca cooked with peanuts, potatoes, and mild spices.",
        ingredients: ["sabudana", "peanuts", "potatoes", "cumin seeds", "green chilies", "curry leaves"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1645696643280-144fe266ef2f?w=600&h=400&fit=crop"
    },
    {
        id: 8,
        title: "Puri Bhaji",
        category: "breakfast",
        description: "Deep-fried puffed bread served with spiced potato curry.",
        ingredients: ["wheat flour", "potatoes", "onions", "tomatoes", "spices", "oil"],
        time: "40 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop"
    },
    {
        id: 9,
        title: "Rava Idli",
        category: "breakfast",
        description: "Quick semolina steamed cakes with cashews and curry leaves.",
        ingredients: ["semolina", "yogurt", "cashews", "curry leaves", "mustard seeds", "ginger"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=400&fit=crop"
    },
    {
        id: 10,
        title: "Methi Thepla",
        category: "breakfast",
        description: "Gujarati flatbread with fenugreek leaves and whole wheat flour.",
        ingredients: ["wheat flour", "fenugreek leaves", "yogurt", "turmeric", "chili powder", "oil"],
        time: "30 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop"
    },
    {
        id: 11,
        title: "Kanda Poha",
        category: "breakfast",
        description: "Maharashtrian style flattened rice with onions and spices.",
        ingredients: ["poha", "onions", "peanuts", "curry leaves", "turmeric", "lemon"],
        time: "15 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop"
    },
    {
        id: 12,
        title: "Pesarattu",
        category: "breakfast",
        description: "Andhra style green gram crepe with ginger and green chilies.",
        ingredients: ["moong dal", "rice", "ginger", "green chilies", "cumin seeds", "onions"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop"
    },

    // LUNCH RECIPES (13)
    {
        id: 13,
        title: "Chole Bhature",
        category: "lunch",
        description: "Spicy chickpea curry served with deep-fried fluffy bread.",
        ingredients: ["chickpeas", "onions", "tomatoes", "flour", "spices", "yogurt"],
        time: "45 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&h=400&fit=crop"
    },
    {
        id: 14,
        title: "Paneer Butter Masala",
        category: "lunch",
        description: "Rich and creamy tomato-based curry with paneer cubes.",
        ingredients: ["paneer", "tomatoes", "cream", "butter", "kasuri methi", "spices"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 15,
        title: "Dal Tadka",
        category: "lunch",
        description: "Yellow lentils tempered with ghee, cumin, and garlic.",
        ingredients: ["toor dal", "ghee", "cumin", "garlic", "tomatoes", "green chilies"],
        time: "35 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&h=400&fit=crop"
    },
    {
        id: 16,
        title: "Rajma Chawal",
        category: "lunch",
        description: "Red kidney beans curry served with steamed basmati rice.",
        ingredients: ["rajma", "onions", "tomatoes", "rice", "ginger-garlic", "spices"],
        time: "60 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 17,
        title: "Palak Paneer",
        category: "lunch",
        description: "Cottage cheese cubes in smooth spinach gravy with spices.",
        ingredients: ["spinach", "paneer", "cream", "onions", "tomatoes", "spices"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 18,
        title: "Kadhi Pakora",
        category: "lunch",
        description: "Yogurt-based curry with gram flour fritters.",
        ingredients: ["yogurt", "gram flour", "onions", "spices", "curry leaves", "oil"],
        time: "40 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 19,
        title: "Aloo Gobi",
        category: "lunch",
        description: "Dry curry with potatoes and cauliflower in aromatic spices.",
        ingredients: ["potatoes", "cauliflower", "onions", "tomatoes", "turmeric", "cumin"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 20,
        title: "Vegetable Biryani",
        category: "lunch",
        description: "Fragrant basmati rice with mixed vegetables and aromatic spices.",
        ingredients: ["basmati rice", "mixed vegetables", "biryani masala", "yogurt", "saffron"],
        time: "50 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop"
    },
    {
        id: 21,
        title: "Bhindi Masala",
        category: "lunch",
        description: "Okra stir-fried with onions, tomatoes, and spices.",
        ingredients: ["okra", "onions", "tomatoes", "dry mango powder", "spices"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 22,
        title: "Baingan Bharta",
        category: "lunch",
        description: "Roasted and mashed eggplant cooked with onions and tomatoes.",
        ingredients: ["eggplant", "onions", "tomatoes", "green chilies", "coriander", "spices"],
        time: "35 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 23,
        title: "Malai Kofta",
        category: "lunch",
        description: "Fried potato and paneer balls in rich creamy gravy.",
        ingredients: ["potatoes", "paneer", "cream", "tomatoes", "cashews", "spices"],
        time: "45 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 24,
        title: "Matar Paneer",
        category: "lunch",
        description: "Green peas and cottage cheese in tomato-based gravy.",
        ingredients: ["paneer", "green peas", "tomatoes", "onions", "cream", "spices"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 25,
        title: "Dal Makhani",
        category: "lunch",
        description: "Black lentils and kidney beans in buttery tomato cream sauce.",
        ingredients: ["black urad dal", "rajma", "butter", "cream", "tomatoes", "spices"],
        time: "60 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&h=400&fit=crop"
    },

    // DINNER RECIPES (13)
    {
        id: 26,
        title: "Paneer Tikka Masala",
        category: "dinner",
        description: "Grilled paneer cubes in spicy tomato and cream gravy.",
        ingredients: ["paneer", "tomatoes", "cream", "yogurt", "tikka masala", "bell peppers"],
        time: "40 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 27,
        title: "Vegetable Korma",
        category: "dinner",
        description: "Mixed vegetables in rich cashew and coconut gravy.",
        ingredients: ["mixed vegetables", "cashews", "coconut", "cream", "spices", "onions"],
        time: "35 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 28,
        title: "Kadai Paneer",
        category: "dinner",
        description: "Paneer cooked with bell peppers and onions in spicy tomato gravy.",
        ingredients: ["paneer", "bell peppers", "onions", "tomatoes", "kadai masala"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 29,
        title: "Mushroom Masala",
        category: "dinner",
        description: "Button mushrooms in spicy onion-tomato gravy with Indian spices.",
        ingredients: ["mushrooms", "onions", "tomatoes", "ginger-garlic", "garam masala"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 30,
        title: "Shahi Paneer",
        category: "dinner",
        description: "Royal curry with paneer in rich cashew-cream gravy.",
        ingredients: ["paneer", "cashews", "cream", "tomatoes", "cardamom", "saffron"],
        time: "35 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 31,
        title: "Chana Masala",
        category: "dinner",
        description: "Chickpeas in tangy tomato gravy with aromatic spices.",
        ingredients: ["chickpeas", "tomatoes", "onions", "chana masala", "dry mango powder"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 32,
        title: "Dum Aloo",
        category: "dinner",
        description: "Baby potatoes in rich yogurt-based Kashmiri gravy.",
        ingredients: ["baby potatoes", "yogurt", "cashews", "fennel", "dry ginger", "spices"],
        time: "40 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 33,
        title: "Paneer Do Pyaza",
        category: "dinner",
        description: "Paneer curry with double the amount of onions and spices.",
        ingredients: ["paneer", "onions", "tomatoes", "yogurt", "garam masala"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 34,
        title: "Mix Vegetable Curry",
        category: "dinner",
        description: "Assorted vegetables in spicy onion-tomato gravy.",
        ingredients: ["mixed vegetables", "onions", "tomatoes", "ginger-garlic", "spices"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 35,
        title: "Navratan Korma",
        category: "dinner",
        description: "Nine-gem curry with vegetables, fruits, and nuts in creamy sauce.",
        ingredients: ["mixed vegetables", "fruits", "nuts", "cream", "paneer", "spices"],
        time: "40 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 36,
        title: "Paneer Bhurji",
        category: "dinner",
        description: "Scrambled paneer with onions, tomatoes, and spices.",
        ingredients: ["paneer", "onions", "tomatoes", "green chilies", "turmeric", "cumin"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop"
    },
    {
        id: 37,
        title: "Aloo Matar",
        category: "dinner",
        description: "Potatoes and green peas in tomato-based curry.",
        ingredients: ["potatoes", "green peas", "tomatoes", "onions", "ginger-garlic", "spices"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },
    {
        id: 38,
        title: "Vegetable Jalfrezi",
        category: "dinner",
        description: "Stir-fried vegetables in tangy tomato-based sauce.",
        ingredients: ["mixed vegetables", "bell peppers", "onions", "tomatoes", "vinegar", "spices"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
    },

    // DESSERT RECIPES (12)
    {
        id: 39,
        title: "Gulab Jamun",
        category: "dessert",
        description: "Soft milk-solid balls soaked in rose-flavored sugar syrup.",
        ingredients: ["milk powder", "flour", "ghee", "sugar", "rose water", "cardamom"],
        time: "45 mins",
        servings: 12,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop"
    },
    {
        id: 40,
        title: "Rasgulla",
        category: "dessert",
        description: "Spongy cottage cheese balls in light sugar syrup.",
        ingredients: ["chenna", "sugar", "cardamom", "rose water"],
        time: "40 mins",
        servings: 10,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop"
    },
    {
        id: 41,
        title: "Kheer",
        category: "dessert",
        description: "Creamy rice pudding with cardamom, saffron, and dry fruits.",
        ingredients: ["rice", "milk", "sugar", "cardamom", "saffron", "nuts"],
        time: "35 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1562159278-1253a58da141?w=600&h=400&fit=crop"
    },
    {
        id: 42,
        title: "Jalebi",
        category: "dessert",
        description: "Crispy fried spirals soaked in saffron sugar syrup.",
        ingredients: ["flour", "yogurt", "sugar", "saffron", "cardamom", "ghee"],
        time: "50 mins",
        servings: 15,
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&h=400&fit=crop"
    },
    {
        id: 43,
        title: "Rasmalai",
        category: "dessert",
        description: "Soft paneer discs soaked in sweetened thickened milk.",
        ingredients: ["chenna", "milk", "sugar", "cardamom", "saffron", "pistachios"],
        time: "60 mins",
        servings: 8,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop"
    },
    {
        id: 44,
        title: "Gajar Halwa",
        category: "dessert",
        description: "Sweet carrot pudding with milk, ghee, and dry fruits.",
        ingredients: ["carrots", "milk", "sugar", "ghee", "cardamom", "cashews"],
        time: "50 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop"
    },
    {
        id: 45,
        title: "Ladoo",
        category: "dessert",
        description: "Sweet round balls made with gram flour, ghee, and sugar.",
        ingredients: ["gram flour", "ghee", "sugar", "cardamom", "cashews", "raisins"],
        time: "30 mins",
        servings: 20,
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&h=400&fit=crop"
    },
    {
        id: 46,
        title: "Barfi",
        category: "dessert",
        description: "Milk-based sweet fudge with cardamom and pistachios.",
        ingredients: ["milk", "sugar", "ghee", "cardamom", "pistachios", "cashews"],
        time: "40 mins",
        servings: 16,
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&h=400&fit=crop"
    },
    {
        id: 47,
        title: "Shrikhand",
        category: "dessert",
        description: "Sweetened strained yogurt flavored with saffron and cardamom.",
        ingredients: ["yogurt", "sugar", "saffron", "cardamom", "pistachios"],
        time: "4 hours + chill",
        servings: 4,
        image: "https://images.unsplash.com/photo-1562159278-1253a58da141?w=600&h=400&fit=crop"
    },
    {
        id: 48,
        title: "Kulfi",
        category: "dessert",
        description: "Traditional Indian ice cream with cardamom and pistachios.",
        ingredients: ["milk", "sugar", "cardamom", "saffron", "pistachios", "cream"],
        time: "6 hours + freeze",
        servings: 6,
        image: "https://images.unsplash.com/photo-1562159278-1253a58da141?w=600&h=400&fit=crop"
    },
    {
        id: 49,
        title: "Sandesh",
        category: "dessert",
        description: "Bengali sweet made from fresh cottage cheese and sugar.",
        ingredients: ["chenna", "sugar", "cardamom", "rose water", "pistachios"],
        time: "30 mins",
        servings: 12,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop"
    },
    {
        id: 50,
        title: "Payasam",
        category: "dessert",
        description: "South Indian vermicelli pudding with coconut milk and jaggery.",
        ingredients: ["vermicelli", "coconut milk", "jaggery", "cardamom", "cashews"],
        time: "30 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1562159278-1253a58da141?w=600&h=400&fit=crop"
    }
];

// Store current filter
let currentCategory = 'all';
let currentSearchTerm = '';

// Function to create a recipe card
function createRecipeCard(recipe) {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" onerror="this.src='https://via.placeholder.com/400x200/1e3a8a/ffffff?text=${encodeURIComponent(recipe.title)}'">
            <div class="recipe-content">
                <span class="recipe-category">${recipe.category}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>🍽️ ${recipe.servings} servings</span>
                </div>
            </div>
        </div>
    `;
}

// Function to display recipes
function displayRecipes(recipesToShow) {
    const recipeGrid = document.getElementById('recipeGrid');
    
    if (recipesToShow.length === 0) {
        recipeGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: #888;">No recipes found. Try a different search or filter.</p>';
        return;
    }
    
    recipeGrid.innerHTML = recipesToShow.map(recipe => createRecipeCard(recipe)).join('');
}

// Function to filter recipes
function filterRecipes() {
    let filteredRecipes = recipes;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.category === currentCategory
        );
    }
    
    // Filter by search term
    if (currentSearchTerm) {
        filteredRecipes = filteredRecipes.filter(recipe => {
            const searchLower = currentSearchTerm.toLowerCase();
            return recipe.title.toLowerCase().includes(searchLower) ||
                   recipe.description.toLowerCase().includes(searchLower) ||
                   recipe.ingredients.some(ingredient => 
                       ingredient.toLowerCase().includes(searchLower)
                   );
        });
    }
    
    displayRecipes(filteredRecipes);
}

// Set up filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active')
        );
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update current category
        currentCategory = this.dataset.category;
        
        // Filter and display recipes
        filterRecipes();
    });
});

// Set up search input
document.getElementById('searchInput').addEventListener('input', function(e) {
    currentSearchTerm = e.target.value;
    filterRecipes();
});

// Initial display of all recipes
displayRecipes(recipes);
