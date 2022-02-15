/**
 * Remove and add CSS class to DOM element
 *
 * @param {HTMLDivElement} toastElement - reference to div element on DOM
 */
const showElement = (toastElement) => {
  // remove .hide class from the classList
  toastElement.classList.remove("hide");

  // add .show class in the classList
  toastElement.classList.add("show");
};

/**
 * Remove and add CSS class to DOM element
 *
 * @param {HTMLDivElement} toastElement - reference to div element on DOM
 */
const hideElement = (toastElement) => {
  // remove .show class from the classList
  toastElement.classList.remove("show");

  // add .hide class in the classList
  toastElement.classList.add("hide");
};

/******************** Modal ********************/

const modalDemoBtn = document.querySelector("#modal-demo-btn");

const modalContainer = document.querySelector("#modal-container");
const modalCloseBtn = document.querySelector("#modal-close-btn");

// if modalDemoBtn has value (not null) only then add event listener
if (modalDemoBtn) {
  modalDemoBtn.addEventListener("click", () => {
    showElement(modalContainer);
  });
}

// if modalContainer has value (not null) only then add event listener
if (modalContainer) {
  modalContainer.addEventListener("click", (event) => {
    if (event.currentTarget === event.target) hideElement(modalContainer);
  });
}

// if modalCloseBtn has value (not null) only then add event listener
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

// if notificationToastDemoBtn has value (not null) only then add event listener
if (notificationToastDemoBtn) {
  notificationToastDemoBtn.addEventListener("click", () => {
    showElement(notificationToast);

    setTimeout(() => hideElement(notificationToast), 3000);
  });
}

// if toastCrossBtn has value (not null) only then add event listener
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

// if firstStackedToastBtn has value (not null) only then add event listener
if (firstStackedToastBtn) {
  firstStackedToastBtn.addEventListener("click", () => {
    showElement(stackedToastOne);

    setTimeout(() => hideElement(stackedToastOne), 3000);
  });
}

// if stackedToastOneCrossBtn has value (not null) only then add event listener
if (stackedToastOneCrossBtn) {
  stackedToastOneCrossBtn.addEventListener("click", () => {
    hideElement(stackedToastOne);
  });
}

// if secondStackedToastBtn has value (not null) only then add event listener
if (secondStackedToastBtn) {
  secondStackedToastBtn.addEventListener("click", () => {
    showElement(stackedToastTwo);

    setTimeout(() => hideElement(stackedToastTwo), 3000);
  });
}

// if stackedToastTwoCrossBtn has value (not null) only then add event listener
if (stackedToastTwoCrossBtn) {
  stackedToastTwoCrossBtn.addEventListener("click", () => {
    hideElement(stackedToastTwo);
  });
}
