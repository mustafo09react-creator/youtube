import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { colors } from "../../constants/colors";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  return (
    <>
      <Stack>
        <Card sx={{ width: "360px", boxShadow: "none", borderRadius: "10px" }}>
          <CardMedia
            image={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            sx={{ width: "360px", height: "180px" }}
          />
          <CardContent
            sx={{
              bgcolor: colors.bgColor,
              height: "220px",
              position: "relative",
            }}
          >
            <>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                {video.snippet.title.slice(0, 50)}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ opacity: "70%", fontSize: "14px" }}
              >
                {video.snippet.description.slice(0, 70)}
              </Typography>
              <Typography my={1} sx={{ opacity: "4" }}>
                {moment(video.snippet.publishAt).fromNow()}
              </Typography>
            </>
            <>
              <Stack
                direction={"row"}
                position={"absolute"}
                bottom={"10px"}
                alignItems={"center"}
                gap={2}
              >
                <Avatar src={video.snippet.thumbnails.default.url} />
                <Typography>{video.snippet.channelTitle}</Typography>
                <CheckCircle sx={{ fontSize: "15px", color: "blue" }} />
              </Stack>
            </>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default VideoCard;
