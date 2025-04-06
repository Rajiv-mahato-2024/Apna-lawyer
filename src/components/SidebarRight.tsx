function SidebarRight() {
    return (
        <div className="sidebar-right">
            <div className="task-item">
                <input type="checkbox" id="task1" />
                <label htmlFor="task1">
                    <h3>Create welcome form</h3>
                    <p>Write code (HTML, CSS and JS) for a simple welcome form</p>
                </label>
            </div>

            <div className="task-item">
                <input type="checkbox" id="task2" />
                <label htmlFor="task2">
                    <h3>Legal Compliance</h3>
                    <p>Steps to ensure data privacy under GDPR and other regulations</p>
                </label>
            </div>

            <div className="task-item">
                <input type="checkbox" id="task3" />
                <label htmlFor="task3">
                    <h3>Contract Law</h3>
                    <p>Key clauses to review before signing an agreement</p>
                </label>
            </div>

            <div className="task-item">
                <input type="checkbox" id="task4" />
                <label htmlFor="task4">
                    <h3>Employment Law</h3>
                    <p>Understanding your rights as an employee</p>
                </label>
            </div>

            <div className="task-item">
                <input type="checkbox" id="task5" />
                <label htmlFor="task5">
                    <h3>Intellectual Property</h3>
                    <p>How to protect your patents, trademarks, and copyrights</p>
                </label>
            </div>

            <div className="task-item">
                <input type="checkbox" id="task6" />
                <label htmlFor="task6">
                    <h3>Cyber Law</h3>
                    <p>Legal consequences of online defamation and cybercrimes</p>
                </label>
            </div>

            <div className="task-item">
                <input type="checkbox" id="task7" />
                <label htmlFor="task7">
                    <h3>Tax laws in india</h3>
                    <p>Tax laws in india ....</p>
                </label>
            </div>
        </div>
    );
}

export default SidebarRight;