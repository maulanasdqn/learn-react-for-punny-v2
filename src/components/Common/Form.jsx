const Form = ({ onSubmit, children }) => {
  return (
    <form
      style={{
        display: "flex",
        width: "100%",
        padding: "1rem",
        flexDirection: "column",
        gap: "2rem",
      }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
