class YoutubeChannel {
	constructor() {
		this.subscribers = [];
	}
	subscribe(user) {
		this.subscribers.push(user);
		user.update(`You have subscribed the channel`);
	}
	unsubscribe(user) {
		this.subscribers = this.subscribers.filter((sub) => sub !== user);
		user.update(`You have unsubscribed the channel`);
	}
	notify(message) {
		this.subscribers.forEach((sub) => sub.update(message));
	}
}
class User {
	constructor(name) {
		this.name = name;
	}
	update(data) {
		console.log(data);
	}
}
let sheryians = new YoutubeChannel();
let user1 = new User("Sujal");
let user2 = new User("Radhika");
sheryians.subscribe(user1);
sheryians.subscribe(user2);
sheryians.notify("hii guys");
