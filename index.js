const Notification = (props) => {
  //  Write your code here.
  const { text, iconUrl, bgColor } = props;

  return (
    <div className={bgColor}>
      <img src={iconUrl} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1> Notifications </h1>
    <div className="inner-container">
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
        bgColor="blue-first"
      />
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
        bgColor="green-second"
      />
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
        bgColor="yellow-first"
      />
      <Notification
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
        bgColor="red-first"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
