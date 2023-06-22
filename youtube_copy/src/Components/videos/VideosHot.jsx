import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideosHot() {
  const Key = useParams();
  console.log(Key)
  return (
    <div>
      현재 검색된 정보는 {Key.keyword}
    </div>
  )
}
