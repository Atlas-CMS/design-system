// Declare scss module type
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
