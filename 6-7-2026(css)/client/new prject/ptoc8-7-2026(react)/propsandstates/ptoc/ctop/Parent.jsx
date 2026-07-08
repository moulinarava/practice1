import Child from "./Child";

function Parent() {

  const receiveMessage = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child sendMessage={receiveMessage} />
    </div>
  );
}

export default Parent;