export default function ToggleClass(id, classToAdd) {
  const element = document.getElementById(id);

  if (element.classList.contains(classToAdd)) {
    element.classList.remove(classToAdd);
  } else {
    element.classList.add(classToAdd);
  }

}
