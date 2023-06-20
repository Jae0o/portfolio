import React, { useState } from 'react'
import DayBoxList from './List/DayBoxList';
import AddListButton from './List/AddListButton';
import { v1 as uuidV1 } from 'uuid';
import styles from "../../../CSS/Planner/AppDayList.module.css";


export default function AppDayList() {

  // ------------------------------------ Day

  const [DayList, setDayList] = useState(DefaultDaylist);


  // ----- Add Day DropDown List Handler
  const UpdateDayFunction = (SaveDay) => {
    if (!DayList.some((e) => e.Day === SaveDay)) {
      setDayList([...DayList, { id: uuidV1(), Day: SaveDay }])
    } else {
      alert("리스트에 동일한 Category가 존재합니다.");
    }
  };

  // ----- Dele Day DropDown List Handler
  const DeleteDay = (e) => {
    if (DayList.some((day) => day.Day === e)) {
      const filter = DayList.filter((day) => day.Day !== e);
      setDayList([...filter]);
    } else {
      alert("리스트에 일치하는 항목이 없습니다.")
    }
  };


  // ------------------------------------ Category


  const [CategoryList, setCategoryList] = useState(DefaultCategoryList);
  const [FilterCategoryList, setFilterCategoryList] = useState(DefaultFilter);

  // ----- Add  Category DropDown List Handler
  const UpdateCategoryFcuntion = (SaveData) => {
    if (!CategoryList.some((e) => e.category === SaveData.trim())) {
      setCategoryList([...CategoryList, { id: uuidV1(), category: SaveData.trim() }])
      setFilterCategoryList([...FilterCategoryList, SaveData]);
    } else {
      alert("리스트에 동일한 Category가 존재합니다.");
    }
  };

  // ----- Delete Category DropDown List Handler
  const DeleteCategory = (e) => {
    if (CategoryList.some((cate) => cate.category === e)) {
      const filter = CategoryList.filter((cate) => cate.category !== e);
      setCategoryList([...filter]);
      const filtered = FilterCategoryList.filter((data) => data !== e)
      setFilterCategoryList([...filtered]);
    } else {
      alert("리스트에 일치하는 항목이 없습니다.")
    }
  };

  // ------------------------------------ Location

  const [LocationList, setLocationList] = useState(DefaultLocationList);
  const [FilterLocationList, setFilterLocationList] = useState(DefaultLocation);


  // ----- Add  Location DropDown List Handler
  const UpdateLocationFunction = (SaveData) => {
    if (!LocationList.some((e) => e.Location === SaveData)) {
      setLocationList([...LocationList, { id: uuidV1(), Location: SaveData }])
      setFilterLocationList([...FilterLocationList, SaveData]);
    } else {
      alert("리스트에 동일한 Location이 존재합니다")
    }
  };


  // ----- Delete Location DropDown List Handler
  const DeleteLocation = (e) => {
    if (LocationList.some((local) => local.Location === e)) {
      const filter = LocationList.filter((local) => local.Location !== e);
      setLocationList([...filter]);
      const filtered = FilterLocationList.filter((local) => local !== e);
      setFilterLocationList([...filtered]);
    } else {
      alert("리스트에 일치하는 항목이 없습니다.")
    }
  };

  // ------------------------------------ List


  const [List, setList] = useState(TripList);

  const AddList = (e) => { setList([...List, e]); }
  const DeleteList = (e) => {
    const Filter = List.filter((list) => list.id !== e);
    setList([...Filter]);
  };


  // ------------------------------------- Return

  return (
    <article className={styles.MainBox}>
      <AddListButton UpdateList={AddList}
        // Day Props
        PushDay={UpdateDayFunction} DayList={DayList} DeleteDay={DeleteDay}
        // Category Props
        PushCategory={UpdateCategoryFcuntion} CategoryList={CategoryList} DeleteCategory={DeleteCategory}
        // Location Props
        PushLocation={UpdateLocationFunction} LocationList={LocationList} DeleteLocation={DeleteLocation}
      />

      <div className={styles.CutLine}></div>

      <DayBoxList list={List} UploadDelete={DeleteList} DayList={DayList}
        FilterCategoryList={FilterCategoryList} FilterLocationList={FilterLocationList} />
    </article>
  )
};




const TripList = [{
  id: 2,
  Day: "1",
  Todo: "할일",
  StartTime: "15:00",
  EndTime: "17:00",
  Location: "장소",
  Category: "Tour",
  Etc: "기타 등등..."
}];

const DefaultDaylist = [
  {
    id: "Default key",
    Day: "Day 입력"
  },
  {
    id: "1",
    Day: "1"
  }
];
const DefaultCategoryList = [
  {
    id: "Default key",
    category: "카테고리 입력"
  },
  {
    id: "1",
    category: "Tour"
  },
  {
    id: "2",
    category: "Activity"
  },
];

const DefaultFilter = ["Tour", "Activity"]

const DefaultLocationList = [
  {
    id: "Default key",
    Location: "장소 입력"
  },
  {
    id: "1",
    Location: "test1"
  },
  {
    id: "2",
    Location: "test2"
  }
];

const DefaultLocation = ["test1", "test2"]