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
            <div>
                <TextField onChange={e => setValue(e.target.value)} value={value}/>
                <div>
                    <Button onClick={handleSave}>Create</Button>
                    <Button onClick={handleClose}>Close</Button>
                </div>
            </div>
        </Modal>
    )
}

export default SetNameModal