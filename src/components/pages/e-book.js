import * as React from 'react';
import { useState,useEffect } from "react"; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
function Ebook(){
    const [bookDetails,setbookDetails]=useState({});
    useEffect(() => {
        getPageDetails(38)
      },[bookDetails]);

const baseUrl='http://3.65.32.166'

const getPageDetails= (productId)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhYmxlX2lkIjo5LCJhdXRoZW50aWNhYmxlX3R5cGUiOiJTcHJlZTo6VXNlciIsImRldmljZSI6MTQzLCJjcmVhdGVkX2F0IjoxNjczODcxNTA5LCJleHAiOjQ4Mjk1NjY3MDl9.PlNelre_ehGa3GruTipCZx1PxkTrHbkxp61ozwIqf9g");
    myHeaders.append("Cookie", "__profilin=p%3Dt");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${baseUrl}/api/v2/storefront/products/${productId}`, requestOptions)
      .then(response => response.text())
      .then(result => setbookDetails(result))
      .catch(error => console.log('error', error));
}

    return(
        <div>
        {bookDetails&&
        <React.Fragment >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {bookDetails?.attributes?.name}
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </React.Fragment>
        }
        </div>

  );
}
export default Ebook;