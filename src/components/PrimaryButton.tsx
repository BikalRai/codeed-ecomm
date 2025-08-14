interface ButtonPropType {
  text: string;
}

const PrimaryButton = ({ text }: ButtonPropType) => {
  return (
    <button className="bg-primary text-white rounded-2xl transition hover:bg-text">
      {text}
    </button>
  );
};

export default PrimaryButton;
