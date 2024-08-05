import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/User/userActions";

const UserCointainer = ({ userDate, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userDate.loading ? (
    <h2>Lading .... </h2>
  ) : userDate.error ? (
    <h2>{userDate.error} </h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userDate &&
          userDate.users &&
          userDate.users.map((user) =>  <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDate: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCointainer);
