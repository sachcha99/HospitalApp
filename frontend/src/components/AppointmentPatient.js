import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item1 = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

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

function AppointmentPatient () {
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
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Item> 
                    <img src="assets/img/fuck.jpg" class="rounded float-end" alt="doctor1" ></img>                
                    </Item>
                    
                  </Grid>
                  <Grid item xs={8}>
                    <Item>
                      <p>
                      <center><strong>Mr. Chanaka Dilshan</strong>
                              <br></br>
                              <br></br>
                        Cardiologist
                              <br></br>
                        Monday - Friday 
                              <br></br>
                        7.00 a.m - 7.00 p.m 
                        
                      </center>
                      </p>
                    </Item>
                  </Grid>
                  
                </Grid>
              </Box>
                
                
            </Item>

            <Item sx={{flexGrow: 2}}>
              <img src="assets/img/fuck.jpg" class="rounded float-end" alt="doctor1" ></img>
            </Item>

        </Box>
        </div>
        
        <br></br>
        
        <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                    <div class="text-center mb-4">
                         <h2 class="h2">Channel this Doctor here !</h2>
                            <br></br>
                    </div>
                </div>
        </div>


        <div class = "container">
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputAppointmentDate" class="form-label">Appointment Date</label>
            <input type="date" class="form-control" id="inputAppointmentDate"></input>
          </div>
          <div class="col-md-6">
            <label for="inputAppointmentTime" class="form-label">Appointment Time</label>
            <input type="time" class="form-control" id="inputAppointmentTime"></input>
          </div>
          <div class="col-12">
            <label for="inputMessage" class="form-label">Message</label>
            <input type="text" class="form-control" id="inputMessage" placeholder="Input message here!"></input>
          </div>         
          <div class="col-12">
          <center><button type="submit" class="btn btn-primary">Make an appointment</button></center>
          </div>
        </form>
        </div>

</div>
        
    )
}

export default AppointmentPatient;