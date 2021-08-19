export const ShowTime = (props) => {
  const { minutes, hours, theme, onClick, month } = props;
  const checkMonth = () => {
    if (month === 12 || (month >= 1 && month <= 2)) return "winter";
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "autumn";
    console.log(month);
  };

  return (
    <section className={"time-box " + theme} onClick={onClick}>
      <h2>
        {hours}:{minutes < 10 ? "0" + minutes : minutes}
      </h2>
      <img src="../assets/img/seasons.png" className={'weather-img ' + checkMonth()} />
    </section>
  );
};
