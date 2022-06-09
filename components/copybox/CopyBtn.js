import * as S from './CopyBtn.style';

const CopyBtn = ({onClick}) => {
    return (
      <S.Container
        onClick={onClick}
      >
          Copy!
      </S.Container>
    );
};

export default CopyBtn;
