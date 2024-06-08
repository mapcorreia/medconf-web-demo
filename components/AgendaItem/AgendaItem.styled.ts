import { styled } from '@mui/material/styles';

export const AgendaItemContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  height: '100px',
  border: '1px solid lightGrey',
  borderRadius: '8px',
  padding: '16px',
});

export const ItemDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: 1,
});

type ItemWrapperProps = {
  background: string;
};

export const ItemWrapper = styled('div')<ItemWrapperProps>(({ background }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '64px',
  borderRadius: '50%',
  boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
  background,
}));
