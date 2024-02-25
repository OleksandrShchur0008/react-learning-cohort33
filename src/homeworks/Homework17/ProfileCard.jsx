import "./styles.css";

function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        className="img-giannis"
        src="https://cdn.nba.com/teams/uploads/sites/1610612749/2022/10/2223_POTG_Cream_Artboard-4.jpg"
        alt="Giannis img"
      />
      <h1>Name: Giannis Antetokounmpo</h1>
      <h3>Profession: Professional Basketball Player</h3>
      <h3>Hair color: Black</h3>
      <h3>Height: 2,11m</h3>
      <h3>Hobby: guitar playing</h3>
    </div>
  );
}

export default ProfileCard;
