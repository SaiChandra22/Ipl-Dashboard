import "./index.css";

const MatchCard = (props) => {
  const { recentMatchDetails } = props;
  const { result, competingTeamLogo, competingTeam, matchStatus } =
    recentMatchDetails;
  const matchStatusClassName =
    matchStatus === "Won" ? "match-won" : "match-lost";
  return (
    <li className="match-card">
      <img
        className="opposite-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="opposite-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  );
};

export default MatchCard;
