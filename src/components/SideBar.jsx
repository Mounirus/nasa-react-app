const SideBar = ({handleToggleModal}) => {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description picture</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quasi facere praesentium odit enim provident molestias quis
            voluptate iste!
          </p>
        </div>
        <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default SideBar;
