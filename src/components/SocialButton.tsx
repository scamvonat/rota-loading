type Props = {
  icon: string;
  to: string;
};

const SocialButton = (props: Props) => {
  return (
    <a href="" className="social-button">
      <img src={props.icon} alt="" />
    </a>
  );
};

export default SocialButton;
