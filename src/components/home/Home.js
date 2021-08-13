import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import "./home.css";
import all from '../../img/all.jpeg';
import sports from "../../img/sports.jpeg";
import workshop from "../../img/workshops.jpeg";
import business from "../../img/business.jpeg";
import music from "../../img/music.jpeg";


const Home = ({setContent,content}) => {
    const img=[all,music,business,sports,workshop];
    const history = useHistory();
    const Capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const fetchAll=async()=>{
        const {data}=await axios.get("https://allevents.s3.amazonaws.com/tests/categories.json")
        setContent(data);
    };

    useEffect(() => {
        fetchAll();
        // eslint-disable-next-line
    }, []);
    
    const onClick=(c)=>{
        localStorage.setItem('active',Capitalize(c.category))
        localStorage.setItem('url',c.data)
        history.push('/events')
    };


    return ( 
        <div className="home">
        <h1 className="heading">Types of Events we Have</h1>
            <div  className="event_card">
            {content&& content.map((c,index)=>(
                <span onClick={()=>onClick(c)} key={index}>
                    <h1 className="event_name">{Capitalize(c.category)}</h1>
                    <img className="images" src={img[index]} alt="unavailble"/>
                </span>
            )) 
            }
            </div>
        </div>
    );
}
 
export default Home;