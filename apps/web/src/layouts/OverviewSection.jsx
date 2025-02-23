import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "../components/ui/card";
import {
	DollarSign,
	Ticket,
	Users,
	Clock,
	BarChart as BarChartIcon,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
);

const stats = [
	{
		title: "Total Revenue",
		value: "12345.670 DT",
		change: "+12.7%",
		icon: <DollarSign className="w-5 h-5 text-green-500" />,
	},
	{
		title: "Tickets Sold",
		value: "1,234",
		change: "-5.1%",
		icon: <Ticket className="w-5 h-5 text-blue-500" />,
	},
	{
		title: "Total Users",
		value: "123,456",
		change: "+8.9%",
		icon: <Users className="w-5 h-5 text-purple-500" />,
	},
	{
		title: "Institutions in Waitlist",
		value: "123",
		change: "+15.2%",
		icon: <Clock className="w-5 h-5 text-orange-500" />,
	},
];

const onboardingChartData = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],
	datasets: [
		{
			data: [45, 50, 55, 40, 60, 75, 80, 70, 90, 100, 110, 120],
			backgroundColor: "rgba(54, 162, 235, 0.6)", // Light blue for bars
			borderColor: "rgba(54, 162, 235, 1)", // Darker blue for border
			borderWidth: 1,
			barThickness: 20, // Adjusted thickness of the bars
			borderRadius: 5, // Rounded corners for the bars
		},
	],
};

const institutions = [
	{ name: "Bardo Museum", city: "Tunis" },
	{ name: "Carthage National Museum", city: "Carthage" },
	{ name: "National Theatre of Tunisia", city: "Tunis" },
	{ name: "The National Library of Tunisia", city: "Tunis" },
	{ name: "The Roman Theater of Dougga", city: "Dougga" },
];

export default function OverviewSection() {
	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 text-center">
				Overview
			</h2>
			{/* Stats Cards */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat, index) => (
					<Card
						key={index}
						className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-sm rounded-lg transition-transform transform hover:scale-[1.02] hover:shadow-md p-4 max-w-xs max-h-[250px]"
					>
						<CardHeader className="flex items-center space-x-2 pb-2 justify-center">
							<div className="text-lg">{stat.icon}</div>
							<CardTitle className="text-lg font-bold text-gray-700 dark:text-gray-200 text-center">
								{stat.title}
							</CardTitle>
						</CardHeader>
						<CardContent className="text-lg font-semibold text-gray-900 dark:text-white flex justify-center items-center">
							{stat.value}
						</CardContent>
						{stat.change && (
							<CardDescription
								className={`text-xs font-medium mt-1 text-center px-2 ${
									stat.change.includes("-") ? "text-red-500" : "text-green-500"
								}`}
							>
								{stat.change}
							</CardDescription>
						)}
					</Card>
				))}
			</div>
			{/* Two Big Cards Below */}
			<div className="flex gap-4 mt-8">
				{/* Bar Chart Card (75% Width) */}
				<Card className="flex-[3] min-w-[60%] flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
					<CardHeader className="text-center mb-4">
						<CardTitle className="text-xl font-bold">
							User Onboarding by Month
						</CardTitle>
					</CardHeader>
					<CardContent className="w-full h-[300px]">
						<Bar
							data={onboardingChartData}
							options={{
								responsive: true,
								plugins: {
									legend: {
										display: false, // Hide the label
									},
									tooltip: {
										backgroundColor: "#000", // Black background for tooltips
										titleColor: "#fff", // White title for tooltips
										bodyColor: "#fff", // White body text for tooltips
										footerColor: "#fff", // White footer color
									},
								},
								scales: {
									x: {
										ticks: {
											color: "#555", // Color of X axis ticks
										},
										grid: {
											color: "rgba(0,0,0,0.1)", // Grid color
										},
									},
									y: {
										ticks: {
											color: "#555", // Color of Y axis ticks
										},
										grid: {
											color: "rgba(0,0,0,0.1)", // Grid color
										},
									},
								},
							}}
						/>
					</CardContent>
				</Card>

				{/* Top Institutions Card (25% Width) */}
				<Card className="flex-[1] min-w-[35%] flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
					<CardHeader className="text-center mb-4">
						<CardTitle className="text-xl font-bold">
							Top Cultural Institutions
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2">
						{institutions.map((institution, index) => (
							<div
								key={index}
								className="flex justify-between p-2 border-b border-gray-200 dark:border-gray-700"
							>
								<div className="text-md font-medium text-gray-900 dark:text-white">
									{institution.name}
								</div>
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
