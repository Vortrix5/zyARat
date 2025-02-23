import { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Collapsible } from '../ui/card';

export default function InstitutionCard({ institution }){
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="border p-4 m-2 rounded-lg shadow-md w-80">
      <CardHeader className="flex justify-between items-center">
        <h3>{institution.name}</h3>
        <Button onClick={handleToggle} variant="outline">
          {isExpanded ? 'Less Info' : 'More Info'}
        </Button>
      </CardHeader>
      <CardBody>
        <p><strong>Institution Type:</strong> {institution.type}</p>
        <p><strong>Location:</strong> {institution.location}</p>
        <Collapsible open={isExpanded}>
          <div className="mt-4">
            <p><strong>Description:</strong> {institution.description}</p>
            <p><strong>Date of Registration:</strong> {institution.dateOfRegistration}</p>
            <p><strong>Date of Acceptance:</strong> {institution.dateOfAcceptance}</p>
            <p><strong>Date of Creation:</strong> {institution.dateOfCreation}</p>
            <p><strong>Entry Ticket Fees:</strong> {institution.entryTicketFees}</p>
          </div>
        </Collapsible>
      </CardBody>
    </Card>
  );
};
