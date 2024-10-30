import { memo } from "react";

type Props = {
  name: string;
};

function SetKeyAccuratelyBadItem({ name }: Props) {
  console.log('render!!', name);

  return <div>{name}</div>;
}

export default memo(SetKeyAccuratelyBadItem);
