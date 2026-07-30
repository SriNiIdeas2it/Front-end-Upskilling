
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import "./LeaveRequest.css";

const LeaveRequest = () => {
  return (
    <div className="leave-request-page">
      <div className="leave-request-card">
        <div className="leave-request-header">
          <div>
            <h1 className="page-title">Apply for Leave</h1>
          </div>
        </div>

        <div className="leave-form">
          <div className="leave-form-grid">
            <Input
              label="Leave Type"
              name="leaveType"
              type="select"
              options={[
                { label: "Select leave type", value: "" },
                { label: "Casual Leave", value: "casual" },
                { label: "Sick Leave", value: "sick" },
                { label: "Earned Leave", value: "earned" },
              ]}
              required
            />

            <Input
              label="From Date"
              name="fromDate"
              type="date"
              required
              className="w-100"
            />

            <Input
              label="To Date"
              name="toDate"
              type="date"
              required
              className="w-100"
            />

            <Input
              label="Half Day"
              name="halfDay"
              type="checkbox"
            />

            <Input
              label="Reason"
              name="reason"
              type="textarea"
              placeholder="Enter reason for leave"
              rows={5}
              required
              className="reason-field"
            />
          </div>

          <div className="leave-balance-card">
            <div className="balance-item">
              <span>Casual Leave</span>
              <div className="balance-value">12 Days</div>
              <div className="balance-status">Available</div>
            </div>
            <div className="balance-item">
              <span>Sick Leave</span>
              <div className="balance-value">08 Days</div>
              <div className="balance-status">Available</div>
            </div>
            <div className="balance-item">
              <span>Earned Leave</span>
              <div className="balance-value">15 Days</div>
              <div className="balance-status">Available</div>
            </div>
          </div>

          <div className="actions-row">
            <Button variant="secondary" type="button" label="Cancel" />
            <Button variant="primary" type="button" label="Submit Request" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
