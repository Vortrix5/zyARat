import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import {
	Clock,
	DollarSign,
	Ticket,
	Users
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

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
		<div className="w-full py-6">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 text-center">
				Overview
			</h2>

			{/* Stats Cards */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat, index) => (
					<Card
						key={index}
						className="bg-white shadow hover:shadow-md transition-all p-4"
					>
						<CardHeader className="flex items-center space-x-2 pb-2 justify-center">
							<div className="text-lg">{stat.icon}</div>
							<CardTitle className="text-base font-bold text-gray-700">
								{stat.title}
							</CardTitle>
						</CardHeader>
						<CardContent className="text-lg font-semibold text-gray-900 flex justify-center items-center pt-2">
							{stat.value}
						</CardContent>
						{stat.change && (
							<CardDescription
								className={`text-xs font-medium text-center px-2 mt-1 ${stat.change.includes("-") ? "text-red-500" : "text-green-500"
									}`}
							>
								{stat.change}
							</CardDescription>
						)}
					</Card>
				))}
			</div>

			{/* Two Big Cards Below */}
			<div className="grid md:grid-cols-3 gap-6 mt-8">
				{/* Bar Chart Card */}
				<Card className="md:col-span-2 bg-white shadow p-5 h-full">
					<CardHeader className="text-center pb-2">
						<CardTitle className="text-xl font-bold text-gray-800">
							User Onboarding by Month
						</CardTitle>
					</CardHeader>
					<CardContent className="pt-4 h-[300px]">
						<Bar
							data={onboardingChartData}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								plugins: {
									legend: {
										display: false,
									},
									tooltip: {
										backgroundColor: "#000",
										titleColor: "#fff",
										bodyColor: "#fff",
										footerColor: "#fff",
									},
								},
								scales: {
									x: {
										ticks: {
											color: "#555",
										},
										grid: {
											color: "rgba(0,0,0,0.05)",
										},
									},
									y: {
										ticks: {
											color: "#555",
										},
										grid: {
											color: "rgba(0,0,0,0.05)",
										},
									},
								},
							}}
						/>
					</CardContent>
				</Card>

				{/* Top Institutions Card */}
				<Card className="bg-white shadow p-5">
					<CardHeader className="text-center pb-2">
						<CardTitle className="text-xl font-bold text-gray-800">
							Top Cultural Institutions
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 pt-4">
						{institutions.map((institution, index) => (
							<div
								key={index}
								className="flex justify-between p-2 border-b border-gray-200"
							>
								<div className="text-md font-medium text-gray-900">
									{institution.name}
								</div>
								<div className="text-sm text-gray-500">
									{institution.city}
								</div>
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
