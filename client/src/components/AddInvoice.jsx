import { Box, TextField, Typography, Button, styled } from "@mui/material"
import { useState } from "react";
import { saveInvoice } from "../services/api";

const Component = styled(Box)({
    marginTop : 20,
    '&>p' : {
        fontsize : 26, 
        marginBottom : 10
    },
    '&>div>div' : {
        marginRight : 25, 
    } 
})

const defaultObj = {
    vendor : '', 
    product : '', 
    amount : 0,
    date : '',
    status : 'pending'
}

const AddInvoice = ({setAddInvoice}) =>{

    const [invoice, setInvoice] = useState(defaultObj);

    const onValueChange = (e) =>{
        setInvoice({ ...invoice, [e.target.name] : e.target.value});
    }

    const addNewInvoice = async() =>{
       await saveInvoice({...invoice, amount: Number(invoice['amount'])});
       setAddInvoice(false);
    }

    return(
       <Component>
       <Typography>ADD INVOICE</Typography>
       <Box>
        <TextField variant="standard" placeholder="Vendor's name" onChange={(e) => onValueChange(e)} name="vendor"/>
        <TextField variant="standard" placeholder="Product" onChange={(e) => onValueChange(e)} name="product"/>
        <TextField variant="standard" placeholder="Amount" type="Number" onChange={(e) => onValueChange(e)} name="amount"/>
        <TextField variant="standard" placeholder="Date of Purchase" type="Date"onChange={(e) => onValueChange(e)} name="date"/>
        <Button variant="contained" style={{marginLeft : 40}} onClick={() => addNewInvoice()}> ADD INVOICE</Button>
        </Box>
       </Component>
    )
}

export default AddInvoice;