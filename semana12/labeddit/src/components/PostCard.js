import React from "react"
import { useHistory } from "react-router-dom"
import { goToPostDetails } from "../routes/coordinator"
import { PostContainer, CardPost, TextPost, CommentsPost, CardContentStyle } from "./styled"
import { Button, CardActionArea } from "@material-ui/core"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"


const PostCard = (props) => {

    const history = useHistory()   

    return (
        <PostContainer>
            <CardPost>
                <CardActionArea onClick={() => goToPostDetails (history, props.postId)}>
                    <CardContentStyle>
                        <b><h2>{props.username}</h2></b>
                        <h4>{props.title}</h4>
                        <TextPost>{props.text}</TextPost>
                    </CardContentStyle>
                </CardActionArea>
                <CommentsPost>
                    <div>
                        {(props.userVote === 1) ? 
                        (<Button onClick={()=> props.like (props.postId, props.userVote)}> 
                            <ArrowUpwardIcon color={"secondary"}/>
                        </Button>)
                        :(
                        <Button onClick={()=> props.like (props.postId, props.userVote)}> 
                            <ArrowUpwardIcon />
                        </Button>)}
                        {props.votesCount}
                        {(props.userVote === -1) ?
                        (<Button onClick={()=> props.deslike (props.postId, props.userVote)}>
                            <ArrowDownwardIcon color={"secondary"}/>
                        </Button>)
                        :(
                        <Button onClick={()=> props.deslike (props.postId, props.userVote)}>
                            <ArrowDownwardIcon />
                        </Button>)}
                    </div>
                    <p>
                        {props.commentsCount} Comentários
                    </p>
                </CommentsPost>
            </CardPost>
        </PostContainer>
    )
}

export default PostCard