import styled, { keyframes } from 'styled-components';

// Define colors
const primaryColor = '#800080';
const secondaryColor = '#9932CC';
const whiteColor = '#fff';
const grayColor = '#ccc';

// Define animation
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  background-image: linear-gradient(to bottom, #FFFFFF, #F8FDFF, #F8FDFF, #F4FAFF);
  font-family: Nunito, sans-serif;
  display: flex;
  flex-direction: column; 
  gap: 20px;
  width: 98%;
  height: fit-content;
  align-items: center;
  justify-content: flex-start;
  margin-bottom:100px;

`;
const HeaderContainer = styled.div`
  margin-bottom: 100px;
  padding-top: 20px; 
  padding-left:50px;
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  background-color:#800080;
  width: 100%;
  height: 100px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: medium;
  text-align:center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 18px;
`;

const SectionContainer = styled.div`
  padding: 20px;
  width: 40%;
  height: fit-content;
  border: 1px solid;
  border-image: linear-gradient(-60deg, #A851A5, #A42BA0, #800080, #9932CC, #BA55D3);
  border-image-slice: 1;
  border-radius: 15px;
  padding-bottom: 50px;
  margin: 0px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    margin-top: 20px; /* Add some space between the header and the section container */
  }
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-left: 30px;
  ${'' /* background-color:#A42BA0; */}
  ${'' /* background-image: linear-gradient(-200deg,#A851A5,#BA55D3, #9932CC, #A42BA0,  #800080 ); */}
  ${'' /* background-image: linear-gradient(to bottom, #007bff, #00bfff, #66c2ff, #8AD0FF); */}
  width: 100%;
  height: 150px; /* Adjust the height as needed */
`;

const TitleContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color:#A42BA0;  text-align: left;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const SubtitleContainer = styled.div`
  font-size: 18px;
  color:#A42BA0;
  `;
const Head = styled.div`
  font-size: 18px;
  color: #fff;
  text-align: center;
  background-image: linear-gradient(-60deg, #A900A9, #8E008E, #810181, #800080);
  width:250px;
  padding:10px;
  text-align: center;
  border-radius: 50px;
  margin-top:50px
`;



const InputContainer = styled.div`
  padding-top:50px
  margin-bottom: 20px;
  margin-left: 50px;
  width: 80%;
  max-width: 400px;
  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

const Label = styled.label`
  margin-top: 30px;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${grayColor};
  border-radius: 4px;
  font-size: 16px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid ${grayColor};
  border-radius: 4px;
  font-size: 16px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;

  input[type='checkbox'] {
    color: ${primaryColor};
    margin-right: 10px;
    margin-top:8px;
  }
`;

const Button = styled.button`
  background-color: ${primaryColor};
  color: ${whiteColor};
  border: none;
  margin-top: 20px;
  padding: 12px 50px;
  width: 200px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  animation: ${fadeInAnimation} 0.5s ease-in-out;

  &:hover {
    background-color: ${secondaryColor};
  }
`;
const FooterContainer = styled.footer`
  width: 100%;
  display:flex;
  position: fixed;
  gap: 50vw;
  bottom: 0;
  background-color: #333;
  color: #fff;
  padding: 5px;
  padding-left: 150px;
  text-align: center;
`;
const FooterText = styled.p`

  font-size: 14px;
`;

const FooterLink = styled.a`
  color: #E939E9;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #800080;
  }
`;
const ErrorContainer = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 16px;
`;


export { PageContainer, InputContainer, Label, Input, Dropdown, CheckboxContainer, CheckboxLabel, Button, ErrorContainer, SubtitleContainer,HeaderContainer, SectionContainer, Head, HeadContainer, TitleContainer, Logo, Title, Subtitle, FooterContainer, FooterText, FooterLink };
