const $body = document.body;

$body.addEventListener('click', (e) => {
	const element = e.target;

	switch (element.className) {
		case 'calculator':
			switchPage(element, element);
			break;
		case 'button':
			switchPage(element, element.parentElement.parentElement);
			break;
		case 'calculate':
			switchPage(element, element.parentElement.parentElement);
			gHa();
			break;
	}
});

const $ = (element) => document.querySelector(element);

const switchPage = (element, parent) => {
	parent.classList.add('hidden');
	$('.' + element.dataset.class).classList.remove('hidden');
};

const gHa = () => {
	const data = {};

	for (const element of $('form').elements) {
		if (element.name.length > 0) {
			data[element.name] = element.value;
		}
	}
	console.log(data);

	const yerba =
		((data.yerbaxMes * 12) / 1679 + (data.yerbaxMes * 360) / 15361) * 3.32;
	const asado = ((data.asadoxPersona * data.asadoxMes * 12) / 84.63) * 0.74;
	const sanguche =
		data.cantSandwBasic * 0.0028442 +
		data.cantSandwEsp *
			(0.0028442 + 0.00009899 + 0.0000629151 + 0.000978376 + 0.00000015856);
	const burger =
		data.burgerSimp * 0.00242053 +
		data.burgerDoble * (0.00242053 + 0.002309) +
		data.burgerTriple * (0.00242053 + 0.002309 * 2) +
		data.burgerMas * (0.00242053 + 0.002309 * data.medallones);

	const total = yerba + asado + sanguche + burger;

	$('.yerba').innerHTML = ' ' + yerba.toFixed(2) + ' gHa';
	$('.asado').innerHTML = ' ' + asado.toFixed(2) + ' gHa';
	$('.milanesa').innerHTML = ' ' + sanguche.toFixed(2) + ' gHa';
	$('.hamburguesa').innerHTML = ' ' + burger.toFixed(2) + ' gHa';
	$('.total').innerHTML = ' ' + total.toFixed(2) + ' gHa';
};
