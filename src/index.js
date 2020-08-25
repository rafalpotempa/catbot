module.exports = async function App(context) {
	context.markSeen(context)

	if (context.event.isText && context.event.text.includes('/meow')) {
		getCat().then(cat => context.sendImage(cat));	
	}
};

async function getCat() {
	const axios = require('axios');
	try {
		let res = await axios({
			method: 'get',
			url: 'https://api.thecatapi.com/v1/images/search',
			headers: {'x-api-key': process.env.CAT_API_TOKEN},
			params: {'params': {'limit': 1, 'size': "full"}}	
		})
		return res.data['0'].url
	} catch (error) {
		console.log(error)
	}
}