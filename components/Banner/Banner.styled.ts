import { styled } from '@mui/material/styles';

type BannerContainerProps = {
  height: number;
};

export const BannerContainer = styled('div')<BannerContainerProps>(({ height }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: `${height}px`,
  background: 'radial-gradient(circle, rgba(237,237,237,1) 0%, rgba(141,169,182,1) 24%, rgba(27,57,86,1) 79%)',
}));

export const TextContainer = styled('div')({
  position: 'absolute',
  left: '50px',
  top: '70px',
  width: '600px',
});

export const FirstLine = styled('p')({
  fontSize: '36px',
  lineHeight: '0',
  color: 'white',
  fontWeight: 'bold',
  letterSpacing: 6,
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

export const SecondLine = styled('p')({
  fontSize: '72px',
  lineHeight: '4px',
  color: 'white',
  fontWeight: 'bold',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
});

export const ThirdLine = styled('p')({
  fontSize: '32px',
  lineHeight: '12px',
  color: '#D95650',
  letterSpacing: '6px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});
