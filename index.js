// One listener. One place.
const tabsContainer = document.querySelector(".tabs");

tabsContainer.addEventListener("click", (event) => {

    // 1. Guard clause:
    // If the clicked element is NOT a tab button, stop.
    if (!event.target.classList.contains("tab-btn")) {
        return;
    }

    // 2. Remove active state from all buttons
    document.querySelectorAll(".tab-btn")
        .forEach(btn => btn.classList.remove("active"));

    // 3. Remove active state from all contents
    document.querySelectorAll(".tab-content")
        .forEach(content => content.classList.remove("active"));

    // 4. Activate clicked button
    event.target.classList.add("active");

    // 5. Mapping step:
    const tabId = event.target.dataset.tab;

    // 6. Activate corresponding content
    document.getElementById(tabId).classList.add("active");
});
