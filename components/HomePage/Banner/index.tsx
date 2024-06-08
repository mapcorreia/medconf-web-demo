import Image from 'next/image';
import {
  FirstLine,
  SecondLine,
  ThirdLine,
  FourthLine,
  BannerContainer,
  TextContainer,
  HeartBeating,
  ImageContainer,
  RightContainer,
  FifthLine,
  CongressDays,
  CongressMonth,
} from './Banner.styled';

const height = 450;

const Banner = () => {
  return (
    <>
      <BannerContainer height={height}>
        <TextContainer>
          <FirstLine>I Congresso de</FirstLine>
          <SecondLine>Cirurgia</SecondLine>
          <ThirdLine>Vascular</ThirdLine>
          <FourthLine>Unidade Local de Saúde Tâmega e Sousa</FourthLine>
          <FifthLine>All together now</FifthLine>
        </TextContainer>
        <ImageContainer>
          <HeartBeating src={'/static/heart.png'} height={82} width={85} alt="heart-beating" />
          <Image src={'/static/banner_no_back_1.png'} height={height} width={1.4 * height} alt={'chest'} />
        </ImageContainer>
        <RightContainer>
          <div>
            <CongressDays>27 e 28</CongressDays>
            <CongressMonth>de Setembro</CongressMonth>
          </div>
        </RightContainer>
      </BannerContainer>
      <div style={{ background: '#d95650', height: '20px' }} />
    </>
  );
};

export default Banner;
