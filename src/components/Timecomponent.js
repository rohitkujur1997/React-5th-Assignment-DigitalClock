import React,{useState} from "react";
import './Timecomponent.css';

const Timecomponent = props =>{

    let time= new Date().toLocaleTimeString();
    let date= new Date().toLocaleDateString();
  
    const [ctime,setCtime] = useState(time);
    const [cdate,setCdate] = useState(date);
  
    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
      if(props.switch){
        date = new Date().toLocaleDateString();
        setCdate(date);
      }
    };

    setInterval(UpdateTime,1000);
    return(
        
        <div class="circle">
        <div class="circle__inner">
          <div class="circle__wrapper">
            <div class="circle__content">
                <p>{ctime}</p>
                <p>{"\n"}{props.switch?cdate:""}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Timecomponent;