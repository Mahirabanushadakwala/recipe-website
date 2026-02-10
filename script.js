// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Fluffy Pancakes",
        category: "breakfast",
        description: "Light and fluffy pancakes perfect for a weekend breakfast.",
        ingredients: ["flour", "eggs", "milk", "butter", "sugar"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
    },
    {
        id: 2,
        title: "Caesar Salad",
        category: "lunch",
        description: "Classic Caesar salad with homemade dressing and croutons.",
        ingredients: ["romaine lettuce", "parmesan", "croutons", "caesar dressing"],
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400"
    },
    {
        id: 3,
        title: "Spaghetti Carbonara",
        category: "dinner",
        description: "Creamy Italian pasta with bacon and parmesan.",
        ingredients: ["spaghetti", "bacon", "eggs", "parmesan", "black pepper"],
        time: "30 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400"
    },
    {
        id: 4,
        title: "Chocolate Chip Cookies",
        category: "dessert",
        description: "Soft and chewy cookies loaded with chocolate chips.",
        ingredients: ["flour", "butter", "sugar", "chocolate chips", "eggs"],
        time: "25 mins",
        servings: 24,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
    },
    {
        id: 5,
        title: "Avocado Toast",
        category: "breakfast",
        description: "Simple and healthy breakfast with creamy avocado.",
        ingredients: ["bread", "avocado", "lemon", "salt", "pepper"],
        time: "10 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400"
    },
    {
        id: 6,
        title: "Grilled Chicken Sandwich",
        category: "lunch",
        description: "Juicy grilled chicken with fresh vegetables.",
        ingredients: ["chicken breast", "bread", "lettuce", "tomato", "mayo"],
        time: "25 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"
    },
    {
        id: 7,
        title: "Beef Tacos",
        category: "dinner",
        description: "Flavorful beef tacos with all the toppings.",
        ingredients: ["ground beef", "taco shells", "cheese", "lettuce", "salsa"],
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400"
    },
    {
        id: 8,
        title: "Strawberry Cheesecake",
        category: "dessert",
        description: "Rich and creamy cheesecake with fresh strawberries.",
        ingredients: ["cream cheese", "graham crackers", "sugar", "strawberries", "eggs"],
        time: "60 mins",
        servings: 8,
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400"
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