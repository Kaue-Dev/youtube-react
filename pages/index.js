import config from "../config.json";
import styled from "styled-components";
import bannerDefault from '../banner.jpg'
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
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

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
  //const randomIndex = Math.floor(Math.random() * images.length)

  return (
    <>
      <StyledContainer>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header banner={imagesMapped.length > 0 ? imagesMapped[1] : bannerDefault} />
        <Timeline playlists={config.playlists} youtubers={config.youtubers} searchValue={valorDoFiltro} />
      </StyledContainer>
    </>
  );
}