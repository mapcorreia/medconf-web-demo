import { styled } from '@mui/material/styles';

export const HomePageSectionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  border: '1px solid lightGrey',
  padding: '32px',
  borderRadius: '8px',
  boxShadow: '2px 2px 8px rgba(0,0,0,0.15)',
  height: '90%',
  overflow: 'auto',
  scrollbarWidth: 'none',
});

export const CardHeader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  alignItems: 'center',
  position: 'sticky',
});

export const CardTitle = styled('p')({
  color: 'darkred',
  fontSize: '32px',
  fontWeight: 'bold',
  textShadow: '6px 4px 4px rgba(0, 0, 0, 0.1)',
});
