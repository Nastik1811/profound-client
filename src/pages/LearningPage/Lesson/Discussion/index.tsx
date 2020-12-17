import { Button, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Loader from '../../../../components/Loader'
import Message from '../../../../components/Message'
import { AuthContext } from '../../../../context/auth'
import { useHttp } from '../../../../hooks/http.hook'
import { baseUrl } from '../../../../routes'
import { Comment } from '../../../../types'


type DiscussionProps = {
    componentId: string,
    comments: Comment[],
    onAddComment: (text: string) => void
}

const Discussion: React.FC<DiscussionProps> = ({componentId, comments, onAddComment}) => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp(token)

    const [text, setText] = useState("")
    const onSend = async () => {
        try{
            await request(`${baseUrl}/api/course/comments`, 'POST', {
                componentId, text
            })
            onAddComment(text)
            setText("")
        }catch (e){
            console.log(e.message)
        }
    }

    return(
        <section className="discussion-section">
            <header className="section-header">
                <h3 className="component-title">Disscuss</h3>
            </header>
            <div >
                            <TextField placeholder="Enter comment" value={text} onChange={e => setText(e.target.value)}/>
                            <Button onClick={onSend}>Leave a comment</Button>
                    </div>
            { loading ? <Loader /> :
                <div className="discussion">
                    
                    {
                        comments && comments.length > 0 ? comments.map( c => 
                            <div className="comment"> 
                                    <span className="">{`${c.user.firstname} ${c.user.lastname}`}</span>
                                    <p>{c.text}</p>
                                </div> 
                            
                            ):
                            <Message message="No comments yet"/>
                    }
                    
                </div>
            }
        </section>
    )
}

export default Discussion