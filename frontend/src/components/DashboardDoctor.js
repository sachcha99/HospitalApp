import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';



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

function DashboardDoctor () {
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
                <br></br>

                <p>You have 2 Appointments today!</p>
                <button class="btn btn-outline-success" type="submit">Check Today's Appointments</button>

                {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search for Specialization" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </Item>

            </Box>
        </div>
        </div>
    )
        }
      

export default DashboardDoctor;
