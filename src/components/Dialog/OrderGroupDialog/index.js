import Dialog from '@mui/material/Dialog';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import DialogTitle from '@mui/material/DialogTitle';

const OrderGroupDialog = (props) => {

  const { onClose, open } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      onBackdropClick={onClose}
      disableBackdropClick>
      <DialogTitle>
        <div className="container-vertical">
          <GrFormClose size={34} onClick={onClose} />
          <h2 className="bold-text-regular">Lu 's Group Order</h2>
          <p className="subtitle">
            Invite guests to add items with a shareable link. Then pay for everybody once they’re done.
          </p>
        </div>
      </DialogTitle>
    </Dialog>
  )
}

export default OrderGroupDialog