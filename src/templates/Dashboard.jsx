import HaderBar from "containers/HeaderBar";

const Dashboard = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <HaderBar />
          <div className="rooms">
            <ul>
              <li>
                <img src="" alt="Img" />
                <div>
                  <p>Name Room</p>
                  <span>Last Msj</span>
                </div>
                <span>time</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default Dashboard;