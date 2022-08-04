import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Axios from 'axios';
import Orcid from '../ORCID/Orcid';
import CreateChinese from './CreateChinese';
// import { QRCodeCanvas } from 'qrcode.react';
import Vcard from '../Vcard/Vcard'; // https://github.com/joaocarmo/vcard-creator
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createVcardQrCode } from '../../Store/Slices/vCardSlice';
// import Divider from '@mui/material/Divider';
// import { saveAs } from 'file-saver';
import { vCardQrcodeList } from '../../Store/Slices/vCardSlice';
import { createCanvas } from 'canvas';
import QRCode from "qrcode";
import { addVcardData } from '../Home/HomeSlice';

function Create() {
    const dispatch = useDispatch();

    // Card Front (In Eng)
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [officephonenumber, setOfficePhoneNumber] = useState("");
    const [mobilephonenumber, setMobilePhoneNumber] = useState("");
    const [organization, setOrganization] = useState("The Hong Kong Polytechnic University");
    const [urladdress, setURLaddress] = useState("www.polyu.edu.hk");
    const [address, setAddress] = useState("");

    // const selectvCardQrcodeList = useSelector(vCardQrcodeList);
    const selectvCardQrcodeList = useSelector(vCardQrcodeList);
    // console.log(selectvCardQrcodeList)

    const createVcardQrCodeHandler = (e) => {
        if (firstname === "" || lastname === "" || department === "" || jobtitle === "" || email === "" || officephonenumber === "" || mobilephonenumber === "" || organization === "" || urladdress === "" || address === "") {
            alert("Not yet have input!");
        } else {
            e.preventDefault();
            dispatch(
                createVcardQrCode({
                    firstname,
                    lastname,
                    department,
                    jobtitle,
                    email,
                    officephonenumber,
                    mobilephonenumber,
                    organization,
                    urladdress,
                    address,
                    // id: Math.random(),
                })
            );
        }
        // console.log(createVcardQrCode)
    };

    // const vCardQrcodeList = useSelector((state) => state.vCardQrcodes.vCardQrcodes);

    // console.log(vCardQrcodeList.slice(), "slice111111");

    // const arr = vCardQrcodeList.slice(vCardQrcodeList.length-1);
    // console.log(arr, "1212121")

    // const vCardQrcodesTable = vCardQrcodeList.map((vCardQrcode) => (
    const vCardQrcodesTable = selectvCardQrcodeList.map((vCardQrcode) => (
        // <tr> 
        //     <td>{vCardQrcode.firstname}</td>
        //     <td>{vCardQrcode.lastname}</td>
        // </tr>
        <div>
            <Vcard
                firstname={vCardQrcode.firstname}
                lastname={vCardQrcode.lastname}
                department={vCardQrcode.department}
                jobtitle={vCardQrcode.jobtitle}
                email={vCardQrcode.email}
                officephonenumber={vCardQrcode.officephonenumber}
                mobilephonenumber={vCardQrcode.mobilephonenumber}
                organization={vCardQrcode.organization}
                urladdress={vCardQrcode.urladdress}
                address={vCardQrcode.address}
            />
        </div>
    )
    );

    // console.log(vCardQrcodesTable, "777777")

    // console.log(vCardQrcodesTable.slice(), "slice22222222");
    // console.log(vCardQrcodesTable.slice(vCardQrcodesTable.length - 1), "slice33333333");

    // const aaabbb = Object.fromEntries(vCardQrcodesTable);
    // console.log(aaabbb, "what is this");


    function getObject() {
        const vCardObject = vCardQrcodesTable.slice(vCardQrcodesTable.length - 1);
        if (vCardQrcodesTable.length > 0) {
            return vCardObject;
        }
        // console.log(vCardObject, "vCardObject")

    }
    // console.log(getObject(), "herrrrrr")




    // function getObjectTo() {
    //     const vCardObject = vCardQrcodesTable.slice(vCardQrcodesTable.length - 1);
    //     if (vCardQrcodesTable.length > 0) {
    //         return vCardObject;
    //     }
    //     console.log(vCardObject, "vCardObject")

    //     const canvas = createCanvas(700, 700, "svg")
    //     QRCode.toCanvas(canvas, vCardObject.toString(), { width: 500, errorCorrectionLevel: 'H', type: "svg" })

    // }



    // const vCardObject = vCardQrcodesTable.slice(vCardQrcodesTable.length - 1);

    // console.log(getObject(), "functionHiiii");

    // const vCardObject1 = QRCode.toDataURL(vCardObject)
    // .then(url => {
    //   console.log(url, "url1111111111111")
    // })
    // .catch(err => {
    //   console.error(err)
    // })

    // const savesvgURL = QRCode.toDataURL('Some text', {
    //     type: 'svg',
    //     color: {
    //         dark: '#00F',  // Blue dots
    //         light: '#0000' // Transparent background
    //     }
    // }, function (err) {
    //     if (err) throw err
    //     console.log('done')
    // })



    // const savesvg = () => {
    //     saveAs("", "image.jpg");
    // }

    const onDownload = () => {
        const vCardObject = vCardQrcodesTable.slice(vCardQrcodesTable.length - 1);
        console.log(vCardObject, "vCardObject22222222222222222222222222222222222222")
        const canvas = createCanvas(700, 700, "svg")
        QRCode.toCanvas(canvas, vCardObject.toString(), { width: 500, errorCorrectionLevel: 'H', type: "svg" })
        const link = document.createElement("a");
        link.download = `download.png`;
        link.href = canvas.toDataURL();
        link.click();

    };


    // const addnamecard = () => {
    //     if (firstname === "") {
    //         alert("Not yet have input!");
    //     } else {
    //         // console.log(name);
    //     } Axios.post('http://localhost:8080/create', {
    //         firstname: firstname,
    //         lastname: lastname,
    //         department: department,
    //         jobtitle: jobtitle,
    //         email: email,
    //         officephonenumber: officephonenumber,
    //         mobilephonenumber: mobilephonenumber,
    //         organization: organization,
    //         urladdress: urladdress,
    //         address: address,
    //         language: "English"
    //     }).then(() => {
    //         // console.log("success addnamecard", firstname);
    //         alert("Data Updated Successfully!!");
    //     });
    // };

    const addnamecard = (e) => {
        if (firstname === "" || lastname === "" || department === "" || jobtitle === "" || email === "" || officephonenumber === "" || mobilephonenumber === "" || organization === "" || urladdress === "" || address === "") {
            alert("Not yet have input!");
        } else if (officephonenumber.length >= 9) {
            alert("Your office phone number input is more then 8 number! Please try angin!");
        } else if (officephonenumber.length <= 7) {
            alert("Your office phone number input is less then 8 number! Please try angin!");
        } else if (mobilephonenumber.length >= 9) {
            alert("Your mobile phone number input is more then 8 number! Please try angin!");
        } else if (mobilephonenumber.length <= 7) {
            alert("Your mobile phone number input is less then 8 number! Please try angin!");
        } else {
            e.preventDefault();
            dispatch(addVcardData({
                firstname: firstname,
                lastname: lastname,
                department: department,
                jobtitle: jobtitle,
                email: email,
                officephonenumber: officephonenumber,
                mobilephonenumber: mobilephonenumber,
                organization: organization,
                urladdress: urladdress,
                address: address,
                language: "English"
            })).then(
                alert("Data Updated Successfully!!")
            );
        };
    };

        return (
            <Container maxWidth="lx" >
                <Grid container spacing={2}>
                    <Grid item xs={8}>

                        <Paper
                            elevation={0}
                            variant="outlined"
                            sx={{
                                m: 2,
                                p: 4,
                                border: "1px solid grey",
                            }}
                        >


                            <Grid container spacing={2}>
                                {/* -------------------------------------------------------------------Title------------------------------------------------------------------ */}
                                <Grid item xs={12}>
                                    <Typography variant='h4' align="center">
                                        vCard QR Code Generator
                                    </Typography>
                                </Grid>
                                {/* -------------------------------------------------------------------Title------------------------------------------------------------------ */}

                                {/* -------------------------------------------------------------------In Eng------------------------------------------------------------------ */}
                                <Grid item xs={12}>
                                    <Typography variant='h4' align="start" >
                                        vCard (In English)
                                    </Typography>
                                </Grid>
                                {/* -------------------------------------------------------------------In Eng------------------------------------------------------------------ */}

                                {/* -------------------------------------------------------------------1st row------------------------------------------------------------------ */}
                                <Grid item xs={12} sm={6} md={6} xl={6}>
                                    <TextField
                                        required
                                        id="FirstName"
                                        label="First Name"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setFirstName(event.target.value); }}
                                        value={firstname}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} xl={6}>
                                    <TextField
                                        required
                                        id="LastName"
                                        label="Last Name"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setLastName(event.target.value); }}
                                        value={lastname}
                                        fullWidth
                                    />
                                </Grid>


                                {/* -------------------------------------------------------------------1st row------------------------------------------------------------------ */}

                                {/* -------------------------------------------------------------------2nd row------------------------------------------------------------------ */}
                                <Grid item xs={12} sm={6} md={6} xl={6}>
                                    <TextField
                                        required
                                        id="Department"
                                        label="Department"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setDepartment(event.target.value); }}
                                        value={department}
                                        fullWidth
                                    />
                                </Grid>



                                <Grid item xs={12} sm={6} md={6} xl={6}>
                                    <TextField
                                        required
                                        id="JobTitle"
                                        label="Job Title"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setJobTitle(event.target.value); }}
                                        value={jobtitle}
                                        fullWidth
                                    />
                                </Grid>
                                {/* -------------------------------------------------------------------2nd row------------------------------------------------------------------ */}


                                {/* -------------------------------------------------------------------3rd row------------------------------------------------------------------ */}
                                <Grid item xs={12} sm={4} md={4} xl={4}>
                                    <TextField
                                        required
                                        id="Email"
                                        label="Email"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setEmail(event.target.value); }}
                                        value={email}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4} md={4} xl={4}>
                                    <TextField
                                        required
                                        id="OfficePhoneNumber"
                                        label="Office Phone Number"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setOfficePhoneNumber(event.target.value); }}
                                        value={officephonenumber}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4} md={4} xl={4}>
                                    <TextField
                                        required
                                        id="MobilePhoneNumber"
                                        label="Mobile Phone Number"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setMobilePhoneNumber(event.target.value); }}
                                        value={mobilephonenumber}
                                        fullWidth
                                    />
                                </Grid>
                                {/* -------------------------------------------------------------------3rd row------------------------------------------------------------------ */}

                                {/* -------------------------------------------------------------------4th row------------------------------------------------------------------ */}
                                <Grid item xs={12} sm={4} md={4} xl={4}>
                                    <TextField
                                        required
                                        id="Organization"
                                        label="Organization"
                                        size="small"
                                        defaultValue="The Hong Kong Polytechnic University"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setOrganization(event.target.value); }}
                                        value={organization}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4} md={4} xl={4}>
                                    <TextField
                                        required
                                        id="URLaddress"
                                        label="URL Address"
                                        size="small"
                                        defaultValue="www.polyu.edu.hk"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setURLaddress(event.target.value); }}
                                        value={urladdress}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4} md={4} xl={4}>
                                    <TextField
                                        required
                                        id="Address"
                                        label="Address"
                                        size="small"
                                        multiline
                                        maxRows={2}
                                        onChange={(event) => { setAddress(event.target.value); }}
                                        value={address}
                                        fullWidth
                                    />
                                </Grid>

                                {/* -------------------------------------------------------------------4th row------------------------------------------------------------------ */}


                                {/* -------------------------------------------------------------------5th row------------------------------------------------------------------ */}
                                <Grid item xs={4} >
                                    <Button variant="outlined" href="#contained-buttons">
                                        <Link to="/" activeclassname="active" style={{ textDecoration: "none", color: "#A02337" }}>
                                            Back
                                        </Link>
                                    </Button>
                                </Grid>


                                <Grid item xs={8} spacing={2} >
                                    <Stack spacing={2} direction="row" justifyContent="flex-end">
                                        <Button variant="outlined" href="#contained-buttons" onClick={addnamecard}>
                                            Save
                                        </Button>

                                        <Button variant="outlined" onClick={createVcardQrCodeHandler}>
                                            {/* <Button variant="contained" href="#contained-buttons" onClick={addEmployee}> */}
                                            Generate vCard QrCode
                                        </Button>
                                    </Stack>
                                </Grid>
                                {/* -------------------------------------------------------------------5th row------------------------------------------------------------------ */}


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
                                height: 376.469
                            }}
                        >
                            <Typography variant='h4' align="center" >
                                vCard QR Code In English
                                {/* {getVcardDataInEnglish.map((val, key) => {

                                return (
                                    <div>

                                        {firstname}
                                        <Vcard
                                            firstname={firstname}
                                            lastname={lastname}
                                            department={department}
                                            jobtitle={jobtitle}
                                            email={email}
                                            officephonenumber={officephonenumber}
                                            mobilephonenumber={mobilephonenumber}
                                            organization={organization}
                                            urladdress={urladdress}
                                            address={address}
                                        />

                                    </div>
                                )

                            })} */}
                            </Typography>

                            <Typography align="center" justify="center" sx={{ p: 5 }}>
                                {getObject()}
                            </Typography>

                            <Typography align="center">
                                {/* <Button variant="contained" onClick={() => { console.log(savesvg, "Hisvg"); window.location.href = savesvg }}> */}
                                <Button variant="outlined" onClick={onDownload}>
                                    Download vCode QrCode
                                </Button>
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>




                {/* ------------------------------------------------------------------------CreateChinese--------------------------------------------------------------- */}
                <CreateChinese />
                {/* ------------------------------------------------------------------------CreateChinese--------------------------------------------------------------- */}

                {/* ---------------------------------------------------------------------------ORCID-------------------------------------------------------------------- */}
                <Orcid />
                {/* ---------------------------------------------------------------------------ORCID-------------------------------------------------------------------- */}


            </Container>
        )
    }





    export default connect()(Create)