import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Vcard from '../Vcard/Vcard';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteIcon from '@mui/icons-material/Delete';
// import SaveIcon from '@mui/icons-material/Save';
import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
import OrcidTable from '../ORCID/OrcidTable';
// import { showInputData } from '../Home/HomeSlice';
// import { inputDataList } from '../Home/HomeSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    inputDataList,
    getDataFromApi,
    deleteVcardData,
    editVcardData,
} from './HomeSlice';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import HomeChinese from './HomeChinese';
// import { createRoot } from 'react-dom/client';
// import { ReactSVG } from 'react-svg';




function Home() {
    const dispatch = useDispatch();
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [department, setdepartment] = useState("");
    const [jobtitle, setjobtitle] = useState("");
    const [email, setemail] = useState("");
    const [officephonenumber, setofficephonenumber] = useState("");
    const [mobilephonenumber, setmobilephonenumber] = useState("");
    const [organization, setorganization] = useState("");
    const [urladdress, seturladdress] = useState("");
    const [address, setaddress] = useState("");

    // const [vcardListEnglish, setvCardListEnglish] = useState("");
    // const [vcardListChinese, setvCardListChinese] = useState("");

    const vcardListEnglish = useSelector(inputDataList);
    // console.log(vcardListEnglish, "list")
    // const vcardListChinese = useSelector(inputDataInChineseList);


    // const userList = useSelector((state) => state.HomePageRecord.value);

    // const getVcardDataInEnglish = () => {
    //     Axios.get("http://localhost:8080/data").then((response) => {
    //         setvCardListEnglish(
    //             response.data.filter((rec) => rec.language === "English")
    //         );
    //     });
    // }

    useEffect(() => {
        dispatch(getDataFromApi())
    }, [])

    // useEffect(() => {
    //     dispatch(getDataFromApiInChinese())
    // }, [])

    // const getVcardDataInChinese = async () => {
    //     await Axios.get("http://localhost:8080/data").then((response) => {
    //         setvCardListChinese(
    //             response.data.filter((rec) => rec.language === "Chinese")
    //         );
    //     });
    // }

    

    // const qrcodePost = async (id) => {
    //     await Axios.post(`http://localhost:8080/qrcode/${id}`).then((response) => {
    //         console.log(response.data);
    //         console.log('show the code');
    //     });
    //     console.log("get the data");
    //     Axios.get("http://localhost:8080/data").then((data) => {
    //         console.log(data.data);
    //         setNameCardList(response.data);
    //     });
    // };





    // --------------------------------------------Button in DataGrid--------------------------------------------
    const RenderDate = (props) => {
        const [newfirstname, setNewFirstName] = useState("");
        const [newlastname, setNewLastName] = useState("");
        const [newdepartment, setNewDepartment] = useState("");
        const [newjobtitle, setNewJobTitle] = useState("");
        const [newemail, setNewEmail] = useState("");
        const [newofficephonenumber, setNewOfficePhoneNumber] = useState("");
        const [newmobilephonenumber, setNewMobilePhoneNumber] = useState("");
        const [neworganization, setNewOrganization] = useState("Hong Kong Information Technology");
        const [newurladdress, setNewURLaddress] = useState("www.hkit.com.hk");
        const [newaddress, setNewAddress] = useState("");

        // useEffect (() => {
        //     if (newfirstname) {
        //         setNewFirstName(props.row.firstname)
        //     }
        // }, [])




        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true)
        };
        const handleClose = () => setOpen(false);

        const [editOpen, setEditOpen] = React.useState(false);
        const handleEditOpen = () => {
            setEditOpen(true)
        };
        const handleEditClose = () => setEditOpen(false);

        const { hasFocus, value } = props;
        const buttonElement = React.useRef(null);
        const rippleRef = React.useRef(null);

        // const container = document.getElementById('root')
        // const root = createRoot(container)
        // root.render(<ReactSVG src="svg.svg" />)

        React.useLayoutEffect(() => {
            if (hasFocus) {
                const input = buttonElement.current?.querySelector('input');
                input?.focus();
            } else if (rippleRef.current) {
                // Only available in @mui/material v5.4.1 or later
                rippleRef.current.stop({});
            }
        }, [hasFocus]);

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 5,
            p: 4,
            borderRadius: 5,
            border: 1.5,
            borderColor: "#5A8F7B",
        };

        const styleEdit = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1000,
            height: 320,
            bgcolor: 'background.paper',
            boxShadow: 5,
            p: 4,
            borderRadius: 5,
            border: 1.5,
            borderColor: "#5A8F7B",
        };


        return (
            <>
                <Button
                    component="button"
                    ref={buttonElement}
                    touchRippleRef={rippleRef}
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: 16 }}
                    Remove button from tab sequence when cell does not have focus
                    tabIndex={hasFocus ? 0 : -1}
                    onKeyDown={(event) => {
                        if (event.key === ' ') {
                            // Prevent key navigation when focus is on button
                            event.stopPropagation();
                        }
                    }}
                    onClick={() => {
                        setOpen(true);
                        setfirstname(props?.row?.firstname);
                        setlastname(props?.row?.lastname);
                        setdepartment(props?.row?.department);
                        setjobtitle(props?.row?.jobtitle);
                        setemail(props?.row?.email);
                        setofficephonenumber(props?.row?.officephonenumber);
                        setmobilephonenumber(props?.row?.mobilephonenumber);
                        setorganization(props?.row?.organization);
                        seturladdress(props?.row?.urladdress);
                        setaddress(props?.row?.address);
                    }}

                >
                    Open Qrcord
                </Button>

                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h4" sx={{ fontWeight: 'bold', p: 0.5 }}>
                            Qr Code
                        </Typography>
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
                        <Button onClick={handleClose}>Close</Button>
                        <Button >
                            save QRcode
                        </Button>
                        {/* <ReactSVG src="svg.svg" /> */}
                    </Box>
                </Modal>

                <Button
                    component="button"
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        setNewFirstName(props.row.firstname)
                        setNewLastName(props.row.lastname)
                        setNewDepartment(props.row.department)
                        setNewJobTitle(props.row.jobtitle)
                        setNewEmail(props.row.email)
                        setNewOfficePhoneNumber(props.row.officephonenumber)
                        setNewMobilePhoneNumber(props.row.mobilephonenumber)
                        setNewOrganization(props.row.organization)
                        setNewURLaddress(props.row.urladdress)
                        setNewAddress(props.row.address)
                        setEditOpen(true)
                    }}
                    endIcon={<EditSharpIcon />}
                >
                    Edit
                </Button>

                <Modal
                    keepMounted
                    open={editOpen}
                    onClose={handleEditClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={styleEdit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography id="keep-mounted-modal-title" variant="h4" align="center">
                                    Edit Data
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} xl={6}>
                                <TextField
                                    required
                                    id="FirstName"
                                    label="First Name"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewFirstName(event.target.value); }}
                                    // value={props.row.firstname} // ??????????????? Create.js ?????? input ?????? 
                                    value={newfirstname} // ??????????????? Create.js ?????? input ?????? 
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
                                    onChange={(event) => { setNewLastName(event.target.value); }}
                                    // value={props.row.lastname} // ??????????????? Create.js ?????? input ?????? 
                                    value={newlastname} // ??????????????? Create.js ?????? input ?????? 
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={12} sm={6} md={6} xl={6}>
                                <TextField
                                    required
                                    id="Department"
                                    label="Department"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewDepartment(event.target.value); }}
                                    // value={props.row.department} // ??????????????? Create.js ?????? input ?????? 
                                    value={newdepartment} // ??????????????? Create.js ?????? input ?????? 
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
                                    onChange={(event) => { setNewJobTitle(event.target.value); }}
                                    // value={props.row.jobtitle} // ??????????????? Create.js ?????? input ?????? 
                                    value={newjobtitle} // ??????????????? Create.js ?????? input ?????? 
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={12} sm={4} md={4} xl={4}>
                                <TextField
                                    required
                                    id="Email"
                                    label="Email"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewEmail(event.target.value); }}
                                    // value={props.row.email} // ??????????????? Create.js ?????? input ?????? 
                                    value={newemail} // ??????????????? Create.js ?????? input ?????? 
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
                                    onChange={(event) => { setNewOfficePhoneNumber(event.target.value); }}
                                    // value={props.row.officephonenumber} // ??????????????? Create.js ?????? input ?????? 
                                    value={newofficephonenumber} // ??????????????? Create.js ?????? input ?????? 
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
                                    onChange={(event) => { setNewMobilePhoneNumber(event.target.value); }}
                                    // value={props.row.mobilephonenumber} // ??????????????? Create.js ?????? input ?????? 
                                    value={newmobilephonenumber} // ??????????????? Create.js ?????? input ?????? 
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={12} sm={4} md={4} xl={4}>
                                <TextField
                                    required
                                    id="Organization"
                                    label="Organization"
                                    size="small"
                                    // TextField ???????????? value ??? defaultValue ????????? text ????????????????????????????????????????????????????????????????????? value ????????? defaultValue ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????https ://fb.me/react-controlled-components
                                    // ?????????defaultValue ????????????useState
                                    // defaultValue="Hong Kong Information Technology"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewOrganization(event.target.value); }}
                                    // value={props.row.organization} // ??????????????? Create.js ?????? input ?????? 
                                    value={neworganization} // ??????????????? Create.js ?????? input ?????? 
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} sm={4} md={4} xl={4}>
                                <TextField
                                    required
                                    id="URLaddress"
                                    label="URL Address"
                                    size="small"
                                    // TextField ???????????? value ??? defaultValue ????????? text ????????????????????????????????????????????????????????????????????? value ????????? defaultValue ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????https ://fb.me/react-controlled-components
                                    // ?????????defaultValue ????????????useState
                                    // defaultValue="www.hkit.com.hk"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewURLaddress(event.target.value); }}
                                    // value={props.row.urladdress} // ??????????????? Create.js ?????? input ?????? 
                                    value={newurladdress} // ??????????????? Create.js ?????? input ?????? 
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
                                    onChange={(event) => { setNewAddress(event.target.value); }}
                                    // value={props.row.address} // ??????????????? Create.js ?????? input ?????? 
                                    value={newaddress}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <Stack spacing={2} direction="row" justifyContent="flex-end">
                                    <Button variant="outlined" href="#contained-buttons" onClick={handleEditClose} >
                                        Close
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        href="#contained-buttons"
                                        onClick={() => {
                                            dispatch(editVcardData({
                                                id: props.row.id, // props.row ??????id??????, ??????????????????edit ????????????
                                                firstname: newfirstname,  // newfirstnaem set ??????input
                                                lastname: newlastname,
                                                department: newdepartment,
                                                jobtitle: newjobtitle,
                                                email: newemail,
                                                officephonenumber: newofficephonenumber,
                                                mobilephonenumber: newmobilephonenumber,
                                                address: newaddress,
                                            })); handleEditClose(); return alert("Data Updated!!")
                                        }}
                                    // disabled={newlastname ? false : true}
                                    >
                                        {/* {newlastname ? "Save" : "Need newlastname"} */}
                                        Save
                                    </Button>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Box>
                </Modal>

                <Button
                    component="button"
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        dispatch(deleteVcardData({ id: props.row.id }))
                    }}
                    endIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </>
        );
    };

    RenderDate.propTypes = {
        /**
         * If true, the cell is the active element.
         */
        hasFocus: PropTypes.bool.isRequired,
        /**
         * The cell value, but if the column has valueGetter, use getValue.
         */
        value: PropTypes.instanceOf(Date),
    };

    // --------------------------------------------Button in DataGrid--------------------------------------------



    // --------------------------------------------Button in Delete--------------------------------------------



    // const deleteFunction = (params) => {

    //     // const deleteANDget = useSelector(deleteVcardDataList);

    //     // useEffect(() => {
    //     //     dispatch(deleteVcardData())
    //     // }, [])

    //     // const deleteANDget = async (id) => {
    //     //     if (window.confirm("Are you sure to delete that data?")) {
    //     //         const delResult = await Axios.delete(`http://localhost:8080/delete/${id}`);
    //     //         console.log(delResult?.data)
    //     //     }

    //     //     const getResult = await Axios.get("http://localhost:8080/data")
    //     //     console.log(getResult?.data)

    //     //     setvCardListEnglish(
    //     //         await getResult.data.filter((rec) => rec.language === "English")
    //     //     )

    //     // }
    //     // console.log(params, "i am params")
    //     // console.log(params.row.id, "i am id")


    //     return (

    //         // <Button
    //         //     component="button"
    //         //     variant="contained"
    //         //     size="small"
    //         //     style={{ marginLeft: 16 }}
    //         //     onClick={() => {deleteId(params?.row?.id)}}
    //         //     >
    //         //     Delete
    //         // </Button >

    //         <Button
    //             component="button"
    //             variant="contained"
    //             size="small"
    //             style={{ marginLeft: 16 }}
    //             onClick={() => {
    //                 // if (window.confirm("Are you sure to delete that data?")) {
    //                 // Axios.delete(`http://localhost:8080/delete/${params?.row?.id}`)

    //                 //     .then((deleteRes) => console.log(deleteRes))
    //                 //     .then(() => {
    //                 //         Axios.get("http://localhost:8080/data")
    //                 //             .then((newArr) => {
    //                 //                 console.log(newArr)
    //                 //                 setvCardListEnglish(newArr.data.filter((rec) => rec.language === "English"))
    //                 //             })
    //                 //             .then(() => {
    //                 //                 alert("Contact Delete Successfully");
    //                 //             })
    //                 //     })
    //                 //     .catch((e) => { console.log("Error!!", e) })
    //                 // }
    //                 // deleteANDget(params?.row?.id)
    //                 dispatch(deleteVcardData({ id: params.row.id }))

    //             }}
    //         >
    //             Delete
    //         </Button >

    //     );
    // };

    // --------------------------------------------Button in Delete--------------------------------------------
    const getOrganization = (language) => {
        if (language === "Chinese") {
            return "??????????????????";
        } else if (language === "English") {
            return "Hong Kong Information Technology";
        } else {
            return ""
        }
    }

    const renderOrganization = (props) => {
        const isOrgenizationInChinese = props.row.language;
        return (
            getOrganization(isOrgenizationInChinese)
        )
    }

    const columns1 = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstname', headerName: 'First name', width: 130 },
        { field: 'lastname', headerName: 'Last name', width: 130 },
        { field: 'department', headerName: 'Department', width: 250 },
        { field: 'jobtitle', headerName: 'Job Title', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'officephonenumber', headerName: 'Office Phone Number', width: 200 },
        { field: 'mobilephonenumber', headerName: 'Mobile Phone Number', width: 200 },
        { field: 'organization', headerName: 'Organization', width: 300, renderCell: renderOrganization },
        { field: 'urladdress', headerName: 'URL Address', width: 200 },
        { field: 'address', headerName: 'Address', width: 300 },
        { field: 'actions', headerName: 'Actions', width: 350, renderCell: RenderDate },
        // { field: 'edit', headerName: 'Edit', width: 200, renderCell: RenderDateOne },
        // { field: 'edit', headerName: 'Edit', width: 200, renderCell: RenderDateEdit },
        // { field: 'delete', headerName: 'Delete', width: 200, renderCell: deleteFunction },
    ];

    // const columns2 = [
    //     { field: 'id', headerName: '??????', width: 70 },
    //     { field: 'firstname', headerName: '??????', width: 130 },
    //     { field: 'lastname', headerName: '??????', width: 130 },
    //     { field: 'department', headerName: '??????', width: 250 },
    //     { field: 'jobtitle', headerName: '??????', width: 200 },
    //     { field: 'email', headerName: '??????', width: 200 },
    //     { field: 'officephonenumber', headerName: '??????????????????', width: 200 },
    //     { field: 'mobilephonenumber', headerName: '????????????', width: 200 },
    //     { field: 'organization', headerName: '??????', width: 300, renderCell: renderOrganization },
    //     { field: 'urladdress', headerName: '????????????', width: 200 },
    //     { field: 'address', headerName: '??????', width: 300 },
    //     { field: 'actions', headerName: '??????', width: 350, renderCell: RenderDate },
    // ];

    // useEffect(() => {
    //     if (namecardList?.length > 0) {
    //         setRow(namecardList.map((val, key) => { return ({ id: val.id, firstname: val.firstname }) }))
    //     }
    // }, [namecardList])

    // const rows = namecardList.map((val, key) => { return ({ id: val.id, firstname: val.firstname }) })

    // console.log("namecardList,", namecardList)




    return (
        <Container maxWidth="xl" >
            {/* --------------------------------------------eng------------------------------------------------ */}
            <Grid container >
            <Grid item xs={12}>
                {/* <Button onClick={() => { getVcardDataInEnglish() }}>
                    show
                </Button> */}
                <br />
                <Link to="/create" activeclassname="active" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" endIcon={<AddCircleIcon />} >
                        Add
                    </Button>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Typography variant='h4' align="center">
                    English vCard Record
                </Typography>
            </Grid>

            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={vcardListEnglish}
                    columns={columns1}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <br />
            {/* --------------------------------------------eng------------------------------------------------ */}



            {/* --------------------------------------------chi------------------------------------------------ */}
            {/* <Button onClick={() => { dispatch(getDataFromApi()) }}>
                show
            </Button> */}
            {/* <Grid item xs={12}>
                <Typography variant='h4' align="center">
                    Chinese vCard Record
                </Typography>
            </Grid>

            <br />
            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={vcardListChinese}
                    columns={columns2}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div> */}
            <HomeChinese />
            {/* --------------------------------------------chi------------------------------------------------ */}

            <br />
            <br />
            <br />
            <Grid item xs={12}>
                <Typography variant='h4' align="center">
                    ORCID Record
                </Typography>
            </Grid>
            <br />
            <OrcidTable />

            </Grid>
        </Container>
    );

}


export default Home;


