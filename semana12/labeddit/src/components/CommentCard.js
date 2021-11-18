import React, { useContext } from "react"
import axios from "axios"
import { GlobalStateContext } from "../global/GlobalStateContext"
import { BASE_URL } from "../constants/urls"
import { CommentContainer, CardComment, LikeDeslike } from "./styled"
import { Button } from "@material-ui/core"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"


const CommentCard = (props) => { 

    const { seters } = useContext (GlobalStateContext)
    
    const like = (id, userVote) => {
        
        const body = {
            direction: 1
        }

        const headers = {
            "Content-Type":"application/json",
            headers: { Authorization: localStorage.getItem ("token") }
        }

        if (userVote === null) {
            axios
            .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            }) 
        } else if (userVote === -1) {
            axios
            .put(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        } else if (userVote === 1) {
            axios
            .delete(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        }   
    }

    const deslike = (id, userVote) => {
        
        const body = {
            direction: -1
        }

        const headers = {
            "Content-Type":"application/json",
            headers: { Authorization: localStorage.getItem ("token") }
        }

        if (userVote === null) {
            axios
            .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            }) 
        } else if (userVote === 1) {
            axios
            .put(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        } else if (userVote === -1) {
            axios
            .delete(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        }      
    }

    return (
        <CommentContainer>
            <CardComment>
                <div>
                    <b><h2>{props.username}</h2></b>
                    <p>{props.body}</p>
                </div>
                <LikeDeslike>
                    {(props.userVote === 1) ? 
                    (<Button onClick={()=> like (props.postId, props.userVote)}> 
                        <ArrowUpwardIcon color={"secondary"}/>
                    </Button>)
                    :(
                    <Button onClick={()=> like (props.postId, props.userVote)}> 
                        <ArrowUpwardIcon />
                    </Button>)}
                    {props.votesCount}
                    {(props.userVote === -1) ?
                    (<Button onClick={()=> deslike (props.postId, props.userVote)}>
                        <ArrowDownwardIcon color={"secondary"}/>
                    </Button>)
                    :(
                    <Button onClick={()=> deslike (props.postId, props.userVote)}>
                        <ArrowDownwardIcon />
                    </Button>)}
                </LikeDeslike>      
            </CardComment>
        </CommentContainer>
    )
}

export default CommentCard