import { Button, Modal, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export type MessageModalProps = {
    open: boolean,
    onDismiss: () => void,
    onSave: (value: string) => void
}

const MessageModal: React.FC<MessageModalProps> = ({open, onSave, onDismiss}) => {
    const [value, setValue] = useState<string>("")

    const handleSave = () => {
        onSave(value)
        setValue("")
    }

    const handleClose = () => {
        onDismiss()
        setValue("")
    }

    return(
        <Modal open={open}>
            <div className="modal">
                <div className="modal--header">
                    <span className="modal--title title">
                        Are you sure to reject that course?
                    </span>
                </div>
                <div className="modal--content">
                        <TextField 
                            onChange={e => setValue(e.target.value)} 
                            value={value}
                            label="Enter a message"
                            />
                </div>
                <div className="modal--actions">
                        <Button onClick={handleSave} color="secondary">Confirm</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </div>
            </div>
        </Modal>
    )
}

export default MessageModal