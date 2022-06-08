import * as S from '../styles/pages/index.style';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setHeaderMain} from "../store/action/headerAction";
import Section from "../components/index/Section";
import LinkBtn from "../components/index/LinkBtn";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setHeaderMain());
  },[])

  return (
    <S.Container>
      <main>
        <S.ExplainSection>
          <S.ExplainMain>
            <S.CtrlCV>
              Ctrl + C / Ctrl + V
            </S.CtrlCV>
            <S.Explanation>
              복사와 붙혀넣기 만으로 사용자의 편의성을 생각한<br/>
              편리한 ux/ui를 사용할 수 있습니다.<br/>
              아이콘,텍스트,와이어프레임등의 모든 정보들을<br/>
              한번에 사용할 수 있으며 여러 유저들과 소통하며 더 좋은<br/>
              ux/ui를 만들어 볼 수 있습니다.<br/>
              지금 시작하세요!
            </S.Explanation>
          </S.ExplainMain>
          <S.BtnContainer>
            <LinkBtn text="ICON" link="/icon"/>
            <LinkBtn text="TEXT" link="/text" />
            <LinkBtn text="WireFrame" link="/wireframe" />
            <LinkBtn text="Community" link="/community" />
          </S.BtnContainer>
        </S.ExplainSection>
        <Section
            title="Icon"
            content="input을 해치지 않는 깔끔한 label 디자인\n로딩 화면, 토글버튼 등 다양한 ICON 디자인을 경험하세요."
            link="/icon"
        />
        <Section
            title="Text"
            content="input을 해치지 않는 깔끔한 label 디자인\n로딩 화면, 토글버튼 등 다양한 ICON 디자인을 경험하세요"
            link="/text"
        />
        <Section
            title="WireFrame"
            content="input을 해치지 않는 깔끔한 label 디자인\n로딩 화면, 토글버튼 등 다양한 ICON 디자인을 경험하세요"
            link="/wireframe"
        />
      </main>
    </S.Container>
  )
}

export default Home;
