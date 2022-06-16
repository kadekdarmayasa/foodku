const toggler = document.getElementById('toggler');
const navbarLink = document.querySelector('.navbar-link');

toggler.addEventListener('click', () => {
	navbarLink.classList.toggle('showNav');
});

window.addEventListener('scroll', () => {
	const navbar = document.querySelector('nav');
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.style.boxShadow = '0px 2px 10px rgba(255, 191, 156, 0.4)';
	} else {
		navbar.style.boxShadow = 'none';
	}
});

let parent = document.querySelector('aside .card').parentElement;

while (parent) {
	const hasOverflow = getComputedStyle(parent).overflow;
	if (hasOverflow !== 'visible') {
		console.log(hasOverflow, parent);
	}
	parent = parent.parentElement;
}
