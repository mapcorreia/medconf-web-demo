import { Typography } from '@mui/material';
import Image from 'next/image';
import { FirstLine, SecondLine, ThirdLine, BannerContainer, TextContainer } from './Banner.styled';

const height = 450;

const Banner = () => (
  <>
    <div style={{ background: '#d95650', height: '42px' }} />
    <BannerContainer height={height}>
      <TextContainer>
        <FirstLine>I Congresso</FirstLine>
        <SecondLine>Cirurgia Vascular</SecondLine>
        <ThirdLine>All together now</ThirdLine>
      </TextContainer>
      <Image src={'/static/banner_no_back_1.png'} height={height} width={1.4 * height} alt={''} />
    </BannerContainer>
    <div style={{ background: '#d95650', height: '42px' }} />
  </>
);

export default Banner;
