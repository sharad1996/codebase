import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Button from "react-bootstrap/Button";

function SecondStep({
  handleChange,
  label,
  email,
  handleSubmit,
  handlePrev,
  password,
}) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
          type="email"
          id={label}
          aria-describedby="passwordHelpBlock"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
        <Form.Control
          type="password"
          id={label}
          aria-describedby="passwordHelpBlock"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </InputGroup>

      <div className="action-btns">
        <Button onClick={handlePrev} className="mr-5">
          Previous
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  );
}

export default SecondStep;
