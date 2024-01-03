const Intro = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <p className="logo object-contain">AI-Summy</p>
       

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/sarahkwak79/AI-Summy/tree/main"
            )
          }
          className="black_btn"
        >
          Log in
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-mdLhidden" />
        <span className="purple_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
          Simplify your reading with AI-Summy, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Intro;
