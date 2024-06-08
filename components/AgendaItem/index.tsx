import {
  AgendaItemContainer,
  EventDay,
  ItemDetails,
  ItemWrapper,
  ScheduleWrapper,
  StartTime,
  EventTitle,
} from './AgendaItem.styled';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

type AgendaItem = {
  start: string;
  day: string;
  title: string;
  speaker?: string;
  icon: React.ReactNode;
  mainColor: string;
};

type AgendaItemProps = {
  item: AgendaItem;
};

const AgendaItem = ({ item }: AgendaItemProps) => {
  const { start, title, speaker, icon, mainColor, day } = item;

  const handleItemClick = () => {
    alert(`Em desenvolvimento`);
  };

  return (
    <AgendaItemContainer onClick={handleItemClick}>
      <ItemWrapper color={mainColor}>{icon}</ItemWrapper>
      <ScheduleWrapper>
        <StartTime color={mainColor}>{start}</StartTime>
        <EventDay color={mainColor}>{day}</EventDay>
      </ScheduleWrapper>
      <ItemDetails>
        <EventTitle>{title}</EventTitle>
        {speaker && <span>{speaker}</span>}
      </ItemDetails>
      <ArrowForwardIosSharpIcon />
    </AgendaItemContainer>
  );
};

export default AgendaItem;
