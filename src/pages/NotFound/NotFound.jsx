import { Box, Button, Typography } from "@mui/material"
import {useNavigate } from "react-router-dom"

const NotFound = () => {
    const validateAuth = false;
    const navigate = useNavigate();
    const handleGoBack = () => {
        // Validate if the user is already login
        (validateAuth) ? navigate('/Dashboard') : navigate('/')
    }

    return (
        <Box display={'flex'} width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'} bgcolor={'#242424'} flexDirection={'column'}>
            <Box>
                <Typography variant="h1" component="h2" color={'whitesmoke'}>
                    404 - Page Not Found
                </Typography>
            </Box>
            <Box mt={4}>
                <Typography variant="h4" component="h2" color={'whitesmoke'}>
                    We looked everywhere for this page.
                    Are you sure the website URL is correct?
                </Typography>
            </Box>
            <Box mt={3}>
                <Button variant="contained" color="secondary" onClick={handleGoBack}> Go Back Home </Button>
            </Box>
        </Box>
    )
}

export default NotFound
