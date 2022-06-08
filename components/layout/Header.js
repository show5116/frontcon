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
                            Guide
                        </Link></li>
                        <li><Link
                            href='/icon'
                        >
                            Icon
                        </Link></li>
                        <li><Link
                            href='/login'
                        >
                            <a className='login-btn'>Login</a>
                        </Link></li>
                    </ul>
                </nav>
            </div>
            {headState.headState === "main" && (
                <div
                    className='main-page-content'
                >
                    세상의 모든 UI<br/>
                    Front CON에서 시작하세요.
                </div>
            )}
            {headState.headState === "guide" && (
                <div
                    className='guide-page-content'
                >
                    Copy & Paste
                    두가지로 모든 기능을 경험할 수 있습니다.
                </div>
            )}
        </S.Container>
    );
};

export default Header;
