import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  borderRadius: '3vw',
  boxShadow: 24,
  p: 4,
};

const BasicPortalModal = ({children, modalOpen, closeCallback}) => {
    const el = document.getElementById('root_modal');
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        closeCallback();
        setOpen(false);
    }
  
    useEffect(() => {
        if(modalOpen) handleOpen();
        else handleClose();
    }, [modalOpen])
  
    const BasicModal_ = () => {
        return (
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                <Fade in={open}>
                    <Box sx={style}>
                        {children}  
                    </Box>
                </Fade>
                </Modal>
            </div>
        )
    }
    

    return ReactDOM.createPortal(<BasicModal_ />, el);
}

export default BasicPortalModal;