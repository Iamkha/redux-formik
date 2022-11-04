import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/Hobbylist';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {};
const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  const newId = randomNumber();

  const handleAddhobbyClick = (e) => {
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="home-page">
      <h1>REDUX HOOKS _ Home Page</h1>
      <button onClick={handleAddhobbyClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        onHobbyClick={handleHobbyClick}
        activeId={activeId}
      ></HobbyList>
    </div>
  );
}
export default HomePage;
