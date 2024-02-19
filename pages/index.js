import config from "../config.json";
import styled from "styled-components";
import banner from '../banner.jpg'
import Menu from "../src/components/Menu";
import { CSSReset } from "../src/components/CSSReset";
import Timeline from "../src/components/Timeline";
import { useState } from "react";
import Header from "../src/components/Header";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState('')
  return (
    <>
      <CSSReset />
      <StyledContainer>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header banner={banner} />
        <Timeline playlists={config.playlists} youtubers={config.youtubers} searchValue={valorDoFiltro} />
      </StyledContainer>
    </>
  );
}