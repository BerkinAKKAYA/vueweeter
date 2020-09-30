<template>
	<div id="app">
		<header>
			<h1>vueweeter</h1>
			<span>Account</span>
		</header>
		<div id="vueweet">
			<input
				type="text"
				:class="{ filled: vueweet }"
				v-model="vueweet"
				maxlength="48"
				@input="trimVueweet"
				placeholder="What do you have to say?"
			/>
			<img
				:class="{ disabled: !vueweet }"
				@click="sendVueweet"
				id="send"
				src="./send.png"
				alt="SEND"
			/>
		</div>
		<div id="limitIndicator">{{ vueweet.length }} / 48</div>
		<div id="vueweets">
			<div
				class="vueweet"
				v-for="vueweet in vueweets"
				:key="vueweet.createdAt"
			>
				<p class="metadata">
					<span>{{ vueweet.username }} <small>said,</small></span>
					<span class="time">
						{{ distance(vueweet.createdAt, Date.now()) }} ago
					</span>
				</p>
				<p class="content">{{ vueweet.content }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
	name: "App",
	data: () => ({
		vueweet: "",
		vueweets: [
			{
				username: "berkinakkaya",
				createdAt: Date.now() + 100000,
				content: "First vueweet ever!"
			},
			{
				username: "berkinakkaya",
				createdAt: Date.now() + 1000000,
				content: "I was here!"
			}
		]
	}),
	methods: {
		sendVueweet() {
			if (this.vueweet) {
				this.vueweets.unshift({
					username: "anonymous",
					createdAt: Date.now(),
					content: this.vueweet.trim()
				});
				this.vueweet = "";
			}
		},
		trimVueweet() {
			this.vueweet = this.vueweet.replace("  ", " ");
		},
		distance(a, b) {
			return formatDistance(a, b);
		}
	}
};
</script>

<style>
#app {
	color: white;
	width: 50%;
	margin: 100px 0;
}
#app header {
	width: 100%;
	display: flex;
	align-items: baseline;
	justify-content: space-between;
}
#app header h1 {
	font-size: 3em;
}
#app header span {
	font-size: 1.5em;
	opacity: 0.75;
	cursor: pointer;
}
#app header span:hover {
	opacity: 1;
}
#app #vueweet {
	position: relative;
	margin-top: 75px;
}
#app #vueweet input[type="text"]::placeholder {
	color: white;
	opacity: 0.5;
}
#app #vueweet input[type="text"] {
	width: 100%;
	padding: 25px;
	background: rgba(255, 255, 255, 0.06);
	outline: none;
	border: none;
	border-radius: 10px;
	color: white;
	font-size: 1.5em;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}
#app #vueweet input[type="text"]:hover {
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
}
#app #vueweet input[type="text"]:focus {
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
}
#app #vueweet input[type="text"].filled {
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}
#app #vueweet #send {
	width: 36px;
	position: absolute;
	top: 50%;
	right: 25px;
	transform: translateY(-50%) rotate(40deg);
	filter: hue-rotate(50deg);
	cursor: pointer;
	opacity: 0.6;
}
#app #vueweet #send:not(.disabled):hover {
	opacity: 1;
}
#app #vueweet #send.disabled {
	cursor: not-allowed;
	opacity: 0.3;
}
#app #limitIndicator {
	margin: 20px 20px 0 0;
	text-align: right;
	opacity: 0.5;
}
#app #vueweets {
	margin-top: 50px;
	position: relative;
}
#app #vueweets .vueweet {
	margin-top: 25px;
	padding: 25px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 10px;
	cursor: pointer;
	box-shadow: 0 0 0px rgba(0, 0, 0, 0);
	transition: all 0.5s ease;
}
#app #vueweets .vueweet:hover {
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
}
#app #vueweets .vueweet .metadata {
	font-size: 1.2em;
	display: flex;
	justify-content: space-between;
}
#app #vueweets .vueweet .metadata small {
	opacity: 0.5;
}
#app #vueweets .vueweet .metadata span {
	color: white;
}
#app #vueweets .vueweet .metadata .time {
	opacity: 0.75;
}
#app #vueweets .vueweet .content {
	font-size: 1.2em;
	margin-top: 20px;
	padding-left: 5px;
}
#app #vueweets .vueweet .content::before {
	content: "> ";
	opacity: 0.5;
}
</style>
