import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../ui/card";

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
    <div className="w-full py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Waitlisted Institutions
      </h2>

      {/* Display message when the waitlist is empty */}
      {institutions.length === 0 ? (
        <div className="flex justify-center items-center h-[400px] text-xl text-gray-500">
          No institutions are in the waitlist
        </div>
      ) : (
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
                  <CardDescription className="text-sm text-gray-700 mb-4">
                    <p className="mb-2">
                      <strong>Description:</strong> {institution.description}
                    </p>
                    <p className="mb-1">
                      <strong>Registration Date:</strong> {institution.registrationDate}
                    </p>
                  </CardDescription>
                </div>

                {/* Accept and Decline buttons */}
                <div className="flex justify-between mt-4 pt-2">
                  <button
                    onClick={() => handleAccept(index)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDecline(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none transition-colors"
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
