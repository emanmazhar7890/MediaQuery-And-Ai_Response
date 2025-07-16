function sendQuery() {
  const inputRef = document.querySelector("#query");
  const queryValue = inputRef.value;
  console.log(queryValue);

  axios
    .post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBlczh9XtCoH5XgnNdxdjMnYSc86ORzTVA",
      {
        contents: [
          {
            parts: [
              {
                text: "you are programmer and answer user query never answer anything outside programming and excuse for it ", // ✅ using input text here
              },
              {
                text: queryValue, // ✅ using input text here
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json", // ✅ correct header
        },
      }
    )
    .then((response) => {
      console.log("Response:");
      const aiReply = response.data.candidates[0].content.parts[0].text;
      const divRefrense = document.querySelector(".response");
      divRefrense.innerHTML = aiReply;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
