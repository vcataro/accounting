import { Grid2 } from '@mui/material';
import {Box} from '@mui/material';
const Authentication = () => {
    return (
        <Grid2 item sx={8}>
            <Box sx={{height: "100vh", // Full viewport height
                        display: "flex"  }}>
                <h2>
                    Authentication Page
                </h2>
            </Box>
        </Grid2>

    )
}
export default Authentication;
