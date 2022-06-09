import * as S from './Tooltip.style';

const Tooltip = ({ children , message , isClick , isHover}) => {

    const onClick = () => {

    }

    return (
        <S.Container
            isHover={isHover}
            onClick={isClick && onClick}
        >
            {children}
            <div
                className='tooltip'
            >
                {message}
            </div>
        </S.Container>
    )
}

export default Tooltip;
