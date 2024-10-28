import Project from '../components/Project';
import oneImage from "../assets/images/EmployeeTracker.png"

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project title="Employee Tracker" imageUrl={oneImage} deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/EmployeeTracker" />
      <Project title="README.md Generator" imageUrl="/images/ReadMeGenerator.png" deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/ReadMeGenerator" />
      <Project title="Vehicle Builder" imageUrl="/images/VehicleBuilder.png" deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/VehicleBuilder" />
      <Project title="Movie Database" imageUrl="/images/MovieDatabase.png" deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/MovieDatabase" />
      <Project title="Prework Study Guide" imageUrl="/images/PreWorkStudyGuide.png" deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/prework-study-guide" />
      <Project title="Weather Dashboard" imageUrl="/images/WeatherDashboard.png" deployedUrl="_blank" githubUrl="https://github.com/EthanForrestCarr/WeatherDashboard" />
    </section>
  );
}

export default Portfolio;