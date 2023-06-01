import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function FirstStep({
  value,
  handleChange,
  label,
  buttonText,
  buttonClickHandler,
}) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{label}</InputGroup.Text>
        <Form.Label htmlFor={label}></Form.Label>
        <Form.Control
          type="text"
          id={label}
          aria-describedby="passwordHelpBlock"
          name="name"
          value={value}
          onChange={handleChange}
        />
      </InputGroup>
      <div className="single-btn">
        <Button onClick={buttonClickHandler}>{buttonText}</Button>
      </div>
    </>
  );
}

export default FirstStep;
