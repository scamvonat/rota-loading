import useLoadingProgress from "../hooks/useLoadingProgress";

const Loading = () => {
  const progress = useLoadingProgress();

  return (
    <div className="Loading">
      <div
        style={{
          padding: "3vw 3vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: ".3vw",
        }}
      >
        <div style={{ left: "1vw", position: "relative" }}>
          Betöltés Folyamatban...
        </div>
        <div className="progress-bar">
          <div className="fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
