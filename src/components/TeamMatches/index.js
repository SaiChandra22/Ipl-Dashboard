import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";
import "./index.css";

class TeamMatches extends Component {
  state = { teamMatches: {}, isLoading: true };

  componentDidMount() {
    this.getTeamMatches();
  }

  convertSnakeToCamel = (match) => ({
    umpires: match.umpires,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
    id: match.id,
    date: match.date,
    venue: match.venue,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  });

  getTeamMatches = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
    const data = await response.json();
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.convertSnakeToCamel(data.latest_match_details),
      recentMatches: data.recent_matches.map((eachMatch) =>
        this.convertSnakeToCamel(eachMatch)
      ),
    };
    this.setState({ teamMatches: formattedData, isLoading: false });
  };

  renderTeamDashboard = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { teamMatches } = this.state;
    const { teamBannerUrl, latestMatchDetails, recentMatches } = teamMatches;
    return (
      <div className={`team-dashboard-container ${id}-bg-color`}>
        <img className="team-banner" src={teamBannerUrl} alt="team banner" />
        <h1 className="latest-matches">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-cards-list">
          {recentMatches.map((eachMatch) => (
            <MatchCard key={eachMatch.id} recentMatchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <TailSpin type="Oval" color="#ffffff" height={50} width={50} />
    ) : (
      this.renderTeamDashboard()
    );
  }
}

export default TeamMatches;
