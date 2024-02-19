import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div { 
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding: 10px 0;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }

  .youtubers img {
    border-radius: 50%;
    width: 110px;
    height: 110px;
  }
  .youtubers div {
    grid-gap: 0px;
    text-align: center;
    grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  }
  .youtubers a {
    width: 100%;
  }
  .youtubers a span {
    padding-right: 0;
  }
`;

export default function Timeline({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a href={video.url} target="_blank" key={video.title}>
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