import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserCheckins } from "../../store/checkin";
import { useParams } from "react-router-dom";
import UserCheckin from "../../components/UI/UserCheckin";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
 
  const checkins = useSelector((state) => state.checkins);
 
  console.log(checkins.length);
  useEffect(() => {
    dispatch(getUserCheckins(name));
  }, []);
  if (!checkins) return null;

  return (
    <div>
        <div className='container'>
      <div className="profileSection">
        <div className='profileInfo'>{checkins[0] && <p>{name} <span className='numCheckins'>{checkins.length} <span className='total'>TOTAL</span></span></p>}</div>
      </div>
        </div>
            
      <div className="container">
        <div className="section">
          <h2>{name}'s Recent Activity</h2>
          {checkins &&
            checkins.map((checkin) => {
              if (checkin.User && checkin.Beer && checkin.Brewery) {
                return (
                  <div className="">
                    <UserCheckin
                      username={checkin.User.username}
                      beerId={checkin.Beer.id}
                      beer={checkin.Beer.name}
                      breweryId={checkin.Brewery.id}
                      brewery={checkin.Brewery.name}
                      rating={checkin.rating}
                      comment={checkin.description}
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
