import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../ui/card";

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
    <div className="w-full py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Verified Institutions
      </h2>

      <div className="flex flex-col gap-4">
        {institutions.map((institution, index) => (
          <Card
            key={index}
            className="bg-white shadow hover:shadow-md transition-all border border-gray-100"
          >
            <CardHeader className="flex items-center justify-between w-full pb-2 relative">
              <div className="text-lg font-bold text-gray-800">{institution.name}</div>
              <button
                onClick={() => handleToggleDetails(index)}
                className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 focus:outline-none bg-transparent"
              >
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex justify-between mb-2 text-sm text-gray-500">
                <span>{institution.city}</span>
                <span>{institution.entryFee}</span>
              </div>

              {/* Extra details container with dynamic height */}
              <div
                className={`overflow-hidden transition-all duration-300 ${expandedIndex === index
                  ? "max-h-[500px] opacity-100 pt-4"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <CardDescription className="text-sm text-gray-700">
                  <p className="mb-2">
                    <strong>Description:</strong> {institution.description}
                  </p>
                  <p className="mb-1">
                    <strong>Registration Date:</strong> {institution.registrationDate}
                  </p>
                  <p className="mb-1">
                    <strong>Acceptance Date:</strong> {institution.acceptanceDate}
                  </p>
                  <p className="mb-1">
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
