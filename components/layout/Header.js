import * as S from './Header.style';
import Link from "next/link";

const Header = () => {
    return (
        <S.Container>
            <h1><Link href='/'>FrontCON</Link></h1>
            <nav>
                <ul>
                    <li><Link
                        href='/'
                    >
                        Guide
                    </Link></li>
                    <li><Link
                        href='/'
                    >
                        Icon
                    </Link></li>
                    <li><Link
                        href='/'
                    >
                        <a className='login-btn'>Login</a>
                    </Link></li>
                </ul>
            </nav>
        </S.Container>
    );
};

export default Header;
