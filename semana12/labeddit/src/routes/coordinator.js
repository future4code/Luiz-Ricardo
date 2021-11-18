export const goToLogin = (history) => {
    history.push ("/")
}

export const goToSignUp = (history) => {
    history.push ("/cadastro")
}

export const goToFeed = (history) => {
    history.push ("/post")
}

export const goToPostDetails = (history, id) => {
    history.push (`/post/${id}`)
}