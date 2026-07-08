function ChildTwo({ sendData }) {

  return (
    <div>

      <h2>Child Two</h2>

      <button
        onClick={() => sendData("Hello Parent")}
      >
        Send Message
      </button>

    </div>
  );
}

export default ChildTwo;