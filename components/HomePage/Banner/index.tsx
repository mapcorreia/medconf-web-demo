import Image from 'next/image';
import {
  FirstLine,
  SecondLine,
  ThirdLine,
  BannerContainer,
  TextContainer,
  HeartBeating,
  ImageContainer,
  RightContainer,
  RegistryButton,
} from './Banner.styled';
import { useRouter } from 'next/router';

const height = 450;

const Banner = () => {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('/registration');
  };

  return (
    <>
      <div style={{ background: '#d95650', height: '42px' }} />
      <BannerContainer height={height}>
        <TextContainer>
          <FirstLine>I Congresso</FirstLine>
          <SecondLine>Cirurgia Vascular</SecondLine>
          <ThirdLine>All together now</ThirdLine>
        </TextContainer>
        <ImageContainer>
          <HeartBeating src={'/static/heart.png'} height={82} width={85} alt="heart-beating" />
          <Image src={'/static/banner_no_back_1.png'} height={height} width={1.4 * height} alt={'chest'} />
        </ImageContainer>
        <RightContainer>
          <RegistryButton onClick={handleButtonClick}>Inscrição</RegistryButton>
        </RightContainer>
      </BannerContainer>
      <div style={{ background: '#d95650', height: '20px' }} />
    </>
  );
};

export default Banner;
