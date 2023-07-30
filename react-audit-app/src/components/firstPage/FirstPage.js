import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageContainer, InputContainer, Label, Input, Dropdown, CheckboxContainer, CheckboxLabel, Button, ErrorContainer, SubtitleContainer,HeaderContainer,Head, SectionContainer, HeadContainer, TitleContainer, Logo, Title, Subtitle,FooterContainer, FooterText, FooterLink } from './FirstPage.style'
import automobileData from '../../data';
import ImageSlider from './../ImageSlider';
import { block } from '../../assets/images'

const carConditionsList = [
  'Engine issue',
  'Gearbox issue',
  'Need body repair',
  'Need repainting',
  'Wiring problems',
  'Oil leakage',
  'Brake issue',
];

const FirstPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [referenceCode, setReferenceCode] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMaker, setSelectedMaker] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [carConditions, setCarConditions] = useState([]);
  const [error, setError] = useState('');

  const makers = automobileData.map((item) => item.maker);
  const selectedMakerData = automobileData.find((item) => item.maker === selectedMaker);
  const models = selectedMakerData ? selectedMakerData.models : [];

  const handleCheckboxChange = (condition) => {
    if (carConditions.includes(condition)) {
      setCarConditions(carConditions.filter((item) => item !== condition));
    } else {
      setCarConditions([...carConditions, condition]);
    }
  };

  const handleNext = () => {
    // Perform data validation here
    if (!fullName || !referenceCode || !email || !selectedMaker || !selectedModel) {
      setError('Please fill in all fields and select car conditions before proceeding.');
      return;
    }

    // Validate reference code based on criteria
    const referenceCodeRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!referenceCode.match(referenceCodeRegex)) {
      setError('Reference code does not meet the criteria.');
      return;
    }

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Please enter a valid email address.');
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
    <>
      <PageContainer>
        <HeaderContainer>
          <Title><Logo src={block} alt="Logo" /> Automobile Audit</Title>
          <Subtitle>Customer Information</Subtitle>
        </HeaderContainer>
        <SectionContainer>
        <ImageSlider />

          <HeadContainer>
            <TitleContainer> Automobile Audit Form</TitleContainer><br/>
            <SubtitleContainer>Fill Out All The Form</SubtitleContainer>
          </HeadContainer>
          <Head>Customer Information</Head>
          <ErrorContainer>{error}</ErrorContainer> {/* Display the error message */}
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


        </SectionContainer>
          <SectionContainer>
          <Head>Vehicle Information</Head>
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
              {carConditionsList.map((condition) => (
                <CheckboxLabel key={condition}>
                  <input
                    type="checkbox"
                    checked={carConditions.includes(condition)}
                    onChange={() => handleCheckboxChange(condition)}
                  />
                  {condition}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </InputContainer>
          <ErrorContainer>{error}</ErrorContainer> {/* Display the error message */}
          <Button onClick={handleNext}>Next</Button>
          </SectionContainer>
        <FooterContainer>
          <FooterText>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </FooterText>
          <FooterText>
            Made with <span role="img" aria-label="React">React</span> by {'Adeyoju Joel '}
            <FooterLink href="https://github.com/joeteck" target="_blank" rel="noopener noreferrer">
               Joeteck GitHub
            </FooterLink>
          </FooterText>
        </FooterContainer>
      </PageContainer>
    </>
  );
};

export default FirstPage;