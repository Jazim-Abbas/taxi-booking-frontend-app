import StripeContainer from "../components/stripe/stripe-container";

export default function PayAmount() {
  return (
    <div className="container" style={{}}>
      <div className="col-sm-12 col-md-6 offset-md-3">
        <div style={{ float: "left", width: "100%", marginTop: "50px" }}>
          <StripeContainer />
        </div>
      </div>
    </div>
  );
}
