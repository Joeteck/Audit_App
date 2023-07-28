import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

const PageContainer = styled.div`
  padding: 20px;
`;

const SummaryItem = styled.div`
  margin-bottom: 10px;
`;

const SecondPage = (props) => {
  const location = useLocation();
  const formData = location.state.formData
  console.log("location")
  console.log(location)
  console.log("formData")
  console.log(formData)
  console.log("formData.fullName")
  console.log(formData.fullName)
  console.log("formData.formData")
  console.log(formData.formData)

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
  const handleSubmit = () => {
    // Convert the form data into a JSON object
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
        { text: 'Automobile Audit - Customer Information', style: 'header' },
        { text: '\n' },
        { text: 'Full Name: ', bold: true }, jsonData.name,
        { text: 'Email: ', bold: true }, jsonData.email,
        { text: 'Reference Code: ', bold: true }, jsonData.refcode,
        { text: 'Make: ', bold: true }, jsonData.make,
        { text: 'Model: ', bold: true }, jsonData.model,
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
  
    // Generate the PDF document and open it in a new window
    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.open();
  
    // Log the JSON data to the console
    console.log(JSON.stringify(jsonData));
  };

  return (
    <PageContainer>
      <SummaryItem>
        <strong>Name:</strong> {formData.fullName.length > 30 ? formData.fullName.substring(0, 30) + '...' : formData.fullName}
      </SummaryItem>
      {/* Implement other summary items */}
      {/* ... */}
      <SummaryItem>
        <strong>Car Conditions:</strong> {formData.carConditions.join(', ')}
      </SummaryItem>
      <button onClick={handleSubmit}>Submit</button>
    </PageContainer>
  );
};

export default SecondPage;
