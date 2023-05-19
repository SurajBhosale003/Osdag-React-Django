import '../app.css'
import Osdag_logo from "../assets/logo-osdag.png"
import { useNavigate } from 'react-router-dom';
function Sidebar() {

  function handleSelectChange(event) {
    const selectedOptionValue = event.target.value;
    if (selectedOptionValue === "1") {
      window.location.href = "https://osdag.fossee.in/resources/videos";
    }
    else if(selectedOptionValue === "2"){
      window.location.href = "https://www.youtube.com/channel/UCnSZ7EjhDwNi3eCPcSKpgJg";
    }
    else if(selectedOptionValue === "3"){
      window.location.href = "file:///D:/Osdag_windows_installer_v2021.02.a.a12f/Osdag_windows_installer_v2021.02.a.a12f/Osdag/ResourceFiles/html_page/_build/html/index.html";
    }
    else if(selectedOptionValue === "4"){
      window.location.href = "https://osdag.fossee.in/forum";
    }
  }
    
    const navigate = useNavigate();
  return (
    <> 
    
    <div className="sidebar-container">   
        <div className="sidebar-item-logo">
           <center> <img src={Osdag_logo} alt="Logo" height="50px" onClick={()=>navigate("/")}/></center>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/connection")}>Connection</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/tenstionMember")}>Tenstion Member</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Compression Member</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Flexural Member</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Beam-Column</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Plate Girder</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Truss</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>2D Frame</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>3D Frame</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Group Design</button>
        </div>
      </div>

            <div className="sidebar-setting">
              <select onChange={handleSelectChange}>
                <option value={"1"}>Help</option>
                <option value={"2"}>Video Tutorials</option>
                <option value={"3"}>Design Examples</option>
                <option value={"4"}>Ask Us a Question</option>
                <option value={"5"}>Check for Update</option>          
              </select>
              {/* <h5>Help</h5> */}
            
            </div>

    </>
  )
}

export default Sidebar