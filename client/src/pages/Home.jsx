
import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "../components/Header";
import AddInvoice from "../components/AddInvoice";
import Invoices from "../components/Invoices";
import { getAllInvoice } from "../services/api";
import { deleteInvoice } from "../services/api";


const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoice] = useState([]);

    useEffect(() =>{
        const getData = async () =>{
            const response = await getAllInvoice();
            setInvoice(response.data);
        }
        getData();
    }, [addInvoice])

    const toggleInvoice = () =>{
        setAddInvoice(true);
    }

    const removeInvoice = async (id) =>{
        await deleteInvoice(id);

        const updatedInvoice = invoices.filter(invoice => invoice.id != id);
        setInvoice(updatedInvoice);
    }

    return (
        <>
        <Header/>
        <Box style={{margin : 20}}>
            <Typography variant="h5">PENDING INVOICE</Typography>
            {!addInvoice && <Button
             variant="contained"
             style={{ marginTop : 20 }} 
             onClick={()=> toggleInvoice()}>ADD INVOICE</Button>
            }
           {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
            <Box>
                <Invoices 
                invoices={invoices}
                removeInvoice={removeInvoice}
                />
            </Box>
        </Box>
        </>
    )
}

export default Home;