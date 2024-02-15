import config from "../config.json";

import styled from "styled-components";

import banner from '../banner.jpg'
import Image from "next/image";

import Menu from "../src/components/Menu";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";

const StyledHeader = styled.div`
  .banner-div {
    position: relative;
    z-index: 1;
    width: 100%;
    max-height: 230px;
    overflow: hidden;
    padding: 0;
    margin: 0;
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

function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header banner={banner} />
        <Timeline playlists={config.playlists} youtubers={config.youtubers} />
      </div>
    </>
  );
}

function Header(props) {
  return (
    <StyledHeader>
      <div className="banner-div">
        <Image src={props.banner} alt="Banner" layout="responsive" priority={true} />
      </div>
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

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);
  const youtuberNames = Object.keys(props.youtubers)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url} target="_blank">
                    <img src={video.thumbnail} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="youtubers"  >
        <h2>Youtubers</h2>
        <div>
          {props.youtubers.map((youtuber) => (
              <a href={youtuber.url} target="_blank">
                <img src={youtuber.ytProfile} />
                <span>{youtuber.name}</span>
              </a>
            )
          )}
        </div>
      </section>
    </StyledTimeline>
  );
}

export default HomePage;