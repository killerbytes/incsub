import Signup from "./components/Signup";

function App() {
  return (
    <div className="container mx-auto lg:flex h-screen">
      <div className="lg:w-2/3 px-4 relative lg:flex items-center">
        <div className="flex lg:absolute w-full right-8 top-4">
          <div className="ml-auto flex text-sm items-center">
            <strong>Step 1 of 3</strong>
            <span className="ml-4 grid gap-2 grid-cols-3 text-gray-400 text-lg">
              <span className="text-black">&#8226;</span>
              <span>&#8226;</span>
              <span>&#8226;</span>
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto">
          <h1 className="mb-12">Let's set up your account</h1>
          <p className="mb-12">
            Already have an account?{" "}
            <a className="font-bold" href="#/">
              Sign in
            </a>
          </p>
          <Signup />

          <p className="text-sm leading-loose mb-12">
            By clicking the "Next" button, you agree to creating a free account,
            and to{" "}
            <a className="font-bold" href="/">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="font-bold" href="/">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 text-white bg-blue-600 px-4 flex justify-center flex-col">
        <div className="lg:w-2/3 mx-auto mt-20">
          <h1 className="mb-12 text-center">Dummy Heading</h1>
          <p className="text-lg mb-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
