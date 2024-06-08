import AgendaItem from 'components/AgendaItem';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import LocalCafeSharpIcon from '@mui/icons-material/LocalCafeSharp';
import CollectionsBookmarkSharpIcon from '@mui/icons-material/CollectionsBookmarkSharp';
import { AgendaContainer } from './Agenda.styled';
import RecordVoiceOverSharpIcon from '@mui/icons-material/RecordVoiceOverSharp';

const iconStyle = { width: '40px', height: '40px' };

const eventColors = {
  session: '#9f0d06',
  other: '#1B3956',
};

const firstDay = '27 Setembro';

const agenda = [
  {
    start: '09h00',
    day: firstDay,
    title: 'Doença Venosa Crónica',
    speaker: 'Dr. Manuel Silva',
    icon: <RecordVoiceOverSharpIcon style={iconStyle} />,
    mainColor: eventColors.session,
  },
  {
    start: '10h00',
    day: firstDay,
    title: 'Abertura',
    icon: <MeetingRoomSharpIcon style={iconStyle} />,
    mainColor: eventColors.other,
  },
  {
    start: '10h30',
    day: firstDay,
    title: 'Coffee Break',
    icon: <LocalCafeSharpIcon style={iconStyle} />,
    mainColor: eventColors.other,
  },
  {
    start: '11h00',
    day: firstDay,
    title: 'Trombose Venosa',
    speaker: 'Dra. Ana Santos',
    icon: <RecordVoiceOverSharpIcon style={iconStyle} />,
    mainColor: eventColors.session,
  },
  {
    start: '12h00',
    day: firstDay,
    title: 'Apresentação dos melhores trabalhos',
    icon: <CollectionsBookmarkSharpIcon style={iconStyle} />,
    mainColor: eventColors.session,
  },
  {
    start: '12h30',
    day: firstDay,
    title: 'Almoço',
    icon: <RestaurantSharpIcon style={iconStyle} />,
    mainColor: eventColors.other,
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
