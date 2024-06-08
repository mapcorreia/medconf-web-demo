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
  gap: '4px',
  padding: '24px 0 0 24px',
  minWidth: 'fit-content',
});

export const FirstLine = styled(Typography)({
  fontSize: '36px',
  color: 'white',
  fontWeight: 'bold',
  letterSpacing: 6,
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

export const SecondLine = styled(Typography)({
  fontSize: '64px',
  color: 'white',
  fontWeight: 'bold',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
});

export const ThirdLine = styled(Typography)({
  fontSize: '32px',
  color: '#D95650',
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const RegistryButton = styled('button')({
  background: '#d95650',
  fontSize: '24px',
  color: 'white',
  height: '48px',
  width: '220px',
  borderRadius: '12px',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.75)',

  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  },
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
