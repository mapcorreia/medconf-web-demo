import { useRouter } from 'next/router';
import { RegistrationSectionContainer, RegistrationText, RegistryButton } from './Registration.styled';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const RegistrationSection = () => {
  const { push } = useRouter();

  const handleButtonClick = () => {
    alert('Em desenvolvimento');
    //push('/registration');
  };

  return (
    <RegistrationSectionContainer>
      <RegistrationText>
        As inscrições para o Congresso de Cirurgia Vascular estão abertas. Garanta já a sua vaga! <br />
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </RegistrationText>
      <RegistryButton onClick={handleButtonClick}>
        <span style={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>Inscrição</span>
        <ArrowForwardSharpIcon style={{ width: '25px', height: '25px', color: 'rgba(159,13,6,1)' }} />
      </RegistryButton>
    </RegistrationSectionContainer>
  );
};

export default RegistrationSection;
