// 50 Vegetarian Recipes
const recipes = [
    // BREAKFAST RECIPES (12)
    {
        id: 1,
        title: "Fluffy Pancakes",
        category: "breakfast",
        description: "Light and fluffy pancakes perfect for a weekend breakfast with maple syrup.",
        ingredients: ["flour", "eggs", "milk", "butter", "sugar", "baking powder"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
    },
    {
        id: 2,
        title: "Avocado Toast",
        category: "breakfast",
        description: "Simple and healthy breakfast with creamy avocado on toasted bread.",
        ingredients: ["bread", "avocado", "lemon", "salt", "pepper", "olive oil"],
        time: "10 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400"
    },
    {
        id: 3,
        title: "Greek Yogurt Parfait",
        category: "breakfast",
        description: "Layered yogurt with granola, fresh berries, and honey.",
        ingredients: ["greek yogurt", "granola", "strawberries", "blueberries", "honey"],
        time: "5 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"
    },
    {
        id: 4,
        title: "Veggie Omelette",
        category: "breakfast",
        description: "Fluffy eggs with bell peppers, onions, tomatoes, and cheese.",
        ingredients: ["eggs", "bell peppers", "onions", "tomatoes", "cheese", "milk"],
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400"
    },
    {
        id: 5,
        title: "Banana Smoothie Bowl",
        category: "breakfast",
        description: "Thick smoothie topped with fruits, nuts, and seeds.",
        ingredients: ["banana", "yogurt", "berries", "granola", "chia seeds", "honey"],
        time: "10 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400"
    },
    {
        id: 6,
        title: "French Toast",
        category: "breakfast",
        description: "Cinnamon-spiced French toast with powdered sugar and berries.",
        ingredients: ["bread", "eggs", "milk", "cinnamon", "vanilla", "butter"],
        time: "15 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400"
    },
    {
        id: 7,
        title: "Oatmeal with Fruits",
        category: "breakfast",
        description: "Creamy oatmeal topped with fresh fruits and nuts.",
        ingredients: ["oats", "milk", "banana", "berries", "almonds", "honey"],
        time: "12 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400"
    },
    {
        id: 8,
        title: "Breakfast Burrito",
        category: "breakfast",
        description: "Tortilla filled with scrambled eggs, beans, cheese, and salsa.",
        ingredients: ["tortilla", "eggs", "black beans", "cheese", "salsa", "avocado"],
        time: "20 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400"
    },
    {
        id: 9,
        title: "Blueberry Muffins",
        category: "breakfast",
        description: "Moist and fluffy muffins bursting with fresh blueberries.",
        ingredients: ["flour", "blueberries", "sugar", "eggs", "milk", "butter"],
        time: "35 mins",
        servings: 12,
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400"
    },
    {
        id: 10,
        title: "Veggie Breakfast Wrap",
        category: "breakfast",
        description: "Whole wheat wrap with scrambled eggs and sautéed vegetables.",
        ingredients: ["tortilla", "eggs", "spinach", "mushrooms", "cheese", "tomatoes"],
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1563051291-7e8f8a5c0b9c?w=400"
    },
    {
        id: 11,
        title: "Chia Pudding",
        category: "breakfast",
        description: "Overnight chia pudding with coconut milk and mango.",
        ingredients: ["chia seeds", "coconut milk", "mango", "honey", "vanilla"],
        time: "5 mins + overnight",
        servings: 2,
        image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400"
    },
    {
        id: 12,
        title: "Veggie Frittata",
        category: "breakfast",
        description: "Baked egg dish with vegetables and cheese, perfect for brunch.",
        ingredients: ["eggs", "zucchini", "tomatoes", "cheese", "onions", "herbs"],
        time: "30 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400"
    },

    // LUNCH RECIPES (12)
    {
        id: 13,
        title: "Caesar Salad",
        category: "lunch",
        description: "Classic Caesar salad with romaine lettuce, parmesan, and croutons.",
        ingredients: ["romaine lettuce", "parmesan", "croutons", "caesar dressing"],
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400"
    },
    {
        id: 14,
        title: "Caprese Sandwich",
        category: "lunch",
        description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze.",
        ingredients: ["bread", "mozzarella", "tomatoes", "basil", "balsamic vinegar"],
        time: "10 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400"
    },
    {
        id: 15,
        title: "Vegetable Stir-Fry",
        category: "lunch",
        description: "Quick and healthy stir-fried vegetables with soy sauce.",
        ingredients: ["broccoli", "bell peppers", "carrots", "soy sauce", "garlic", "ginger"],
        time: "15 mins",
        servings: 3,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400"
    },
    {
        id: 16,
        title: "Falafel Wrap",
        category: "lunch",
        description: "Crispy falafel with tahini sauce, lettuce, and tomatoes.",
        ingredients: ["chickpeas", "pita bread", "tahini", "lettuce", "tomatoes", "cucumber"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400"
    },
    {
        id: 17,
        title: "Quinoa Buddha Bowl",
        category: "lunch",
        description: "Nutritious bowl with quinoa, roasted vegetables, and tahini dressing.",
        ingredients: ["quinoa", "chickpeas", "sweet potato", "kale", "tahini", "lemon"],
        time: "30 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
    },
    {
        id: 18,
        title: "Margherita Pizza",
        category: "lunch",
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
        ingredients: ["pizza dough", "mozzarella", "tomatoes", "basil", "olive oil"],
        time: "20 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400"
    },
    {
        id: 19,
        title: "Greek Salad",
        category: "lunch",
        description: "Fresh salad with cucumbers, tomatoes, olives, and feta cheese.",
        ingredients: ["cucumber", "tomatoes", "olives", "feta cheese", "olive oil", "oregano"],
        time: "10 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400"
    },
    {
        id: 20,
        title: "Mushroom Risotto",
        category: "lunch",
        description: "Creamy Italian rice dish with mushrooms and parmesan.",
        ingredients: ["arborio rice", "mushrooms", "vegetable broth", "parmesan", "white wine"],
        time: "35 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1476124369491-b79faf26ed72?w=400"
    },
    {
        id: 21,
        title: "Veggie Quesadilla",
        category: "lunch",
        description: "Crispy tortilla filled with cheese and mixed vegetables.",
        ingredients: ["tortillas", "cheese", "bell peppers", "onions", "black beans"],
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400"
    },
    {
        id: 22,
        title: "Tomato Basil Soup",
        category: "lunch",
        description: "Rich and creamy tomato soup with fresh basil.",
        ingredients: ["tomatoes", "basil", "cream", "garlic", "onions", "vegetable broth"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400"
    },
    {
        id: 23,
        title: "Spinach Paneer Wrap",
        category: "lunch",
        description: "Indian-inspired wrap with paneer cheese and spinach.",
        ingredients: ["tortilla", "paneer", "spinach", "onions", "spices", "yogurt"],
        time: "20 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400"
    },
    {
        id: 24,
        title: "Vegetable Lasagna",
        category: "lunch",
        description: "Layered pasta with vegetables, cheese, and tomato sauce.",
        ingredients: ["lasagna noodles", "ricotta", "mozzarella", "spinach", "tomato sauce"],
        time: "60 mins",
        servings: 8,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400"
    },

    // DINNER RECIPES (14)
    {
        id: 25,
        title: "Spaghetti Aglio e Olio",
        category: "dinner",
        description: "Simple Italian pasta with garlic, olive oil, and chili flakes.",
        ingredients: ["spaghetti", "garlic", "olive oil", "chili flakes", "parsley", "parmesan"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400"
    },
    {
        id: 26,
        title: "Vegetable Curry",
        category: "dinner",
        description: "Rich and aromatic curry with mixed vegetables and coconut milk.",
        ingredients: ["mixed vegetables", "coconut milk", "curry paste", "onions", "garlic"],
        time: "35 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400"
    },
    {
        id: 27,
        title: "Eggplant Parmesan",
        category: "dinner",
        description: "Breaded eggplant slices baked with marinara and mozzarella.",
        ingredients: ["eggplant", "marinara sauce", "mozzarella", "parmesan", "breadcrumbs"],
        time: "45 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400"
    },
    {
        id: 28,
        title: "Stuffed Bell Peppers",
        category: "dinner",
        description: "Bell peppers filled with rice, beans, and melted cheese.",
        ingredients: ["bell peppers", "rice", "black beans", "corn", "cheese", "tomatoes"],
        time: "40 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1606936752083-52672aac7fe0?w=400"
    },
    {
        id: 29,
        title: "Pad Thai Noodles",
        category: "dinner",
        description: "Thai stir-fried noodles with vegetables, tofu, and peanuts.",
        ingredients: ["rice noodles", "tofu", "bean sprouts", "peanuts", "tamarind sauce", "lime"],
        time: "25 mins",
        servings: 3,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400"
    },
    {
        id: 30,
        title: "Vegetable Biryani",
        category: "dinner",
        description: "Fragrant Indian rice dish with mixed vegetables and spices.",
        ingredients: ["basmati rice", "mixed vegetables", "biryani spices", "yogurt", "onions"],
        time: "45 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
    },
    {
        id: 31,
        title: "Margherita Flatbread",
        category: "dinner",
        description: "Thin crust flatbread with tomatoes, mozzarella, and fresh basil.",
        ingredients: ["flatbread", "mozzarella", "tomatoes", "basil", "olive oil", "garlic"],
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
    },
    {
        id: 32,
        title: "Chickpea Tikka Masala",
        category: "dinner",
        description: "Creamy Indian curry with chickpeas in tomato-based sauce.",
        ingredients: ["chickpeas", "tomatoes", "cream", "tikka masala spices", "onions", "garlic"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400"
    },
    {
        id: 33,
        title: "Zucchini Noodles Primavera",
        category: "dinner",
        description: "Light and healthy zoodles with mixed vegetables and pesto.",
        ingredients: ["zucchini", "cherry tomatoes", "pesto", "parmesan", "pine nuts"],
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
    },
    {
        id: 34,
        title: "Black Bean Tacos",
        category: "dinner",
        description: "Flavorful tacos with seasoned black beans and fresh toppings.",
        ingredients: ["black beans", "taco shells", "cheese", "lettuce", "salsa", "sour cream"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400"
    },
    {
        id: 35,
        title: "Vegetable Enchiladas",
        category: "dinner",
        description: "Tortillas filled with vegetables, beans, and covered in enchilada sauce.",
        ingredients: ["tortillas", "black beans", "corn", "cheese", "enchilada sauce", "peppers"],
        time: "35 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1617343267417-49f2b6b4d551?w=400"
    },
    {
        id: 36,
        title: "Penne Arrabbiata",
        category: "dinner",
        description: "Spicy Italian pasta with tomato sauce and red chili peppers.",
        ingredients: ["penne pasta", "tomatoes", "garlic", "chili peppers", "olive oil", "basil"],
        time: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400"
    },
    {
        id: 37,
        title: "Vegetable Paella",
        category: "dinner",
        description: "Spanish rice dish with saffron, vegetables, and peas.",
        ingredients: ["rice", "saffron", "bell peppers", "peas", "tomatoes", "vegetable broth"],
        time: "40 mins",
        servings: 6,
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400"
    },
    {
        id: 38,
        title: "Cauliflower Steaks",
        category: "dinner",
        description: "Roasted cauliflower steaks with herbs and lemon.",
        ingredients: ["cauliflower", "olive oil", "herbs", "lemon", "garlic", "parmesan"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1568162603664-fcd658421851?w=400"
    },

    // DESSERT RECIPES (12)
    {
        id: 39,
        title: "Chocolate Chip Cookies",
        category: "dessert",
        description: "Soft and chewy cookies loaded with chocolate chips.",
        ingredients: ["flour", "butter", "sugar", "chocolate chips", "eggs", "vanilla"],
        time: "25 mins",
        servings: 24,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
    },
    {
        id: 40,
        title: "Strawberry Cheesecake",
        category: "dessert",
        description: "Rich and creamy cheesecake with fresh strawberries.",
        ingredients: ["cream cheese", "graham crackers", "sugar", "strawberries", "eggs"],
        time: "60 mins + chill",
        servings: 8,
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400"
    },
    {
        id: 41,
        title: "Tiramisu",
        category: "dessert",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
        ingredients: ["ladyfingers", "mascarpone", "coffee", "cocoa powder", "eggs", "sugar"],
        time: "30 mins + chill",
        servings: 8,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400"
    },
    {
        id: 42,
        title: "Chocolate Brownies",
        category: "dessert",
        description: "Fudgy and rich chocolate brownies with a crackly top.",
        ingredients: ["chocolate", "butter", "sugar", "eggs", "flour", "cocoa powder"],
        time: "35 mins",
        servings: 16,
        image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400"
    },
    {
        id: 43,
        title: "Apple Pie",
        category: "dessert",
        description: "Classic apple pie with cinnamon and flaky crust.",
        ingredients: ["apples", "pie crust", "sugar", "cinnamon", "butter", "lemon juice"],
        time: "70 mins",
        servings: 8,
        image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400"
    },
    {
        id: 44,
        title: "Lemon Bars",
        category: "dessert",
        description: "Tangy lemon custard on a buttery shortbread crust.",
        ingredients: ["lemons", "butter", "sugar", "eggs", "flour", "powdered sugar"],
        time: "45 mins",
        servings: 12,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400"
    },
    {
        id: 45,
        title: "Chocolate Mousse",
        category: "dessert",
        description: "Light and airy chocolate mousse with whipped cream.",
        ingredients: ["dark chocolate", "cream", "eggs", "sugar", "vanilla"],
        time: "20 mins + chill",
        servings: 6,
        image: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400"
    },
    {
        id: 46,
        title: "Vanilla Cupcakes",
        category: "dessert",
        description: "Fluffy vanilla cupcakes with buttercream frosting.",
        ingredients: ["flour", "butter", "sugar", "eggs", "vanilla", "buttercream"],
        time: "35 mins",
        servings: 12,
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400"
    },
    {
        id: 47,
        title: "Panna Cotta",
        category: "dessert",
        description: "Italian cream dessert with berry compote.",
        ingredients: ["cream", "sugar", "vanilla", "gelatin", "berries"],
        time: "15 mins + chill",
        servings: 4,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"
    },
    {
        id: 48,
        title: "Carrot Cake",
        category: "dessert",
        description: "Moist carrot cake with cream cheese frosting and walnuts.",
        ingredients: ["carrots", "flour", "sugar", "eggs", "cream cheese", "walnuts"],
        time: "50 mins",
        servings: 12,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400"
    },
    {
        id: 49,
        title: "Chocolate Lava Cake",
        category: "dessert",
        description: "Individual chocolate cakes with molten centers.",
        ingredients: ["chocolate", "butter", "eggs", "sugar", "flour"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400"
    },
    {
        id: 50,
        title: "Fruit Tart",
        category: "dessert",
        description: "Buttery tart shell filled with pastry cream and fresh fruits.",
        ingredients: ["tart shell", "pastry cream", "strawberries", "kiwi", "blueberries"],
        time: "40 mins + chill",
        servings: 8,
        image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400"
    }
];

// Store current filter
let currentCategory = 'all';
let currentSearchTerm = '';

// Function to create a recipe card
function createRecipeCard(recipe) {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
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
