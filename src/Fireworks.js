import { Fireworks } from "@fireworks-js/react";

const Fire = () => {
  return (
    <div className="fireworks">
      <Fireworks
        options={{
          rocketsPoint: {
            min: 2,
            max: 100,
          },
        }}
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "transparent",
          zIndex: 10,
          margin: '20px',
        }}
      />
    </div>
  );
};

export default Fire;