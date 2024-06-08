import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Head from 'next/head';
import HomePageSection from 'components/HomePageSection';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import InterpreterModeSharpIcon from '@mui/icons-material/InterpreterModeSharp';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';
import AgendaItem from 'components/AgendaItem';
import Agenda from 'components/Agenda';

const speakerIcon = <InterpreterModeSharpIcon style={{ width: '65px', height: '65px', color: 'white' }} />;
const programIcon = <EventNoteSharpIcon style={{ width: '65px', height: '65px', color: 'white' }} />;
const registrationIcon = <AppRegistrationSharpIcon style={{ width: '65px', height: '65px', color: 'white' }} />;

export default function Home() {
  return (
    <>
      <Head>
        <title>Congresso Cirurgia Vascular</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          padding: '12px',
          width: '100%',
        }}
      >
        <HomePageSection icon={speakerIcon} title={'Oradores convidados'} />
        <HomePageSection icon={programIcon} title={'Programa'}>
          <Agenda />
        </HomePageSection>
        <HomePageSection icon={registrationIcon} title={'Inscrições'}>
          <>
            <p
              style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'justify', fontSize: '18px', lineHeight: '48px' }}
            >
              As inscrições para o Congresso de Cirurgia Vascular estão abertas. Garanta já a sua vaga! It is a long
              established fact that a reader will be distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </>
        </HomePageSection>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
