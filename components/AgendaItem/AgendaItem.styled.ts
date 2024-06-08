import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AgendaItemContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  height: '100px',
  border: '1px solid lightGrey',
  borderRadius: '8px',
  padding: '16px',
  alignItems: 'center',
  boxShadow: '2px 0 8px 0 rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: '#f2f2f2',
    cursor: 'pointer',
  },
});

export const ItemDetails = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginLeft: '16px',
  paddingLeft: '16px',
  borderLeft: '1px solid lightGrey',
});

type ItemAdditionalProps = {
  color: string;
};

export const ItemWrapper = styled('div')<ItemAdditionalProps>(({ color }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '64px',
  borderRadius: '50%',
  color,
}));

export const ScheduleWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StartTime = styled(Typography)<ItemAdditionalProps>(({ color }) => ({
  color,
  fontWeight: 'bold',
  fontSize: '28px',
  lineHeight: '24px',
}));

export const EventDay = styled(Typography)<ItemAdditionalProps>(({ color }) => ({
  color,
  fontSize: '16px',
  opacity: 0.7,
}));

export const EventTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#2c2d2d',
});
