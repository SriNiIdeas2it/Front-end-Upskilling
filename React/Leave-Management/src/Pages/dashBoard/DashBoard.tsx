import "./Dashboard.css"
const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="leave-card">
        <div className="leave-count">1.5</div>
        <div className="leave-title">Casual Leave</div>
      </div>

      <div className="leave-card">
        <div className="leave-count">1.5</div>
        <div className="leave-title">Sick Leave</div>
      </div>

      <div className="leave-card">
        <div className="leave-count">1.5</div>
        <div className="leave-title">Privilege Leave</div>
      </div>

      <div className="leave-card">
        <div className="leave-count">1.5</div>
        <div className="leave-title">Earned Leave</div>
      </div>
    </div>
  )
}

export default DashBoard
