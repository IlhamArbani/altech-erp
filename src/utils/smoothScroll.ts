export const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  const headerOffset = 72;
  const elementPosition = element!.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: id === 'home' ? 0 : offsetPosition,
    behavior: "smooth"
  })
}