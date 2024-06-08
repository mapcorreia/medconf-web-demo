import Avatar from '@mui/material/Avatar';
import { SpeakerDetailsContainer, SpeakerItemContainer, SpeakerName, SpeakerSpecialty } from './SpeakerItem.styled';

type Speaker = {
  name: string;
  specialty: string;
  picture: string;
};

type SpeakerItemProps = {
  speaker: Speaker;
};

const SpeakerItem = ({ speaker }: SpeakerItemProps) => {
  return (
    <SpeakerItemContainer>
      <Avatar alt={speaker.name} src={speaker.picture} sx={{ width: '92px', height: '92px' }} />
      <SpeakerDetailsContainer>
        <SpeakerName>{speaker.name}</SpeakerName>
        <SpeakerSpecialty>{speaker.specialty}</SpeakerSpecialty>
      </SpeakerDetailsContainer>
    </SpeakerItemContainer>
  );
};

export default SpeakerItem;
