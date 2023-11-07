import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DocCard() {
  return (
    <Card sx={{ maxWidth: 300,bgcolor:'hotpink',boxShadow:'5px 2px #888888', mt:3, m:2}}>
      <CardMedia
        sx={{ height: 200 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Name:dr najam sethi ab
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Category:dermatolisgist
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Days:tue,thu,Wed
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button >Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
