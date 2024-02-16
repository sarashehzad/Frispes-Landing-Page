
/*Tabs*/
const tabs = document.querySelectorAll('.nav-link');
const tabContent = document.querySelectorAll('.tab-pane');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-bs-target');
    const targetTab = document.querySelector(targetId);

    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    tabContent.forEach(tabContent => tabContent.classList.remove('show', 'active'));
    targetTab.classList.add('show', 'active');
  });
});
//coloured-indicator
document.addEventListener('DOMContentLoaded', function () {
  var indicator = document.getElementById('vertical-indicator');
  var tabs = document.querySelectorAll('.nav-pills .nav-link');

  function updateIndicator(tab) {
    var tabIndex = tab.getAttribute('data-tab-index');

    
    var indicatorPosition = tab.offsetTop + tab.offsetHeight / 2 - indicator.offsetHeight / 2;
    indicator.style.top = indicatorPosition + 'px';

    tabs.forEach(function (otherTab) {
      otherTab.classList.remove('active');
    });
    
    tab.classList.add('active');
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      updateIndicator(tab);
    });
  });
  var initialActiveTab = document.querySelector('.nav-pills .nav-link.active');
  if (initialActiveTab) {
    updateIndicator(initialActiveTab);
  }
});





//Logos
$(document).ready(function(){
  $('.slider-container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//images
$(document).ready(function(){
  $('.image-slider').slick({
    arrows: true,
    prevArrow: $('.prev-btnn'),
    nextArrow: $('.next-btnn'),
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1

  });
});

  
  document.addEventListener('DOMContentLoaded', function () {
    var prevButton = document.querySelector('.arrow-prev-grey-1');
    var rotateOrangeButton = document.querySelector('.arrow-rotate-orange-1');
    var rotateGreyButton = document.querySelector('.arrow-grey-rotate-1');
    var nextOrangeButton = document.querySelector('.arrow-next-orange-1');
  
    rotateOrangeButton.style.display = 'none';
    nextOrangeButton.style.display = 'none';
  
    prevButton.addEventListener('click', function () {
      
      rotateGreyButton.style.display = 'block';
      nextOrangeButton.style.display = 'none';
  
      prevButton.style.display = 'none';
      rotateOrangeButton.style.display = 'block';
    });
  
    rotateGreyButton.addEventListener('click', function () {
      
      prevButton.style.display = 'block';
      rotateOrangeButton.style.display = 'none';
  
      rotateGreyButton.style.display = 'none';
      nextOrangeButton.style.display = 'block';
    });
  });
  


//reviews boxes

$(document).ready(function(){
  $('.reviews-slider').slick({
    arrows: true,
    prevArrow: '.custom-prev-arrow',
    nextArrow: '.custom-next-arrow',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var prevButton = document.querySelector('.arrow-prev-grey-2');
  var rotateOrangeButton = document.querySelector('.arrow-rotate-orange-2');
  var rotateGreyButton = document.querySelector('.arrow-grey-rotate-2');
  var nextOrangeButton = document.querySelector('.arrow-next-orange-2');

  rotateOrangeButton.style.display = 'none';
  nextOrangeButton.style.display = 'none';

  prevButton.addEventListener('click', function () {
    
    rotateGreyButton.style.display = 'block';
    nextOrangeButton.style.display = 'none';

    prevButton.style.display = 'none';
    rotateOrangeButton.style.display = 'block';
  });

  rotateGreyButton.addEventListener('click', function () {
    
    prevButton.style.display = 'block';
    rotateOrangeButton.style.display = 'none';

    rotateGreyButton.style.display = 'none';
    nextOrangeButton.style.display = 'block';
  });
});

//spaces
$(document).ready(function(){
  $('.responsive').slick({
    arrows: true,
    prevArrow: $('.prev-button'),
    nextArrow: $('.next-button'),
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var prevButton = document.querySelector('.arrow-prev-grey');
  var rotateOrangeButton = document.querySelector('.arrow-rotate-orange');
  var rotateGreyButton = document.querySelector('.arrow-grey-rotate');
  var nextOrangeButton = document.querySelector('.arrow-next-orange');

  rotateOrangeButton.style.display = 'none';
  nextOrangeButton.style.display = 'none';

  prevButton.addEventListener('click', function () {
   
    rotateGreyButton.style.display = 'block';
    nextOrangeButton.style.display = 'none';

    prevButton.style.display = 'none';
    rotateOrangeButton.style.display = 'block';
  });

  rotateGreyButton.addEventListener('click', function () {
    
    prevButton.style.display = 'block';
    rotateOrangeButton.style.display = 'none';

    rotateGreyButton.style.display = 'none';
    nextOrangeButton.style.display = 'block';
  });
});

