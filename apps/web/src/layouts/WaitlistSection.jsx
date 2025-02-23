import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "../components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const initialWaitlistInstitutions = [
  {
    name: "Carthage Amphitheater",
    city: "Carthage",
    description:
      "The Carthage Amphitheater is one of the key historical sites in Tunisia, offering performances and exhibitions.",
    registrationDate: "12/10/2019",
    entryFee: "10 DT",
  },
  {
    name: "El Jem Archaeological Museum",
    city: "El Jem",
    description:
      "A museum focusing on the Roman history of Tunisia, with an impressive collection of mosaics and artifacts.",
    registrationDate: "22/11/2020",
    entryFee: "15 DT",
  },
  {
    name: "Sousse Archaeological Museum",
    city: "Sousse",
    description:
      "A museum dedicated to the history of the Sousse region, showcasing various historical and archaeological exhibits.",
    registrationDate: "10/06/2021",
    entryFee: "20 DT",
  },
  {
    name: "Kairouan Mosque",
    city: "Kairouan",
    description:
      "The Great Mosque of Kairouan is one of the oldest and most important mosques in Tunisia and the Islamic world.",
    registrationDate: "01/01/2021",
    entryFee: "Free",
  },
];

const WaitlistSection = () => {
  const [institutions, setInstitutions] = useState(initialWaitlistInstitutions);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleDetails = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAccept = (index) => {
    const updatedInstitutions = institutions.filter((_, i) => i !== index);
    setInstitutions(updatedInstitutions);
  };

  const handleDecline = (index) => {
    const updatedInstitutions = institutions.filter((_, i) => i !== index);
    setInstitutions(updatedInstitutions);
  };

  return (
    <div className="w-full min-h-screen p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Waitlisted Institutions
      </h2>

      {/* Display message when the waitlist is empty */}
      {institutions.length === 0 ? (
        <div className="flex justify-center items-center w-full h-full text-xl text-gray-500 dark:text-gray-300">
          No institutions are in the waitlist
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-full">
          {institutions.map((institution, index) => (
            <Card
              key={index}
              className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-all duration-300"
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
                  </CardDescription>
                </div>
                {/* Accept and Decline buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleAccept(index)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDecline(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Decline
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default WaitlistSection;
