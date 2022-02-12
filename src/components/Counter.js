class Counter {
  constructor() {
    this.counter = 0;
  }

  attachClickEventListenerToCounterButtons() {
    const counterDiv = document.getElementById("counterId");

    counterDiv.addEventListener("click", (event) => {
      // console.log(event.target.textContent);
      const textContent = event.target.textContent;

      if (textContent === "Increment") {
        console.log(1);
      } else if (textContent === "Decrement") {
        console.log(2);
      } else if (textContent === "Reset") {
        console.log(3);
      }
    });
  }

  render() {
    return `
      <div id='counterId' class="card border border-danger w-100">
        <div class="card-body p-4 d-flex justify-content-center flex-column align-items-center">

          <h1 class="card-title fw-bolder">ik Counter number</h1>
        
          <div class="btn-group" role="group" aria-label="Basic example">

            <button type="button" class="iKcounterButtons btn btn-primary bg-primary p-3">Increment</button>

            <button type="button" class="iKcounterButtons btn btn-primary bg-secondary p-3">Decrement</button>

            <button type="button" class="iKcounterButtons btn btn-primary bg-success p-3">Reset</button>
          </div>

        </div>
      </div>
    `;
  }
}

export default new Counter();
