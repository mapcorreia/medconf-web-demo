import { styled } from '@mui/material/styles';

export const RegistrationSectionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const RegistrationText = styled('p')({
  display: 'flex',
  textAlign: 'justify',
  fontSize: '18px',
  lineHeight: '48px',
});

export const RegistryButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 8px 0 16px',
  color: 'rgba(159,13,6,1)',
  background: 'white',
  fontSize: '24px',
  height: '56px',
  width: '220px',
  borderRadius: '8px',
  boxShadow: '4px 4px 12px rgba(0,0,0,0.4)',
  marginTop: '100px',
  border: '1px solid rgba(159,13,6,1)',
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  },
});
