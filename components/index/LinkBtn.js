import * as S from './LinkBtn.style';
import Link from "next/link";

const LinkBtn = ({ text , link }) => {
    return (
        <S.Container>
            <Link href={link}>
                <S.LinkText>{text}</S.LinkText>
            </Link>
        </S.Container>
    );
}

export default LinkBtn;
