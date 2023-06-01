import React, { useState } from "react";
import FirstStep from "./Forms/FirstStep";
import SecondStep from "./Forms/SecondStep";

//initial form state
const initialFormState = {
  name: "",
  email: "",
  password: "",
};

const MultiStepForm = ({ onHandleSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);

  /**
   * --------------------------------------------------------------------------
   * It'll call once user write inside input fields
   * --------------------------------------------------------------------------
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  /**
   * --------------------------------------------------------------------------
   * It'll handle once user click on next button
   * --------------------------------------------------------------------------
   */
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  /**
   * --------------------------------------------------------------------------
   * It'll handle once user click on previous button
   * --------------------------------------------------------------------------
   */
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  /**
   * --------------------------------------------------------------------------
   * It'll handle once user click on previous button
   * --------------------------------------------------------------------------
   */
  const resetState = () => {
    setFormData(initialFormState);
    setStep(1);
  };

  /**
   * --------------------------------------------------------------------------
   * It'll handle once user submit form
   * --------------------------------------------------------------------------
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    // If any value is empty, we can not submit he form.
    if (
      formData.email === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      return;
    }
    console.log(formData);
    const obj = {
      ...formData,
    };

    // deleting password because we're not showing password in user list
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
