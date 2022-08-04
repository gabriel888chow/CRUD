import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Axios from 'axios';
import { Link } from 'react-router-dom';
import { addOrcidData } from './OrcidSlice';
import { useDispatch } from 'react-redux';

function Orcid() {
    const dispatch = useDispatch();

    const [orcidURL, setOrcidURL] = useState("");

    const addorcid = (e) => {
        if (orcidURL === "") {
            alert("Not yet have input!");
        } else if (orcidURL.length <= 15) {
            alert("Your input is less then 16 number! Please try angin!");
        } else if (orcidURL.length >= 17) {
            alert("Your input is more then 16 number! Please try angin!");
        } else {
            e.preventDefault();
            dispatch(addOrcidData({
                orcidURL,
            })).then(
                alert("Data Updated Successfully!!")
            );
        };
    };

    // const addorcid = () => {
    //     if (orcidURL === "") {
    //         alert("Not yet have input!"); 
    //     } else {
    //         Axios.post('http://localhost:8080/create/orcid', {
    //             orcidURL: "https://orcid.org/" + orcidURL
    //         }).then(() => {
    //             console.log("success addorcid", orcidURL);
    //             if (orcidURL.length <= 15) {
    //                 alert("Your input is less then 16 number! Please try angin!");
    //             } else if (orcidURL.length >= 17) {
    //                 alert("Your input is more then 16 number! Please try angin!");
    //             } else {
    //                 alert("Your data was save! You can click 'BACK' Button to check on Home Page!");
    //             }

    //         });
    //     }
    // };

    return (
        // <Container maxWidth="lx" >
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{
                        m: 2,
                        p: 4,
                        border: "1px solid grey",
                        height: 300,

                    }}
                >
                    <Grid container spacing={2} alignItems="center">

                        <Grid item xs={12}>
                            <Typography variant='h4' align="center" >
                                ORCID ID QR Code Generator
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant='h5'>
                                https://orcid.org/
                            </Typography>
                        </Grid>

                        <Grid item xs={10} >
                            <TextField
                                required
                                id="ORCID"
                                label="0000-0000-0000-0000"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setOrcidURL(event.target.value); }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4} >
                            <Button variant="outlined" href="#contained-buttons">
                                <Link to="/" activeclassname="active" style={{ textDecoration: "none", color: "#A02337" }}>
                                    Back
                                </Link>
                            </Button>
                        </Grid>

                        <Grid item xs={8} spacing={2} >
                            <Stack spacing={2} direction="row" justifyContent="flex-end">
                                <Button variant="outlined" href="#contained-buttons" onClick={addorcid} >
                                    Save
                                </Button>
                                <Button variant="outlined" >
                                    Generate ORCID qrcode
                                </Button>
                            </Stack>
                        </Grid>
                        {/* <QRCodeCanvas value={myVCard.toString()} size={60.472441} /> */}
                    </Grid>
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{
                        m: 2,
                        p: 4,
                        border: "1px solid grey",
                        height: 300
                    }}
                >
                    <Typography variant='h4' align="center">
                        ORCID QR Code
                        {/* <Vcard /> */}
                    </Typography>

                    <Typography align="center" justify="center" sx={{ p: 5 }}>

                    </Typography>

                    <Typography align="center">
                        <Button variant="outlined" >
                            Download ORCID qrcode
                        </Button>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        // </Container>

    )

}

export default connect()(Orcid)