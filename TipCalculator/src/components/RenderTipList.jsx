let isEnter = true;
export function RenderTipList({ setTip }) {
  const tipOptions = ["5", "10", "15", "25", "50", ""];
  const placeholder = "Custom";
  const [min, max, step] = [0, 1000, 1];
  function setUserTip(event) {
    if (event.target.tagName === "INPUT") {
      if(!isEnter)return;
      setTip(event.target.value);
      isEnter=false;
      setTimeout(()=>isEnter=true,2000);
    } else {
      setTip(event.target.dataset.tip);
    }
  }

  return (
    <div>
      <h2>Select Tip %</h2>
      <div>
        {tipOptions.map((option) =>
          option !== "" ? (
            <button
              key={option}
              onClick={setUserTip}
              data-tip={option}
            >{`${option}%`}</button>
          ) : (
            <div key={option}>
              <input
                placeholder={placeholder}
                type="number"
                min={min}
                max={max}
                step={step}
                onInput={setUserTip}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
