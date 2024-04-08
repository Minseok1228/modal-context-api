import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Modal from "../../components/Modal";
//Context API 사용

//  1. 만든다 => createContext
type ModalContextValue = {
  open: (modalElement: React.ReactElement) => void;
  close: () => void;
};
const initialValue: ModalContextValue = {
  open: () => {},
  close: () => {},
};
const ModalContext = createContext<ModalContextValue>(initialValue);

//  2. 사용한다 -> useContext
export const useModal = () => useContext(ModalContext);

//  3. 범위를 정해서 값을 내려준다 -> Provider, value 사용
export function ModalProvider({ children }: { children: React.ReactNode }) {
  // const [isModalVisible, setIsModalVisible] = useState<boolean>(false); 모달 자체를 보여줌 이걸 바꿈
  // const open = () => setIsModalVisible(true);
  // const close = () => setIsModalVisible(false);
  const [modal, setModal] = useState<React.ReactElement | null>(null);
  //모달 위 모달 중첩모달 하나씩 없애기까지!????
  const open: ModalContextValue["open"] = useCallback(
    (modalElement) => setModal(modalElement),
    []
  ); //타입지정시 [""]이걸로
  const close: ModalContextValue["close"] = useCallback(
    () => setModal(null),
    []
  );
  // const value: ModalContextValue = {
  //   //이게 리렌더링 될 때 마다 새로운 객체가 선언됨 => 홈페이지가 리렌더링됨
  //   open,
  //   close,
  // };
  const value: ModalContextValue = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close] //의존배열에 open이랑 close 넣어야함 근데 넣으면 또 리렌더링됨 => 이것도 메모이제이션
  );
  console.log("나 모달프로바이더, 리렌더링");
  return (
    <ModalContext.Provider value={value}>
      {children}
      {/**모달이 모달provider안에 있어서 문제가됨 */}
      {/* {isModalVisible && <Modal>blabla</Modal>} */}
      {/* {isModalVisible && 동적으로 보여주고 싶은 모달이 위치해야 함 */}
      {/* {isModalVisible && <Modal>blabla</Modal>} */}
      {modal}
    </ModalContext.Provider>
  );
}

/**
 * children의 타입 reactnode
 * label의 타입 string
 */
