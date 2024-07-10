interface HeadingProps {
  text: string;
}
export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h3 className="text-center text-2xl text-blue-500">{text}</h3>;
};
