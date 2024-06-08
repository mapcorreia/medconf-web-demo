import SectionMarker from 'components/HomePage/SectionMarker';
import { CardHeader, CardTitle, HomePageSectionContainer } from './HomePageSection.styled';

type HomePageSectionProps = {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  handleItemClick?: () => void;
};

const HomePageSection = ({ icon, title, children, handleItemClick }: HomePageSectionProps) => {
  return (
    <HomePageSectionContainer onClick={handleItemClick}>
      <CardHeader>
        <SectionMarker icon={icon} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
    </HomePageSectionContainer>
  );
};

export default HomePageSection;
