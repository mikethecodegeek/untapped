import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserCheckins } from "../../store/checkin";
import { useParams } from "react-router-dom";
import UserCheckin from "../../components/UI/UserCheckin";

const Profile = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  // const id=4;
  const checkins = useSelector((state) => state.checkins);
  // const {user} = checkins[0]
  // const sessionUser = useSelector((state) => state.session.user);
  console.log(checkins);
  useEffect(() => {
    dispatch(getUserCheckins(name));
  }, []);
  if (!checkins) return null;

  return (
    <div>
      <h1>Profile Page</h1>
      {checkins[0] && <p>{checkins[0].User.username}</p>}
      <h2>{checkins[0].User.username}'s Recent Activity</h2>
      {checkins &&
        checkins.map((checkin) => {
          if (checkin.User && checkin.Beer && checkin.Brewery) {
            return (
              <>
                <UserCheckin
                  username={checkin.User.username}
                  beerId={checkin.Beer.id}
                  beer={checkin.Beer.name}
                  breweryId={checkin.Brewery.id}
                  brewery={checkin.Brewery.name}
                  rating={checkin.rating}
                  comment={checkin.description}
                />
              </>
            );
          }
        })}
    </div>
  );
};

export default Profile;
