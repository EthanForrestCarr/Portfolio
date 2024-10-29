import Project from '../components/Project';
import employeeTracker from "../assets/images/EmployeeTracker.png"
import readMeGenerator from "../assets/images/ReadMeGenerator.png"
import vehicleBuilder from "../assets/images/VehicleBuilder.png"
import movieDatabase from "../assets/images/MovieDatabase.png"
import preworkStudyGuide from "../assets/images/PreWorkStudyGuide.png"
import weatherDashboard from "../assets/images/WeatherDashboard.png"

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project title="Employee Tracker" imageUrl={employeeTracker} deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/EmployeeTracker" />
      <Project title="README.md Generator" imageUrl={readMeGenerator} deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/ReadMeGenerator" />
      <Project title="Vehicle Builder" imageUrl={vehicleBuilder} deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/VehicleBuilder" />
      <Project title="Movie Database" imageUrl={movieDatabase} deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/MovieDatabase" />
      <Project title="Prework Study Guide" imageUrl={preworkStudyGuide} deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/prework-study-guide" />
      <Project title="Weather Dashboard" imageUrl={weatherDashboard} deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/WeatherDashboard" />
    </section>
  );
}

export default Portfolio;