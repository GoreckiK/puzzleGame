import React, {useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './AlertComponent.css'

export default function AlertComponent(props) {
    const [open, setOpen] = React.useState(props.open);

    const handleClose = () => {
        setTimeout(() => {
            setOpen(false);
        }, 5000)
    };


    useEffect(() => {
        console.log(props.timerId)
    });

    return (
        <div>
            <Dialog
                open={open}
                onEntered={handleClose}
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