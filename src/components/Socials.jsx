import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub, Mail, Phone } from "@mui/icons-material";
import { Bio } from "../data/constants";
import {
  Logo,
  SocialContainer,
  SocialMediaIcon,
  SocialMediaIcons,
  SocialWrapper,
} from "../styles/Social";

function Socials() {
  return (
    <SocialContainer>
      <SocialWrapper>
        <SocialMediaIcon>
          <Logo>Makarand Gijam</Logo>
        </SocialMediaIcon>

        <SocialMediaIcon
          id="contact-email"
          href="mailto:makarand.gijam22@gmail.com"
        >
          <Mail />
          <h5>makarand.gijam22@gmail.com</h5>
        </SocialMediaIcon>

        <SocialMediaIcon id="contact-phone" href="tel:+917021913227">
          <Phone />
          <h5>+91-7021913227</h5>
        </SocialMediaIcon>
        <SocialMediaIcons>
          <SocialMediaIcon
            id="contact-linkedin"
            href={Bio.linkedin}
            target="display"
          >
            <LinkedInIcon className="soc-icon" />
          </SocialMediaIcon>
          <SocialMediaIcon
          id="contact-github"
            href={Bio.github}
            target="display"
          >
            <GitHub className="soc-icon" />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </SocialWrapper>
    </SocialContainer>
  );
}

export default Socials;
