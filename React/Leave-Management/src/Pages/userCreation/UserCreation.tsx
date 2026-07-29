import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import "./UserCreation.css";

const UserCreation = () => {
  return (
    <div className="user-creation-container">
      <h2>Create New Employee</h2>

      <div className="employee-card">
        <h3>Employee Details</h3>

        <div className="employee-form">
          <Input
            label="First Name"
            name="firstname"
            type="text"
            placeholder="Enter first name"
          />

          <Input
            label="Last Name"
            name="lastname"
            type="text"
            placeholder="Enter last name"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email"
          />

          <Input
            label="Employee ID"
            name="empid"
            type="text"
            placeholder="Enter employee ID"
          />

          <Input
            label="Role"
            name="role"
            type="text"
            placeholder="Enter role"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
          />

          <Input
            label="Confirm Password"
            name="confirmpassword"
            type="password"
            placeholder="Confirm password"
          />
        </div>

        <div className="form-actions">
          <Button variant="secondary" type="button" label="Cancel" />
          <Button variant="primary"  type="button" label="Create Employee"/>
        </div>
      </div>
    </div>
  );
};

export default UserCreation;