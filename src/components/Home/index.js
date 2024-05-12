import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import TeamCard from "../TeamCard";
import "./index.css";

class Home extends Component {
  state = { iplTeamsList: [], isLoading: true };

  componentDidMount() {
    this.getIplTeamsList();
  }

  getIplTeamsList = async () => {
    const response = await fetch("https://apis.ccbp.in/ipl");
    const { teams } = await response.json();
    const formattedData = teams.map((eachTeam) => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }));
    this.setState({ iplTeamsList: formattedData, isLoading: false });
  };

  renderIplTeamsList = () => {
    const { iplTeamsList } = this.state;
    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-list-container">
          {iplTeamsList.map((eachTeam) => (
            <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="app-container">
        {isLoading ? (
          <TailSpin type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          this.renderIplTeamsList()
        )}
      </div>
    );
  }
}

export default Home;
