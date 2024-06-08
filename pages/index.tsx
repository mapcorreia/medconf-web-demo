import Footer from 'components/HomePage/Footer';
import Banner from 'components/HomePage/Banner';
import Head from 'next/head';
import HomePageSection from 'components/HomePage/HomePageSection';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import InterpreterModeSharpIcon from '@mui/icons-material/InterpreterModeSharp';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';
import Agenda from 'components/HomePage/Agenda';
import Speakers from 'components/HomePage/Speakers';
import RegistrationSection from 'components/HomePage/Registration';
import { BodyContainer } from './index.styled';

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
      <BodyContainer>
        <HomePageSection icon={speakerIcon} title={'Oradores convidados'}>
          <Speakers />
        </HomePageSection>
        <HomePageSection icon={programIcon} title={'Programa'}>
          <Agenda />
        </HomePageSection>
        <HomePageSection icon={registrationIcon} title={'Inscrição'}>
          <RegistrationSection />
        </HomePageSection>
      </BodyContainer>
      <Footer />
    </>
  );
}
