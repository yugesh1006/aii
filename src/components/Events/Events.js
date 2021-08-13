import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import Card from '../card/Card';
import './events.css'
import { useHistory } from 'react-router';

const Events = () => {
  const history = useHistory();
    const [events, setEvents] = useState([]);
    const [toggled,setToggled]=useState(false);
  const onClick=()=>{
    setToggled((s)=>!s)
  } 
  const goHome =()=>{
    history.push('./')
  }
    const fetchEvents=async()=>{
        const {data}=await axios.get(`${url}`);
        setEvents(data);
    };

    const active = localStorage.getItem('active');
    const url =localStorage.getItem('url')
     useEffect(() => {
        if(url){
            fetchEvents();
        }//eslint-disable-next-line
    },[]);

    return ( 
        <>
        <div className="navbar">
          <h1 onClick={goHome}>
           {active}
         </h1>
         <div className="toggle">
          {
            toggled ? '':<h5 className="toggle_grid">Grid</h5>
          }
        <div onClick={onClick} className={`toggle_button ${toggled ? 'list' : 'grid'} `}>
          <div className="notch"/>
        </div>
         
          {
            toggled ? <h5 className="toggle_list">List</h5>:''
          }
         </div>
        </div>  
        <div className="event">
        {events.item &&
          events.item.map((c) => (
            <Card
              key={c.event_id}
              id={c.event_id}
              poster={c.thumb_url}
              title={c.eventname}
              date={c.start_time_display}
              venue={c.location}
              address={c.venue.full_address}
              url={c.event_url}
              toggled={toggled}
            />
          ))}
      </div>
    </>  
    );
}
 
export default Events;