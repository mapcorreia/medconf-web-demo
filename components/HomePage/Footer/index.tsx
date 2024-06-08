import { FooterContainer } from './Footer.styled';

const Footer = () => {
  const handleFooterItemClick = () => {
    alert('Em desenvolvimento');
  };
  return (
    <FooterContainer>
      <span style={{ cursor: 'pointer' }} onClick={handleFooterItemClick}>
        Organização
      </span>
      <span style={{ cursor: 'pointer' }} onClick={handleFooterItemClick}>
        Patrocinadores
      </span>
      <span style={{ cursor: 'pointer' }} onClick={handleFooterItemClick}>
        Contactos
      </span>
      <span style={{ cursor: 'pointer' }} onClick={handleFooterItemClick}>
        Localização
      </span>
    </FooterContainer>
  );
};

export default Footer;
