import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import { removeUser } from "../redux/action";
const UserList = () => {
  const users = useSelector((state) => state.addReducer.users);
  const dispatch = useDispatch();
  return (
    <ListGroup style={{ marginTop: "20px" }}>
      {users.length > 0 ? (
        <Fragment>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div style={{ marginLeft: "auto" }}>
                <ButtonGroup>
                  <Link to={`/edit/${user.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Button
                    onClick={() => dispatch(removeUser(user.id))}
                    color="danger"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </ListGroupItem>
          ))}
        </Fragment>
      ) : (
        <h4 className="text-center">No record</h4>
      )}
    </ListGroup>
  );
};
export default UserList;
