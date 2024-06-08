import { SectionMarkerContainer } from './SectionMarker.styled';

type SectionMarkerProps = {
  icon: React.ReactNode;
};

const SectionMarker = ({ icon }: SectionMarkerProps) => {
  return <SectionMarkerContainer>{icon}</SectionMarkerContainer>;
};

export default SectionMarker;
