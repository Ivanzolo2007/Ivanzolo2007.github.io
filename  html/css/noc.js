
		const slides = document.querySelectorAll('.slide');
		let currentSlide = 0;

		function showSlide(index) {
			slides.forEach((slide, i) => {
				if (i === index) {
					slide.style.display = 'block';
				} else {
					slide.style.display = 'none';
				}
			});
		}

		function nextSlide() {
			currentSlide = (currentSlide + 1) % slides.length;
			showSlide(currentSlide);
		}

		// Auto-play the slideshow every 4 seconds
		setInterval(nextSlide, 4000);
		
		// Show the first slide initially
		showSlide(currentSlide);
	