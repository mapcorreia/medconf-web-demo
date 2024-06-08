import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Image from 'next/image';

type BannerContainerProps = {
  height: number;
};

export const BannerContainer = styled('div')<BannerContainerProps>(({ height }) => ({
  display: 'flex',
  width: '100%',
  height: `${height}px`,
  background: 'radial-gradient(circle, rgba(237,237,237,1) 0%, rgba(141,169,182,1) 24%, rgba(27,57,86,1) 79%)',
}));

export const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '24px 0 0 48px',
  minWidth: 'fit-content',
});

export const FirstLine = styled(Typography)({
  fontSize: '32px',
  color: 'white',
  marginLeft: '40px',
  letterSpacing: 6,
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
});

export const SecondLine = styled(Typography)({
  fontSize: '64px',
  color: 'white',
  lineHeight: '64px',
  fontWeight: 'bold',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
});

export const ThirdLine = styled(Typography)({
  fontSize: '64px',
  color: 'white',
  marginLeft: '40px',
  fontWeight: 'bold',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
});

export const FourthLine = styled(Typography)({
  fontSize: '20px',
  marginLeft: '24px',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

export const FifthLine = styled(Typography)({
  fontSize: '32px',
  color: '#D95650',
  marginTop: '120px',
  letterSpacing: '6px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

export const ImageContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 3,
});

export const RightContainer = styled('div')({
  right: 0,
  flex: 1,
  gap: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const CongressDays = styled(Typography)({
  textAlign: 'center',
  color: '#7A120F',
  fontSize: '72px',
  fontWeight: 'bold',
  textShadow: '0px 2px 8px rgba(255, 255, 255, 0.25)',
});

export const CongressMonth = styled(Typography)({
  textAlign: 'center',
  color: '#7A120F',
  fontSize: '60px',
  lineHeight: '60px',
  fontWeight: 'bold',
  textShadow: '0px 2px 8px rgba(255, 255, 255, 0.25)',
});

export const HeartBeating = styled(Image)({
  position: 'absolute',
  marginLeft: '28px',
  marginTop: '10px',
  animation: 'beat 1.3s 1', //infinite
  '@keyframes beat': {
    '0%, 100%': {
      transform: 'scale(1.1)',
    },
    '50%': {
      transform: 'scale(1.4)',
    },
  },
});
