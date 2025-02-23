import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "../components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const initialComplaints = [
  {
    id: 1,
    title: "Complaint about poor lighting at Bardo Museum",
    description:
      "Visitors have reported that the lighting inside the Bardo Museum makes it hard to appreciate the artifacts. The museum should consider improving the lighting system.",
    complaintDate: "12/10/2022",
    response: "",
  },
  {
    id: 2,
    title: "Noise disturbance at Carthage National Museum",
    description:
      "Visitors have complained about constant noise disturbances near the Carthage National Museum. The museum should take action to resolve the situation for a better visitor experience.",
    complaintDate: "22/11/2022",
    response: "",
  },
  {
    id: 3,
    title: "Dirty restrooms at Sousse Archaeological Museum",
    description:
      "The cleanliness of the restrooms at Sousse Archaeological Museum needs immediate attention. Visitors expect a higher standard of hygiene in public places.",
    complaintDate: "10/01/2023",
    response: "",
  },
];

const ComplaintsSection = () => {
  const [complaints, setComplaints] = useState(initialComplaints);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [responses, setResponses] = useState({});

  const handleToggleDetails = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleResponseChange = (event, index) => {
    setResponses((prev) => ({
      ...prev,
      [index]: event.target.value,
    }));
  };

  const handleSubmitResponse = (index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints[index].response = responses[index];
    setComplaints(updatedComplaints);
    setResponses((prev) => ({ ...prev, [index]: "" }));
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Complaints
      </h2>

      {complaints.length === 0 ? (
        <div className="flex justify-center items-center w-full text-xl text-gray-500 dark:text-gray-300">
          No complaints have been submitted yet.
        </div>
      ) : (
        <div className="w-full flex flex-col gap-6">
          {complaints.map((complaint, index) => (
            <Card
              key={complaint.id}
              className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all duration-300"
            >
              <CardHeader className="flex items-center justify-between w-full pb-2 relative">
                <div className="text-lg font-bold">{complaint.title}</div>
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
                <div className="text-sm text-gray-500">
                  <span>Complaint Date: {complaint.complaintDate}</span>
                </div>

                {/* Expandable Content for Complaint Details */}
                <div
                  className={`overflow-y-auto transition-all duration-300 ${
                    expandedIndex === index
                      ? "max-h-[500px] opacity-100" // Expanded state
                      : "max-h-[10px] opacity-0" // Collapsed state
                  }`}
                >
                  <CardDescription className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                    <p>
                      <strong>Description:</strong> {complaint.description}
                    </p>
                  </CardDescription>
                </div>

                {/* Response Section */}
                {expandedIndex === index && (
                  <div className="mt-4">
                    <textarea
                      value={responses[index] || complaint.response}
                      onChange={(e) => handleResponseChange(e, index)}
                      className="w-full p-2 border border-gray-300 rounded-md mt-2"
                      placeholder="Write your response here..."
                      rows={4}
                    />
                    <button
                      onClick={() => handleSubmitResponse(index)}
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
                    >
                      Submit Response
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComplaintsSection;
