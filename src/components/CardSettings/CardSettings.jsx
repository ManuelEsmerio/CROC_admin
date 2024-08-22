import { Box, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardSettings = ({ settings }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openSettings = Boolean(anchorEl);
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handleSettings = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        handleOpenModal();
        setAnchorEl(null);
    };
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      bgcolor: 'background.paper',
      borderRadius: 5,
      boxShadow: 24,
      p: 4,
    };
  return (
    <>
            <IconButton
              id="basic-button"
              aria-label="settings"
              aria-controls={openSettings ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openSettings ? 'true' : undefined}
              onClick={handleSettings}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openSettings}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
            {
                settings.map((item, index) => {
                    return (
                        <MenuItem onClick={() => { item.handledAction(); handleClose()}} key={index}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.itemName}</ListItemText>
                        </MenuItem>
                    );
                })
            }
            </Menu>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Grid xs={12}>
                  <TextField label="Matricula" color="primary" />
                </Grid>
                <Grid xs={12}>
                  <TextField label="Matricula" color="primary" />
                  <TextField label="Matricula" color="primary" />
                  <TextField label="Matricula" color="primary" />
                </Grid>
              </Box>
            </Modal>
          </>
  )
}

export default CardSettings