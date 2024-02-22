import config from "../config.json";
import styled from "styled-components";
import axios from "axios";
// Components
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
// Hooks
import { useState, useEffect } from "react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const API_URL = `https://api.unsplash.com/search/photos`
const API_KEY = `CrpmHYm4qVWvy3dNA2LIwCfDPqmzNxk8I1U2M23jUUE`

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState('')
  const [images, setImages] = useState([])

  useEffect(() => {
    const getImage = async () => {
      try {
        const { data } = await axios.get(`${API_URL}?query=tech&orientation=landscape&page=1&client_id=${API_KEY}`)
        setImages(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getImage()
  }, [])

  const imagesMapped = images.map(image => image.urls.small)

  return (
    <>
      <StyledContainer>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header banner={imagesMapped[6]} />
        <Timeline playlists={config.playlists} youtubers={config.youtubers} searchValue={valorDoFiltro} />
      </StyledContainer>
    </>
  );
}