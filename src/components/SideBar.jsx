const SideBar = ({handleToggleModal,data}) => {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>
        <div>
          <p>Description</p>
          <p>
          {data?.explanation}
          </p>
        </div>
        <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default SideBar;
