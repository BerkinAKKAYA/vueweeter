<template>
	<div id="app">
		<h1>vueweeter</h1>
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
				<span class="content">{{ vueweet.content }}</span>
				<span class="time">
					{{ distance(vueweet.createdAt, Date.now()) }} ago
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import { firestorePlugin } from "vuefire";
import { formatDistance } from "date-fns";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

const db = firebase
	.initializeApp({
		projectId: "vueweeter",
		databaseURL: "https://vueweeter.firebaseio.com"
	})
	.firestore();

const posts = db.collection("posts");

export default {
	name: "App",
	data: () => ({
		vueweet: "",
		vueweets: []
	}),
	methods: {
		sendVueweet() {
			if (this.vueweet) {
				db.collection("vueweets").add({
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
	},
	firestore: {
		vueweets: db.collection("vueweets").orderBy("createdAt")
	}
};
</script>

<style>
#app {
	color: white;
	width: 50%;
	margin: 100px 0;
}
#app h1 {
	font-size: 3em;
	text-align: center;
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
	display: flex;
	flex-direction: column-reverse;
}
#app #vueweets .vueweet {
	margin-top: 25px;
	padding: 25px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 10px;
	box-shadow: 0 0 0px rgba(0, 0, 0, 0);
	transition: all 0.5s ease;
	display: grid;
	grid-template-columns: 1fr 180px;
}
#app #vueweets .vueweet .time {
	opacity: 0.5;
	text-align: right;
}
#app #vueweets .vueweet .content {
	font-size: 1.5em;
}
</style>
