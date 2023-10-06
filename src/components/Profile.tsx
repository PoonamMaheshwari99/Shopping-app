import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import PersonIcon from "@mui/icons-material/Person";
import "./Profile.css";
import { IconButton } from "@material-ui/core";

const Profile = () => {
  return (
    <div className="Profile">
      <Card className="ProfileCard" style={{ width: "18rem" }}>
        <Card.Title className="ProfileCardTitle">
          <IconButton data-testid="person-icon">
            <PersonIcon />
          </IconButton>
          User Info
        </Card.Title>

        <ListGroup className="ProfileCardList" variant="flush">
          <ListGroup.Item data-testid="name" className="profileName">
            <b>Name:</b> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Poonam
            Maheshwari
          </ListGroup.Item>
          <ListGroup.Item data-testid="age" className="profileAge">
            <b>Age:</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;23
          </ListGroup.Item>
          <ListGroup.Item data-testid="mobile" className="profileMobile">
            <b>Mobile no:</b>&nbsp; &nbsp; &nbsp;9876543210
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
export default Profile;
