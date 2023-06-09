import { IProgramItemWithDates } from "@/types/internalApp";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import moment from "moment/moment";

export default function CardImage(imageInfo: IProgramItemWithDates) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Stack spacing={1}>
          <img src={imageInfo.thumbnail_img_url} alt="#" />
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>{imageInfo.display_title}</b>
          </Typography>
          <Typography sx={{ fontSize: 12 }} gutterBottom>
            {`${moment(imageInfo.start_date).format("DD MMM")} - ${moment(
              imageInfo.end_date
            ).format("DD MMM")}`}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
