import * as S from '../styles/pages/guide.style';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setHeaderGuide} from "../store/action/headerAction";

const guide = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setHeaderGuide());
    });

    return (
        <S.Container>

        </S.Container>
    );
};

export default guide;
