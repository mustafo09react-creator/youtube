import { Box,  Container,  Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Category, Video} from "../../index" 
import { colors } from '../../constants/colors'
import { Api } from '../../service/api'
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New ")
  const [video, setVideo] = useState([])
  const selectedCategoryHandle = category => setSelectedCategory(category)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api.fetching(`search?part=snippet&q=${selectedCategory}}`)
        setVideo(data.items)
        console.log(data.items);
        
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  }, [selectedCategory])

  return (
    <>
      <Stack>
        <Category selectedCategoryHandle={selectedCategoryHandle} selectedCategory={selectedCategory} />
        <Box p={2} sx={{ height: "90vh" }}>
          <Container sx={{maxWidth: "90%"}}> 
          <Typography variant='h4' fontWeight={"bold"}>{selectedCategory} <span style={{color:colors.color}}> Videos</span></Typography>
          </Container>
          <Video video={video} />
        </Box>
    </Stack>
    </>
  )
}

export default Main
