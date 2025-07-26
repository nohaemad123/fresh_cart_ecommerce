export default function ShippingTab() {
  return (
    <>
      <div className="">
        <h3 className="text-lg font-semibold mb-3">Shipping & returns</h3>
        <div className="grid grid-cols-2">
          <div>
            <h4 className="mb-3 font-small">Shipping information</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>Standard: </h3>
              </div>
              <div className="md:col-span-2">
                <p>3-5 business days ($499)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>Express: </h3>
              </div>
              <div className="md:col-span-2">
                <p>1-2 business days (9.99 EGP)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>Free shipping: </h3>
              </div>
              <div className="md:col-span-2">
                <p>Orders over 50 EGP</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-small">Return policy</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>Time limit: </h3>
              </div>
              <div className="md:col-span-2">
                <p>30 days</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>Condition: </h3>
              </div>
              <div className="md:col-span-2">
                <p>Unopened original packaging</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>Refund: </h3>
              </div>
              <div className="md:col-span-2">
                <p>Full refund available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
