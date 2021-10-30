import styled from "styled-components";
import { CardContent, Toolbar } from "@material-ui/core";

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 40vw;
`
export const CardPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid #205723;
  width: 100%;
  min-height: 20vh;
`

export const TextPost = styled.div`
  display: flex;
  justify-content: center;
`

export const ComentsPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #205723;
  margin: 5px;
  p {
    margin: 5px;
  }
`

export const CardContentStyle = styled(CardContent)`
  display: flex;
  flex-direction: column;
`