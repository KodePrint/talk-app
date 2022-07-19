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
                    <div>
                      <i>3</i>
                      <i>V</i>
                    </div>
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
                    <div>
                      <i>3</i>
                      <i>V</i>
                    </div>
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
                    <div>
                      <i>3</i>
                      <i>V</i>
                    </div>
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
                    <div>
                      <i>3</i>
                      <i>V</i>
                    </div>
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
                    <div>
                      <i>3</i>
                      <i>V</i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className={styles.chatBar}>
            <div className="chatInfo">
              <picture>
                <img src="https://i.pravatar.cc/150?u=car" alt="Img" />
              </picture>
              <div>
                <p>Chats</p>
                <p>Inline: <b>5</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default dashboard;