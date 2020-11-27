export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-full bg-metin2 overflow-y-auto">
      <div className="container grid grid-cols-12 gap-4 h-full">{children}</div>
    </div>
  );
};
