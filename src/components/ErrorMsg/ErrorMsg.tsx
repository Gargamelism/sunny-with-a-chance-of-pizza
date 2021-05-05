import './ErrorMsg.css';

interface IErrorMsg {
  msg: string;
}

function ErrorMsg({ msg }: IErrorMsg) {
  const displayMsg = `ERROR! ${msg}`;

  return (
    <>
      <div className="error">{displayMsg}</div>
    </>
  );
}

export default ErrorMsg;
