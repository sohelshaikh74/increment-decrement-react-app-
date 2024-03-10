const EventHandling = () => {
  // const generateRandom = () => {
  //   console.log(Math.random());
  // };
  return (
    <>
      <button
        onClick={() => {
          console.log(Math.random());
        }}
      >
        Click!
      </button>
    </>
  );
};

export default EventHandling;
