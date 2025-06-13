interface IProps {
  btnText?: string;
  btnIcons?: React.ReactNode;
  btnStyle?: React.CSSProperties;
  onClick?: () => void;
}

const ResizeButton = ({ btnText, btnIcons, btnStyle, onClick }: IProps) => {
  return (
    <button onClick={onClick} className="resize-button" style={btnStyle}>
      <span style={{ textTransform: "uppercase" }}>{btnText}</span>
      <>{btnIcons}</>
    </button>
  );
};

export default ResizeButton;
