// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white') 
    } else {
      sauce.classList.remove('sauce-white') 
    }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free') 
  } else {
    crust.classList.remove('crust-gluten-free') 
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pricePanel = document.querySelector('.panel.price')
  const listing = pricePanel.querySelector('ul')
  const priceTag = pricePanel.querySelector('strong')

  let priceList = ``
  let totalPrice = 10
  for (const topping in state) {
    if (state[topping]) {
      priceList += `<li>$${ingredients[topping].price} ${ingredients[topping].name}</li>`
      totalPrice += ingredients[topping].price
    }
  }

  listing.innerHTML = priceList
  priceTag.innerHTML = `$${totalPrice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
const pepperoniBtn = document.querySelector('.btn.btn-pepperoni')
pepperoniBtn.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  if (state.pepperoni) {
    pepperoniBtn.classList.add('active')
  } else {
    pepperoniBtn.classList.remove('active')
  }
  renderEverything();
});

const mushroomsBtn = document.querySelector('.btn.btn-mushrooms')
mushroomsBtn.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  if (state.mushrooms) {
    mushroomsBtn.classList.add('active')
  } else {
    mushroomsBtn.classList.remove('active')
  }
  renderEverything();
});

const greenPeppersBtn = document.querySelector('.btn.btn-green-peppers')
greenPeppersBtn.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  if (state.greenPeppers) {
    greenPeppersBtn.classList.add('active')
  } else {
    greenPeppersBtn.classList.remove('active')
  }
  renderEverything();
});

const whiteSauceBtn = document.querySelector('.btn.btn-sauce')
whiteSauceBtn.addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce) {
    whiteSauceBtn.classList.add('active')
  } else {
    whiteSauceBtn.classList.remove('active')
  }
  renderEverything();
});

const glutenFreeCrustBtn = document.querySelector('.btn.btn-crust')
glutenFreeCrustBtn.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (state.glutenFreeCrust) {
    glutenFreeCrustBtn.classList.add('active')
  } else {
    glutenFreeCrustBtn.classList.remove('active')
  }
  renderEverything();
});

