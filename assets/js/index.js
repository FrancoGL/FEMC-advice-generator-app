
const adviceId = document.querySelector(".advice__id")
const adviceQuote = document.querySelector(".advice__quote")
const btnDice = document.querySelector(".btn__dice")

// Get quote
const getQuote = async () => {
  try {
    return await axios.get("https://api.adviceslip.com/advice");
  } catch (err) {
    console.error(err);
  }
}

// Set Id and Quote
const setIdAndQuote = async () => {
  const response = await getQuote();
  
  adviceId.textContent = "ADVICE #" + response.data.slip.id
  adviceQuote.textContent = `"${response.data.slip.advice}"`
}

// Get and set quote on start
setIdAndQuote();

// Get and set new quote when click button
btnDice.addEventListener("click", setIdAndQuote)