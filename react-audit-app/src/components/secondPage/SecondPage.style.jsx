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

`;

const SectionContainer = styled.div`
  padding: 20px;
  width: 50%;
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


const HeaderContainer = styled.div`
  margin-bottom: 50px;
  padding-top: 20px; 
  padding-left:50px;
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  background-color:#800080;
  width: 100%;
  height: 100px;
`;
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-left: 30px;
  width: 100%;
  height: 150px; /* Adjust the height as needed */
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


const SummaryItem = styled.div`
  font-size: 20px;
  margin: 20px;
  margin
`;

const Button = styled.button`
  background-color: ${primaryColor};
  color: ${whiteColor};
  border: none;
  margin: 0 50px;
  margin-top: 30px;
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
  font-size: 14px;
`;

export { PageContainer, SummaryItem, Button, ErrorContainer,SectionContainer, HeaderContainer, HeadContainer, TitleContainer, SubtitleContainer, Logo, Title, Subtitle, FooterContainer, FooterText, FooterLink};