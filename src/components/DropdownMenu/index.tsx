import clsx from 'clsx'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

type DropdownMenuProp = {
    title: string,
    children: React.ReactNode
}

const DropdownMenu: React.FC<DropdownMenuProp> = ({title, children}) => {
    const [hidden, setHidden] = useState<boolean>(true)

    return(
        <div className="dropdown" onClick={() => setHidden(state => !state)}>
            {title}
            <span className={clsx("dropdown-icon", {"collapsed": !hidden})}>
                <ArrowDropDownIcon/>
            </span>
            <div className={clsx("dropdown-body", {"hidden": hidden})} >
                {children}
            </div>
        </div>
    )
}

export default DropdownMenu