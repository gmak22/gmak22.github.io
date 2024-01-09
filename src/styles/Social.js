import styled from "styled-components";

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  padding-top: 100px;
  .soc-icon {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 50px;

    .soc-icon {
      font-size: 1.5em;
    }
  }
`;

export const SocialWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

export const Logo = styled.p`
	font-weight: 600;
	font-size: 35px;
	color: wheat;
	color: var(--text-color2);
`;

export const SocialMediaIcons = styled.div`
  display: flex;
`;

export const SocialMediaIcon = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	gap: 2px;
	margin: 0 1rem;
	font-size: 20px;
	color: var(--text-color2);
	transition: color 0.2s ease-in-out;
	&:hover {
		color: gray;
	}
	@media (max-width: 768px) {
		font-size: 20px;
		margin-bottom: 15px;
	}
`;
