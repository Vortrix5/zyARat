import React, { useState } from "react";
import { Megaphone, MapPin, Clock } from "lucide-react";
import { Card, CardHeader, CardContent, CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

const Information = () => {
  const [description, setDescription] = useState("This is a default description.");
  const [openingTime, setOpeningTime] = useState("09:00"); // Default opening time
  const [closingTime, setClosingTime] = useState("17:00"); // Default closing time
  const [expanded, setExpanded] = useState(true);

  const toggleDescription = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Megaphone className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold">Information & Updates</h1>
        </div>

        {/* Latest Announcement Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Latest Announcement</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">No new updates. Check back later!</p>
            <Button className="mt-4">Add Announcement</Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Institution Information Section */}
        <Card>
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Institution Information</h2>
            <Button
              onClick={toggleDescription}
              className="text-sm bg-transparent hover:text-primary focus:outline-none"
            >
              {expanded ? "Hide Details" : "Show Details"}
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter institution description..."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Location
              </Label>
              <Input placeholder="Enter location..." />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Opening Hours
              </Label>
              <div className="flex gap-4">
                <div className="space-y-2 w-1/2">
                  <Label>Open Time</Label>
                  <Input
                    type="time"
                    value={openingTime}
                    onChange={(e) => setOpeningTime(e.target.value)}
                  />
                </div>
                <div className="space-y-2 w-1/2">
                  <Label>Close Time</Label>
                  <Input
                    type="time"
                    value={closingTime}
                    onChange={(e) => setClosingTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Button className="mt-4">Save Changes</Button>
          </CardContent>
          {expanded && (
            <CardContent className="space-y-2">
              <CardDescription>
                <p>
                  <strong>Description:</strong> {description}
                </p>
                <p>
                  <strong>Opening Time:</strong> {openingTime}
                </p>
                <p>
                  <strong>Closing Time:</strong> {closingTime}
                </p>
              </CardDescription>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Information;
