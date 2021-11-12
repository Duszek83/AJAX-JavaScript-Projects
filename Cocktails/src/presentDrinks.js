import fatchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
	// fetch drinks
	const data = await fatchDrinks(url);

	// display drinks
	const section = await displayDrinks(data);
	if (section) {
		setDrink(section);
	}
};

export default showDrinks;
