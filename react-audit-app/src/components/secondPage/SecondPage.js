import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import ImageSlider from './../ImageSlider';
import { block } from '../../assets/images'

import { PageContainer, SummaryItem, Button, ErrorContainer,SectionContainer, HeaderContainer, Logo, Title, Subtitle, Overlay, CancelButton} from './SecondPage.style';

const SecondPage = () => {
  const location = useLocation();
  const formData = location.state.formData;
  const [error, setError] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
 
  const handleSubmit = () => {
    // Convert the form data into a JSON object
    try{
      const jsonData = {
        name: formData.fullName,
        email: formData.email,
        refcode: formData.referenceCode,
        make: formData.selectedMaker,
        model: formData.selectedModel,
        conditions: formData.carConditions.join(', '),
      };
      console.log(JSON.stringify(jsonData));     // Log the JSON data to the console
      setShowOverlay(true); // Show the overlay
    } catch (error){
      setError("An Error Occurred While Trying To Fetch Data");
    }


    
  };
  
  const handlePDF =() => {
    const jsonData = {
      name: formData.fullName,
      email: formData.email,
      refcode: formData.referenceCode,
      make: formData.selectedMaker,
      model: formData.selectedModel,
      conditions: formData.carConditions.join(', '),
    };

     // Define the content for the PDF document
  const docDefinition = {
    content: [
      { text: `${jsonData.make} ${jsonData.model} Audit - Information Provided By ${jsonData.name} `, style: 'header' },
      { text: '\n' },
      { text: 'Full Name: ', bold: true }, jsonData.name,
      { text: '\n' },
      { text: 'Email: ', bold: true }, jsonData.email,
      { text: '\n' },
      { text: 'Reference Code: ', bold: true }, jsonData.refcode,
      { text: '\n' },
      { text: 'Make: ', bold: true }, jsonData.make,
      { text: '\n' },
      { text: 'Model: ', bold: true }, jsonData.model,
      { text: '\n' },
      { text: 'Car Conditions: ', bold: true }, jsonData.conditions,
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        marginBottom: 10,
      },
    },
  };

    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.open();      // Generate the PDF document and open it in a new window

  }
  const handleCancel = () => {
    setShowOverlay(false); // Close the overlay when the cancel button is clicked
  };
  
  return (
    <PageContainer>
      <HeaderContainer>
        <Title><Logo src={block} alt="Logo" /> Automobile Audit</Title>
        <Subtitle>Customer Information</Subtitle>
      </HeaderContainer>
      <ImageSlider />
      <SectionContainer>
      <ErrorContainer>{error}</ErrorContainer> {/* Display the error message */}
        <SummaryItem>
          <strong>{formData.selectedMaker} {formData.selectedModel} Audit - Information Provided By {formData.fullName}</strong><br/><br/>
        </SummaryItem>
        <SummaryItem>
          <strong>Name:</strong> {formData.fullName.length > 30 ? formData.fullName.substring(0, 30) + '...' : formData.fullName}
        </SummaryItem>
        <SummaryItem>
          <strong>Email:</strong> {formData.email}
        </SummaryItem>
        <SummaryItem>
          <strong>Reference Code:</strong> {formData.referenceCode}
        </SummaryItem>
        <SummaryItem>
          <strong>Car Maker:</strong> {formData.selectedMaker}
        </SummaryItem>
        <SummaryItem>
          <strong>Car Model:</strong> {formData.selectedModel}
        </SummaryItem>
        <SummaryItem>
          <strong>Car Conditions:</strong> {formData.carConditions.join(', ')}
        </SummaryItem>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handlePDF}>Get PDF</Button>
        {showOverlay && (
          <Overlay>
            <p>JSON file is ready! Check the console.</p>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
          </Overlay>
        )}
      </SectionContainer>
    </PageContainer>
  );
};

export default SecondPage;
