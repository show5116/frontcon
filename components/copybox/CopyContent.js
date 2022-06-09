import * as S from './CopyContent.style';
import CopyBtn from "./CopyBtn";
import Tooltip from "../common/Tooltip";

const CopyContent = ({ title , content }) => {

    const onClick = (event) => {
        navigator.clipboard.writeText(content)
            .then(() => console.log("복사"));
    };

    return (
      <S.Container>
          <S.ContentHeader>
              <h4>{title}</h4>
              <Tooltip
                children={(<CopyBtn onClick={onClick}/>)}
                message="copied!"
                isHover={false}
                isClick={true}
              />
          </S.ContentHeader>
          <S.ContentText
            value={content}
            readOnly={true}
          />
      </S.Container>
    );
}

export default CopyContent;
