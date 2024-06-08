import SectionMarker from 'components/SectionMarker';
import { CardHeader, CardTitle, SectionMarkerContainer } from './HomePageSection.styled';

type HomePageSectionProps = {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  handleItemClick?: () => void;
};

const HomePageSection = ({ icon, title, children, handleItemClick }: HomePageSectionProps) => {
  return (
    <SectionMarkerContainer onClick={handleItemClick}>
      <CardHeader>
        <SectionMarker icon={icon} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
    </SectionMarkerContainer>
  );
};

export default HomePageSection;
