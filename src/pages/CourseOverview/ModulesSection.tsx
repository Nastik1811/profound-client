import { Button } from '@material-ui/core'
import React from 'react'
import Message from '../../components/Message'
import { IModule } from '../../types'
import ModuleBlock from './ModuleBlock'

type ModuleSectionPropsType ={
    modules: IModule[],
    onAdd: () => void,
    onEdit: (id: string) => void,
    onDelete: (id: string) => void,
}

const ModuleSection: React.FC<ModuleSectionPropsType> = ({modules, onAdd, onEdit, onDelete}) => {

    return(
        <section className="modules-section">
                    <header className="modules-section--header">
                        <span className="modules-section--title section-title">Course modules</span>
                        <Button onClick={onAdd} variant="outlined" >New module</Button>
                    </header>
                {
                    modules.length ? modules.map(m => 
                    <ModuleBlock
                        key={m.id}
                        name={m.name} 
                        onDelete={() => onDelete(m.id)}
                        onEdit={() => onEdit(m.id)}
                    >
                        
                    </ModuleBlock>)
                    :
                    <Message message="No modules created"/>
                }
            </section>
    )
}

export default ModuleSection