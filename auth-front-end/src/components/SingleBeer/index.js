import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getBeer } from "../../store/beer";
import { getBeerCheckins } from "../../store/checkin";
import UserCheckin from "../../components/UI/UserCheckin";
import ShowBeer from "../../components/UI/SingleBeer"

const SingleBeer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const beer = useSelector((state) => state.beers[0]);
  const checkins = useSelector((state) => state.checkins);
  // const beer = useSelector(state => state);
  console.log(checkins);
  console.log(id)

  useEffect(() => {
    dispatch(getBeer(id));
    dispatch(getBeerCheckins(id));
  }, []);

  const handleBreweryClick = (id) => {
    history.push(`/breweries/${id}`);
  };
  if (!beer || !beer.Brewery) return null;

  return (
    <div className='container'>
     
      { 
        <>
       
          <ShowBeer
            name={beer.name}
            breweryName={beer.Brewery.name}
            breweryId={beer.Brewery.id}
            type={beer.Type.name}
            abv={beer.abv}
            ibu={beer.ibu}
            description={beer.description}
            id={id}
          />
         
        </>
      }

      { checkins &&
        <div className='section'>
          <h2>Global Recent Activity</h2>
          {checkins.map((checkin) => {
              
            return (
              <div>
                <UserCheckin
                  username={checkin.User.username}
                  beerId={beer.id}
                  beer={beer.name}
                  breweryId={beer.Brewery.id}
                  brewery={beer.Brewery.name}
                  rating={checkin.rating}
                  comment={checkin.description}
                />
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default SingleBeer;
