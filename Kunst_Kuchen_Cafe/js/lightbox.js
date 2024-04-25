document.querySelectorAll('.gallery a').forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.getAttribute('href');
      document.querySelector(target).style.display = 'block';
    });
  });
  
  document.querySelectorAll('.lightbox').forEach(function(element) {
    element.addEventListener('click', function() {
      this.style.display = 'none';
    });
  });
  