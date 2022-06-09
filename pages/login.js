import * as S from '../styles/pages/login.style';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setHeaderLogin} from "../store/action/headerAction";
import Github from "../assets/svg/github.svg";
import color from "../styles/color";
import secretKey from '../secretKey.json';

const login = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setHeaderLogin());
        const URLSearch = new URLSearchParams(window.location.search);
        const code = URLSearch.get("code");
        if(code){
            // 여기서 서버로 토큰 보내줌
            // https://velog.io/@devjade/OAuth-authentication-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0github-%EB%A1%9C%EA%B7%B8%EC%9D%B8
        }
    },[]);

    const onClick = () => {
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${secretKey.gitLogin.ClientID}`);
    }

    return (
        <S.Container>
            <S.LoginBox
                onClick={onClick}
            >
                <S.GitLoginText>Git Login</S.GitLoginText>
                <S.GitLoginBtn>
                    Sign In With Github
                    <Github
                        width="20px"
                        height="20px"
                        fill={color.black}
                    />
                </S.GitLoginBtn>
            </S.LoginBox>
        </S.Container>
    );
}

export default login;
