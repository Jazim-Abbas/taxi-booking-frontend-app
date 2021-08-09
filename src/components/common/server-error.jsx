const ServerError = ({ error }) => {
  if (isErrorExist(error)) {
    if (Array.isArray(error.data.message)) {
      return (
        <div style={{ color: "red", border: "1px solid red" }} className="p-2">
          {error.data.message.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      );
    }

    return <p style={{ color: "red" }}>{error.data.message}</p>;
  } else {
    return null;
  }
};

export default ServerError;

function isErrorExist(error) {
  return error && error.data;
}
