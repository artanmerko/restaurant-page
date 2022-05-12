const renderMenuPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("data-tab-content", "");
  menu.innerHTML = `
  <div class="hero">
  <h1>Menu</h1>
  <img src="./images/chef.png" alt="" width="50" height="50" />
</div>
<div class="menu-container">
  <div class="menu-item">
    <img src="./images/cheese-burger.png" alt="" />
    <div class="item-content">
      <h4>Cheeseburger: <span>$12.49</span></h4>
      <p>
        Our traditional hamburger with onions, lettuce, tomatoes and cheese on top.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/jalapeno.png" alt="" />
    <div class="item-content">
      <h4>Jalapeno Poppers: <span>$6.99</span></h4>
      <p>Stuffed with a mixture of cheese, spices and breadcrumbs.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/pizza.png" alt="" />
    <div class="item-content">
      <h4>The Works Pizza: <span>$20.95</span></h4>
      <p>Homemade Napolitan pizza dough with onions, peppers, mushrooms, meatballs, sausage, bacon, pepperoni, & olives.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/pasta.png" alt="" />
    <div class="item-content">
      <h4>Spaghetti di Fierentina: <span>$15.95</span></h4>
      <p>Spaghetti pasta over homemade marinara sauce with fresh basel and fetta cheese on top. </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/ravioli.png" alt="" />
    <div class="item-content">
      <h4>Cheese Ravioli: <span>$12.99</span></h4>
      <p>Combination of ricotta, mozzarella and parmesan cheese for the filling, and a combination of all purpose and semolina flour for the pasta dough.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/caesar-salad.png" alt="" />
    <div class="item-content">
      <h4>Caesar salad: <span>$8.99</span></h4>
      <p>
      Green salad of romaine lettuce and croutons dressed with lemon juice, olive oil and caesar dressing.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/grilled-cheese.png" alt="" />
    <div class="item-content">
      <h4>Grilled cheese: <span>$7.99</span></h4>
      <p>
      Toasted slices of cheese between slices of white bread .
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/french-fries.png" alt="" />
    <div class="item-content">
      <h4>French Fries: <span>$6.95</span></h4>
      <p>
      Long, thin pieces of potato fried in oil.
      </p>
    </div>
  </div>
</div>`;

  contentContainer.appendChild(menu);
})();

export { renderMenuPage };
