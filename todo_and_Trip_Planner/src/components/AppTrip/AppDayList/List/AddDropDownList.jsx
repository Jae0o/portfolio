import React from 'react';
import styles from '../../../../CSS/Planner/AddDropDownList.module.css'

export default function AddDropDownList({ UploadFunction, name, DeleteFunction }) {

  const OnAdd = (e) => {
    if (e.trim().length === 0) { return alert(`${name} 에는 공백 입력이 불가능합니다. `) };
    UploadFunction(e);
  }

  const OnDelete = (e) => {
    if (e.trim().length === 0) { return alert(`제거 하려는 목록에서 리스트를 입력하세요. `) };
    DeleteFunction(e);
  }


  return (
    <div className={styles.MainBox}>
      <button className={styles.Button}
        onClick={() => {
          const ADDdata = prompt(`리스트에 추가할 ${name} 을(를) 입력하세요.`);
          // prompt 는 기본적으로 취소를 하면 null을 반환하기때문에 null 추가 방지용
          if (ADDdata === null) {
            return;
          }
          OnAdd(` ${ADDdata}`);
        }}>{name} 추가</button>

      <button className={styles.Button}
        onClick={() => {
          const DeleteData = prompt(`리스트에서 제거할 ${name} 을(를) 입력하세요.`);
          if (DeleteData === null) {
            return;
          }
          OnDelete(` ${DeleteData}`);
        }}>{name} 삭제</button>
    </div>

  )
}
