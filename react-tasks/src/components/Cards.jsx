import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';


export default function Cards({task}) {
    const {title, description}=task;
    const avatarValue = title ? title[0].toUpperCase():"N/A";
  return (
    <div className='cardtask'>
      <Card variant="outlined" sx={{ mb: 2, width:"300px", height:"250px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:deepOrange[500], width:"260px", height: "80px", fontSize:"60px" }} variant="square">
            {avatarValue}
          </Avatar>
        }
      />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
