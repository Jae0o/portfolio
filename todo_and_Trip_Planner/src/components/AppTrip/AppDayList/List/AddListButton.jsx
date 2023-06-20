import React, { useState } from 'react'
import { v1 as uuidV1 } from 'uuid';
import AddDropDownList from './AddDropDownList';
import { MdOutlineDownloadDone } from 'react-icons/md';
import styles from '../../../../CSS/Planner/AddListButton.module.css';



export default function AddListButton({
  UpdateList,
  PushDay, DayList, DeleteDay,
  PushCategory, CategoryList, DeleteCategory,
  PushLocation, LocationList, DeleteLocation
}) {

  // ---------------------------------------- State 
  const [Todo, setTodo] = useState('');

  const [Location, setLocation] = useState('');

  const [StartTime, setStartTime] = useState('00:00');
  const [EndTime, setEndTime] = useState('00:00');

  const [Day, setDay] = useState('1');

  const [Category, setCategory] = useState('Tour');


  const [Etc, setEtc] = useState("");

  // ---------------------------------------- Update Function
  const UpdateTodo = (e) => {
    setTodo(e);
  };
  const UpdateLocation = (e) => {
    e === "장소 입력" ? setLocation("") : setLocation(e);
  };
  const UpdateDay = (e) => {
    setDay(e)
  };
  const UpdateStartTime = (e) => {
    setStartTime(e);
  };
  const UpdateEndTime = (e) => {
    setEndTime(e);
  };
  const UpdateCategory = (e) => {
    e === "카테고리 입력" ? setCategory("") : setCategory(e)
  };
  const UpdateEtc = (e) => {
    setEtc(e);
  };

  // ---------------------------------------- ADD UpdateList Props Function

  const OnSubmit = (e) => {
    e.preventDefault();
    if (Todo.trim().length === 0) {
      return alert(" Todo 에 할일을 적으세요");
    };
    UpdateList(
      {
        id: uuidV1(),
        Day: Day,
        Todo: Todo.trim(),
        StartTime: StartTime,
        EndTime: EndTime,
        Location: Location,
        Category: Category,
        Etc: Etc.trim()
      }
    )
  }

  // ---------------------------------------- Return

  return (
    <div className={styles.MainBox}>

      <form onSubmit={OnSubmit} className={styles.formBox}>

        <p className={styles.Title}>리스트 작성</p>

        {/* 이름 예정 style.DayInput */}
        <div className={styles.ListItem}>
          <label htmlFor='DayInput'>Day </label>
          <select id="DayInput" onChange={(e) => UpdateDay(e.target.value)}>
            {DayList.map((Day) => (
              <option key={Day.id} value={Day.Day}>
                {Day.Day}</option>
            ))}x
          </select>
        </div>

        {/* 이름 예정 style.CategoryInput */}
        <div className={styles.ListItem}>
          <label htmlFor="CategoryInput">Category </label>
          <select onChange={(e) => UpdateCategory(e.target.value)}>
            {CategoryList.map((data) => (
              <option key={data.id} value={data.category}>
                {data.category}
              </option>
            ))}
          </select>
        </div>

        {/* 이름 예정 style.LocationInput */}
        <div className={styles.ListItem}>
          <label htmlFor="LocationInput">Location</label>
          <select id="LocationInput" onChange={(e) => UpdateLocation(e.target.value)}>
            {LocationList.map((location) => (
              <option key={location.id} value={location.Location}>
                {location.Location}
              </option>
            ))}
          </select>
        </div>

        {/* 이름 예정 style.TimeInput */}
        <div className={styles.ListItem}>
          <label htmlFor='StartTimeInput'>Start Time </label>
          <input className={styles.TimeInput}
            type='time' id="StartTimeInput" value={StartTime} onChange={(e) => UpdateStartTime(e.target.value)} />
        </div>
        <div className={styles.ListItem}>
          <label htmlFor='EndTimeInput'>End Time </label>
          <input className={styles.TimeInput}
            type='time' id="EndTimeInput" value={EndTime} onChange={(e) => UpdateEndTime(e.target.value)} />
        </div>

        {/* 이름 예정 style.TodoInput */}
        <div className={styles.TodoInput}>
          <label htmlFor='TodoInput'>Todo </label>
          <input className={styles.TextInput}
            id="TodoInput" type='text' onChange={(e) => UpdateTodo(e.target.value)} />
        </div>

        {/* 이름 예정 style.EtcInput */}
        <div className={styles.EtcInput}>
          <label htmlFor='EtcInput'>ETC </label>
          <input className={styles.TextInput}
            id="EtcInput" type='text' onChange={(e) => UpdateEtc(e.target.value)} />
        </div>

        <div className={styles.ButtonBox}>
          <button className={styles.SubmitButton}> 등록 <MdOutlineDownloadDone /> </button>
        </div>
      </form >

      <div className={styles.CategoryBox}>
        <p className={styles.Title}> 각종 목록 추가 </p>
        {/* Day */}
        <AddDropDownList UploadFunction={(e) => PushDay(e.trim())} name={"Day"} DeleteFunction={(e) => DeleteDay(e.trim())} />
        {/* Category */}
        <AddDropDownList UploadFunction={(e) => PushCategory(e.trim())} name={"Category"} DeleteFunction={(e) => DeleteCategory(e.trim())} />
        {/* Location */}
        <AddDropDownList UploadFunction={(e) => PushLocation(e.trim())} name={"Location"} DeleteFunction={(e) => DeleteLocation(e.trim())} />
      </div>
    </div >

  )
};