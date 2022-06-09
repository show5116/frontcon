import * as S from './CopyBox.style';
import CopyContent from "./CopyContent";

const CopyBox = ({ HTML , CSS , js }) => {

    return (
        <S.Container>
            {HTML && <CopyContent title="HTML" content={HTML} />}
            {CSS && <CopyContent title="CSS" content={CSS} />}
            {js && <CopyContent title="JavaScript" content={js}/>}
        </S.Container>
    );
};

export default CopyBox;
