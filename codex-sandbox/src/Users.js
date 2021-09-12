import DisplayUser from "./DisplayUser";

const Users = (props) => {
  return (
    <div className="userContainer">
      <DisplayUser user={props.user} />
    </div>
  );
};

export default Users;
