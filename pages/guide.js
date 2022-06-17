import * as S from '../styles/pages/guide.style';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setHeaderGuide} from "../store/action/headerAction";
import CopyBox from "../components/copybox/CopyBox";

const HTMLExample = `<input type="checked" id="toggle"> 
<label for="toggle>
    <span class="dot"></span>
</labek>
`;

const CSSExample = `#toggle{
    display:none;
}

label{
    background: #000;
}
`;

const Guide = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setHeaderGuide());
    },[]);

    return (
        <S.Container>
            <S.AbsoluteBox>
                <CopyBox
                    HTML={HTMLExample}
                    CSS={CSSExample}
                />
            </S.AbsoluteBox>
        </S.Container>
    );
};

export default Guide;
