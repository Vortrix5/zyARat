import React, { useState , useEffect } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Clock, MapPin, Megaphone } from "lucide-react";

import axios from "axios";

export default function InstitutionInfoSection(){
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [workingHours, setWorkingHours] = useState({
    monday: { open: "09:00", close: "17:00", isClosed: false },
    tuesday: { open: "09:00", close: "17:00", isClosed: false },
    wednesday: { open: "09:00", close: "17:00", isClosed: false },
    thursday: { open: "09:00", close: "17:00", isClosed: false },
    friday: { open: "09:00", close: "17:00", isClosed: false },
    saturday: { open: "09:00", close: "17:00", isClosed: false },
    sunday: { open: "09:00", close: "17:00", isClosed: false },
  });
  const [announcement, setAnnouncement] = useState();

  useEffect(() => {
    const storedData = localStorage.getItem("institutionData");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      setDescription(parsed.description || "");
      setLocation(parsed.location || "");
      setWorkingHours(
        Object.keys(parsed.workingHours).map((day) => {
          const workingHoursForDay = parsed.workingHours[day];
          return {
            day,
            open: workingHoursForDay.open,
            close: workingHoursForDay.close,
            isClosed: workingHoursForDay.open === "00:00" && workingHoursForDay.close === "00:00",
          };
        })
    );
    }
  }, [])

  const handleChangeWorkingHours = (day, type, value) => {
    setWorkingHours({
      ...workingHours,
      [day]: { ...workingHours[day], [type]: value },
    });
    console.log(JSON.stringify(workingHours))
  };

  const handleSave = () => {
    var token = localStorage.getItem("token");
    token = token.replace('"', '')
    console.log(token)
    try{
      axios.put(
        "http://localhost:5000/api/institution/update",
        {
          description: description,
          workingHours: workingHours,
          location: location
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then((response) =>
        console.log(response.data.message)
      )
    }catch(error){
      console.error(error)
    }
    console.log("Institution information saved");
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Megaphone className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Institution Information</h2>
      </div>

      {/* Institution Description */}
      <div className="space-y-4 mb-8">
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter institution description..."
          rows={4}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <Separator className="my-6" />

      {/* Location */}
      <div className="space-y-4 mb-8">
        <Label className="flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Location
        </Label>
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter institution location..."
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <Separator className="my-6" />

      {/* Working Hours */}
      <div className="space-y-4 mb-8">
        <Label className="flex items-center gap-2">
          <Clock className="w-4 h-4" /> Working Hours
        </Label>
        {/* Use flex layout for working hours */}
        <div className="flex flex-wrap gap-6">
          {Object.keys(workingHours).map((day) => (
            <div key={day} className="flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <Label>{workingHours[day].day}</Label>
              <div className="flex gap-4">
                <Input
                  type="time"
                  value={workingHours[day].open}
                  onChange={(e) => handleChangeWorkingHours(day, "open", e.target.value)}
                  className="w-1/2 p-4 border border-gray-300 rounded-md shadow-sm"
                />
                <Input
                  type="time"
                  value={workingHours[day].close}
                  onChange={(e) => handleChangeWorkingHours(day, "close", e.target.value)}
                  className="w-1/2 p-4 border border-gray-300 rounded-md shadow-sm"
                />
                {workingHours[day].isClosed && <div style={{color: "red"}}>Closed</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
};