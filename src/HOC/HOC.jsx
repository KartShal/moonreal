import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const withRedirect = (WrappedPage) => {
    const Page = (props) => {
        const navigate = useNavigate();
        const isAuth = localStorage.getItem('user');
        useEffect (() => {
            if (isAuth === null) {
                (navigate('/login'))
            }
        }, [isAuth])
        return <WrappedPage {...props}/>
    };
    return Page
};