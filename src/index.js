require('normalize.css/normalize.css');
require('./styles/index.scss');

function isInView() {

}

window.onload = function () {
    let navLinks = document.querySelectorAll("#sidebar-navigation a");
    let section = document.querySelectorAll(".main-section");
    let sections = {};
    let i = 0;

    // console.log(navLinks[0].getAttribute("href"));

  Array.prototype.forEach.call(section, function(e) {
      console.log(e.offsetTop);
    sections[e.id] = e.offsetTop;
  });

  console.log(sections);

   window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    console.log(scrollPosition);
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.is-active')[0].setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
};
