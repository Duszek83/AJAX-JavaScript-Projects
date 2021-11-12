export default function removeActive(item) {
	item.forEach((btn) => {
		btn.classList.remove('active');
	});
}
