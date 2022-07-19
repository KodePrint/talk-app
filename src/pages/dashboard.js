import HeaderBar from "containers/HeaderBar";
import Wrapper from "containers/Wrapper";
import styles from "../styles/dashboard.module.scss";

const dashboard = () => {
  return (
    <Wrapper>
      <div className={styles.main}>
        <div className="left">
          <HeaderBar />
          <div className={styles.roomList}>
            <ul>
              <li>
                <img src="https://i.pravatar.cc/150?u=car" alt="Img" />
                <div>
                  <div className="top">
                    <p>Name Room</p>
                    <span>time</span>
                  </div>
                  <div>
                    <span>Last Msj</span>
                    <i>3</i>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://i.pravatar.cc/150?u=dog" alt="Img" />
                <div>
                  <div className="top">
                    <p>Name Room</p>
                    <span>time</span>
                  </div>
                  <div>
                    <span>Last Msj</span>
                    <i></i>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://i.pravatar.cc/150?u=plaine" alt="Img" />
                <div>
                  <div className="top">
                    <p>Name Room</p>
                    <span>time</span>
                  </div>
                  <div>
                    <span>Last Msj</span>
                    <i></i>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://i.pravatar.cc/150?u=tree" alt="Img" />
                <div>
                  <div className="top">
                    <p>Name Room</p>
                    <span>time</span>
                  </div>
                  <div>
                    <span>Last Msj</span>
                    <i></i>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://i.pravatar.cc/150?u=ethernet" alt="Img" />
                <div>
                  <div className="top">
                    <p>Name Room</p>
                    <span>time</span>
                  </div>
                  <div>
                    <span>Last Msj</span>
                    <i>2</i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="chat">
            Chat
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default dashboard;