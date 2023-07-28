import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import automobileData from '../data';


const PageContainer = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  margin-bottom: 5px;
`;


const FirstPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [referenceCode, setReferenceCode] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMaker, setSelectedMaker] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [carConditions, setCarConditions] = useState([]);

  const makers = automobileData.map((item) => item.maker);
  const selectedMakerData = automobileData.find((item) => item.maker === selectedMaker);
  const models = selectedMakerData ? selectedMakerData.models : [];

  const handleNext = () => {
    // Perform data validation here
    if (!fullName || !referenceCode || !email || !selectedMaker || !selectedModel) {
      alert('Please fill in all fields and select car conditions before proceeding.');
      return;
    }

    // Validate reference code based on criteria
    const referenceCodeRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!referenceCode.match(referenceCodeRegex)) {
      alert('Reference code does not meet the criteria.');
      return;
    }

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return;
    }

    // All data validations passed, navigate to the second page with the form data
    const formData = {
      fullName,
      referenceCode,
      email,
      selectedMaker,
      selectedModel,
      carConditions,
    };
    console.log(formData)
    navigate('/summary',{
      state: {
        formData
      },
    });
  };

  return (
    <PageContainer>
      <InputContainer>
        <Label>Full Name:</Label>
        <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </InputContainer>

      <InputContainer>
        <Label>Reference Code:</Label>
        <Input type="text" value={referenceCode} onChange={(e) => setReferenceCode(e.target.value)} />
      </InputContainer>

      <InputContainer>
        <Label>Email Address:</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputContainer>

      <InputContainer>
        <Label>Car Maker:</Label>
        <Dropdown value={selectedMaker} onChange={(e) => setSelectedMaker(e.target.value)}>
          <option value="">Select Maker</option>
          {makers.map((maker) => (
            <option key={maker} value={maker}>
              {maker}
            </option>
          ))}
        </Dropdown>
      </InputContainer>

      <InputContainer>
        <Label>Car Model:</Label>
        <Dropdown value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </Dropdown>
      </InputContainer>

      <InputContainer>
        <Label>Car Conditions:</Label>
        <CheckboxContainer>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={carConditions.includes('Engine issue')}
              onChange={(e) => {
                if (e.target.checked) {
                  setCarConditions([...carConditions, 'Engine issue']);
                } else {
                  setCarConditions(carConditions.filter((condition) => condition !== 'Engine issue'));
                }
              }}
            />
            Engine issue
          </CheckboxLabel>
        </CheckboxContainer>
      </InputContainer>

      <button onClick={handleNext}>Next</button>
    </PageContainer>
  );
};

export default FirstPage;
