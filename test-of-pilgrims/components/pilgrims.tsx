const hats = [0, 1, 2, 3];

const hairs = [0, 1, 2, 3, 4, 5, "pixel-hair"];

const testingHat = hats[3];

const Pilgrims: React.FC = () => {
  return (
    <>
      {hats.map((hat) => (
        <>
          <h2>{hat}</h2>
          {hairs.map((hair) => (
            <div className="pilgrim-container" key={hair}>
              <img
                className="pilgrim-hat"
                src={"/src/hats/hat_" + hat + ".png"}
                width="256px"
                height="256px"
              />

              <img
                className="pilgrim-hair"
                src={"/src/hairs/hair_" + hair + ".png"}
                width="256px"
                height="256px"
                style={{
                  WebkitMaskImage: "url(/src/masks/hat_" + hat + "_alpha.png)",
                  maskImage: "url(/src/masks/hat_" + hat + "_alpha.png)",
                  WebkitMaskSize: "100%",
                  WebkitMaskPosition: "center",
                }}
              />

              <img
                className="pilgrim-body"
                src="/src/pilgrim.png"
                width="256px"
                height="256px"
              />
            </div>
          ))}
        </>
      ))}
    </>
  );
};

export default Pilgrims;
