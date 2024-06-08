import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SpeakerItemContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '24px',
  cursor: 'pointer',
  borderRadius: '8px',
  padding: '16px',
  boxShadow: '2px 0 8px 0 rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const SpeakerDetailsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const SpeakerName = styled(Typography)({
  color: '#2c2d2d',
  fontSize: '20px',
  fontWeight: 'bold',
});

export const SpeakerSpecialty = styled(Typography)({
  fontSize: '16px',
  opacity: 0.7,
});
