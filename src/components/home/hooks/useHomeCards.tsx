import { v4 as uuidv4 } from "uuid";
interface HomeCards {
	id: string;
	title: string;
	paragraph: string;
	linkText: string;
	url: string;
}

export const useHomeCards = () => {
	const HomeCardsList: HomeCards[] = [
		{
			id: uuidv4(),
			title: "For Developers",
			paragraph: "Browse our React jobs and start your career today",
			linkText: " Browse Jobs",
			url: "/jobs",
		},
		{
			id: uuidv4(),
			title: "For Employers",
			paragraph: "List your job to find the perfect developer for the role",
			linkText: "Add Job",
			url: "/jobs/add",
		},
		{
			id: uuidv4(),
			title: "Employees",
			paragraph:
				"Which employee benefits matter most among different generations: health insurance, retirement planning, flexible working and more",
			linkText: "View all employees",
			url: "/employees",
		},
		{
			id: uuidv4(),
			title: "Restaurant",
			paragraph: "Multistep form for restaurant food order",
			linkText: "Go to restaurant",
			url: "/restaurant",
		},
		{
			id: uuidv4(),
			title: "Food order",
			paragraph: "Multistep form to order your dream meal!",
			linkText: "Order your meal",
			url: "/food-order",
		},
		{
			id: uuidv4(),
			title: "Workers with RQ",
			paragraph: "Fetching workers with react query!",
			linkText: "View all workers",
			url: "/workers",
		},
		{
			id: uuidv4(),
			title: "Restaurant order",
			paragraph: "Order your meal with RHF and RQ",
			linkText: "Go to restaurant",
			url: "/restaurant",
		},
	];

	return { HomeCardsList };
};
