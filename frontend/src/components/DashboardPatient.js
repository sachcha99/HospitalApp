import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import doctor from '../assets/img/doctor.png';


function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 0,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

function DashboardPatient () {
    return(
        <div>
        <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
            height: 300,
          }}
        >
            
            <Item sx={{flexGrow: 2}}>
                <p>Welcome !<br></br> Mr. Dineth Gunasekera</p>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search for Specialization" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </Item>

            <Item>
              {/* <img src="assets/img/fuck.jpg" class="rounded float-end" alt="doctor1" ></img> */}
              <img src={doctor} class="rounded float-end" alt="doctor1" style={{marginTop: '25px'}} />
            </Item>

        </Box>

        </div>
        
        <div class="container">
        <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                    <div class="text-center mb-4">
                         <h2 class="h2">Top Channelled Doctors</h2>
                            <div class="rte-setting">
                                <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong></p>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                    </div>
                </div>
        </div>

        <br></br>

        <div class="row">

        <div class="col-8 col-sm-8 col-md-4 col-lg-4 mb-2">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="assets/img/Card1.jpg"
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Mr. Chanaka Dilshan
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ENT Specialist
              </Typography>

            </CardContent>
            
            <CardActions>
            <a href="/appointmentpatient">
              <Button size="small">Make an Appointment</Button></a>
            </CardActions>
          </Card>
          </div>

          <div class="col-8 col-sm-8 col-md-4 col-lg-4 mb-2">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="assets/img/Card1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Mr. Hiranya Ravinath
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Dentist
              </Typography>
            </CardContent>
            <CardActions>
              
                <Button size="small">Make an Appointment</Button>
            </CardActions>
          </Card>
          </div> 

          <div class="col-8 col-sm-8 col-md-4 col-lg-4 mb-2">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="assets/img/Card1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mr. Rishan Madhuwantha
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cardiologist
              </Typography>
            </CardContent>
            <CardActions>
              
              <Button size="small">Make an Appointment</Button>
            </CardActions>
          </Card>
          </div> 
          

          </div>

          <div class="row">

          <div class="col-8 col-sm-8 col-md-4 col-lg-4 mb-2">
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="assets/img/Card1.jpg"
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Mr. Chanaka Dilshan
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  ENT Specialist
                </Typography>

              </CardContent>
              
              <CardActions>
              <a href="/appointmentpatient">
                <Button size="small">Make an Appointment</Button></a>
              </CardActions>
            </Card>
            </div>

            <div class="col-8 col-sm-8 col-md-4 col-lg-4 mb-2">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="assets/img/Card1.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Mr. Hiranya Ravinath
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Dentist
                </Typography>
              </CardContent>
              <CardActions>
                
                  <Button size="small">Make an Appointment</Button>
              </CardActions>
            </Card>
            </div> 

            <div class="col-8 col-sm-8 col-md-4 col-lg-4 mb-2">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="assets/img/Card1.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mr. Rishan Madhuwantha
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cardiologist
                </Typography>
              </CardContent>
              <CardActions>
                
                <Button size="small">Make an Appointment</Button>
              </CardActions>
            </Card>
            </div> 
            

            </div>
          </div>

      </div>
         
    )
}

export default DashboardPatient;

