import { AgendaItemContainer, ItemDetails, ItemWrapper } from './AgendaItem.styled';

type AgendaItem = {
  start: string;
  title: string;
  speaker?: string;
  icon: React.ReactNode;
  iconBackground: string;
};

type AgendaItemProps = {
  item: AgendaItem;
};

const AgendaItem = ({ item }: AgendaItemProps) => {
  const { start, title, speaker, icon, iconBackground } = item;

  return (
    <AgendaItemContainer>
      <ItemWrapper background={iconBackground}>{icon}</ItemWrapper>
      <span>{start}</span>
      <ItemDetails>
        <span>{title}</span>
        {speaker && <span>{speaker}</span>}
      </ItemDetails>
    </AgendaItemContainer>
  );
};

export default AgendaItem;
