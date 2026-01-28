import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

export default function CardUI({ title, desc }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image="/images.png"
      />
      <CardContent align="center">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{desc}</Typography>
        <Button variant="contained" size="small" sx={{ mt: 1 }}>
          Next
        </Button>
      </CardContent>
    </Card>
  );
}
