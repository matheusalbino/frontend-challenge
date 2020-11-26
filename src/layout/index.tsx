export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-full metin2__background min-h-full">
      <div className="container grid grid-cols-12 gap-4 min-h-full">{children}</div>
    </div>
  );
};
