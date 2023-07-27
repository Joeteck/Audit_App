// src/components/FirstPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [fullName, setFullName] = useState('');
  const [referenceCode, setReferenceCode] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMaker, setSelectedMaker] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [carConditions, setCarConditions] = useState([]);
  const history = useHistory();

  const makers = automobileData.map((item) => item.maker);

  const handleNext = () => {
    // Perform data validation here
    if (!fullName || !referenceCode || !email || !selectedMaker || !selectedModel || carConditions.length === 0) {
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
    history.push({
      pathname: '/summary',
      state: formData,
    });
  };

  return (
    <PageContainer>
      <InputContainer>
        <Label>Full Name:</Label>
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </InputContainer>
      {/* Implement other input fields and dropdowns */}
      {/* ... */}
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
          {/* Implement other checkboxes */}
          {/* ... */}
        </CheckboxContainer>
      </InputContainer>
      <button onClick={handleNext}>Next</button>
    </PageContainer>
  );
};

export default FirstPage;
