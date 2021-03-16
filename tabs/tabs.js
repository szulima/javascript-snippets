// 1. grab buttons and listen for clicks
const tabButtons = document.querySelectorAll('button[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tab-panel"');

function handleTabButtonClick(e) {
  // 2. deselect all buttons
  tabButtons.forEach((button) => button.setAttribute("aria-selected", false));
  // 3. hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // 4. select clicked button
  e.currentTarget.setAttribute("aria-selected", true);
  // 5. show adequate panel
  const id = e.currentTarget.id;
  const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", handleTabButtonClick);
});
