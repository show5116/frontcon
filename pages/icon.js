import * as S from '../styles/pages/icon.style';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setHeaderDefault} from "../store/action/headerAction";

const icon = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setHeaderDefault());
    },[]);

    return(
        <S.Container>

        </S.Container>
    );
};

export default icon;
