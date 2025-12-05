import {Stack, Box} from "@mui/material";
import { ChannelCard, VideoCard } from "../../index";

const Video = ({video}) => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {video.map((item, idx) => (
        <Box sx={{ cursor: "pointer" }} key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Video
