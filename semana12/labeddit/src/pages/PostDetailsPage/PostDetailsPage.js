import React, {useContext} from "react"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import axios from "axios"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useParams } from "react-router-dom"
import PostCard from "../../components/PostCard"
import CommentCard from "../../components/CommentCard"
import ComentForm from "./ComentForm"
import { DetailsContaneir } from "./styled"

const PostDetailsPage = (props) => {
    
    useProtectedPage()

    const params = useParams()

    const {states, seters} = useContext (GlobalStateContext)

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
            .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((response) => { 
                seters.getPosts(response.data)  
            })
            .catch ((error) => {
                console.log(error.response.data)
            }) 
        } else if (userVote === -1) {
            axios
            .put(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((response) => {  
                seters.getPosts(response.data)      
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        } else if (userVote === 1) {
            axios
            .delete(`${BASE_URL}/posts/${id}/votes`, headers)
            .then((response) => { 
                seters.getPosts(response.data)   
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
            .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((response) => {       
            })
            .catch ((error) => {
                console.log(error.response.data)
            }) 
        } else if (userVote === 1) {
            axios
            .put(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((response) => {    
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        } else if (userVote === -1) {
            axios
            .delete(`${BASE_URL}/posts/${id}/votes`, headers)
            .then((response) => { 
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        }      
    }

    const post = useRequestData ([], `${BASE_URL}/posts`) [0]
    console.log(post)
    const postDetails = post && post.map((item) => {
        if (item.id === params.id) {
            return (
                <PostCard 
                    key={item.id}
                    postId={item.id}
                    username={item.username}
                    title={item.title}
                    text={item.body}
                    commentsCount={item.commentCount}
                    votesCount={item.voteSum} 
                    userVote={item.userVote}
                    like={like}
                    deslike={deslike}
                />
            )
        }
    })

    const [comments, getComments] = useRequestData ([], `${BASE_URL}/posts/${params.id}/comments`)
    
    const commmentsPost = comments.map((comment) => {
        return (
            <CommentCard
                key={comment.id}
                username={comment.username}
                body={comment.body}
                voteSum={comment.voteSum}
                id={comment.id}
                getComments={getComments}
                post={post}
            />
        )
    })
    
    return (
        <DetailsContaneir>
            {postDetails}
            <ComentForm />
            {commmentsPost}
        </DetailsContaneir>
    )
}

export default PostDetailsPage