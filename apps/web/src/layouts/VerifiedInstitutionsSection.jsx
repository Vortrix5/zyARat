import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "../components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const institutions = [
  {
    name: "Bardo Museum",
    city: "Tunis",
    description:
      "A famous museum showcasing Tunisia's rich cultural history. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nisi in arcu convallis, in blandit arcu cursus.",
    registrationDate: "01/01/2010",
    acceptanceDate: "15/02/2010",
    creationDate: "10/01/1800",
    entryFee: "10 DT",
  },
  {
    name: "Carthage National Museum",
    city: "Carthage",
    description:
      "A museum displaying artifacts from the ancient Carthaginian civilization. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    registrationDate: "15/05/2012",
    acceptanceDate: "20/06/2012",
    creationDate: "30/11/1850",
    entryFee: "15 DT",
  },
  {
    name: "National Theatre of Tunisia",
    city: "Tunis",
    description:
      "The National Theatre is one of the main cultural venues in Tunisia, hosting a wide range of performances from theatre to music. Donec malesuada orci non dui faucibus feugiat.",
    registrationDate: "22/07/2005",
    acceptanceDate: "15/08/2005",
    creationDate: "18/06/1948",
    entryFee: "20 DT",
  },
  {
    name: "The National Library of Tunisia",
    city: "Tunis",
    description:
      "A library that preserves Tunisia's literary heritage and hosts public exhibitions, lectures, and events. Curabitur vehicula velit ut elit facilisis, nec fermentum ligula facilisis.",
    registrationDate: "10/11/2008",
    acceptanceDate: "20/12/2008",
    creationDate: "12/03/1962",
    entryFee: "Free",
  },
  {
    name: "The Roman Theater of Dougga",
    city: "Dougga",
    description:
      "A Roman theater located in the archaeological site of Dougga. It remains one of the best-preserved monuments of the ancient Roman Empire in Tunisia.",
    registrationDate: "05/06/2011",
    acceptanceDate: "10/06/2011",
    creationDate: "01/10/150 AD",
    entryFee: "5 DT",
  },
  {
    name: "The Amphitheater of El Djem",
    city: "El Djem",
    description:
      "An ancient Roman amphitheater, famous for being one of the best-preserved in the world. Sed vestibulum libero nec risus feugiat, at mollis leo sagittis.",
    registrationDate: "17/04/2013",
    acceptanceDate: "21/04/2013",
    creationDate: "01/04/230 AD",
    entryFee: "12 DT",
  },
  {
    name: "Sidi Bou Said",
    city: "Tunis",
    description:
      "A charming town famous for its blue and white houses, art galleries, and stunning views of the Mediterranean Sea. A place that encapsulates Tunisian culture and art.",
    registrationDate: "02/09/2015",
    acceptanceDate: "10/09/2015",
    creationDate: "01/01/1400",
    entryFee: "Free",
  },
  {
    name: "The Medina of Tunis",
    city: "Tunis",
    description:
      "A UNESCO World Heritage site, this historic medina offers visitors a glimpse into Tunisia's history through its labyrinthine streets, historic mosques, and vibrant souks.",
    registrationDate: "01/08/2016",
    acceptanceDate: "15/08/2016",
    creationDate: "01/01/700 AD",
    entryFee: "Free",
  },
];

const VerifiedInstitutionSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleDetails = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Verified Institutions
      </h2>
      <div className="flex flex-col gap-6 w-full max-w-7xl">
        {institutions.map((institution, index) => (
          <Card
            key={index}
            className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-all duration-300"
          >
            <CardHeader className="flex items-center justify-between w-full pb-2 relative">
              <div className="text-lg font-bold">{institution.name}</div>
              <button
                onClick={() => handleToggleDetails(index)}
                className="absolute top-2 right-2 text-xl text-blue-500 hover:text-blue-700 focus:outline-none bg-transparent"
              >
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </CardHeader>
            <CardContent className="w-full">
              <div className="flex justify-between mb-2 text-sm text-gray-500">
                <span>{institution.city}</span>
                <span>{institution.entryFee}</span>
              </div>
              {/* Extra details container with dynamic height */}
              <div
                className={`overflow-y-scroll transition-all duration-300 ${
                  expandedIndex === index
                    ? "max-h-[500px] opacity-100" // Expanded state height
                    : "max-h-[10px] opacity-0" // Collapsed height reduced
                }`}
              >
                <CardDescription className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                  <p>
                    <strong>Description:</strong> {institution.description}
                  </p>
                  <p>
                    <strong>Registration Date:</strong> {institution.registrationDate}
                  </p>
                  <p>
                    <strong>Acceptance Date:</strong> {institution.acceptanceDate}
                  </p>
                  <p>
                    <strong>Creation Date:</strong> {institution.creationDate}
                  </p>
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VerifiedInstitutionSection;
