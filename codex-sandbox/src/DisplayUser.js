const DisplayUser = (props) => {
  return (
    <div className="userInfo">
      Hello {props.user.name}! Happy {props.user.age} birthday!{" "}
    </div>
  );
};

export default DisplayUser;
