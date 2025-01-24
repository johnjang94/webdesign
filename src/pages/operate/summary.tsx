export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl">About the Project</p>
          <div className="py-5 space-y-3 md:px-8">
            <p>
              OperateEase is an individual B2B SaaS enterprise project that
              intends to offer an innovative solution to optimize the workflow
              for:
            </p>
            <ul className="md:mx-10 space-y-3 list-disc">
              <li>room management</li>
              <li>catering services</li>
            </ul>
            <p>In this project, I implemented:</p>
            <ul className="md:mx-10 space-y-3 list-disc">
              <li>introduction to the product</li>
              <li>registration + login process</li>
              <li>fee management process</li>
            </ul>
          </div>
        </div>
        {/* <div className="mx-auto text-center justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById("product-showcase");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <p className="text-blue-500 underline">
                    Click here to skip down to the live demo!
                  </p>
                </button>
              </div> */}
      </div>
    </div>
  );
}
