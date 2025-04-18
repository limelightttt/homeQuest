
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterInner>
        <S.Column>
          <S.Title>Company</S.Title>
          <S.Link>About Us</S.Link>
          <S.Link>Careers</S.Link>
          <S.Link>Press</S.Link>
        </S.Column>

        <S.Column>
          <S.Title>Support</S.Title>
          <S.Link>Help Center</S.Link>
          <S.Link>Contact Us</S.Link>
          <S.Link>Privacy Policy</S.Link>
        </S.Column>

        <S.Column>
          <S.Title>Contact</S.Title>
          <S.Text>Email: info@realestate.fake</S.Text>
          <S.Text>Phone: +1 (800) 555-1234</S.Text>
          <S.Text>Address: 123 Main St, NY, USA</S.Text>
        </S.Column>
      </S.FooterInner>

      <S.Bottom>
        © {new Date().getFullYear()} RealEstate. All rights reserved.
      </S.Bottom>
    </S.FooterWrapper>
  );
};

export default Footer;

