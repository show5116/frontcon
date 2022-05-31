import * as S from '../styles/pages/index.style';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setHeaderMain} from "../store/action/headerAction";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setHeaderMain());
  },[])

  return (
    <S.Container>
      <main className='main'>
        <section>
          1
        </section>
        <section>
          2
        </section>
        <section>
          3
        </section>
      </main>
    </S.Container>
  )
}

export default Home;
