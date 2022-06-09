import * as S from './Header.style';
import Link from "next/link";
import {useSelector} from "react-redux";

const Header = () => {

    const headState = useSelector((state)=>state.headerReducer);

    return (
        <S.Container
            headState={headState.headState}
        >
            <div
                className='header-nav'
            >
                <h1><Link href='/'>FrontCON</Link></h1>
                <nav>
                    <ul>
                        <li><Link
                            href='/guide'
                        >
                            <S.Menu>Guide</S.Menu>
                        </Link></li>
                        <li><Link
                            href='/icon'
                        >
                            <S.Menu>Icon</S.Menu>
                        </Link></li>
                        <li><Link
                            href='/login'
                        >
                            <S.LoginBtn>Login</S.LoginBtn>
                        </Link></li>
                    </ul>
                </nav>
            </div>
            {headState.headState === "main" && (
                <S.HeaderContent>
                    세상의 모든 UI<br/>
                    Front CON에서 시작하세요.
                </S.HeaderContent>
            )}
            {headState.headState === "guide" && (
                <S.HeaderContent>
                    Copy & Paste
                    두가지로 모든 기능을 경험할 수 있습니다.
                </S.HeaderContent>
            )}
        </S.Container>
    );
};

export default Header;
