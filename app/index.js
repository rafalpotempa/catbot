const axios = require('axios');
const { MessengerContext } = require('bottender');

module.exports = async function App(raw_context) {
	try {
		let context = new MessengerContext(raw_context);
		// context.markSeen();
		if (context.event.isText && context.event.text.includes('/meow')) {
			// context.typingOn();
			let cat_url = await getCat();
			// context.typingOff();
			context.sendImage(cat_url);
		} else {
			context.sendText('Type \'/meow\'.');
		}
	} catch (error) {
		console.log(error);
	}
};

async function getCat() {
	try {
		let res = await axios({
			method: 'get',
			url: 'https://api.thecatapi.com/v1/images/search',
			headers: {'x-api-key': process.env.CAT_API_TOKEN},
			params: {'params': {'limit': 1, 'size': "full"}}
		});
		return res.data[0].url
	} catch (error) {
		console.error(error);
	}
}