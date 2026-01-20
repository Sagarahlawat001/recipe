// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: [
            "400g spaghetti",
            "200g pancetta, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "Black pepper to taste",
            "Salt for pasta water"
        ],
        steps: [
            "Bring a large pot of salted water to boil and cook spaghetti until al dente.",
            "Meanwhile, fry pancetta in a large pan until crispy, about 5 minutes.",
            "In a bowl, whisk together eggs, cheese, and plenty of black pepper.",
            "Drain pasta, reserving 1 cup of pasta water.",
            "Toss hot pasta with pancetta (off heat), then add egg mixture, tossing constantly.",
            "Add pasta water gradually to reach desired creaminess. Serve immediately."
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: [
            "600g chicken breast, cubed",
            "1 cup yogurt",
            "3 tbsp tikka masala paste",
            "400ml coconut cream",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "Fresh cilantro for garnish"
        ],
        steps: [
            "Marinate chicken in yogurt and tikka paste for at least 30 minutes.",
            "Heat oil in a large pan and sear chicken until golden, remove and set aside.",
            "In the same pan, sauté onion and garlic until fragrant.",
            "Add tikka paste and cook for 1 minute.",
            "Stir in canned tomatoes and simmer for 5 minutes.",
            "Add coconut cream and return chicken to pan.",
            "Simmer for 15-20 minutes until sauce thickens. Garnish with cilantro."
        ]
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: [
            "500g all-purpose flour",
            "250g cold butter",
            "10g salt",
            "50g sugar",
            "7g instant yeast",
            "300ml cold water",
            "1 egg yolk (for egg wash)"
        ],
        steps: [
            "Mix flour, salt, sugar, yeast, and water to form dough.",
            {
                step: "Fold in cold butter using lamination technique - perform 4-6 folds total",
                substeps: [
                    "Roll dough into rectangle (30x20cm)",
                    "Place cold butter slab in center, fold dough edges over butter",
                    {
                        step: "Perform lamination folds (4 turns required)",
                        substeps: [
                            {
                                step: "First Turn",
                                substeps: [
                                    "Roll dough to 30x20cm thickness",
                                    "Fold into thirds (letter fold)",
                                    "Refrigerate 30 minutes"
                                ]
                            },
                            {
                                step: "Second Turn",
                                substeps: [
                                    "Remove from fridge, let rest 5 minutes",
                                    "Rotate 90° and roll to 30x20cm",
                                    "Fold into thirds again",
                                    "Refrigerate 30 minutes"
                                ]
                            },
                            {
                                step: "Third Turn",
                                substeps: [
                                    "Repeat rotation and fold sequence",
                                    "Refrigerate 30 minutes"
                                ]
                            },
                            {
                                step: "Fourth Turn (Final)",
                                substeps: [
                                    "Rotate and fold one last time",
                                    "Refrigerate at least 1 hour before shaping"
                                ]
                            }
                        ]
                    },
                    "Result: Final dough should have 729 thin butter layers"
                ]
            },
            "Let dough rest between folds (at least 30 minutes each).",
            "Roll out dough to 3mm thickness and cut into triangles (8x12cm).",
            "Roll triangles into croissant shapes, starting from wide end.",
            "Place on parchment-lined baking sheet with pointed end tucked underneath.",
            "Let rise for 1-2 hours at room temperature until puffy.",
            "Brush with egg wash and bake at 200°C for 20-25 minutes until golden brown."
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: [
            "2 large tomatoes, chopped",
            "1 cucumber, diced",
            "1 red onion, thinly sliced",
            "200g Kalamata olives",
            "200g feta cheese, crumbled",
            "4 tbsp olive oil",
            "2 tbsp red wine vinegar",
            "1 tsp dried oregano"
        ],
        steps: [
            "Chop tomatoes and cucumber into bite-sized pieces.",
            "Slice red onion thinly and place in a large bowl.",
            "Add tomatoes, cucumber, and olives to the bowl.",
            "Whisk together olive oil, vinegar, and oregano.",
            "Pour dressing over vegetables and toss gently.",
            "Top with crumbled feta cheese and serve immediately."
        ]
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: [
            "1.5kg beef tenderloin",
            "400g mushrooms, finely chopped",
            "500g puff pastry",
            "200g pâté",
            "2 shallots, minced",
            "2 cloves garlic, minced",
            "2 eggs (for egg wash)",
            "Salt and pepper to taste"
        ],
        steps: [
            {
                step: "Sear and prepare the beef fillet",
                substeps: [
                    "Pat beef dry with paper towels",
                    "Season generously with salt and pepper",
                    "Heat oil in large pan until very hot",
                    "Sear beef 2-3 minutes on each side until golden brown",
                    "Cool completely on cutting board (can refrigerate)"
                ]
            },
            {
                step: "Prepare mushroom duxelles - the key layer",
                substeps: [
                    "Finely chop mushrooms to release moisture",
                    "Sauté shallots and garlic in butter until fragrant",
                    "Add mushrooms and cook until all liquid evaporates (15-20 min)",
                    "Season with salt and pepper, cool before using"
                ]
            },
            "Spread thin layer of pâté evenly over all sides of beef.",
            "Layer mushroom duxelles on top of pâté.",
            {
                step: "Wrap beef in puff pastry carefully",
                substeps: [
                    "Roll out pastry to 3mm thickness",
                    "Place beef in center and wrap pastry around it",
                    "Seal edges with egg wash, press gently",
                    "Trim excess pastry and reserve for decoration"
                ]
            },
            "Brush entire pastry surface with egg wash.",
            "Score decoratively with knife (optional for appearance).",
            "Bake at 180°C for 25-35 minutes until pastry is golden and internal temp reaches 50-55°C.",
            "Rest for 10 minutes before slicing and serving."
        ]
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: [
            "2 cups broccoli florets",
            "1 bell pepper, sliced",
            "150g snap peas",
            "1 cup mushrooms, sliced",
            "3 cloves garlic, minced",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tsp ginger, grated"
        ],
        steps: [
            "Heat oil in a wok or large skillet over high heat.",
            "Add garlic and ginger, stir-fry for 30 seconds.",
            "Add broccoli and bell pepper, stir-fry for 3-4 minutes.",
            "Add snap peas and mushrooms, continue stir-frying for 2-3 minutes.",
            "Pour soy sauce and sesame oil over vegetables.",
            "Toss everything together and cook for 1 minute.",
            "Serve immediately over rice or noodles."
        ]
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: [
            "300g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "2 cups bean sprouts",
            "4 green onions, chopped",
            "3 tbsp tamarind paste",
            "2 tbsp fish sauce",
            "3 tbsp sugar",
            "50g roasted peanuts, crushed"
        ],
        steps: [
            "Soak rice noodles in warm water until softened, drain well.",
            "Heat oil in wok and stir-fry shrimp until pink, remove and set aside.",
            "Push oil to the side, crack eggs into wok and scramble.",
            "Add drained noodles and stir-fry for 2-3 minutes.",
            "Mix tamarind paste, fish sauce, and sugar, pour over noodles.",
            "Add shrimp, bean sprouts, and green onions, toss for 2 minutes.",
            "Transfer to plate and top with crushed peanuts. Serve with lime wedges."
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: [
            "500g pizza dough",
            "250ml tomato sauce",
            "300g fresh mozzarella, sliced",
            "3 large tomatoes, sliced",
            "Fresh basil leaves",
            "3 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat oven to 250°C (or as hot as it will go).",
            "Stretch pizza dough and place on pizza stone or baking sheet.",
            "Spread tomato sauce evenly over dough, leaving 2cm border.",
            "Arrange tomato slices and mozzarella over sauce.",
            "Drizzle with olive oil, sprinkle salt and pepper.",
            "Bake for 12-15 minutes until crust is golden and cheese melts.",
            "Top with fresh basil and serve immediately."
        ]
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

// Pure function: create HTML for ingredients list
const createIngredientsHTML = (ingredients) => `
    <ul class="ingredients-list">
        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
`;

// Pure recursive function: render steps at any nesting level
// Supports arbitrary depth of nesting (steps → substeps → sub-substeps → ...)
const renderStepRecursively = (step, depth = 0) => {
    // Base case: if step is a string, render as list item
    if (typeof step === 'string') {
        return `<li>${step}</li>`;
    }
    
    // Recursive case: if step is an object with 'step' and 'substeps'
    if (typeof step === 'object' && step.step && Array.isArray(step.substeps)) {
        const substepsClass = depth === 0 ? 'substeps-list' : `nested-substeps-level-${depth}`;
        const renderedSubsteps = step.substeps
            .map(substep => renderStepRecursively(substep, depth + 1))
            .join('');
        
        return `
            <li>
                <strong>${step.step}</strong>
                <ul class="${substepsClass}">
                    ${renderedSubsteps}
                </ul>
            </li>
        `;
    }
    
    // Fallback for edge cases
    return `<li>${String(step)}</li>`;
};

// Pure function: create HTML for steps list with recursive nesting support
const createStepsHTML = (steps) => {
    const renderedSteps = steps
        .map(step => renderStepRecursively(step, 0))
        .join('');
    
    return `
        <ol class="steps-list">
            ${renderedSteps}
        </ol>
    `;
};

// Pure function: create HTML for a single recipe card with expandable sections
const createRecipeCard = (recipe) => `
    <div class="recipe-card" data-id="${recipe.id}">
        <h3>${recipe.title}</h3>
        <div class="recipe-meta">
            <span>⏱️ ${recipe.time} min</span>
            <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
        </div>
        <p>${recipe.description}</p>
        
        <div class="recipe-actions">
            <button class="toggle-btn toggle-ingredients" data-id="${recipe.id}" data-section="ingredients">
                📋 Show Ingredients
            </button>
            <button class="toggle-btn toggle-steps" data-id="${recipe.id}" data-section="steps">
                👨‍🍳 Show Steps
            </button>
        </div>
        
        <div class="expandable-section ingredients-section" id="ingredients-${recipe.id}" style="display: none;">
            <h4>Ingredients:</h4>
            ${createIngredientsHTML(recipe.ingredients)}
        </div>
        
        <div class="expandable-section steps-section" id="steps-${recipe.id}" style="display: none;">
            <h4>Steps:</h4>
            ${createStepsHTML(recipe.steps)}
        </div>
    </div>
`;

// Pure function: map recipes to HTML (transformation without side effects)
const recipesToHTML = (recipesToRender) => 
    recipesToRender.map(createRecipeCard).join('');

// Side-effect function: render recipes to DOM (only side-effect isolated here)
const renderRecipes = (recipesToRender) => {
    recipeContainer.innerHTML = recipesToHTML(recipesToRender);
    attachToggleListeners();
};

// Attach event listeners for expandable sections (pure event attachment)
const attachToggleListeners = () => {
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const recipeId = event.target.getAttribute('data-id');
            const section = event.target.getAttribute('data-section');
            const sectionElement = document.getElementById(`${section}-${recipeId}`);
            
            if (sectionElement) {
                const isHidden = sectionElement.style.display === 'none';
                sectionElement.style.display = isHidden ? 'block' : 'none';
                
                // Update button text
                const label = section === 'ingredients' ? '📋' : '👨‍🍳';
                event.target.textContent = isHidden 
                    ? `${label} Hide ${section.charAt(0).toUpperCase() + section.slice(1)}` 
                    : `${label} Show ${section.charAt(0).toUpperCase() + section.slice(1)}`;
            }
        });
    });
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

