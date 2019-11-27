 const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('bot', () => reqEvent('bot')(client));
  client.on('message', reqEvent('message'));


};