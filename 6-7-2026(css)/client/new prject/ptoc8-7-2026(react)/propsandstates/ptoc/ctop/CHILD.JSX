function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello from Child")}>
      Send Message
    </button>
  );
}

export default Child;