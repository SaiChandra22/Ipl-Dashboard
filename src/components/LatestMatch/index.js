import "./index.css";

const LatestMatch = (props) => {
  const { latestMatchDetails } = props;
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails;
  return (
    <div className="latest-match-container">
      <div className="match-summary-container">
        <div className="match-summary-text">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr />
      <div className="match-details-container">
        <p className="match-details-heading">First Innings</p>
        <p className="match-details">{firstInnings}</p>
        <p className="match-details-heading">Second Innings</p>
        <p className="match-details">{secondInnings}</p>
        <p className="match-details-heading">Man Of The Match</p>
        <p className="match-details">{manOfTheMatch}</p>
        <p className="match-details-heading">Umpires</p>
        <p className="match-details">{umpires}</p>
      </div>
    </div>
  );
};

export default LatestMatch;
