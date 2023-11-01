// FIXING PROBLEM WITH Z-INDEX

function BlackPage() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "1920px",
        height: "1080px",
        position: "absolute",
        zIndex: -10,
      }}
    ></div>
  );
}

export default BlackPage;
