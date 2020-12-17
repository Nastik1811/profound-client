import { Button, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Theme } from '@material-ui/core'
import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useState } from 'react'
import { TaskType } from '../../../types'


interface IComponentConstructorProps {
    open: boolean
    onSave: (details: ComponentDetails) => void
    onDismiss: () => void
}

export type ComponentDetails = {
    content: string,
    maxPoints: number,
    componentType: TaskType
}

const defaultDetails: ComponentDetails = {
    content: "",
    maxPoints: 0,
    componentType: "theory"
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const ComponentConstructor: React.FC<IComponentConstructorProps> = ({open, onSave, onDismiss}) => {
    const [details, setDetails] = useState(defaultDetails)
    const classes = useStyles()
    const taskTypes: TaskType[] = ["theory", "text", "sort", "single", "mult", "match"]
    
    const handleSave = () => {
        onSave(details)
        setDetails(defaultDetails)
        onDismiss()
    }
    const handleCancel = () => {
        setDetails(defaultDetails)
        onDismiss()
    }

    if(!open){
        return null
    }

    return (
    <div className="window">
        <div className="constructor-container">
            <div className="modal--header">
                    <span className="modal--title title">
                        Component constructor
                    </span>
                </div>
            <div className="constructor component-constructor">
                <FormControl >
                    <Select
                    value={details.componentType}
                    onChange={(event: React.ChangeEvent<{ value: unknown }>) => setDetails({...details, componentType: (event.target.value as TaskType)})}
                    >
                        {taskTypes.map(t => 
                                <MenuItem value={t} key={t}>{t}</MenuItem>
                            )}
                        
                    </Select>
                </FormControl>
                
                <TextField 
                    type="number"
                    name="acceptancePercantage"
                    value={details.maxPoints}
                    onChange={(e: React.ChangeEvent<{ value: unknown }>)=> setDetails({...details, maxPoints: e.target.value as number })}
                />
                
                <Editor
                    initialValue={details.content}
                    apiKey="byzib6vl77xa64lyhxnx2kkuidn62dbwndgf0l21x5adzryr"
                    init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image', 
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help'
                    }}
                    onChange={e => setDetails(data => ({...data, content:e.target.getContent() }))}
                /> 

            <div className="constructor--actions">
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>
                        Save
                    </Button>
                </div>
            </div> 
        </div>

    </div>)
}

export default ComponentConstructor

