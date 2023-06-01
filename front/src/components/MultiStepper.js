import React, { useState } from "react";
import FirstStep from "./Forms/FirstStep";
import SecondStep from "./Forms/SecondStep";

const initialFormState = {
  name: "",
  email: "",
  password: "",
};
const MultiStepForm = ({ onHandleSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const resetState = () => {
    setFormData(initialFormState);
    setStep(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const obj = {
      ...formData,
    };
    delete obj.password;
    onHandleSubmit(obj);
    resetState();
  };

  return (
    <form>
      {step === 1 && (
        <FirstStep
          value={formData.name}
          handleChange={handleChange}
          label="Name"
          buttonText="Next"
          buttonClickHandler={handleNext}
        />
      )}
      {step === 2 && (
        <SecondStep
          email={formData.email}
          password={formData.password}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handlePrev={handlePrev}
        />
      )}
    </form>
  );
};

export default MultiStepForm;
