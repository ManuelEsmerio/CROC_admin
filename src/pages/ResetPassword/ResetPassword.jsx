// Material Components
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from '@mui/material/Divider';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Libraries
import { enqueueSnackbar } from "notistack";

// React Router
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const message = 'Password has been already reset it'
        const data = new FormData(event.currentTarget);
        console.log(data.get('email'))
        console.log(data);
        enqueueSnackbar(message, { variant: 'success' })
    };

    // Navigation actions
    const handleGoSignIn = () => {
        navigate("/")
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <CssBaseline />
            <Grid item xs={3}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined" sx={{ width: 480, borderRadius: 2 }}>
                        <CardHeader title="Forgot your password?" />
                        <Divider />
                        <CardContent>
                            <Typography variant="body1" color="text.secondary">
                                Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                            </Typography>

                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Username or email "
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Reset password
                                </Button>
                            </Box>
                        </CardContent>
                        <Divider />
                        <CardActions sx={{ margin: 1 }}>
                            <Link href="#" variant="body1" onClick={handleGoSignIn}> Remember your password? </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ResetPassword;