import { styled } from '@mui/material/styles';

export const BodyContainer = styled('body')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '12px',
  width: '100%',
  backgroundColor: '#f5f5f5',
});
