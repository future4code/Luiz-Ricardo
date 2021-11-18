import React, { useContext } from "react"
import axios from "axios"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import PostForm from "./PostForm"
import  PostCard  from "../../components/PostCard"
import { FeedContainer } from "./styled"

const FeedPage = () => {
    
    useProtectedPage()

    const { states, seters } = useContext (GlobalStateContext)


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
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            }) 
        } else if (userVote === -1) {
            axios
            .put(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        } else if (userVote === 1) {
            axios
            .delete(`${BASE_URL}/posts/${id}/votes`, headers)
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
            .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            }) 
        } else if (userVote === 1) {
            axios
            .put(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        } else if (userVote === -1) {
            axios
            .delete(`${BASE_URL}/posts/${id}/votes`, headers)
            .then((response) => {
                seters.getPosts()
            })
            .catch ((error) => {
                console.log(error.response.data)
            })
        }      
    }
    
    const listPosts = states.posts.map((post) => {
        return (
            <PostCard 
                key={post.id}
                postId={post.id}
                username={post.username}
                title={post.title}
                text={post.body}
                commentsCount={post.commentCount}
                votesCount={post.voteSum} 
                userVote={post.userVote}
                like={like}
                deslike={deslike}
            />
        )
    })

    return (
        <FeedContainer>
            <PostForm />
            {listPosts}
        </FeedContainer>
    )
}

export default FeedPage