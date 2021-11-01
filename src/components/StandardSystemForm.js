import { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

function StandardSystemForm({ setBmiAndMessage }) {
  const [weightInPounds, setWeightInPounds] = useState();
  const [heightInFeets, setHeightInFeets] = useState();
  const [heightInInches, setHeightInInches] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    let totalHeightInInches = heightInFeets * 12 + heightInInches;
    let totalHeightInInchesSquared = totalHeightInInches * totalHeightInInches;
    let bmiValue = (weightInPounds / totalHeightInInchesSquared) * 703;
    setBmiAndMessage(bmiValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label htmlFor="weightInPounds" sm="3">
          <span className="fas fa-weight" /> Your Weight (In Pounds) :
        </Label>
        <Col sm="9">
          <Input
            id="weightInPounds"
            name="weightInPounds"
            type="number"
            value={weightInPounds}
            onChange={(e) => setWeightInPounds(e.target.valueAsNumber)}
            min="0.01"
            step="0.01"
            max="2205" // Nearly 1000 Kg
            required
          />
        </Col>
      </FormGroup>
      <FormGroup row className="">
        <Label sm="3">
          <span className="fas fa-child" />
          <span className="fas fa-arrows-alt-v" /> Your Height :
        </Label>
        <Col sm="3">
          <Input
            id="heightInFeets"
            name="heightInFeets"
            type="number"
            value={heightInFeets}
            onChange={(e) => setHeightInFeets(e.target.valueAsNumber)}
            min="0.01"
            step="0.01"
            max="9" // Combined With Inches Field Results In Max 10 Feet
            required
          />
        </Col>
        <Label htmlFor="heightInFeets" sm="1">
          (Feet)
        </Label>
        <Col sm={{ offset: "1", size: "3" }}>
          <Input
            id="heightInInches"
            name="heightInInches"
            type="number"
            value={heightInInches}
            onChange={(e) => setHeightInInches(e.target.valueAsNumber)}
            min="0"
            step="0.01"
            max="12" // Combined With Feet Field Results In Max 10 Feet
            required
          />
        </Col>
        <Label htmlFor="heightInInches" sm="1">
          (Inches)
        </Label>
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

export default StandardSystemForm;
