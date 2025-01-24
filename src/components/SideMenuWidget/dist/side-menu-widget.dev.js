"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

document.addEventListener('DOMContentLoaded', function () {// const menuWidget = document.getElementById('menu-widget');
  // const toggleButton = document.getElementById('toggle-btn');
  // const menuIcons = document.querySelectorAll('.icon-placeholder');
  // toggleButton.addEventListener('click', function () {
  //   menuWidget.classList.toggle('collapsed');
  //   updateButtonIcon();
  // });
  // // Add event listeners to all icon placeholders
  // menuIcons.forEach((icon) => {
  //   icon.addEventListener('click', function () {
  //     if (menuWidget.classList.contains('collapsed')) {
  //       menuWidget.classList.remove('collapsed');
  //     }
  //   });
  // });
  // const updateButtonIcon = () => {
  //   const arrowIcon = toggleButton.querySelector('.arrow-placeholder');
  //   if (menuWidget.classList.contains('collapsed')) {
  //     arrowIcon.classList.remove('arrow-left');
  //     arrowIcon.classList.add('arrow-right');
  //   } else {
  //     arrowIcon.classList.remove('arrow-right');
  //     arrowIcon.classList.add('arrow-left');
  //   }
  // };
  // // Automatically close the menu when resolution is under 768px
  // const autoCloseMenu = () => {
  //   if (window.innerWidth < 768) {
  //     if (!menuWidget.classList.contains('collapsed')) {
  //       menuWidget.classList.add('collapsed');
  //     }
  //   }
  // };
  // window.addEventListener('resize', autoCloseMenu);
  // autoCloseMenu(); // Initialize
  // // Initial icon setup
  // updateButtonIcon();
});

var useSideMenu = function useSideMenu() {// const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) {
  //       setIsOpen(true);
  //     } else {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // const toggleMenu = () => {
  //   setIsOpen((prev) => !prev);
  // };
  // const setMenuState = (state) => {
  //   setIsOpen(state);
  // };
  // return { isOpen, toggleMenu, setMenuState }; // Return plain JavaScript object
};

var _default = useSideMenu;
exports["default"] = _default;