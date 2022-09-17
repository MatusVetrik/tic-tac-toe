interface Props {
  restartGame: () => void;
}

const Header = ({restartGame}: Props) => {
  return (
    <div>
      <h1> Tic Tac Toe</h1>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default Header;
