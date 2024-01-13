type Props = {
  patch: string;
};

const PatchItem = (props: Props) => {
  return <li>{props.patch}</li>;
};

export default PatchItem;
