import React from "react";
import Page from "../../components/Page";
import Button from "../../components/Button";
import { useModal } from "../../contexts/ModalContext";
import KoreanModal from "../../components/KoreanModal";
import EnglishModal from "../../components/EnglishModal";

//리렌더링이 발생하는 조건 3 가지
// 1. state가 변경될 때 리렌더링
// 2. 부모로 부터 전달된 props가 변경되었을 떄
// 3. 부모컴포넌트가 리렌더링 될 때 자식 컴포넌트도 리렌더링 (이걸 피하고 싶을 때 쓰는게 React.memo())
function HomePage() {
  const modalContextValue = useModal(); //open과 close때 마다 ModalProvider가 리렌더링되며 value(객체)가 새로 만들어짐=>홈페이지 리렌더링

  //KoreanModal => 함수형 컴포넌트 / <KoreanModal/> => Element  KoreanModal 컴포넌트를 사용해서 <KoreanModal/> Element를 여러개 만듬!@
  // const handleClickKoreanModalButton = () => open(KoreanModal);  <==이거는 에러남 why element를 넣어야하는데 component를 넣어서
  const handleClickKoreanModalButton = () =>
    modalContextValue.open(<KoreanModal />);
  const handleClickEnglishModalButton = () =>
    modalContextValue.open(<EnglishModal />);
  console.log("나 홈페이지, 리렌더링 됨"); //modalContextValue라는 객체가 매번 새로만들어짐
  return (
    <Page>
      <div className="grow flex flex-col items-center justify-center gap-y-20">
        <h1 className="font-bold text-4xl"> Context API 로 모달서비스</h1>
        <div className="flex items-center gap-x-5">
          <Button
            onClick={handleClickKoreanModalButton}
            className="bg-gray-900"
          >
            한국어 모달 띄우기
          </Button>
          <Button
            onClick={handleClickEnglishModalButton}
            className="bg-red-500"
          >
            Open English Modal
          </Button>
          {/* <Button className="bg-sky-500">버튼 3</Button> */}
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
