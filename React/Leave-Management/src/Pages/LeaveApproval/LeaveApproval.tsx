import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import "./LeaveApproval.css";

const leaveRequests = [
  {
    id: "LR-2024-001",
    employee: "Emma Johnson",
    role: "Marketing",
    type: "Casual Leave",
    from: "25 May 2024",
    to: "27 May 2024",
    days: 3,
    status: "Pending",
  },
  {
    id: "LR-2024-002",
    employee: "Michael Smith",
    role: "Sales",
    type: "Sick Leave",
    from: "24 May 2024",
    to: "24 May 2024",
    days: 1,
    status: "Pending",
  },
  {
    id: "LR-2024-003",
    employee: "Sarah Williams",
    role: "Finance",
    type: "Earned Leave",
    from: "01 Jun 2024",
    to: "05 Jun 2024",
    days: 5,
    status: "Approved",
  },
  {
    id: "LR-2024-004",
    employee: "David Brown",
    role: "Design",
    type: "Casual Leave",
    from: "28 May 2024",
    to: "29 May 2024",
    days: 2,
    status: "Rejected",
  },
  {
    id: "LR-2024-005",
    employee: "Jessica Lee",
    role: "Human Resources",
    type: "Sick Leave",
    from: "30 May 2024",
    to: "31 May 2024",
    days: 2,
    status: "Pending",
  },
  {
    id: "LR-2024-006",
    employee: "Daniel Wilson",
    role: "Operations",
    type: "Earned Leave",
    from: "10 Jun 2024",
    to: "14 Jun 2024",
    days: 5,
    status: "Approved",
  },
];

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "approved":
      return "status-pill approved";
    case "rejected":
      return "status-pill rejected";
    default:
      return "status-pill pending";
  }
};

const LeaveApproval = () => {
  return (
    <div className="leave-approval-page">
      <div className="leave-approval-shell">
        <section className="leave-approval-header">
          <div>
            <p className="page-overline">Leave Approval</p>
            <h1 className="page-heading">Pending requests for review</h1>
            <p className="page-copy">
              Review employee leave requests, approve or reject them, and keep track of the latest team activity.
            </p>
          </div>

          <div className="header-actions">
            <Button type="button" variant="secondary" className="ghost-button" label="Filters" />
            <Button type="button" variant="primary" className="primary-button" label="Add request" />
          </div>
        </section>

        <section className="leave-approval-toolbar">
          <div className="search-box">
            <span className="search-prefix">🔎</span>
            <Input type="text" name="leaveSearch" placeholder="Search by employee name" />
          </div>

          <div className="status-tabs">
            <Button type="button" variant="secondary" className="status-tab active">
              Pending <span className="tab-badge">6</span>
            </Button>
            <Button type="button" variant="secondary" className="status-tab">
              Approved <span className="tab-badge approved">12</span>
            </Button>
            <Button type="button" variant="secondary" className="status-tab">
              Rejected <span className="tab-badge rejected">3</span>
            </Button>
            <Button type="button" variant="secondary" className="status-tab">
              All <span className="tab-badge">21</span>
            </Button>
          </div>
        </section>

        <section className="table-card">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Employee</th>
                  <th>Leave Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Days</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>
                      <div className="employee-info">
                        <strong>{request.employee}</strong>
                        <span>{request.role}</span>
                      </div>
                    </td>
                    <td>{request.type}</td>
                    <td>{request.from}</td>
                    <td>{request.to}</td>
                    <td>{request.days}</td>
                    <td>
                      <span className={getStatusClass(request.status)}>{request.status}</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <Button type="button" variant="secondary" className="icon-button" label="👁" />
                        <Button type="button" variant="secondary" className="icon-button approve" label="✓" />
                        <Button type="button" variant="secondary" className="icon-button reject" label="✕" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <p>Showing 1 to {leaveRequests.length} of {leaveRequests.length} entries</p>
            <div className="pagination-buttons">
              <Button type="button" variant="secondary" className="ghost-button" label="◀" />
              <Button type="button" variant="secondary" className="ghost-button active-page" label="1" />
              <Button type="button" variant="secondary" className="ghost-button" label="▶" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeaveApproval;
