/******************** Toast ********************/

const showToast = (toastElement) => {
  toastElement.classList.remove("hide-toast");
  toastElement.classList.add("show-toast");
};

const hideToast = (toastElement) => {
  toastElement.classList.remove("show-toast");
  toastElement.classList.add("hide-toast");
};

// Notification Toast

const notificationToastDemoBtn = document.querySelector(
  "#notification-toast-demo-btn"
);

const notificationToast = document.querySelector("#notification-toast");
const toastCrossBtn = document.querySelector("#toast-cross-btn");

notificationToastDemoBtn.addEventListener("click", () => {
  showToast(notificationToast);

  setTimeout(() => hideToast(notificationToast), 3000);
});

toastCrossBtn.addEventListener("click", () => {
  hideToast(notificationToast);
});

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

firstStackedToastBtn.addEventListener("click", () => {
  showToast(stackedToastOne);

  setTimeout(() => hideToast(stackedToastOne), 3000);
});

stackedToastOneCrossBtn.addEventListener("click", () => {
  hideToast(stackedToastOne);
});

secondStackedToastBtn.addEventListener("click", () => {
  showToast(stackedToastTwo);

  setTimeout(() => hideToast(stackedToastTwo), 3000);
});

stackedToastTwoCrossBtn.addEventListener("click", () => {
  hideToast(stackedToastTwo);
});
