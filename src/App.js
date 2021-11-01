import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import StandardSystemForm from "./components/StandardSystemForm";
import MetricSystemForm from "./components/MetricSystemForm";
import "./App.css";

function App() {
  const [measurementSystem, setMeasurementSystem] = useState("Standard");
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState("");
  const [userState, setUserState] = useState("");

  const setBmiAndMessage = (bmiValue) => {
    if (bmiValue < 18.5) {
      setMessage("You are under weight !");
      setUserState("underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage("You are in a healthy weight range !");
      setUserState("healthy");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setMessage("You are overweight !");
      setUserState("overweight");
    } else if (bmiValue >= 30) {
      setMessage("You are obese !");
      setUserState("obese");
    }
    setBmi(bmiValue.toFixed(1));
  };

  return (
    <div className="App">
      <Jumbotron fluid className="bg-primary p-5">
        <Container>
          <Row>
            <Col xs="12">
              <p className="text-light text-center h2 ">
                <span className="fas fa-calculator" /> BMI Calculator
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid className="pb-5">
        <Row className="p-3 text-center">
          <Col xs="12">
            <FormGroup row>
              <Label htmlFor="measurementSystem" sm="3">
                <span className="fas fa-balance-scale" /> Measurement System :
              </Label>
              <Col sm="9">
                <Input
                  type="select"
                  id="measurementSystem"
                  name="measurementSystem"
                  value={measurementSystem}
                  onChange={(e) => setMeasurementSystem(e.target.value)}
                >
                  <option value="Standard">Standard</option>
                  <option value="Metric">Metric</option>
                </Input>
              </Col>
            </FormGroup>
            {measurementSystem === "Standard" ? (
              <StandardSystemForm setBmiAndMessage={setBmiAndMessage} />
            ) : (
              <MetricSystemForm setBmiAndMessage={setBmiAndMessage} />
            )}
          </Col>
          <Col sm={{ offset: "3", size: "9" }}>
            {/* Under Weight Card */}
            {bmi && userState === "underweight" && (
              <Card color="danger" className="rounded-0">
                <CardHeader>
                  <span className="text-light h5">
                    Your BMI Is: {bmi}{" "}
                    <span className="fas fa-balance-scale-left" />
                  </span>
                </CardHeader>
                <CardBody className="bg-light">
                  <span className="text-danger h5">
                    {message} <span className="fas fa-frown" />
                  </span>
                </CardBody>
              </Card>
            )}
            {/* Helathy Weight Card */}
            {bmi && userState === "healthy" && (
              <Card color="success" className="rounded-0">
                <CardHeader>
                  <span className="text-light h5">
                    Your BMI Is: {bmi} <span className="fas fa-balance-scale" />
                  </span>
                </CardHeader>
                <CardBody className="bg-light">
                  <span className="text-success h5">
                    {message} <span className="fas fa-smile" />
                  </span>
                </CardBody>
              </Card>
            )}
            {/* Over Weight Or Obese Card */}
            {((bmi && userState === "overweight") || userState === "obese") && (
              <Card color="danger" className="rounded-0">
                <CardHeader>
                  <span className="text-light h5">
                    Your BMI Is: {bmi}{" "}
                    <span className="fas fa-balance-scale-right " />
                  </span>
                </CardHeader>
                <CardBody className="bg-light">
                  <span className="text-danger h5">
                    {message} <span className="fas fa-frown" />
                  </span>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
        <Row className="bg-primary fixed-bottom">
          <Col xs="12">
            <p className="text-white text-center">
              <span className="far fa-smile" /> Thanks For Using The App
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
