const renderContactPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("data-tab-content", "");
  contact.innerHTML = `
    <div class="hero">
    <h1>Contact us</h1>
  </div>
  <div class="contact-container">
    <div class="info">
      <div class="address">
        <p>
          <i class="fi-xnsuxl-map-marker-solid"></i>1783 Meriden-WatTup<br/>
          Southington, CT 06489
        </p>
      </div>
      <div class="hours">
        <p>
          <i class="fi-cnsuhl-clock-solid"></i>
          <span>Monday: closed! <br />
          <span>Tue-Thurs: </span> 11am-9pm<br /><span>Fri-Sun: </span> 11am-10pm
        </p>
      </div>
      <div class="phone">
        <p><i class="fi-xnsrxl-phone-solid"></i>(860) 426-9925</p>
      </div>
      <div class="contact-form">
        <form onsubmit="return false">
          <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
          <div class="input-box">
            <input type="text" required />
            <span>Full Name</span>
          </div>
          <div class="input-box">
            <input type="text" required />
            <span>Email</span>
          </div>
          <div class="input-box">
            <textarea required></textarea>
            <span>Type your message...</span>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.229313772934!2d-72.90865988470445!3d41.56428137924837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b7fcfe6b4637%3A0x517f2818fd9933d1!2sAngela&#39;s%20Pizza%20%26%20Deli!5e0!3m2!1sen!2sus!4v1652292791214!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"

  </div>`;

  contentContainer.appendChild(contact);
})();

export { renderContactPage };
