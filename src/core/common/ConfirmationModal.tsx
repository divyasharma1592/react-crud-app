import React from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const ConfirmModal = (props: any) => {
  const { content, open, onConfirm } = props;

  return (
    <Dialog
      open={open}
      aria-labelledby="dialog-title"
    >
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onConfirm();
          }}
          color="primary"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;