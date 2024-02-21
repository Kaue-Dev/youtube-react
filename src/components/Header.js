import styled from "styled-components";
import config from "../../config.json";

const StyledHeader = styled.div`
  .banner-div {
    position: relative;
    z-index: 1;
    width: 100%;
    max-height: 230px;
    overflow: hidden;
    padding: 0;
    margin: 0;
    background-size: cover;
    background-position: center;
  }
  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin: 20px 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${({ bg }) => bg});
  height: 230px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <StyledBanner bg={props.banner} />
      <section className="user-info">
        <img src={config.githubProfile} alt="Foto Perfil" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.bio}</p>
        </div>
      </section>
    </StyledHeader>
  );
}