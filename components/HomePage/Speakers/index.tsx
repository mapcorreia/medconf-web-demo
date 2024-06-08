import SpeakerItem from 'components/HomePage/SpeakerItem';
import { SpeakersContainer } from './Speakers.styled';

const speakers = [
  {
    name: 'Dr. Manuel Silva',
    specialty: 'Especialista em Doença Venosa Crónica',
    picture: '/static/speaker_oldMan.png',
  },
  {
    name: 'Dra. Ana Santos',
    specialty: 'Especialista em Trombose Venosa',
    picture: '/static/speaker_oldWoman.png',
  },
  {
    name: 'Dr. João Alves',
    specialty: 'Especialista em Doença Arterial',
    picture: '/static/speaker_oldMan2.png',
  },
  {
    name: 'Dra. Vanessa Oliveira',
    specialty: 'Especialista em Doença Venosa',
    picture: '/static/speaker_youngWoman.png',
  },
];

const Speakers = () => {
  const handleSpeakerClick = () => {
    alert('Em desenvolvimento');
  };

  return (
    <SpeakersContainer onClick={handleSpeakerClick}>
      {speakers.map(speaker => (
        <SpeakerItem speaker={speaker} />
      ))}
    </SpeakersContainer>
  );
};

export default Speakers;
