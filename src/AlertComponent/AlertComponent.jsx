import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './AlertComponent.css'

export default function AlertComponent(props) {
    const [open, setOpen] = React.useState(props.open);

    const handleClose = () => {
        props.handleCounterStop();
        setTimeout(() => {
            setOpen(false);
            props.handleSaveScore();
            props.handleNewGame();
            props.setNumberOfTilesInDock(9);
        }, 5000);
    };

    return (
        <div>
            <Dialog
                open={open}
                onEntering={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Awesome! You won!
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}