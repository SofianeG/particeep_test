const ProgressBar = (props) => {
  const { bgcolor, completed, unCompleted } = props;

  const containerStyles = {
    height: 20,
    width: '30%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };
  const fillerStyles2 = {
    height: '100%',
    width: ` ${unCompleted}%`,
    backgroundColor: 'blue',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
        <span style={fillerStyles2}>{`${unCompleted}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
