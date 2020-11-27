export const Modal: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 grid grid-cols-12 gap-4 content-center">
      <div className="col-span-full md:col-start-4 md:col-end-10 lg:col-start-5 lg:col-end-9 p-4 border-b-2 border-primary-light bg-gray">
        {children}
      </div>
    </div>
  );
};
