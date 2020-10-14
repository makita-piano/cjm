import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
import Philosophy from "../views/Philosophy.vue";
import Lesson from "../views/Lesson.vue";
import Event from "../views/Event.vue";
import Rental from "../views/Rental.vue";
import Contact from "../views/Contact.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Index",
			component: Index
		},
		{
			path: "/philosophy",
			name: "Philosophy",
			component: Philosophy
		},
		{
			path: "/lesson",
			name: "Lesson",
			component: Lesson
		},
    {
			path: "/event",
			name: "Event",
			component: Event
		},
		{
			path: "/rental",
			name: "Rental",
			component: Rental
		},
		{
			path: "/contact",
			name: "Contact",
			component: Contact
		}
	]
});
