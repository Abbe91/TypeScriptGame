function Message() {
  const name = "Abbe";

  if (name) return <h1>Hello {name}</h1>;

  return <h1>hello world</h1>;
}
export default Message;
