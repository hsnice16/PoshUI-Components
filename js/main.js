const showElement = (toastElement) => {
  toastElement.classList.remove("hide");
  toastElement.classList.add("show");
};

const hideElement = (toastElement) => {
  toastElement.classList.remove("show");
  toastElement.classList.add("hide");
};

/******************** Modal ********************/

const modalDemoBtn = document.querySelector("#modal-demo-btn");

const modalContainer = document.querySelector("#modal-container");
const modalCloseBtn = document.querySelector("#modal-close-btn");

if (modalDemoBtn) {
  modalDemoBtn.addEventListener("click", () => {
    showElement(modalContainer);
  });
}

if (modalContainer) {
  modalContainer.addEventListener("click", (event) => {
    if (event.currentTarget === event.target) hideElement(modalContainer);
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => {
    hideElement(modalContainer);
  });
}

/******************** Toast ********************/

// Notification Toast

const notificationToastDemoBtn = document.querySelector(
  "#notification-toast-demo-btn"
);

const notificationToast = document.querySelector("#notification-toast");
const toastCrossBtn = document.querySelector("#toast-cross-btn");

if (notificationToastDemoBtn) {
  notificationToastDemoBtn.addEventListener("click", () => {
    showElement(notificationToast);

    setTimeout(() => hideElement(notificationToast), 3000);
  });
}

if (toastCrossBtn) {
  toastCrossBtn.addEventListener("click", () => {
    hideElement(notificationToast);
  });
}

// Stacked Toast

const firstStackedToastBtn = document.querySelector("#first-stacked-toast-btn");
const secondStackedToastBtn = document.querySelector(
  "#second-stacked-toast-btn"
);

const stackedToastOneCrossBtn = document.querySelector(
  "#stacked-toast-1-cross-btn"
);
const stackedToastTwoCrossBtn = document.querySelector(
  "#stacked-toast-2-cross-btn"
);

const stackedToastOne = document.querySelector("#stacked-toast-1");
const stackedToastTwo = document.querySelector("#stacked-toast-2");

if (firstStackedToastBtn) {
  firstStackedToastBtn.addEventListener("click", () => {
    showElement(stackedToastOne);

    setTimeout(() => hideElement(stackedToastOne), 3000);
  });
}

if (stackedToastOneCrossBtn) {
  stackedToastOneCrossBtn.addEventListener("click", () => {
    hideElement(stackedToastOne);
  });
}

if (secondStackedToastBtn) {
  secondStackedToastBtn.addEventListener("click", () => {
    showElement(stackedToastTwo);

    setTimeout(() => hideElement(stackedToastTwo), 3000);
  });
}

if (stackedToastTwoCrossBtn) {
  stackedToastTwoCrossBtn.addEventListener("click", () => {
    hideElement(stackedToastTwo);
  });
}
