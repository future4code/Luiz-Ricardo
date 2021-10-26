import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path="/post">
                    <FeedPage />
                </Route>
                <Route exact path="/post/:id">
                    <PostDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router