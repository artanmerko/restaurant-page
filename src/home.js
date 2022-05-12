const renderHomePage = (() =>{

  const contentContainer = document.querySelector('#content');

  const home = document.createElement("div");
  home.classList.add("tab-content")
  home.innerHTML =  `<div id="home" class="active" data-tab-content>
  <div class="hero">
    <h1>The Best Pizza in Town</h1>
    <p>Tasty and Delicious!</p>
    <div class="btn-container">
      <a data-tab-target="#menu" class="order-now">Order Now</a>
    </div>
  </div>
  <div class="info">
    <div class="address">
      <span><i class="fi-xnsuxl-map-marker-solid"></i></span>
      <p>1783 Meriden-Waterbury Turnpike<br />Southington, CT 06489</p>
    </div>
    <div class="hours">
      <span><i class="fi-cnsuhl-clock-solid"></i></span>
      <p>
        <span>Monday: closed!</span><br>
        <span>Tue-Thurs:</span>11am-9pm<br /><span>Fri-Sun:</span
        >11am-10pm
      </p>
    </div>
  </div>
</div>`;

  contentContainer.appendChild(home);
})();

export {renderHomePage};