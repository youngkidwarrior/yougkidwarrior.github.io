import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';
import Text from '../styles/Text';

const Wrapper = styled.div`
  height: auto;
  width: 70vw;
  display: flex;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${props => props.img});
  padding-bottom: 5%;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1600px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const TopLeftSection = styled(Section)`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  z-index: 1;
  @media (max-width: 768px) {
    z-index: 0;
    width: 80%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    border: none;
  }
`;
const TopRightSection = styled(Section)`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2.5vw solid #e6ffff;
  z-index: 0;

  @media (max-width: 768px) {
    -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    z-index: 1;
    margin-top: -0.5rem;
    width: 80%;
    border: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 0px;
  }
`;

const SecondTopSection = styled(Section)`
  text-align: center;
  border: 2.5vw solid #e6ffff;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 0;
  margin-top: 30vh;
  @media (max-width: 768px) {
    width: calc(80% - 5vw);
  }
`;
const SecondBottomSection = styled(Section)`
  text-align: center;
  border: 2.5vw solid #e6ffff;
  width: 100%;
  z-index: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  @media (max-width: 768px) {
    width: calc(80% - 5vw);
  }
`;

const UpperTextSection = styled(Section)`
  width: 100%;
  margin: 1rem -1rem 0rem 1rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const LowerTextSection = styled(Section)`
  width: 100%;
  margin: 1rem 1rem 1rem 1rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;
const BoldText = styled(Text)`
  font-weight: 900;
  background: -webkit-radial-gradient(#e6ffff 50%, rgb(208, 0, 108));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Electro-Shackle', sans-serif;
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;
const StyledImg = styled.img`
  display: block;
  margin: 1rem auto 0;
  flex: 0 auto;
  width: 10vw;
  max-width: 10rem;
  
`;

const MockupImg = styled.img`
  display: block;
  margin-top: 2rem;
  flex: 0 auto;
  height: auto;
  width: 30vw;
  max-width: 15rem;
`;

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

function EnergySection(props, ref) {
  const energyRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return energyRef.current.getBoundingClientRect().top;
    }
  }));

  return (
    <Wrapper ref={energyRef} img={'./images/scoreboard.jpg'} id="energy">
      <TopLeftSection
        shadowed
        large
        margin={'0 0 0 0'}
        backgroundColor={'#e6ffff'}
      >
        <UpperTextSection centered>
          <Text title color={'black'}>
            What&nbsp;
          </Text>
          <Text title color={'black'}>
            Charges You?
          </Text>

          <MockupImg src={require('../images/iphoneMockup.png')} />
        </UpperTextSection>
      </TopLeftSection>
      <TopRightSection
        width={'35%'}
        curved
        backgroundColor={'rgba(208,0,108,0.7)'}
      >
        <StyledImg src={require('../svg/ethereumLogo.svg')} />
        <Section margin={'.5rem'}>
          <BoldText size={'3vw'} color={'#e6ffff'}>
            iOns&nbsp;
          </BoldText>
          <Text main color={'#e6ffff'}>
            need both&nbsp;
          </Text>
          <Text main color={'#e6ffff'}>
            positive and negative&nbsp;
          </Text>
          <Text main color={'#e6ffff'}>
            particles to exist
          </Text>
          <Section width={'100%'} margin={'1rem 0 0 0'}>
            <BoldText size={'2.7vw'} color={'#e6ffff'}>
              Energy =&nbsp;
            </BoldText>
            <BoldText size={'2.7vw'} color={'#e6ffff'}>
              Ethereum&nbsp;
            </BoldText>
            <Text main color={'#e6ffff'}>
              Energize yourself to push further as an athlete. iOns are the
              center of attention.
            </Text>
          </Section>
        </Section>
      </TopRightSection>
      <SecondTopSection
        textCentered
        shadowed
        margin={'4rem 0 0 0'}
        xLarge
        backgroundColor={'rgba(208,0,108,0.7)'}
      >
        <LowerTextSection>
          <Text title color={'#e6ffff'}>
            What Is an iOn?
          </Text>
        </LowerTextSection>
        <LowerTextSection>
          <Text width={'100%'} main color={'#e6ffff'}>
            1. iOns set goals
          </Text>
          <Text width={'100%'} main color={'#e6ffff'}>
            2. iOns livestream their attempts
          </Text>
          <Text width={'100%'} main color={'#e6ffff'}>
            3. iOns get energy if their goal is met
          </Text>
        </LowerTextSection>
      </SecondTopSection>
      <SecondBottomSection
        textCentered
        shadowed
        xLarge
        backgroundColor={'rgba(31,51,31,0.7)'}
      >
        <LowerTextSection>
          <Text title color={'#e6ffff'}>
            What are PartIcles?
          </Text>
        </LowerTextSection>
        <LowerTextSection>
          <Text main color={'#e6ffff'}>
            Particles create a community. A community of particles around an iOn
            athlete will power the streamer, and also share the energy.
          </Text>
        </LowerTextSection>
      </SecondBottomSection>
    </Wrapper>
  );
}

export default forwardRef(EnergySection);
