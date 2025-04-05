// 👇 Carousel Script
document.addEventListener('DOMContentLoaded', function () {
  const destinations = [
    { name: 'Paris', image: 'images/paris.jpg', description: 'The city of light.' },
    { name: 'Tokyo', image: 'images/tokyo.jpg', description: 'A bustling metropolis.' },
    { name: 'New York', image: 'images/newyork.jpg', description: 'The city that never sleeps.' }
  ];

  const carouselInner = document.querySelector('.carousel-inner');
  if (carouselInner) {
    destinations.forEach((destination, index) => {
      const activeClass = index === 0 ? 'active' : '';
      const carouselItem = `
        <div class="carousel-item ${activeClass}">
          <img src="${destination.image}" class="d-block w-100" alt="${destination.name}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${destination.name}</h5>
            <p>${destination.description}</p>
          </div>
        </div>
      `;
      carouselInner.innerHTML += carouselItem;
    });
  }
});

// 👇 Booking Form Script
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const destination = document.getElementById('destination').value;

      if (!name || !email || !destination) {
        alert('Please fill in all fields.');
        return;
      }

      alert('Booking successful!');
    });
  }
});
