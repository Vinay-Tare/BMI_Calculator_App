import { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

function MetricSystemForm({ setBmiAndMessage }) {
  const [weightInKg, setWeightInKg] = useState();
  const [heightInCentimeters, setHeightInCentimeters] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    let heightInMeters = heightInCentimeters / 100;
    let heighInMetersSquared = heightInMeters * heightInMeters;
    let bmiValue = weightInKg / heighInMetersSquared;
    setBmiAndMessage(bmiValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label htmlFor="weightInKg" sm="3">
          <span className="fas fa-weight" /> Your Weight (In Kilograms) :
        </Label>
        <Col sm="9">
          <Input
            id="weightInKg"
            name="weightInKg"
            type="number"
            value={weightInKg || ""}
            onChange={(e) => setWeightInKg(e.target.valueAsNumber)}
            min="0"
            max="1000"
            required
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label htmlFor="heightInCentimeters" sm="3">
          <span>
            <span className="fas fa-child" />
            <span className="fas fa-arrows-alt-v" />
          </span>{" "}
          Your Height (In Centimeters) :
        </Label>
        <Col sm="9">
          <Input
            id="heightInCentimeters"
            name="heightInCentimeters"
            type="number"
            value={heightInCentimeters || ""}
            onChange={(e) => setHeightInCentimeters(e.target.valueAsNumber)}
            min="0"
            max="305" // Nearly 10 Feet
            required
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ offset: "3", size: "9" }}>
          <Button block color="primary">
            Check BMI
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default MetricSystemForm;
