import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Icon,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { CardContainer } from "./UI/Card";
import mypic from "../assets/images/mypic.png";
import profile_Info from "../assets/images/profile_info.svg"
import flower from "../assets/images/tree.svg";

const ItemBg = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginLeft: "20px",
  backgroundColor: theme.palette.secondary.dark,
  lineHeight: "60px",
  borderRadius: 0,
  position: "absolute", 
  [theme.breakpoints.down('sm')]:{
    height:"100%",
    width:"50%",
  },
  [theme.breakpoints.up('sm')]:{
    height:"100%",
    width:"60%",
  },
}));
const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "20px",
  lineHeight: "60px",
  position: "absolute",
  backgroundColor: "transparent",
  borderRadius: 0,
  [theme.breakpoints.down('sm')]:{
    width:"50%",
    height:"100%",
  },
  [theme.breakpoints.up('sm')]:{
    width:"60%",
    height:"100%",
  },
}));
const CardMui = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.lightColor.main,
  marginTop:"20px"
}));
const BoxCon=styled(Box)(({theme})=>({
  ...theme.typography.body2,
  [theme.breakpoints.down('sm')]:{
    opacity:"0.5",
    bottom:"-15%"
  }
}));

export default function AboutMe() {
  return (
    <CardContainer>
      <Grid
        container
        md={5}
        sm={12}
        height='350px'
        width='100%'
        position='relative'
        justifyContent='center'
        alignContent='flex-start'
        alignItems='flex-end'
      >
        <BoxCon item xs={3} component='img' src={flower} alt="flower" sx={{
          zIndex:1,
          height:"100%",
          width:"100%",
          position:'absolute',
          marginRight:"40%",
          opacity:0.7,
          bottom:"-20%"
        }}/>
        <div>
          <ItemBg elevation={0}></ItemBg>
          <Item elevation={12}>
            <CardMedia
              component='img'
              height='100%'
              width="100%"
              image={mypic}
              alt='profile'
            />
          </Item>
        </div>
      </Grid>
      <Grid
        md={6}
        sm={12}
        container
        justifyContent='flex-start'
        alignContent='center'
        letterSpacing={1}
        sx={{ marging: "10px" }}
        width='100%'
      >
        <CardMui height='min-content'>
          <CardHeader
            avatar={<Icon><img alt="prof" height="100%" width="100%" src={profile_Info}/></Icon>}
            title="Let's hear something About Me"
            subheader='Vaishali :)'
          />
          <CardContent>
            <Typography variant='h5' component='div' color='text.lightColor' textAlign="justify">
              Hey, I'm Vaishali Gentyal am a Java Developer, along with
              Front-End Development as well, so kinda interested in ReactJS
              Developer &#128517;, and in addition, I've some cloud computing
              knowledge as well, in AWS, and GCP. Besides my hobbies sometimes, I
              do cooking, painting, some embroidery, do crochet knitting, and
              once in while I love to watch series &#128513;.
            </Typography>
          </CardContent>
        </CardMui>
      </Grid>
    </CardContainer>
  );
}
