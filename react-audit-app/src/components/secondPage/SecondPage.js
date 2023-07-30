import React from 'react';
import { useLocation } from 'react-router-dom';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { block } from '../../assets/images'


import { PageContainer, SummaryItem, Button, ErrorContainer,SectionContainer, HeaderContainer, Logo, Title, Subtitle, FooterContainer, FooterText, FooterLink} from './SecondPage.style';

const SecondPage = () => {
  const location = useLocation();
  const formData = location.state.formData;

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


    // Generate the PDF document and open it in a new window
    
    // Log the JSON data to the console
    console.log(JSON.stringify(jsonData));
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
      { text: 'Automobile Audit - Customer Information', style: 'header' },
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
    pdfDoc.open();

  }
  return (
    <PageContainer>
      <HeaderContainer>
        <Title><Logo src={block} alt="Logo" /> Automobile Audit</Title>
        <Subtitle>Customer Information</Subtitle>
      </HeaderContainer>
      <SectionContainer>
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
  );
};

export default SecondPage;
