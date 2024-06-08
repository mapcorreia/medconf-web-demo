import { styled } from '@mui/material/styles';

export const SectionMarkerContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid lightGrey',
  padding: '32px',
  borderRadius: '8px',
  boxShadow: '2px 2px 8px rgba(0,0,0,0.15)',
  overflow: 'auto',
});

export const CardHeader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  alignItems: 'center',
});

export const CardTitle = styled('p')({
  color: 'darkred',
  fontSize: '32px',
  fontWeight: 'bold',
  textShadow: '6px 4px 4px rgba(0, 0, 0, 0.1)',
});
