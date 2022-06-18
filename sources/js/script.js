(() => {
	const toggler = document.getElementById('toggler');
	const navLinkContainer = document.querySelector('.navbar-link-container');

	toggler.addEventListener('click', () => {
		navLinkContainer.classList.toggle('showNav');
	});

	window.addEventListener('scroll', () => {
		const navbar = document.querySelector('nav');
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			navbar.style.boxShadow = '0px 2px 10px rgba(255, 191, 156, 0.4)';
		} else {
			navbar.style.boxShadow = 'none';
		}

		activeLink();
	});

	const navLinkContents = document.querySelectorAll('.nav-link-content');
	const navLinkItems = navLinkContainer.querySelectorAll('.link-item');
	function activeLink() {
		let current = '';

		navLinkContents.forEach((content) => {
			const sectionTop = content.offsetTop;
			if (scrollY >= sectionTop - 250) {
				current = content.getAttribute('id');
			}
		});

		navLinkItems.forEach((item) => {
			item.classList.remove('active');
			if (item.classList.contains(current)) {
				item.classList.add('active');
			}
		});
	}
})();
