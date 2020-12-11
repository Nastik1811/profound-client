import { Button, Modal, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export type SetNameModalPropsType = {
    open: boolean,
    onDismiss: () => void,
    onSave: (value: string) => void
}

const SetNameModal: React.FC<SetNameModalPropsType> = ({open, onSave, onDismiss}) => {
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
                        Give a name!
                    </span>
                </div>
                <div className="modal--content">
                        <TextField 
                            onChange={e => setValue(e.target.value)} 
                            value={value}
                            label="Name"
                            />
                </div>
                <div className="modal--actions">
                        <Button onClick={handleSave}>Create</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </div>
            </div>
        </Modal>
    )
}

export default SetNameModal