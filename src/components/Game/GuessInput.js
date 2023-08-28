export function GuessInput() {
  const [guess, setGuess] = React.useState('')

  return (
    <div>
      <form className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess: </label>
        <input id="guess-input" type="text" />
      </form>
    </div>
  )
}