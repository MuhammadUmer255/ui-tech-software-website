 
    function alertService(service) {
      alert("More details about " + service + " will be available soon.");
    }

    function contactMessage() {
      alert("Thanks for reaching out to UI Tech! We'll get back to you soon.");
    }
    function sendMessage() {
            const email = document.getElementById('email').value;
            const response = document.getElementById('responseMsg');
            if (email.includes('@')) {
                response.style.color = 'green';
                response.innerText = 'Thanks! We will get back to you shortly.';
            } else {
                response.style.color = 'red';
                response.innerText = 'Please enter a valid email address.';
            }
        }

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const track = document.getElementById('carouselTrack');

    function moveSlide(direction) {
      currentSlide += direction;
      if (currentSlide >= slides.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    setInterval(() => moveSlide(1), 3000);
