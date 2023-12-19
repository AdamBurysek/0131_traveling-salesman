import { useEffect, useState } from "react";
import CloudsImg from "../img/Clouds.webp";

const MovingClouds = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  function animationSwitch() {
    setAnimation(!animation);
  }

  useEffect(() => {
    animate();
  }, [animation]);

  useEffect(() => {
    setTimeout(animationSwitch, 50);
  }, []);

  const animate = () => {
    setTimeout(animationSwitch, 690000);
  };
  return (
    <img
      className={animation ? "clouds clouds_moving" : "clouds"}
      src={CloudsImg}
      alt=""
    />
  );
};

export default MovingClouds;
