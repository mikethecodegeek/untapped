import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBrewery } from "../../store/breweries";
import { getBreweryCheckins } from "../../store/checkin";
import UserCheckin from "../../components/UI/UserCheckin";
import ShowBrewery from "../../components/UI/ShowBrewery";

const SingleBrewery = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const brewery = useSelector((state) => state.breweries[0]);
  const checkins = useSelector((state) => state.checkins);
  useEffect(() => {
    dispatch(getBrewery(id));
    dispatch(getBreweryCheckins(id));
  }, []);

  if (!brewery || !brewery.BreweryType || !checkins) return null;

  return (
    <div className="container">
      {
        <div className="beerBox section">
          <ShowBrewery
            name={brewery.name}
            breweryId={brewery.id}
            city={brewery.city}
            state={brewery.state}
            description={brewery.description}
            type={brewery.BreweryType.name}
          />
       
        </div>
      }

      {
        <div className="section">
          <h2>Global Activity</h2>
          {checkins.map((checkin) => {
            if (checkin.User.username && checkin.Beer) {
              return (
                <div>
                  <UserCheckin
                    username={checkin.User.username}
                    beerId={checkin.Beer.id}
                    beer={checkin.Beer.name}
                    breweryId={brewery.id}
                    brewery={brewery.name}
                    rating={checkin.rating}
                    comment={checkin.description}
                  />
                  {/* <p>{checkin.User.username} is drinking a {checkin.Beer.name} by {brewery.name}</p>
                                <p>Rating {checkin.rating}</p> */}
                </div>
              );
            }
          })}
        </div>
      }
    </div>
  );
};

export default SingleBrewery;
