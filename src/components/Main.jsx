const Main = ({data}) => {
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt={data?.title || 'bg-image'} className="bgImage" />
    </div>
  );
};

export default Main;
