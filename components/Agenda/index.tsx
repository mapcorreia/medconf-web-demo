import AgendaItem from 'components/AgendaItem';
import SpeakerNotesSharpIcon from '@mui/icons-material/SpeakerNotesSharp';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import LocalCafeSharpIcon from '@mui/icons-material/LocalCafeSharp';
import CollectionsBookmarkSharpIcon from '@mui/icons-material/CollectionsBookmarkSharp';
import { AgendaContainer } from './Agenda.styled';

const iconStyle = { width: '32px', height: '32px', color: 'black' };

const eventColors = {
  session: 'radial-gradient(circle, rgba(237,237,237,1) 20%, rgba(141,169,182,1) 60%, rgba(27,57,86,1) 100%)',
  other: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(255,255,255,1) 100%)',
};

const agenda = [
  {
    start: '09:00',
    title: 'Doença Venosa Crónica',
    speaker: 'Dr. Manuel Silva',
    icon: <SpeakerNotesSharpIcon style={iconStyle} />,
    iconBackground: eventColors.session,
  },
  {
    start: '10:00',
    title: 'Abertura',
    icon: <MeetingRoomSharpIcon style={iconStyle} />,
    iconBackground: eventColors.other,
  },
  {
    start: '10h30',
    title: 'Coffee Break',
    icon: <LocalCafeSharpIcon style={iconStyle} />,
    iconBackground: eventColors.other,
  },
  {
    start: '11h00',
    title: 'Trombose Venosa',
    speaker: 'Dra. Ana Santos',
    icon: <SpeakerNotesSharpIcon style={iconStyle} />,
    iconBackground: eventColors.session,
  },
  {
    start: '12h00',
    title: 'Apresentação dos melhores trabalhos',
    icon: <CollectionsBookmarkSharpIcon style={iconStyle} />,
    iconBackground: eventColors.session,
  },
  {
    start: '12h30',
    title: 'Almoço',
    icon: <RestaurantSharpIcon style={iconStyle} />,
    iconBackground: eventColors.other,
  },
];

const Agenda = () => {
  return (
    <AgendaContainer>
      {agenda.map(item => (
        <AgendaItem item={item} />
      ))}
    </AgendaContainer>
  );
};

export default Agenda;
