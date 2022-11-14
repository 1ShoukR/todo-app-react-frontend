import React from 'react';
import { useSelector } from 'react-redux';
import ToDoListInfo from './ToDoListInfo';
import '../css/toDoListCard.css';
const ToDoListCard = () => {
	const globalData = useSelector((state) => state.toDo);
	return (
		<div className="toDoCardWrapper">
			{globalData?.map((item) => {
				return (
					<div key={item.id}>
						<ToDoListInfo item={item} globalData={globalData} />
					</div>
				);
			})}
		</div>
	);
};

export default ToDoListCard;
