document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menuItem");
    const projectContents = document.querySelectorAll(".projectHidden");

    // 메뉴 항목 클릭 시
    menuItems.forEach(item => {
      item.addEventListener("click", function() {
        // 모든 메뉴 항목에서 active 클래스 제거
        menuItems.forEach(i => i.classList.remove("active"));
        // 모든 프로젝트 항목에서 active 클래스 제거
        projectContents.forEach(c => c.classList.remove("active"));

        // 클릭한 메뉴 항목에 active 클래스 추가
        item.classList.add("active");

        // 클릭된 항목에 해당하는 프로젝트 표시
        const target = item.getAttribute("data-target");
        const targetContent = document.querySelector(`.${target}`);
        targetContent.classList.add("active");
      });
    });
  });