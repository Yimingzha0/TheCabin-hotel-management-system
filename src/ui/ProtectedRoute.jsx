import styled from "styled-components";
import {useUser} from "../services/useUser.js";
import Spinner from "./Spinner.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const FullPage = styled.div`
  height: 100vh;
  background: var(--color-grey-50);
  justify-content: center;
  display: flex;
  align-items: center;
`
export default function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const {user, isLoading,isAuthenticated,fetchStatus } = useUser();
    useEffect(() => {
        if(!isAuthenticated && !isLoading && fetchStatus!=="fetching") {
            navigate("/login");
            return;
        }
    },[isAuthenticated, isLoading, navigate, fetchStatus]);

    if (isLoading) return <FullPage><Spinner/></FullPage>;

    return children;
}