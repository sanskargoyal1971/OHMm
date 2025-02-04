import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets.js'
import BreathingModel from '../BreathingModel/BreathingModel.jsx'

const Sidebar = () => {
    const[extended,setExtended] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const handleModalShow = () => setShowModal(true); 
    const handleModalHide = () => setShowModal(false);

    //const [showExercise, setShowExercise] = useState(false);

    return (
      <div className='sidebar'>
          <div className="top">
              <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu} alt="" />
              <div className="new-chat">
  
                  <img src={assets.plus_icon} alt="" />
                 {extended? <p>
                      New Chat
                  </p>:null}
              </div>
              {extended?
              <div className="recent">
              <p>
                  <p className="recent-title">
                      Recent
                  </p>
                  <div className="recent-entry">
                      <img src={assets.message_icon} alt="" />
                      <p>
                          Feeling sad?...
                      </p>
                  </div>
              </p>
          </div>
          :null
          }
      
          </div>
          <div className="bottom">
              <div className="bottom-item recent-entry" 
              // onClick={() => setShowExercise(!showExercise)}>
              onClick={handleModalShow}>
                  <img src={assets.question_icon} alt="" />
                  {extended?<p>
                      Quotes
                  </p>:null}
              </div>
  
            
              <div className="bottom-item recent-entry">
                  <img src={assets.history_icon} alt="" />
                  {extended?<p>
                      Activity
                  </p>:null}
              </div>
              <div className="bottom-item recent-entry">
                  <img src={assets.settings} alt="" />
                  {extended?<p>
                      Settings
                  </p>:null}
              </div>
              
          </div>
       

<BreathingModel
        show={showModal} 
        onHide={handleModalHide}
      />
    
    </div>
  );
};

export default Sidebar;
