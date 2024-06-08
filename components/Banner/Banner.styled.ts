import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { Typography } from '@mui/material';

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
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  gap: '4px',
  flex: 1,
});

export const FirstLine = styled(Typography)({
  fontSize: '36px',
  color: 'white',
  fontWeight: 'bold',
  letterSpacing: 6,
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

export const SecondLine = styled(Typography)({
  fontSize: '70px',
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
  position: 'absolute',
  display: 'flex',
  width: '100%',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const HeartBeating = styled(Image)({
  position: 'absolute',
  marginLeft: '28px',
  marginTop: '10px',
  animation: 'beat 1.3s infinite',
  '@keyframes beat': {
    '0%, 100%': {
      transform: 'scale(1.1)',
    },
    '50%': {
      transform: 'scale(1.4)',
    },
  },
});
