import { FC } from "react";

import { Container } from "./styles";

interface BulletProps {
  isActive?: boolean;
}

export const Bullet: FC<BulletProps> = ({ isActive }) => {
  return <Container isActive={isActive} />;
};
