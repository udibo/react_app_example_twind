import { Helmet } from "npm/react-helmet-async";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is a basic example of a Udibo React App using Twind to add Tailwind v3 support."
        />
      </Helmet>
      <h1 className="font-light mt-6">Home</h1>
      <p className="py-8">
        This is a basic example of a Udibo React App using Twind to add Tailwind
        v3 support.
      </p>
      <ul className="list-disc grid gap-2">
        <li>
          <a href="https://github.com/udibo/react_app_example">
            GitHub Repository
          </a>
        </li>
        <li>
          <a href="https://deno.land/x/udibo_react_app">
            Deno docs
          </a>
        </li>
      </ul>
    </>
  );
}
