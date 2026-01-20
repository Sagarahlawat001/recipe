// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry"
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking"
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad"
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat"
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian"
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles"
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza"
    }
];

// DOM Selection - Get the container where recipes will be displayed
const recipeContainer = document.querySelector('#recipe-container');

// Controls
const filterButtons = document.querySelectorAll('.filters button');
const sortButtons = document.querySelectorAll('.sorters button');

// State (filter + sort mode only, not mutating recipes)
let currentFilter = 'all';
let currentSort = null;

// Pure function: create HTML for a single recipe card
const createRecipeCard = (recipe) => `
    <div class="recipe-card" data-id="${recipe.id}">
        <h3>${recipe.title}</h3>
        <div class="recipe-meta">
            <span>⏱️ ${recipe.time} min</span>
            <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
        </div>
        <p>${recipe.description}</p>
    </div>
`;

// Pure function: map recipes to HTML (transformation without side effects)
const recipesToHTML = (recipesToRender) => 
    recipesToRender.map(createRecipeCard).join('');

// Side-effect function: render recipes to DOM (only side-effect isolated here)
const renderRecipes = (recipesToRender) => {
    recipeContainer.innerHTML = recipesToHTML(recipesToRender);
};

// Attach event listeners - separated from pure functions
const attachEventListeners = () => {
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentFilter = event.target.getAttribute('data-filter');
            updateDisplay();
        });
    });

    sortButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedSort = event.target.getAttribute('data-sort');
            // Toggle sort mode: if clicking the same button, turn off sorting
            currentSort = (currentSort === selectedSort) ? null : selectedSort;
            updateDisplay();
        });
    });
};

// Initialize application
attachEventListeners();
updateDisplay();

// Pure predicates for filtering - Higher-order functions returning predicates
const createFilterPredicate = (filterMode) => {
    const predicates = {
        all: () => () => true,
        quick: () => (recipe) => recipe.time < 30,
        easy: () => (recipe) => recipe.difficulty === 'easy',
        medium: () => (recipe) => recipe.difficulty === 'medium',
        hard: () => (recipe) => recipe.difficulty === 'hard'
    };
    return (predicates[filterMode] || predicates.all)();
};

// Pure function: filter recipes based on mode using composed predicates
const applyFilter = (recipesList, filterMode) => {
    const predicate = createFilterPredicate(filterMode);
    return recipesList.filter(predicate);
};

// Pure comparators for sorting - Higher-order functions returning comparators
const comparators = {
    name: (a, b) => a.title.localeCompare(b.title),
    time: (a, b) => a.time - b.time
};

// Pure function: sort recipes based on mode without mutating original
const applySort = (recipesList, sortMode) => {
    if (!sortMode || !comparators[sortMode]) return recipesList;
    
    // Create a shallow copy to avoid mutations
    return [...recipesList].sort(comparators[sortMode]);
};

// Pure function: compose filter and sort operations
const processRecipes = (recipesList, filterMode, sortMode) => {
    return applySort(
        applyFilter(recipesList, filterMode),
        sortMode
    );
};

// Pure function: get displayed recipes from current state
const getDisplayedRecipes = () => 
    processRecipes(recipes, currentFilter, currentSort);

// Central orchestrator: update state and re-render
const updateDisplay = () => {
    const recipesToDisplay = getDisplayedRecipes();
    renderRecipes(recipesToDisplay);
};

