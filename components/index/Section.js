import * as S from './Section.style';
import Link from "next/link";

const Section = ({ title , content , link }) => {
    const Content = () => (
        <S.Content>
            {content.split('\\n').map((line,index) => (
                <span key={title+index}>{line}<br/></span>
            ))}
        </S.Content>
    );

    return (
        <S.Container>
            <S.Title>
                {title}
            </S.Title>
            <Content />
            <Link href={link}>
                <S.Link>{title} 바로가기</S.Link>
            </Link>
        </S.Container>
    );
};

export default Section;
