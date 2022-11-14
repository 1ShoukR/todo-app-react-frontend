import React from 'react';
import { removeToDo } from '../actions/removeToDo';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { markAsComplete } from '../actions/markAsComplete';
import { useState } from 'react';
import { editToDo } from '../actions/editToDo';
import { moveLeft } from '../actions/moveLeft';
import { moveRight } from '../actions/moveRight';
import Draggable from 'react-draggable';

const ToDoListInfo = (props) => {
	console.log('this is props', props);
	const [toggleEdit, setToggleEdit] = useState(false);
	const dispatch = useDispatch();
	const handleEditToggle = () => {
		setToggleEdit(true);
	};

	return (
		<Draggable
			axis="x"
			defaultPosition={{ x: 0, y: 0 }}
			position={null}
			grid={[25, 25]}
			scale={2}>
			<div className="toDoCardContainer">
				<div>
					<h4>{props?.item?.title}</h4>
				</div>
				<div>
					<p>due date: {props?.item?.due_date}</p>
				</div>
				<div>
					<p>{props?.item?.description}</p>
				</div>
				<div>
					{props?.item?.completed ? (
						<>
							<p>Task is Complete</p>
						</>
					) : (
						<>
							<p>Task is NOT Complete</p>
						</>
					)}
				</div>
				<div>
					<div>
						<button onClick={() => markAsComplete(dispatch, props?.item)}>
							Mark as Complete
						</button>
					</div>
					<div>
						<button onClick={() => removeToDo(dispatch, props?.item)}>
							Delete Task
						</button>
					</div>
					<div>
						{toggleEdit ? (
							<>
								<form>
									<div>
										<input type="text" name="title" placeholder="Title" />
										<input
											type="text"
											name="description"
											placeholder="description"
										/>
										<input type="date" name="date" />
									</div>
									<div>
										<button
											onClick={(event) =>
												editToDo(dispatch, props?.item, event)
											}>
											Edit
										</button>
									</div>
									<div>
										<button
											onClick={(event) =>
												moveLeft(
													dispatch,
													props?.item,
													event,
													props?.globalData
												)
											}>
											Move left
										</button>
									</div>
									<div>
										<button
											onClick={(event) =>
												moveRight(
													dispatch,
													props?.item,
													event,
													props?.globalData
												)
											}>
											Move right
										</button>
									</div>
								</form>
							</>
						) : (
							<button onClick={handleEditToggle}>Want to edit this?</button>
						)}
					</div>
				</div>
			</div>
		</Draggable>
	);
};

export default ToDoListInfo;
